import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loader'

const Login = () => {
  const [step, setStep] = useState('email') // 'email' | 'otp' | 'signup' | 'login'
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  useEffect(() => {
    if (token) navigate('/')
  }, [token, navigate])

  const handleBackStep = () => {
    if (step === 'otp') setStep('email')
    if (step === 'signup') setStep('otp')
    if (step === 'login') setStep('email')
  }
const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
console.log(email);

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      setError('Please enter a valid email address')
    } else {
      setError('')
    }
  }
  const handleSendOTP = async () => {
    if (!email) return toast.error('Email is required')

    try {
      setIsLoading(true)
      const res = await axios.post(`${backendUrl}/api/user/is-exist`, { email })

      if (res.data.isExist) {
        toast.error('User already exists.')
      } else {
        const data = await axios.post(`${backendUrl}/api/email/send-otp`, { email })
        if (data.data.success) {
          toast.success('OTP sent to your email.')
          setStep('otp')
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error('Error while sending OTP.')
    } finally {
      setIsLoading(false)
    }
  }

const handleForgotPassword = async () => {
  if (!email) return toast.error('Please enter your email.')

  try {
    setIsLoading(true)

    const { data } = await axios.post(`${backendUrl}/api/email/send-otp-reset-password`, { email })
    console.log("data", data);

    if (data.success) {
      toast.success('OTP reset password sent to your email.')
      setStep('otp-reset-password')
    } 
  } catch (err) {
    console.log(error);
    
          toast.error('Email does not exist in our system.')

  } finally {
    setIsLoading(false)
  }
}




const handleResetPassword = async () => {
  if (!password) return toast.error('Please enter your new password.')

  try {
    setIsLoading(true)
    const { data } = await axios.post(`${backendUrl}/api/user/reset-password`, {
      email,
      newPassword: password,
    })

    if (data.success) {
      toast.success('Password updated successfully. Please login.')
      setStep('login')
    } else {
      toast.error(data.message || 'Failed to reset password.')
    }
  } catch (err) {
    toast.error('Error resetting password.')
  } finally {
    setIsLoading(false)
  }
}

  const handleVerifyOTP = async () => {
    if (!otp) return toast.error('Please enter the OTP.')
    try {
      setIsLoading(true)
      const { data } = await axios.post(`${backendUrl}/api/email/verify-otp`, { email, otp })

      if (data.success) {
        toast.success('OTP verified. Continue to registration.')
        setStep('signup')
      } else {
        toast.error('Invalid OTP.')
      }
    } catch (error) {
      toast.error('Error verifying OTP.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOTPResetPassword = async () => {
    if (!otp) return toast.error('Please enter the OTP.')
    try {
      setIsLoading(true)
      const { data } = await axios.post(`${backendUrl}/api/email/verify-otp-reset-password`, { email, otp })

      if (data.success) {
        toast.success('OTP verified. Continue to registration.')
        setStep('new-password')
      } else {
        toast.error('Invalid OTP.')
      }
    } catch (error) {
      toast.error('Error verifying OTP.')
    } finally {
      setIsLoading(false)
    }
  }



  const handleRegister = async (e) => {
    e.preventDefault()
    if (!name || !password) return toast.error('All fields are required.')

    try {
      setIsLoading(true)
      const { data } = await axios.post(`${backendUrl}/api/user/register`, {
        name,
        email,
        password,
      })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Registration failed.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async () => {
    if (!email || !password) return toast.error('Please enter both email and password.')

    try {
      setIsLoading(true)
      const { data } = await axios.post(`${backendUrl}/api/user/login`, { email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
        toast.success('Logged in successfully.')
        navigate('/')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Login failed.')
    } finally {
      setIsLoading(false)
    }
  }
console.log(step)
  return (
    <>
      {isLoading && <Loading />}
      <form
        onSubmit={step === 'signup' ? handleRegister : (e) => e.preventDefault()}
        className='min-h-[80vh] flex items-center'
      >
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
    <h2 className='text-xl font-semibold'>
    {step === 'login' && 'Login'}
        {step === 'email' && 'Enter email to register'}

    {step === 'register' && 'Sign Up'}
    {step === 'forgot-password-email' && 'Forgot Password'}
    </h2>
 <p>
    {step === 'login' && 'Access your account'}
    {step === 'register' && 'Register to book appointments'}
    {step === 'forgot-password-email' && 'Reset your password'}
  </p>
          {/* Step: Login */}
          {step === 'login' && (
            <>
              <div className='w-full'>
                <p>Email</p>
                <input
                  type='email'
                  value={email}
                  onChange={handleEmailChange}
                  className='border border-[#DADADA] rounded w-full p-2 mt-1'
                  required
                  placeholder='Enter your email'
                />
                {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
              </div>
              <div className='w-full'>
                <p>Password</p>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='border border-[#DADADA] rounded w-full p-2 mt-1'
                  required
                  placeholder='Enter your password'
                />
              </div>
               {/* Forgot Password link */}
    <div className='w-full text-right mt-1'>
  <button
  onClick={() => setStep('forgot-password-email')}
  className='text-sm text-blue-500 hover:underline hover:text-blue-600 transition duration-150'
  type='button'
>
  Forgot password?
</button>
    </div>
              <div className='flex w-full gap-3'>
                <button
                  type='button'
                  onClick={handleBackStep}
                  className='bg-gray-300 text-black w-full py-2 mt-3 rounded-md text-base'
                >
                  Back
                </button>
                <button
                  type='button'
                  onClick={handleLogin}
                  className='bg-blue-500 text-white w-full py-2 mt-3 rounded-md text-base'
                >
                  Login
                </button>
              </div>
              <p className='text-sm text-center w-full mt-4'>
                Don't have an account?{' '}
                <span
                  className='text-blue-500 hover:underline cursor-pointer'
                  onClick={() => setStep('email')}
                >
                  Sign Up
                </span>
              </p>
            </>
          )}

          {/* Step: Enter Email */}
          {step === 'email' && (
            <>
              <div className='w-full'>
                <p>Email</p>
                <input
                  type='email'
                  value={email}
                  //onChange={(e) => setEmail(e.target.value)}
                  onChange={handleEmailChange}
                  className='border border-[#DADADA] rounded w-full p-2 mt-1'
                  required
                  placeholder='Enter your email'
                />
                {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
              </div>
              <button
                type='button'
                onClick={handleSendOTP}
                className='bg-blue-500 text-white w-full py-2 mt-3 rounded-md text-base'
              >
                Send OTP
              </button>
              <p className='text-sm text-center w-full mt-4'>
                Already have an account?{' '}
                <span
                  className='text-blue-500 hover:underline cursor-pointer'
                  onClick={() => setStep('login')}
                >
                  Login
                </span>
              </p>
            </>
          )}

          {/* Step: Enter OTP */}
          {step === 'otp' && (
            <>
              <div className='w-full'>
                <p>OTP to register (check your email)</p>
                <input
                  type='text'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className='border border-[#DADADA] rounded w-full p-2 mt-1'
                  required
                />
              </div>
              <div className='flex w-full gap-3'>
                <button
                  type='button'
                  onClick={handleBackStep}
                  className='bg-gray-300 text-black w-full py-2 mt-3 rounded-md text-base'
                >
                  Back
                </button>
                <button
                  type='button'
                  onClick={handleVerifyOTP}
                  className='bg-blue-500 text-white w-full py-2 mt-3 rounded-md text-base'
                >
                  Verify OTP
                </button>
              </div>
            </>
          )}

                    {/* Step: Enter OTP reset password */}
          {step === 'otp-reset-password' && (
            <>
              <div className='w-full'>
                <p>OTP to reset password (check your email)</p>
                <input
                  type='text'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className='border border-[#DADADA] rounded w-full p-2 mt-1'
                  required
                />
              </div>
              <div className='flex w-full gap-3'>
                <button
                  type='button'
                  onClick={handleBackStep}
                  className='bg-gray-300 text-black w-full py-2 mt-3 rounded-md text-base'
                >
                  Back
                </button>
                <button
                  type='button'
                  onClick={handleVerifyOTPResetPassword}
                  className='bg-blue-500 text-white w-full py-2 mt-3 rounded-md text-base'
                >
                  Verify OTP
                </button>
              </div>
            </>
          )}

{step === 'forgot-password-email' && (
  <>
    <div className='w-full'>
      <p>Email</p>
      <input
        type='email'
        value={email}
        onChange={handleEmailChange}
        className='border border-[#DADADA] rounded w-full p-2 mt-1'
        required
        placeholder='Enter your email to reset password'
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
    <div className='flex w-full gap-3'>
      <button
        type='button'
        onClick={handleBackStep}
        className='bg-gray-300 text-black w-full py-2 mt-3 rounded-md text-base'
      >
        Back
      </button>
      <button
        type='button'
        onClick={handleForgotPassword}
        className='bg-blue-500 text-white w-full py-2 mt-3 rounded-md text-base'
      >
        Send OTP
      </button>
    </div>
  </>
)}


{/* Step: OTP Reset Password */}
{step === 'otp-reset-pass' && (
  <>
    <div className='w-full'>
      <p>OTP (check your email)</p>
      <input
        type='text'
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className='border border-[#DADADA] rounded w-full p-2 mt-1'
        required
      />
    </div>
    <div className='flex w-full gap-3'>
      <button
        type='button'
        onClick={handleBackStep}
        className='bg-gray-300 text-black w-full py-2 mt-3 rounded-md text-base'
      >
        Back
      </button>
      <button
        type='button'
        onClick={handleVerifyOTPResetPassword}
        className='bg-blue-500 text-white w-full py-2 mt-3 rounded-md text-base'
      >
        Verify OTP
      </button>
    </div>
  </>
)}


{/* Step: New Password */}
{step === 'new-password' && (
  <>
    <div className='w-full'>
      <p>New Password</p>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='border border-[#DADADA] rounded w-full p-2 mt-1'
        required
        placeholder='Enter new password'
      />
    </div>
    <div className='flex w-full gap-3'>
      <button
        type='button'
        onClick={handleBackStep}
        className='bg-gray-300 text-black w-full py-2 mt-3 rounded-md text-base'
      >
        Back
      </button>
      <button
        type='button'
        onClick={handleResetPassword}
        className='bg-blue-500 text-white w-full py-2 mt-3 rounded-md text-base'
      >
        Reset Password
      </button>
    </div>
  </>
)}



          {/* Step: Final Registration */}
          {step === 'signup' && (
            <>
              <div className='w-full'>
                <p>Full Name</p>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='border border-[#DADADA] rounded w-full p-2 mt-1'
                  required
                />
              </div>
              <div className='w-full'>
                <p>Password</p>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='border border-[#DADADA] rounded w-full p-2 mt-1'
                  required
                />
              </div>
              <div className='flex w-full gap-3'>
                <button
                  type='button'
                  onClick={handleBackStep}
                  className='bg-gray-300 text-black w-full py-2 mt-3 rounded-md text-base'
                >
                  Back
                </button>
                <button
                  type='submit'
                  className='bg-blue-500 text-white w-full py-2 mt-3 rounded-md text-base'
                >
                  Create Account
                </button>
              </div>
            </>
          )}
        </div>
      </form>
    </>
  )
}

export default Login
