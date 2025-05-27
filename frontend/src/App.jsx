
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Doctors from './pages/Doctors'

import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointment'
import ThankYou from './pages/ThankYou'
import ForgotPassword from './pages/ForgotPassword'
import SymptomSelector from './pages/RecommenDoctor'
import UserReceipt from './pages/MyReceipt'

function App() {

  return (
<div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      {/* <Loading/> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/auth' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/receipts' element={<UserReceipt />} />
        <Route path='/forgot-pasword' element={<ForgotPassword />} />
      <Route path='/recommend-doctor' element={<SymptomSelector />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
