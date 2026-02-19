// import React from 'react';
// import { motion } from 'framer-motion';
// import img1 from '../assets/images/1.jpg';
// import img2 from '../assets/images/2.jpg';
// import img3 from '../assets/images/3.jpg';

// const plans = [
//   { name: "Basic", price: "4 Lakhs", img: img1, features: ["Kitchen", "Wardrobe", "Loft"] },
//   { name: "Premium", price: "8 Lakhs", img: img2, features: ["Full Modular Kitchen", "2 Wardrobes", "TV Unit", "False Ceiling"], featured: true },
//   { name: "Luxury", price: "12 Lakhs", img: img3, features: ["Complete Interiors", "Home Automation", "Lighting Design"] }
// ];

// const PlanCards = () => (
//   <section className="py-20 bg-white">
//     <div className="container mx-auto px-4">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {plans.map((plan, i) => (
//           <motion.div 
//             key={i}
//             whileHover={{ y: -10 }}
//             className="group relative rounded-[40px] overflow-hidden shadow-xl h-[500px]"
//           >
//             <img src={plan.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={plan.name} />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
//             <div className="absolute bottom-0 left-0 w-full p-8 text-white">
//               <h3 className="text-3xl font-black uppercase mb-2">{plan.name}</h3>
//               <p className="text-[#ffc000] font-bold text-xl mb-4">Starting @ {plan.price}</p>
//               <ul className="mb-6 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 {plan.features.map((f, idx) => (
//                   <li key={idx} className="text-xs uppercase tracking-wider flex items-center gap-2">
//                     <div className="w-1.5 h-1.5 bg-[#ffc000] rounded-full"></div> {f}
//                   </li>
//                 ))}
//               </ul>
//               <button className="w-full py-3 bg-[#ffc000] text-black font-bold uppercase rounded-full text-sm">View Details</button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );


// export default PlanCards



import { motion } from 'framer-motion';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';

const plans = [
  { name: "Basic", price: "4 Lakhs", img: img1, features: ["Kitchen", "Wardrobe", "Loft"] },
  { name: "Premium", price: "8 Lakhs", img: img2, features: ["Full Modular Kitchen", "2 Wardrobes", "TV Unit", "False Ceiling"], featured: true },
  { name: "Luxury", price: "12 Lakhs", img: img3, features: ["Complete Interiors", "Home Automation", "Lighting Design"] }
];

const PlanCards = () => (
  <section className="py-20 bg-white font-inter">
    <div className="container mx-auto px-4">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-[500] uppercase tracking-tighter text-[#1a1a1a]">
          Our Design <span className="text-[#ffc000]">Packages</span>
        </h2>
        <div className="w-36 h-1.5 bg-[#ffc000] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -15 }}
            className="group relative rounded-[40px] overflow-hidden shadow-2xl h-[550px] cursor-pointer border border-gray-100"
          >
            {/* Background Image with Zoom */}
            <img 
              src={plan.img} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt={plan.name} 
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
            
            {/* Content Container */}
            <div className="absolute inset-x-0 bottom-0 p-10 text-white flex flex-col justify-end min-h-[40%]">
              {/* {plan.featured && (
                <span className="bg-[#ffc000] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase w-max mb-3">
                  Best Seller
                </span>
              )} */}
              
              <h3 className="text-4xl font-black uppercase mb-1 tracking-tighter transition-all duration-300 group-hover:text-[#ffc000]">
                {plan.name}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                 <p className="text-[#ffc000] font-black text-xl">₹{plan.price}</p>
                 <span className="text-xs text-gray-400 uppercase tracking-widest">onwards</span>
              </div>

              {/* Revealable Content on Hover */}
              <div className="max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                <div className="w-full h-[1px] bg-white/20 mb-4"></div>
                <ul className="space-y-3">
                  {plan.features.map((f, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-[11px] font-bold uppercase tracking-[2px] flex items-center gap-3"
                    >
                      <i className="fa fa-check text-[#ffc000] text-xs"></i>
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PlanCards;