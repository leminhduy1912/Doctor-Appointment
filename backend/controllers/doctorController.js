import doctorModel from "../models/doctor.model.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointment.model.js";
import { sendConfirmationBookingAndPaymentRequestToUser, sendConfirmationScheduleToDoctor, sendConfirmationScheduleToUser } from "../config/mailer.js";

// API for doctor Login 
const loginDoctor = async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await doctorModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token,id:user._id })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get doctor appointments for doctor panel
const appointmentsDoctor = async (req, res) => {
    try {
      const { doctorId } = req.body;
  
      // Lấy danh sách các lịch hẹn theo docId (không phải doctorId)
      const appointments = await appointmentModel.find({ docId: doctorId }).sort({ createdAt: -1 });
  
      // Tìm bác sĩ để lấy lịch làm việc chi tiết
      const doctor = await doctorModel.findById(doctorId);
  
      if (!doctor) {
        return res.status(404).json({ success: false, message: "Doctor not found" });
      }
  
      const formattedAppointments = appointments.map((app) => {
        // Tìm lịch cụ thể theo slotId nếu có
        const slot = doctor.schedule.find(
          (s) => s._id.toString() === app.slotId
        );
  
        return {
          _id: app._id,
          userData: app.userData,
          docData:app.docData,
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



 
  
  
//cancelled appointment
const appointmentCancel = async (req, res) => {
    try {
        const { doctorId, appointmentId } = req.body;

        // Tìm cuộc hẹn theo ID
        const appointmentData = await appointmentModel.findById(appointmentId);
        if (!appointmentData) {
            return res.json({ success: false, message: "Appointment not found" });
        }

        // Kiểm tra xem cuộc hẹn có thuộc bác sĩ này không
        if (appointmentData.doctorId.toString() !== doctorId) {
            return res.json({ success: false, message: "Unauthorized: You can only cancel your own appointments" });
        }

        // Cập nhật trạng thái thành "cancelled"
        await appointmentModel.findByIdAndUpdate(appointmentId, { status: "cancelled" });

        return res.json({ success: true, message: "Appointment Cancelled" });

    } catch (error) {
        console.error("Error cancelling appointment:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
//complete appointment
const appointmentComplete = async (req, res) => {
    try {
        const { doctorId, appointmentId } = req.body;

        const appointmentData = await appointmentModel.findById(appointmentId);
        if (!appointmentData) {
            return res.json({ success: false, message: "Appointment not found" });
        }

        if (appointmentData.doctorId.toString() !== doctorId) {
            return res.json({ success: false, message: "Unauthorized: You can only complete your own appointments" });
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, { status: "completed" });

        return res.json({ success: true, message: "Appointment Completed" });

    } catch (error) {
        console.error("Error completing appointment:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

//get doctor list
const getDoctorList = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select("-password");
        res.json({ success: true, doctors });
    } catch (error) {
        console.error("Error fetching doctors:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
//update status doctor
const updateStatus = async (req, res) => {
    try {
        const { doctorId } = req.body;

        const doctor = await doctorModel.findById(doctorId);
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
//update profile doctor
const updateDoctorProfile = async (req, res) => {
    try {
        const { doctorId, fees, address, available } = req.body;

        const doctor = await doctorModel.findByIdAndUpdate(doctorId, { fees, address, available }, { new: true });

        if (!doctor) {
            return res.json({ success: false, message: "Doctor not found" });
        }

        res.json({ success: true, message: "Profile Updated", doctor });

    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
//doctor dashboard
const doctorDashboard = async (req, res) => {
    try {
        const { doctorId } = req.body;

        const appointments = await appointmentModel.find({ doctorId });

        let earnings = 0;
        let patients = new Set();

        appointments.forEach((appointment) => {
            if (appointment.status === "completed" && appointment.payment) {
                earnings += appointment.amount || 0;
            }
            patients.add(appointment.patientId.toString());
        });

        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.size,
            latestAppointments: appointments.reverse(),
        };

        res.json({ success: true, dashData });

    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
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
  

  
  
  
  

export {
    loginDoctor,
    updateSlotStatus,
    appointmentsDoctor,
    appointmentCancel,
    getDoctorList,
    updateStatus,
    appointmentComplete,
    doctorDashboard,
    getDoctorProfileById,
    updateDoctorProfile,
    getAppointmentsBySlotId,
    
}

