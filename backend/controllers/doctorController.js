import doctorModel from "../models/doctor.model.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointment.model.js";
import { sendConfirmationBookingAndPaymentRequestToUser, sendConfirmationCancelScheduleFromDoctorToUser, sendConfirmationScheduleToDoctor, sendConfirmationScheduleToUser } from "../config/mailer.js";
import mongoose from "mongoose";
import {v2 as cloudinary} from "cloudinary"
import streamifier from 'streamifier';
// API for doctor Login 
const loginDoctor = async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await doctorModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Invalid username or password !" })
        }
        if (!user.available) {
          return res.json({ success: false, message: "Your account is unavailable" })
      }
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token,id:user._id })
        } else {
            res.json({ success: false, message: "Invalid username or password !" })
        }


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const appointmentsDoctor = async (req, res) => {
  try {
    const { doctorId } = req.body; // doctorId vẫn lấy từ body
    const page = parseInt(req.query.page) || 1;
    const status = req.query.status || null;

    const limit = 7;
    const skip = (page - 1) * limit;

    // Tạo điều kiện truy vấn động
    const query = { docId: doctorId };
    if (status && status !== 'all') {
      query.status = status;
    }

    // Đếm tổng số lịch hẹn theo filter
    const totalAppointments = await appointmentModel.countDocuments(query);

    // Lấy danh sách lịch hẹn đã lọc
    const appointments = await appointmentModel
      .find(query)
      .sort({ bookingDate: -1 })
      .skip(skip)
      .limit(limit);

    // Lấy thông tin bác sĩ
    const doctor = await doctorModel.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }

    // Định dạng lại lịch hẹn
    const formattedAppointments = appointments.map((app) => {
      const slot = doctor.schedule.find((s) => s._id.toString() === app.slotId);
      return {
        _id: app._id,
        userData: app.userData,
        docData: app.docData,
        amount: app.amount,
        slotId: app.slotId,
        slotDate: slot?.date || app.slotDate,
        slotTime: app.slotTime,
        startTime: slot?.startTime,
        endTime: slot?.endTime,
        status: app.status,
        bookingDate: app.bookingDate,
        createdAt: app.createdAt,
        updatedAt: app.updatedAt,
        linkMeet:app.linkMeet,
        prescriptionPrescribed:app.prescriptionPrescribed,
        isDoctorConfirmedComplete:app.isDoctorConfirmedComplete,
        isUserConfirmedComplete:app.isUserConfirmedComplete
      };
    });

    return res.status(200).json({
      success: true,
      appointments: formattedAppointments,
      totalPages: Math.ceil(totalAppointments / limit),
      currentPage: page
    });
  } catch (error) {
    console.error('Error fetching doctor appointments:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while getting doctor appointments.'
    });
  }
};


//getAppointmentsBySlotId
  const getAppointmentsBySlotId = async (req, res) => {
    try {
      const { slotId } = req.body;
  
      // Tìm tất cả các cuộc hẹn có cùng slotId
      const appointments = await appointmentModel.find({ slotId:slotId }).sort({ createdAt: -1 });
      if (!appointments || appointments.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No appointments found for this slotId"
        });
      }
  
      // Giả sử mỗi cuộc hẹn đều có docId, nên ta lấy thông tin bác sĩ từ appointment đầu tiên
      const doctor = await doctorModel.findById(appointments[0].docId);
      if (!doctor) {
        return res.status(404).json({
          success: false,
          message: "Doctor not found"
        });
      }
  
      const formattedAppointments = appointments.map((app) => {
        const slot = doctor.schedule.find(
          (s) => s._id.toString() === app.slotId
        );
  
        return {
          _id: app._id,
          userData: app.userData,
          docData: app.docData,
          amount: app.amount,
          slotId: app.slotId,
          slotDate: slot?.date || app.slotDate,
          slotTime: app.slotTime,
          startTime: slot?.startTime,
          endTime: slot?.endTime,
          status: app.status,
          createdAt: app.createdAt,
          updatedAt: app.updatedAt
        };
      });
  
      return res.status(200).json({
        success: true,
        appointments: formattedAppointments
      });
    } catch (error) {
      console.error('Error fetching appointments by slotId:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error while fetching appointments by slotId.'
      });
    }
  };



 
  


