// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import whatsappIcon from '../assets/images/wp.png';

// const FloatingContact: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const phoneNumber = "+919363993814";

//   return (
//     <div className="fixed left-[30px] bottom-[30px] z-[999] flex flex-col-reverse items-center">
//       {/* Main Toggle Button */}
//       <motion.button
//         onClick={() => setIsOpen(!isOpen)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-2 border-brandYellow"
//       >
//         <img src={whatsappIcon} alt="Contact" className="w-full h-full object-cover" />
//       </motion.button>

//       {/* Floating Options Bubbles */}
//       <AnimatePresence>
//         {isOpen && (
//           <div className="flex flex-col gap-4 mb-4">
//             {/* Call Option */}
//             <motion.a
//               href={`tel:${phoneNumber}`}
//               initial={{ opacity: 0, y: 20, scale: 0 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 20, scale: 0 }}
//               className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 transition-colors"
//               title="Call Sales"
//             >
//               <i className="fa fa-phone text-2xl"></i>
//             </motion.a>

//             {/* WhatsApp Option */}
//             <motion.a
//               href={`https://wa.me/${phoneNumber}`}
//               target="_blank"
//               rel="noreferrer"
//               initial={{ opacity: 0, y: 20, scale: 0 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 20, scale: 0 }}
//               transition={{ delay: 0.1 }}
//               className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
//               title="WhatsApp Sales"
//             >
//               <i className="fa fa-whatsapp text-3xl"></i>
//             </motion.a>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default FloatingContact;


// 

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const FloatingContact: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const phoneNumber = "+919363993814";

//   return (
//     <div className="fixed  right-[30px] bottom-[30px] z-[9999] flex flex-col items-center">
//       {/* Curved Options Container */}
//       <AnimatePresence>
//         {isOpen && (
//           <div className="flex  flex-col gap-4 mb-4 items-center">
//             {/* Call Bubble - Curved Animation */}
//             <motion.a
//               href={`tel:${phoneNumber}`}
//               initial={{ opacity: 0, x: 40, scale: 0 }}
//               animate={{ opacity: 1, x: 0, scale: 1 }}
//               exit={{ opacity: 0, x: 40, scale: 0 }}
//               transition={{ duration: 0.3, ease: "backOut" }}
//               className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-colors"
//             >
//               <i className="fa fa-phone text-2xl"></i>
//             </motion.a>

//             {/* WhatsApp Bubble - Curved Animation */}
//             <motion.a
//               href={`https://wa.me/${phoneNumber}`}
//               target="_blank"
//               rel="noreferrer"
//               initial={{ opacity: 0, x: 80, scale: 0 }}
//               animate={{ opacity: 1, x: 0, scale: 1 }}
//               exit={{ opacity: 0, x: 80, scale: 0 }}
//               transition={{ duration: 0.4, delay: 0.05, ease: "backOut" }}
//               className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
//             >
//               <i className="fa fa-whatsapp text-3xl"></i>
//             </motion.a>
//           </div>
//         )}
//       </AnimatePresence>

//       {/* Main Toggle Button: Switches between WhatsApp and Close icon */}
//       <motion.button
//         onClick={() => setIsOpen(!isOpen)}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className={`w-16 h-16  cursor-pointer rounded-full shadow-2xl flex items-center justify-center text-white transition-colors duration-300 ${
//           isOpen ? 'bg-red-500' : 'bg-brandYellow'
//         }`}
//       >
//         <motion.div
//           animate={{ rotate: isOpen ? 90 : 0 }}
//           transition={{ duration: 0.3 }}
//           className="flex items-center  justify-center"
//         >
//           {isOpen ? (
//             <i className="fa fa-times text-2xl"></i> /* Font Awesome Cross Mark */
//           ) : (
//             /* Using a message/contact icon as the primary */
//             <i className="fa  fa-comments text-2xl"></i> 
//           )}
//         </motion.div>
//       </motion.button>
//     </div>
//   );
// };

// export default FloatingContact;


//  SECOND VERSION

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const phoneNumber = "+919363993814";
const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-[30px] bottom-[30px] z-[9999] flex flex-col items-center">
      {/* Curved Options Container */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col gap-4 mb-4 items-center">
            {/* Call Bubble - Now originates from the center of the main button */}
            <motion.a
              href={`tel:${phoneNumber}`}
              initial={{ opacity: 0, x: 0, y: 100, scale: 0 }}
              animate={{ opacity: 1, x: -40, y: 80, scale: 1 }} // Slanted slightly left for curve
              exit={{ opacity: 0, x: 0, y: 100, scale: 0 }}
              transition={{ duration: 0.3, ease: "backOut" }}
              className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors"
              title="Call Sales"
            >
              <i className="fa fa-phone text-2xl"></i>
            </motion.a>

            {/* WhatsApp Bubble - Now originates from the center of the main button */}
            <motion.a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 0, y: 100, scale: 0 }}
              animate={{ opacity: 1, x: -90, y: 70, scale: 1 }} // Slanted further left for curve
              exit={{ opacity: 0, x: 0, y: 100, scale: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: "backOut" }}
              className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:bg-[#128C7E] transition-colors"
              title="WhatsApp Sales"
            >
              <i className="fa fa-whatsapp text-3xl"></i>
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer transition-colors duration-300 ${
          isOpen ? 'bg-red-500' : 'bg-[#ffc000]'
        }`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          {isOpen ? (
            <i className="fa fa-times text-2xl"></i>
          ) : (
            <i className="fa fa-comments text-2xl text-black"></i> 
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingContact;



