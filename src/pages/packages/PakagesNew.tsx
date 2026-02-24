// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import img1 from '../assets/images/1.jpg';
// import img2 from '../assets/images/2.jpg';
// import img3 from '../assets/images/3.jpg';

// // Define the unified packages based on your requirements
// const allPackages = [
//   {
//     id: "basic",
//     name: "Basic Living",
//     price: "5 – 6 Lakhs",
//     suitable: "Short-term interiors / Rental homes",
//     img: img1,
//     specs: ["MDF Board Carcass", "Laminate Finish", "Standard Soft-Close Hinges"],
//     nature: "Budget-friendly essentials"
//   },
//   {
//     id: "core",
//     name: "Core Living",
//     price: "6 – 7 Lakhs",
//     suitable: "Budget-conscious homeowners",
//     img: img2,
//     specs: ["Non-Branded Comm. Ply", "1mm Laminate", "Standard Branded Hinges"],
//     nature: "Functional and durable"
//   },
//   {
//     id: "prime",
//     name: "Prime Living",
//     price: "7.5 – 9 Lakhs",
//     suitable: "Mid-segment apartment owners",
//     img: img3,
//     specs: ["Branded BWR Ply", "Premium Laminate", "Hettich / Hafele Hardware"],
//     nature: "Balanced luxury"
//   },
//   {
//     id: "signature",
//     name: "Signature Living",
//     price: "9 – 12 Lakhs",
//     suitable: "Long-term homeowners",
//     img: img1, // Replace with actual image
//     specs: ["Branded BWR Ply", "BWP Kitchen / Marine Ply", "Tandem Box Systems"],
//     nature: "⭐ Most Preferred"
//   },
//   {
//     id: "elite",
//     name: "Elite Living",
//     price: "12 – 15 Lakhs+",
//     suitable: "Premium apartment / villa clients",
//     img: img2, // Replace with actual image
//     specs: ["Full BWP / Marine Ply", "Acrylic / PU / Veneer", "Blum / Premium Systems"],
//     nature: "Exquisite finishing"
//   }
// ];

// const PackagesNew = () => {
//   return (
//     <section className="py-24 bg-white font-inter">
//       <div className="container mx-auto px-4">

//         {/* Section Header */}
//         <div className="mb-20 text-center">
//           <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-[#1a1a1a]">
//             Our <span className="text-[#ffc000]">Packages</span>
//           </h2>
//           <div className="w-24 h-2 bg-[#ffc000] mx-auto mt-6 rounded-full shadow-lg"></div>
//           <p className="mt-8 text-gray-500 font-bold uppercase text-xs tracking-[4px]">
//             Check out our comprehensive interior solutions
//           </p>
//         </div>

//         {/* Unified Dynamic Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {allPackages.map((plan, i) => (
//             <motion.div
//               key={plan.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -15 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="group relative rounded-[40px] overflow-hidden shadow-2xl h-[600px] cursor-pointer border border-gray-100 bg-white"
//             >
//               {/* Background Image */}
//               <img
//                 src={plan.img}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
//                 alt={plan.name}
//               />

//               {/* Immersive Gradient */}
//               <div className="absolute inset-0 from-black/90 via-black/40 to-transparent bg-gradient-to-t group-hover:from-black transition-all duration-500"></div>

//               {/* Card Content */}
//               <div className="absolute inset-x-0 bottom-0 p-10 text-white flex flex-col justify-end min-h-[60%]">
//                 <span className="text-[#ffc000] text-[10px] font-black uppercase tracking-[3px] mb-2">
//                   {plan.nature}
//                 </span>

//                 <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-[#ffc000] transition-colors">
//                   {plan.name}
//                 </h3>

//                 <div className="flex items-center gap-3 mb-6">
//                   <p className="text-[#ffc000] font-black text-2xl tracking-tighter">₹{plan.price}</p>
//                   <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">est. budget</span>
//                 </div>

//                 {/* Specs revealed on hover */}
//                 <div className="max-h-0 opacity-0 group-hover:max-h-[400px] group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
//                   <p className="text-[11px] text-gray-300 font-bold uppercase tracking-widest mb-6 italic">
//                     Suitable For: {plan.suitable}
//                   </p>

//                   <div className="w-12 h-1 bg-[#ffc000] mb-6"></div>

