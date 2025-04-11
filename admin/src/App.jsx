import { useContext } from 'react'

import './App.css'
import { DoctorContext } from './context/DoctorContext'
import { AdminContext } from './context/AdminContext'
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import DoctorsList from './pages/Admin/DoctorList';
import DoctorProfile from './pages/Doctor/DoctorProfile';
import AddDoctor from './pages/Admin/AddDoctor';
function App() {
  const { dToken } = useContext(DoctorContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/doctor-list' element={<DoctorsList />} />
          <Route path='/doctor-profile' element={<DoctorProfile />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          {/* <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/doctor-list' element={<DoctorsList />} />
          <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
          <Route path='/doctor-appointments' element={<DoctorAppointments />} />
          <Route path='/doctor-profile' element={<DoctorProfile />} /> */}
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App
