import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get('id');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 font-inter">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center p-8 rounded-[40px] shadow-2xl border border-gray-100"
      >
        <div className="w-24 h-24 bg-[#ffc000]/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <motion.i 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
            className="fa fa-check text-[#ffc000] text-5xl"
          ></motion.i>
        </div>

        <h1 className="text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tighter">
          Booking <span className="text-[#ffc000]">Confirmed</span>
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed font-medium">
          Thank you for choosing Vertical Living. Your payment was successful, and our designers will contact you within 24 hours to begin your journey.
        </p>

        <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-8 text-left">
          <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Payment ID</p>
          <p className="text-xs font-mono text-[#1a1a1a] break-all">{paymentId || "PAYID_847293847"}</p>
        </div>

        <Link 
          to="/"
          className="inline-block w-full bg-[#1a1a1a] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#ffc000] hover:text-black transition-all duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};


export default PaymentSuccess