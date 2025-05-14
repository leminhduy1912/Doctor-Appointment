import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointment.model.js'
import doctorModel from '../models/doctor.model.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary";
import { sendActivateFromAdminToDoctor, sendActivateFromAdminToPatient, sendConfirmationCancelScheduleFromDoctorToUser, sendConfirmationCancelScheduleFromUserToDoctor, sendDeactivateFromAdminToDoctor, sendDeactivateFromAdminToPatient } from '../config/mailer.js'
import userModel from '../models/user.model.js'
import mongoose from 'mongoose'
import streamifier from 'streamifier';

// API for admin login
const loginAdmin = async (req, res) => {
    try {

        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid username or password !" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to get all appointments list
const appointmentsAdmin = async (req, res) => {
    try {

        const appointments = await appointmentModel.find({})
        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}



// API to get all doctors list for admin panel
const getDoctorList = async (req, res) => {
    try {
        const { speciality, page = 1, limit = 10 } = req.query;

        const filter = {};
        if (speciality && speciality !== "All") {
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


const getUserList = async (req, res) => {
    try {
        const { available, page = 1, limit = 10 } = req.query;

        const filter = {};

    
        if (available === 'true') {
            filter.available = true;
        } else if (available === 'false') {
            filter.available = false;
        }

        const skip = (Number(page) - 1) * Number(limit);

        const users = await userModel
            .find(filter)
            .select("-password") 
            .skip(skip)
            .limit(Number(limit))
            .sort({ createdAt: -1 });

        const total = await userModel.countDocuments(filter);

        res.json({
            success: true,
            users,
            total,
            page: Number(page),
            totalPages: Math.ceil(total / limit),
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
const addDoctor = async (req, res) => {
    try {
        const {
            name, email, password, speciality,
            degree, experience, about,
            address, phoneNumber
        } = req.body;

        console.log("Adding doctor:", req.body);

        // Kiểm tra thiếu trường
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !address || !phoneNumber) {
            return res.status(400).json({ success: false, message: "Missing Details" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email" });
        }

        const existingUser = await doctorModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already in use" });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Upload ảnh lên Cloudinary
        let imageUrl = '';
        if (req.file) {
            const streamUpload = (buffer) => {
                return new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream(
                        { folder: "doctors" },
                        (error, result) => {
                            if (result) resolve(result);
                            else reject(error);
                        }
                    );
                    streamifier.createReadStream(buffer).pipe(stream);
                });
            };

            const uploadResult = await streamUpload(req.file.buffer);
            imageUrl = uploadResult.secure_url;
        }

        // Parse address nếu là JSON string
const formattedAddress = address; // không cần parse

        const newDoctor = new doctorModel({
            name,
            email,
            phoneNumber,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            address: formattedAddress,
            image: imageUrl,
            patients: [],
            createdAt: new Date(),
            updatedAt: new Date()
        });

        await newDoctor.save();

        return res.status(201).json({
            success: true,
            message: "Doctor added successfully",
            doctor: newDoctor
        });

    } catch (error) {
        console.error("Error adding doctor:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// const addDoctor = async (req, res) => {
//     try {
//         const {
//             image, name, email, password, speciality,
//             degree, experience, about,
//             address, phoneNumber
//         } = req.body;

//         console.log("Adding doctor:", name);

//         // Kiểm tra thiếu trường
//         if (!name || !email || !password || !speciality || !degree || !experience || !about  || !address || !phoneNumber) {
//             return res.status(400).json({ success: false, message: "Missing Details" });
//         }

//         // Kiểm tra email
//         if (!validator.isEmail(email)) {
//             return res.status(400).json({ success: false, message: "Please enter a valid email" });
//         }

//         const existingUser = await doctorModel.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ success: false, message: "Email already in use" });
//         }

//         if (password.length < 8) {
//             return res.status(400).json({ success: false, message: "Please enter a strong password" });
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Upload image nếu là base64 hoặc file path
//         let imageUrl = '';
//         if (image) {
//             const uploadRes = await cloudinary.uploader.upload(image);
//             imageUrl = uploadRes.secure_url;
//         }

//         // Parse address nếu là chuỗi JSON
//         const formattedAddress = typeof address === 'string' ? JSON.parse(address) : address;

//         // Parse schedule nếu là chuỗi JSON
//         const formattedSchedule = typeof schedule === 'string' ? JSON.parse(schedule) : schedule;

//         // Tạo đối tượng bác sĩ mới
//         const newDoctor = new doctorModel({
//             name,
//             email,
//             phoneNumber,
//             password: hashedPassword,
//             speciality,
//             degree,
//             experience,
//             about,
//             address: formattedAddress,
//             image: imageUrl,
//             patients: [],
//             createdAt: new Date(),
//             updatedAt: new Date()
//         });

//         await newDoctor.save();

//         return res.status(201).json({
//             success: true,
//             message: "Doctor added successfully",
//             doctor: newDoctor
//         });

//     } catch (error) {
//         console.error("Error adding doctor:", error);
//         res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };


// API to get dashboard data for admin panel
const adminDashboard = async (req, res) => {
    try {

        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse()
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const updateStatusDoctor = async (req, res) => {
    try {
        const { docId,reason } = req.body;

        const doctor = await doctorModel.findById(docId).select("-password");
        console.log("doc",docId)
        if (!doctor) {
            return res.json({ success: false, message: "Doctor not found" });
        }
if (doctor.available){
    await sendDeactivateFromAdminToDoctor(doctor.email,doctor.name,reason);
} else {
    sendActivateFromAdminToDoctor(doctor.email,doctor.name)
}
        doctor.available = !doctor.available;
        await doctor.save();

        res.json({ success: true, message: "Availability Changed", available: doctor.available });

    } catch (error) {
        console.error("Error changing availability:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


const updateStatusPatient = async (req, res) => {
    try {
        const { patientId,reason } = req.body;

        const patient = await userModel.findById(patientId).select("-password");
        console.log("patientId",patientId)
        if (!patient) {
            return res.json({ success: false, message: "Patient not found" });
        }
if (patient.available){
    await sendDeactivateFromAdminToPatient(patient.email,patient.name,reason);
} else {
    sendActivateFromAdminToPatient(patient.email,patient.name)
}
        patient.available = !patient.available;
        await patient.save();

        res.json({ success: true, message: "Availability Changed", available: patient.available });

    } catch (error) {
        console.error("Error changing availability:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


const appointmentCancel = async (req, res) => {
    try {
      const { appointmentId, reason } = req.body;
  
      const appointmentData = await appointmentModel.findById(appointmentId)
        .populate('userData') // thông tin bệnh nhân
        .populate('docData'); // thông tin bác sĩ
  
      if (!appointmentData) {
        return res.status(400).json({ success: false, message: "Appointment not found" });
      }
  
      if (appointmentData.status === 'booked') {
        return res.status(400).json({ success: false, message: "Cannot cancel an appointment that is still booked." });
      }
  
      if (!appointmentData.slotId) {
        return res.status(400).json({ success: false, message: "Slot ID missing in appointment data" });
      }
  
      // Cập nhật trạng thái appointment
      await appointmentModel.findByIdAndUpdate(appointmentId, {
        status: "cancelled",
        reason: reason || "No reason provided"
      });
  
      // Cập nhật trạng thái slot của bác sĩ (từ thông tin trong appointment)
      await doctorModel.updateOne(
        {
          _id: appointmentData.docData._id,
          "schedule._id": new mongoose.Types.ObjectId(appointmentData.slotId)
        },
        {
          $set: { "schedule.$.status": "available" }
        }
      );
  
      // Chuẩn bị thông tin gửi email
      const emailPatient = appointmentData.userData.email;
      const patientName = appointmentData.userData.name;
      const emailDoc = appointmentData.docData.email;
      const docName = appointmentData.docData.name;
      const date = appointmentData.slotDate;
      const time = appointmentData.slotTime;
      const slotId = appointmentData.slotId;
  
      // Gửi email cho bệnh nhân
      await sendConfirmationCancelScheduleFromDoctorToUser(
        emailPatient,
        date,
        time,
        docName,
        emailDoc,
        slotId,
        patientName
      );
  
      // Gửi email cho bác sĩ
      await sendConfirmationCancelScheduleFromUserToDoctor(
        emailDoc,
        date,
        time,
        patientName,
        emailPatient,
        slotId,
        docName
      );
  
      return res.json({ success: true, message: "Appointment cancelled and slot updated." });
  
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
export {
    loginAdmin,
    appointmentsAdmin,
    appointmentCancel,
    addDoctor,
    getDoctorList,
    adminDashboard,
    updateStatusDoctor,
    getUserList,
    updateStatusPatient
}