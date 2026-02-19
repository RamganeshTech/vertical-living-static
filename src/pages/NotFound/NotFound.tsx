import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center p-6 font-inter overflow-hidden relative">
      
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc000]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffc000]/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="max-w-3xl w-full text-center relative z-10">
        {/* Animated 404 Number */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[120px] md:text-[200px] font-black leading-none tracking-tighter text-[#1a1a1a] relative"
        >
          4<span className="text-[#ffc000]">0</span>4
          {/* Floating line accent */}
          <motion.div 
            animate={{ width: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-4 left-0 h-2 bg-[#ffc000] rounded-full"
          />
        </motion.h1>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 px-4"
        >
          <h2 className="text-2xl md:text-4xl font-[900] uppercase text-[#1a1a1a] mb-4">
            Oops! This Page is <span className="text-[#ffc000]">Off-Plan</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-10">
            The project you're looking for doesn't exist or has been moved. 
            Let's get your vision back on track.
          </p>

          {/* Action Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="inline-block bg-[#1a1a1a] text-white px-10 py-4 rounded-full font-bold uppercase tracking-[2px] text-sm shadow-xl hover:bg-[#ffc000] hover:text-black transition-all duration-300"
            >
              Back to home
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Grid Lines */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-6 h-full border-x border-black">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border-r border-black h-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;