import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointment.model.js'
import doctorModel from '../models/doctor.model.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary";
// API for admin login
const loginAdmin = async (req, res) => {
    try {

        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
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

// API for appointment cancellation
const appointmentCancel = async (req, res) => {
    try {

        const { appointmentId,reason } = req.body
        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true,reason:reason })

        res.json({ success: true, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get all doctors list for admin panel
const allDoctors = async (req, res) => {
    try {

        const doctors = await doctorModel.find({}).select('-password')
        res.json({ success: true, doctors })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const addDoctor = async (req, res) => {
    try {
        const {
            image, name, email, password, speciality,
            degree, experience, about,
            address, phoneNumber, schedule
        } = req.body;

        console.log("Adding doctor:", name);

        // Kiểm tra thiếu trường
        if (!name || !email || !password || !speciality || !degree || !experience || !about  || !address || !phoneNumber) {
            return res.status(400).json({ success: false, message: "Missing Details" });
        }

        // Kiểm tra email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        const existingUser = await doctorModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already in use" });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please enter a strong password" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Upload image nếu là base64 hoặc file path
        let imageUrl = '';
        if (image) {
            const uploadRes = await cloudinary.uploader.upload(image);
            imageUrl = uploadRes.secure_url;
        }

        // Parse address nếu là chuỗi JSON
        const formattedAddress = typeof address === 'string' ? JSON.parse(address) : address;

        // Parse schedule nếu là chuỗi JSON
        const formattedSchedule = typeof schedule === 'string' ? JSON.parse(schedule) : schedule;

        // Tạo đối tượng bác sĩ mới
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
            schedule: formattedSchedule,
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
export {
    loginAdmin,
    appointmentsAdmin,
    appointmentCancel,
    addDoctor,
    allDoctors,
    adminDashboard
}