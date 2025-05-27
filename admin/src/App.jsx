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
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorSchedule from './pages/Doctor/DoctorSchedule';
import DoctorPrescription from './pages/Doctor/DoctorPrescription';
import PatientList from './pages/Admin/PatientList';
import AllAppointments from './pages/Admin/AllAppointments';
import ReceiptList from './pages/Admin/ReceiptList';
import DoctorReceipt from './pages/Doctor/DoctorReceipt';
function App() {
  const { dToken } = useContext(DoctorContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer position="top-right" autoClose={3000}/>
      <Navbar />
      <div className='flex justify-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/doctor-list' element={<DoctorsList />} />
          <Route path='/patient-list' element={<PatientList />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/doctor-profile' element={<DoctorProfile />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/receipt-list' element={<ReceiptList />} />
          <Route path='/receipts' element={<DoctorReceipt />} />
          <Route path='/doctor-schedule' element={<DoctorSchedule />} />
          <Route path='/doctor-appointments' element={<DoctorAppointments />} />
          <Route path='/doctor-prescription' element={<DoctorPrescription />} />
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
