import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'
import Loading from '../components/Loader';

const UserReceipt = () => {
 const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(false);
  const [receipts, setReceipts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
const [isLoading, setIsLoading] = useState(false);


      useEffect(() => {
    const fetchReceipt = async () => {
      try {
        setLoading(true);
        let url = `${backendUrl}/api/user/receipt?page=${currentPage}`;
       

        const { data } = await axios.get(url, {
          headers: { token }
        });

        if (data.data) {
          setReceipts(data.data);
          setTotalPages(data.pagination.totalPages || 1);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchReceipt();
  }, [token, currentPage]);


console.log(totalPages);
  if (loading) return <Loading />;
  return (
    <>
    {isLoading && <Loading />}
  <div className='w-full max-w-6xl m-5 relative'>
        <p className='mb-3 text-lg font-semibold text-gray-800'>All Receipts</p>
  
      
  
        {/* Table */}
        <div className='bg-white border rounded shadow text-sm max-h-[70vh] overflow-y-auto'>
          <div className='hidden sm:grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 py-3 px-4 border-b font-semibold text-gray-600 bg-gray-50 sticky top-0 z-10'>
            <p className='text-center'>#</p>
            <p className='text-center'>Doctor Name</p>
            <p className='text-center'>Date</p>
            <p className='text-center'>Time</p>
            <p className='text-center'>Method</p>
            <p className='text-center'>Status</p>
          </div>
  
          {receipts.length === 0 ? (
            <div className="text-center py-4 text-gray-600">No data found</div>
          ) : (
            receipts.map((item, index) => (
              <div key={item._id} className='grid sm:grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-1 gap-4 items-center py-4 px-4 border-b hover:bg-gray-50 transition-all'>
                <p className='hidden sm:block text-center font-medium'>{index + 1}</p>
                <p className='sm:block hidden text-center truncate sm:max-w-[160px]' title={item.doctor.name}>{item.doctor.name}</p>
                <p className='sm:block hidden text-center truncate sm:max-w-[160px]' title={item.userData?.email}>{item.doctor.slot.date}</p>
                <p className='sm:block hidden text-center whitespace-nowrap'>{item.doctor.slot.startTime} - {item.doctor.slot.endTime}</p>
                <p className='sm:block hidden text-center whitespace-nowrap'>{item.paymentMethod}</p>
                <span className='text-lime-600 text-xs font-semibold'>{item.status}</span>
              
               
             
             
              </div>
            ))
          )}
        </div>
  
        {/* Pagination */}
        {totalPages >= 1 && (
          <div className="flex justify-center mt-6 gap-2 items-center text-sm font-medium text-gray-600">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
            >
              Previous
            </button>
            <button className={`px-3 py-1 border rounded bg-blue-600 text-white`}>
              {currentPage}
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default UserReceipt