import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/user.model.js";
import {v2 as cloudinary} from "cloudinary"
import doctorModel from "../models/doctor.model.js";
import appointmentModel from "../models/appointment.model.js";
import { sendNotiNewBookingToDoctor } from "../config/mailer.js";
// API to register user
const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        // checking for all data to register user
        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' })
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        // validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10); // the more no. round the more time it will take
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword,
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to login user
const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "User does not exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get user profile data
const getProfileById = async (req, res) => {

    try {
        const { userId } = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({ success: true, userData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, gender, dob, image } = req.body;

        let updatedFields = { name, phone, address, gender, dob };

        // Cập nhật thông tin cơ bản
        let updatedUser = await userModel.findByIdAndUpdate(userId, updatedFields, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Nếu có ảnh mới thì cập nhật
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            updatedUser = await userModel.findByIdAndUpdate(
                userId, 
                { image: uploadResponse.secure_url }, 
                { new: true }
            );
        }

        res.json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


const isUserExist = async (req, res) => {
    try {
      const { email } = req.body;
  
      if (!email) {
        return res.status(400).json({
          success: false,
          isExist: false,
          message: "Email is required",
        });
      }
  
      const user = await userModel.findOne({ email });
  
      return res.status(200).json({
        success: true,
        isExist: !!user, // Trả về true nếu có user, false nếu không
        message: user ? "User exists" : "User does not exist",
      });
  
    } catch (error) {
      return res.status(500).json({
        success: false,
        isExist: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  };
  

  // book appointment
  const bookAppointment = async (req, res) => {
    try {
      const { userId, doctorId, slotId } = req.body;
  
      // Lấy thông tin bác sĩ
      const doctor = await doctorModel.findById(doctorId);
      if (!doctor) {
        return res.json({ success: false, message: 'Doctor not found' });
      }
  
      if (!doctor.available) {
        return res.json({ success: false, message: 'Doctor is not available' });
      }

      // Tìm slot theo slotId trong schedule
      const slot = doctor.schedule.find(s => s._id.toString() == slotId);
      if (!slot) {
        return res.json({ success: false, message: 'Slot not found' });
      }
  
      if (slot.status !== "available") {
        return res.json({ success: false, message: 'Slot already booked' });
      }
  
      // Đánh dấu slot là đã đặt
      slot.status = "pending";
  
      // Lưu thay đổi vào DB
      await doctor.save();
  
      // Lấy thông tin user
      const user = await userModel.findById(userId).select("-password");
  
      // Tạo dữ liệu lịch hẹn
      const appointmentData = {
        slotId:slot._id.toString(),
        userId,
        docId: doctorId,
        userData: {
          _id: user._id,
          name: user.name,
          email: user.email,
          image: user.image
        },
        docData: {
          _id: doctor._id,
          name: doctor.name,
          speciality: doctor.speciality,
          image: doctor.image
        },
        amount: slot.fees,
        slotTime: `${slot.startTime} - ${slot.endTime}`,
        slotDate: slot.date,
        date: Date.now()
      };
  
      const newAppointment = new appointmentModel(appointmentData);
      await newAppointment.save();
      await sendNotiNewBookingToDoctor(doctor.email,slot.date,slot.startTime,slot.endTime,doctor.name,user.name,user.image)
      res.json({ success: true, message: 'Appointment booked successfully' });
  
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: error.message });
    }
  };
  

  
const getAllAppointments = async (req, res) => {
    try {
      const userId = req.body.userId;
  
      // Lấy tất cả appointment theo userId
      const appointments = await appointmentModel.find({ userId }).sort({ createdAt: -1 });
  
      // Map dữ liệu trả về theo model gốc
      const formattedAppointments = appointments.map(app => ({
        _id: app._id,
        userData: app.userData,
        docData: app.docData,
        amount: app.amount,
        slotId: app.slotId,
        slotTime: app.slotTime,
        slotDate: app.slotDate,
        date: app.date,
        status: app.status,
        createdAt: app.createdAt,
        updatedAt: app.updatedAt
      }));
  
      return res.status(200).json({
        success: true,
        appointments: formattedAppointments
      });
    } catch (error) {
      console.error('Error fetching appointments:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error while getting appointments.'
      });
    }
  }
  
export {
    loginUser,
    registerUser,
    getProfileById,
    updateProfile,
    isUserExist,
    bookAppointment,
    getAllAppointments
}