//                   <ul className="space-y-3 mb-8">
//                     {plan.specs.map((spec, idx) => (
//                       <li key={idx} className="text-[10px] font-bold uppercase tracking-[2px] flex items-center gap-4">
//                         <span className="w-1.5 h-1.5 bg-[#ffc000] rounded-full"></span>
//                         {spec}
//                       </li>
//                     ))}
//                   </ul>

//                   <Link
//                     to={`/booking/${plan.id}`}
//                     className="inline-block w-full bg-[#ffc000] text-black text-center py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl"
//                   >
//                     Book Now
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PackagesNew;



//  second version

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';

export const allPackages = [
    {
        id: "basic",
        name: "Basic Living",
        price: "5 – 6 Lakhs",
        suitable: "Short-term interiors / Rental homes",
        img: img1,
        specs: ["MDF Board Carcass", "Laminate Finish", "Standard Soft-Close Hinges"],
        nature: "Budget-friendly essentials"
    },
    {
        id: "core",
        name: "Core Living",
        price: "6 – 7 Lakhs",
        suitable: "Budget-conscious homeowners",
        img: img2,
        specs: ["Non-Branded Comm. Ply", "1mm Laminate", "Standard Branded Hinges"],
        nature: "Functional and durable"
    },
    {
        id: "prime",
        name: "Prime Living",
        price: "7.5 – 9 Lakhs",
        suitable: "Mid-segment apartment owners",
        img: img3,
        specs: ["Branded BWR Ply", "Premium Laminate", "Hettich / Hafele Hardware"],
        nature: "Balanced luxury"
    },
    {
        id: "signature",
        name: "Signature Living",
        price: "9 – 12 Lakhs",
        suitable: "Long-term homeowners",
        img: img1,
        specs: ["Branded BWR Ply", "BWP Kitchen / Marine Ply", "Tandem Box Systems"],
        nature: "⭐ Most Preferred"
    },
    {
        id: "elite",
        name: "Elite Living",
        price: "12 – 15 Lakhs+",
        suitable: "Premium apartment / villa clients",
        img: img2,
        specs: ["Full BWP / Marine Ply", "Acrylic / PU / Veneer", "Blum / Premium Systems"],
        nature: "Exquisite finishing"
    }
];

const PackagesNew = () => {

    return (
        <section className="py-12 md:py-24 bg-white font-inter">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="mb-12 md:mb-20 text-center">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-[#1a1a1a]">
                        Our <span className="text-[#ffc000]">Packages</span>
                    </h2>
                    <div className="w-16 md:w-24 h-1.5 md:h-2 bg-[#ffc000] mx-auto mt-4 md:mt-6 rounded-full shadow-md"></div>
                    <p className="mt-4 md:mt-8 text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-[2px] md:tracking-[4px]">
                        Check out our comprehensive interior solutions
                    </p>
                </div>

                {/* Unified Dynamic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {allPackages.map((plan) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl h-[450px] md:h-[500px] cursor-pointer border border-gray-100 bg-white"
                        >
                            <img
                                src={plan.img}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt={plan.name}
                            />
                            <div className="absolute inset-0 from-black/90 via-black/40 to-transparent bg-gradient-to-t group-hover:from-black/95 transition-all duration-300"></div>

                            {/* <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-white flex flex-col justify-end"> */}
                            <div
                                className="
    absolute inset-x-0 bottom-0 
    p-6 md:p-10 text-white 
    flex flex-col justify-end
    transform transition-all duration-500 ease-out
    group-hover:-translate-y-6
  "
                            >
                                <span className="text-[#ffc000] text-[9px] md:text-[10px] font-bold uppercase tracking-[2px] mb-1 md:mb-2">
                                    {plan.nature}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 group-hover:text-[#ffc000] transition-colors leading-tight">
                                    {plan.name}
                                </h3>
                                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                                    <p className="text-[#ffc000] font-bold text-xl md:text-2xl tracking-tighter">₹{plan.price}</p>
                                </div>
                                <p className="text-[10px] md:text-[11px] text-gray-300 font-bold uppercase tracking-widest italic leading-relaxed">
                                    {plan.suitable}
                                </p>

                                <Link
                                    to={`/singlepackage/${plan.id}`}
                                    className="
    w-full bg-[#ffc000] text-black text-center py-4 rounded-xl 
    font-black text-xs uppercase tracking-widest 
    hover:bg-white transition-all duration-300
    opacity-0 translate-y-4
    group-hover:opacity-100 group-hover:translate-y-0
  "
                                >
                                    Book Now
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackagesNew;