import express from 'express'
import { sendOtpRegisterEmail } from '../config/mailer.js'
import { sendBookingConfirmToUserAndDoctor } from '../controllers/doctorController.js'


const emailRouter = express.Router()

// Lưu OTP tạm thời trong RAM (có thể thay bằng Redis / DB)
const otpStore = new Map()

// [POST] /api/user/send-otp
emailRouter.post('/send-otp', async (req, res) => {
  const { email } = req.body
  if (!email) return res.status(400).json({ success: false, message: 'Email is required' })

  const otp = Math.floor(100000 + Math.random() * 900000).toString()

  try {
    await sendOtpRegisterEmail({ to: email, otp })

    // Lưu OTP vào Map kèm thời gian hết hạn
    otpStore.set(email, { otp, expiresAt: Date.now() + 5 * 60 * 1000 })

    res.json({ success: true, message: 'OTP sent to email' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, message: 'Failed to send OTP' })
  }
})

// [POST] /api/user/verify-otp
emailRouter.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body
  const record = otpStore.get(email)

  if (!record) return res.status(400).json({ success: false, message: 'No OTP found for this email' })
  if (Date.now() > record.expiresAt) {
    otpStore.delete(email)
    return res.status(400).json({ success: false, message: 'OTP expired' })
  }

  if (record.otp !== otp) {
    return res.status(400).json({ success: false, message: 'Invalid OTP' })
  }

  otpStore.delete(email)
  res.json({ success: true, message: 'OTP verified' })
})


emailRouter.post('/send-booking-confirm-to-doctor-and-user',sendBookingConfirmToUserAndDoctor)

export default emailRouter
