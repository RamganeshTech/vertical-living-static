import { motion } from 'framer-motion';
const PaymentFailure = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 font-inter">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center p-8 rounded-[40px] shadow-2xl border border-gray-100"
      >
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <i className="fa fa-times text-red-400 text-4xl"></i>
        </div>

        <h1 className="text-3xl font-black text-[#1a1a1a] mb-4 uppercase tracking-tighter">
          Payment <span className="text-red-400">Incomplete</span>
        </h1>
        
        <p className="text-gray-600 mb-10 leading-relaxed font-medium italic">
          We encountered an issue processing your payment. Don't worry—no funds were deducted.
        </p>

        <div className="flex flex-col gap-4">
          <button 
            onClick={() => window.history.back()}
            className="w-full bg-[#ffc000] text-black py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:shadow-lg transition-all duration-300"
          >
            Try Again
          </button>
          
          <a 
            href="https://wa.me/919363993814" 
            className="text-[11px] font-black text-[#1a1a1a] uppercase tracking-widest hover:text-[#ffc000] transition-colors"
          >
            Need Help? Contact Support
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentFailure;