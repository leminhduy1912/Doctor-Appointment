import { useContext, useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const orderId = searchParams.get('vnp_TxnRef');
  const amount = searchParams.get('vnp_Amount');
  const slotId = searchParams.get('slotId');

  const invoiceNumber = `INV${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${orderId}`;
    const { backendUrl, token } = useContext(AppContext)

  useEffect(() => {
    const createReceipt = async () => {
      if (!isSubmitted && slotId && amount && orderId) {
        try {
const slotId = localStorage.getItem('slotId')
          await axios.post(
            `${backendUrl}/api/receipt/create`,
            {
              slotId,
              amount: Number(amount) ,
              invoiceNumber,
            },
            {
              headers: {
                token: token,
              },
            }
          );

          console.log('Receipt created successfully.');
          setIsSubmitted(true);
        } catch (error) {
          console.error('Failed to create receipt:', error);
        }
      }
    };

    createReceipt();

    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [slotId, amount, orderId, invoiceNumber, navigate, isSubmitted]);

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

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Link
            to="/"
            className="w-full sm:w-auto text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Về trang chủ
          </Link>
          <Link
            to="/my-orders"
            className="w-full sm:w-auto text-center border border-green-500 text-green-500 hover:bg-green-50 font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Xem đơn hàng
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-400">Bạn sẽ được chuyển về trang chủ sau 5 giây...</p>
      </div>
    </motion.div>
  );
};

export default ThankYou;