const appointmentCancel = async (req, res) => {
  try {
    const { doctorId, appointmentId, reason } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId)
      .populate('userData') // lấy thông tin bệnh nhân
      .populate('docData'); // lấy thông tin bác sĩ

    if (!appointmentData) {
      return res.json({ success: false, message: "Appointment not found" });
    }

    if (appointmentData.docId._id.toString() !== doctorId) {
      return res.json({ success: false, message: "Unauthorized: You can only cancel your own appointments" });
    }

    if (appointmentData.status === 'booked') {
      return res.json({ success: false, message: "Cannot cancel an appointment that is still booked." });
    }

    // Cập nhật trạng thái appointment
    await appointmentModel.findByIdAndUpdate(appointmentId, {
      status: "cancelled",
      reason: reason || "No reason provided"
    });

    // Cập nhật trạng thái slot
    await doctorModel.updateOne(
      { _id: doctorId, "schedule._id": new mongoose.Types.ObjectId(appointmentData.slotId) },
      { $set: { "schedule.$.status": "available" } }
    );

    // --- Chuẩn bị dữ liệu để gửi email ---
    const to = appointmentData.userData.email;                  // Email bệnh nhân
    const date = appointmentData.slotDate;                        // Ngày hẹn
    const time = appointmentData.slotTime;                        // Giờ hẹn
    const docName = appointmentData.docData.name;                // Tên bác sĩ
    const emailDoc = appointmentData.docData.email;              // Email bác sĩ
    const slotId = appointmentData.slotId;                     // ID slot
    const patientName = appointmentData.userData.name;           // Tên bệnh nhân

    // Gửi email
    await sendConfirmationCancelScheduleFromDoctorToUser(
      to,
      date,
      time,
      docName,
      emailDoc,
      slotId,
      patientName
    );

    return res.json({ success: true, message: "Appointment Cancelled and Slot Updated" });

  } catch (error) {
    console.error("Error cancelling appointment:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};





const getDoctorList = async (req, res) => {
  try {
    const { speciality, page = 1, limit = 10 } = req.query;

    const filter = { available: true }; // Chỉ lấy bác sĩ đang available

    if (speciality) {
      filter.speciality = speciality;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const doctors = await doctorModel
      .find(filter)
      .select("-password")
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await doctorModel.countDocuments(filter);

    res.json({
      success: true,
      doctors,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


//update status doctor
const updateStatus = async (req, res) => {
    try {
        const { docId } = req.body;

        const doctor = await doctorModel.findById(docId).select("-password");
        console.log("doc",docId)
        if (!doctor) {
            return res.json({ success: false, message: "Doctor not found" });
        }

        doctor.available = !doctor.available;
        await doctor.save();

        res.json({ success: true, message: "Availability Changed", available: doctor.available });

    } catch (error) {
        console.error("Error changing availability:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
//get profile doctor by id
const getDoctorProfileById = async (req, res) => {
    try {
        const { doctorId } = req.body;
        console.log("doctor Id",doctorId)
        const profileData = await doctorModel.findById(doctorId).select("-password");

        if (!profileData) {
            return res.json({ success: false, message: "Doctor not found" });
        }

        res.json({ success: true, profileData });

    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
const getScheduleDoctorPagination = async (req, res) => {
  try {
    const { doctorId, page = 1, limit = 7 } = req.body;

    const doctor = await doctorModel.findById(doctorId).select('schedule');
    if (!doctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    let allSchedules = doctor.schedule || [];

    // Sort schedule theo ngày giảm dần (mới nhất trước)
    allSchedules.sort((a, b) => {
      const [dA, mA, yA] = a.date.split('-');
      const [dB, mB, yB] = b.date.split('-');
      const dateA = new Date(`${yA}-${mA}-${dA}T${a.startTime}`);
      const dateB = new Date(`${yB}-${mB}-${dB}T${b.startTime}`);
      return dateB - dateA; // mới nhất trước
    });

    const totalSchedules = allSchedules.length;
    const totalPages = Math.ceil(totalSchedules / limit);
    const startIndex = (page - 1) * limit;
    const paginatedSchedules = allSchedules.slice(startIndex, startIndex + limit);

    return res.json({
      success: true,
      schedules: paginatedSchedules,
      totalPages,
      currentPage: Number(page),
    });
  } catch (err) {
    console.error('Schedule pagination error:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};




//update profile doctor
const updateDoctorProfile = async (req, res) => {
  try {
    const {
      doctorId,
      name,
      speciality,
      phoneNumber,
      experience,
      degree,
      address,
      available,
      about,
      fees, // ⬅️ thêm fees vào destructuring
    } = req.body;

    console.log("req.body:", req.body);
    console.log("req.file:", req.file);

    // Tìm bác sĩ hiện tại
    const doctor = await doctorModel.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Tạo object các trường cần cập nhật
    const updatedFields = {};
    if (name) updatedFields.name = name;
    if (speciality) updatedFields.speciality = speciality;
    if (phoneNumber) updatedFields.phoneNumber = phoneNumber;
    if (experience) updatedFields.experience = experience;
    if (degree) updatedFields.degree = degree;
    if (about) updatedFields.about = about;
    if (available !== undefined) updatedFields.available = available;
    if (address) updatedFields.address = address;

    // Nếu có fees, cập nhật toàn bộ fees trong schedule
    if (fees) {
      doctor.schedule = doctor.schedule.map(slot => ({
        ...slot,
        fees: fees,
      }));
      updatedFields.schedule = doctor.schedule;
    }

    // Upload ảnh nếu có
    if (req.file) {
      const streamUpload = (buffer) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "doctor-profiles" },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );
          streamifier.createReadStream(buffer).pipe(stream);
        });
      };

      const result = await streamUpload(req.file.buffer);
      updatedFields.image = result.secure_url;
    }

    const updatedDoctor = await doctorModel.findByIdAndUpdate(
      doctorId,
      updatedFields,
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ message: "Doctor not found after update" });
    }

    res.status(200).json({
      message: "Doctor profile updated successfully",
      doctor: updatedDoctor
    });
  } catch (error) {
    console.error("Update doctor error:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


const updateSlotStatus = async (req, res) => {
    try {
      const { doctorId, slotId, newStatus, isConfirm } = req.body;

      if (!doctorId || !slotId || !newStatus) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
      }
  
      // 1. Tìm doctor
      
      const doctor = await doctorModel.findById(doctorId);


      if (!doctor) {
        return res.json({ success: false, message: "Doctor not found" });
      }
  
      // 2. Tìm slot trong schedule theo slotId
      const slot = doctor.schedule.id(slotId);
      if (!slot) {
        return res.json({ success: false, message: "Slot not found" });
      }
  
      // 3. Cập nhật status cho slot
      slot.status = newStatus;
      await doctor.save();
  
      // 4. Cập nhật tất cả appointment có slotId tương ứng
      const updateResult = await appointmentModel.updateMany(
        { docId: doctorId, slotId },
        { $set: { status: newStatus } }
      );
  
      // 5. Nếu xác nhận -> tìm appointment cụ thể để lấy thông tin gửi email
      if (isConfirm) {
        const appointment = await appointmentModel.findOne({ docId: doctorId, slotId });
  console.log("2")
        if (appointment) {
          const patientEmail = appointment.userData.email;
          const appointmentDate = appointment.slotDate;
          const appointmentTime = appointment.slotTime;
          const docName = appointment.docData.name;
          const patientName = appointment.userData.name;
  
  
          await sendConfirmationBookingAndPaymentRequestToUser(patientEmail, appointmentDate, appointmentTime, docName, patientName);
        }
      }
  
      res.json({
        success: true,
        message: "Slot and appointment status updated successfully",
        updatedAppointments: updateResult.modifiedCount,
        slotStatus: newStatus
      });
  
    } catch (error) {
      console.error("Error updating slot status:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
  



  
const updateDoctorSchedule = async (req, res) => {
  try {
    const { doctorId, day, date, newSlot, actionType, fees = "50000" } = req.body;

    const doctor = await doctorModel.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found.' });
    }

    // Normalize the date for comparison
    const normalizeDate = (str) => {
      const [day, month, year] = str.split('-');
      return `${year}-${month}-${day}`;
    };

    if (actionType === 'add') {
      // Check for conflicts in the schedule
      const hasConflict = doctor.schedule.some((slot) => {
        if (slot.date !== date) return false;

        const existingStart = slot.startTime;
        const existingEnd = slot.endTime;
        const newStart = newSlot.startTime;
        const newEnd = newSlot.endTime;

        return (
          (newStart >= existingStart && newStart < existingEnd) ||
          (newEnd > existingStart && newEnd <= existingEnd) ||
          (newStart <= existingStart && newEnd >= existingEnd)
        );
      });

      if (hasConflict) {
        return res.status(400).json({ message: 'Time slot overlaps with existing schedule.' });
      }

      // Create the new schedule object
      const newSchedule = {
        day,
        date,
        startTime: newSlot.startTime,
        endTime: newSlot.endTime,
        fees,
        status: 'available'
      };

      // Insert the new schedule at the correct position based on date and time
      const index = doctor.schedule.findIndex((slot) => {
        const [d, m, y] = slot.date.split('-');
        const existingDate = new Date(`${y}-${m}-${d}T${slot.startTime}`);
        const newDate = new Date(`${date}T${newSlot.startTime}`);
        
        return existingDate > newDate; // Find the first slot that comes after the new schedule
      });

      // If an appropriate index is found, insert it; otherwise, push it to the end
      if (index !== -1) {
        doctor.schedule.splice(index, 0, newSchedule);
      } else {
        doctor.schedule.push(newSchedule);
      }

    } else if (actionType === 'remove') {
      // Check if the slot exists and is available for removal
      const index = doctor.schedule.findIndex(
        (slot) =>
          slot.date === date &&
          slot.startTime === newSlot.startTime &&
          slot.endTime === newSlot.endTime
      );

      if (index === -1) {
        return res.status(404).json({ message: 'No schedule found for that date and time.' });
      }

      if (doctor.schedule[index].status !== 'available') {
        return res.status(400).json({ message: 'This slot has been booked and cannot be removed.' });
      }

      doctor.schedule.splice(index, 1);
    }

    // Sort the schedule by date and time in descending order (new dates appear before older dates)
    doctor.schedule.sort((a, b) => {
      const toDateTime = (item) => {
        const [d, m, y] = item.date.split('-');
        return new Date(`${y}-${m}-${d}T${item.startTime}`);
      };
      return toDateTime(b) - toDateTime(a); // Sort by date in descending order (latest date first)
    });

    await doctor.save();
    return res.status(200).json({ message: 'Schedule updated successfully.', schedule: doctor.schedule });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

  

export {
    loginDoctor,
    updateSlotStatus,
    appointmentsDoctor,
    appointmentCancel,
    getDoctorList,
    updateStatus,

    getScheduleDoctorPagination,
 
    getDoctorProfileById,
    updateDoctorProfile,
    getAppointmentsBySlotId,
    updateDoctorSchedule
}

