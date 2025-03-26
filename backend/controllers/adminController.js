import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointment.model'
import doctorModel from '../models/doctor.model'
import validator from 'validator'
import bcrypt from 'bcrypt'
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

const addDoctor = async(req,res)=>{
    try {
        const { name, email, password, specialization, degree, experience, about, fee, address } = req.body
        const imageFile = req.file
         // checking for all data to add doctor
         if (!name || !email || !password || !specialization || !degree || !experience || !about || !fee || !address) {
            return res.json({ success: false, message: "Missing Details" })
        }
        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
// Kiểm tra xem email đã tồn tại chưa
const existingUser = await doctorModel.findOne({ email });
if (existingUser) {
    return res.status(400).json({ success: false, message: "Email already in use" });
}

        // validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }
        // hashing user password
        const salt = await bcrypt.genSalt(10); // the more no. round the more time it will take
        const hashedPassword = await bcrypt.hash(password, salt)
        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url

        const newDoctor = new Doctor({
            name,
            email,
            password: hashedPassword,
            specialization,
            degree,
            experience,
            about,
            fee,
            address: JSON.parse(address),
            profileImage: imageUrl,
            patients: [], 
            createdAt: new Date(), 
            updatedAt: new Date()  
        });

        await newDoctor.save();
        res.status(201).json({ success: true, message: "Doctor added successfully", doctor: newDoctor });

    } catch (error) {
        console.error("Error adding doctor:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
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