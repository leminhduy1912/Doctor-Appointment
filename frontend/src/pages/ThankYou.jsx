import { useContext, useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Loading from '../components/Loading';

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // default to loading true

  const orderId = searchParams.get('vnp_TxnRef');
  const amount = searchParams.get('vnp_Amount');
  const slotId = searchParams.get('slotId');

  const invoiceNumber = `INV${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${orderId}`;
  const { backendUrl, token } = useContext(AppContext);

  useEffect(() => {
    const createReceipt = async () => {
      if (!isSubmitted && slotId && amount && orderId) {
        try {
          const slotId = localStorage.getItem('slotId');
          const doctorId = localStorage.getItem('docId');

          // 1. Tạo hóa đơn
          await axios.post(
            `${backendUrl}/api/receipt/create`,
            {
              slotId,
              amount: Number(amount),
              invoiceNumber,
            },
            {
              headers: { token },
            }
          );

          // 2. Cập nhật trạng thái lịch hẹn
          await axios.post(
            `${backendUrl}/api/user/change-status-appointment`,
            {
              slotId,
              doctorId,
              newStatus: "Booked",
            },
            {
              headers: { token },
            }
          );

          // 3. Cập nhật linkMeet
          await axios.post(
            `${backendUrl}/api/user/send-booking-confirm-to-doctor-and-user`,
            { slotId },
            {
              headers: { token },
            }
          );

          console.log('Receipt, status, and linkMeet updated successfully.');
          setIsSubmitted(true);
        } catch (error) {
          console.error('Failed to complete post-payment flow:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    createReceipt();
  }, [slotId, amount, orderId, invoiceNumber, isSubmitted, backendUrl, token]);

  if (isLoading) return <Loading />;

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center max-w-md w-full text-center">
        <CheckCircle className="text-green-500 w-20 h-20 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Thanh toán thành công!</h1>
        <p className="text-gray-600 mb-4">Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.</p>

        {orderId && (
          <p className="text-green-600 font-semibold mb-6">
            Mã giao dịch: <span className="font-mono">{orderId}</span>
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-6">
          <Link
            to="/"
            className="w-full sm:w-auto text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Back to Home
          </Link>
          <Link
            to="/my-appointments"
            className="w-full sm:w-auto text-center border border-green-500 text-green-500 hover:bg-green-50 font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            View my schedule
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ThankYou;
