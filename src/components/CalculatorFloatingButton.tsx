import { motion } from 'framer-motion';

const CalculatorFloatingButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      /* Positioned exactly 85px above the bottom-6 (24px) position of the chatbot */
      className="fixed cursor-pointer bottom-[85px] md:bottom-[110px] right-6 md:right-7 z-[9998] w-11 h-11 md:w-14 md:h-14 bg-[#ffc000] text-[#1a1a1a] rounded-full shadow-2xl flex items-center justify-center border-4 border-white group"
    >
      <i className="fa fa-calculator text-lg md:text-xl"></i>
      
      {/* Tooltip that appears on hover */}
      <span className="absolute right-16 bg-[#1a1a1a] text-[#ffc000] text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl">
        Get Instant Quote
      </span>
    </motion.button>
  );
};

export default CalculatorFloatingButton;