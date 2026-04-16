// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { HOUSE_TYPES_DATA } from '../../constants/constants';
// // import { HOUSE_TYPES_DATA } from '../constants/constants'; // Adjust path

// const HouseTypeDetail: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const navigate = useNavigate();

//     // Scroll to top when component mounts
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [id]);

//     const houseData = HOUSE_TYPES_DATA.find((item) => item.id === id);

//     if (!houseData) {
//         return (
//             <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
//                 <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Design Not Found</h2>
//                 <button 
//                     onClick={() => navigate(-1)}
//                     className="text-[#ffc000] font-bold uppercase tracking-[2px] hover:text-[#1a1a1a] transition-colors"
//                 >
//                     <i className="fa-solid fa-arrow-left mr-2"></i> Go Back
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <main className="min-h-screen bg-[#fafafa] pb-24 font-sans selection:bg-[#ffc000] selection:text-[#1a1a1a]">

//             {/* 1. Immersive Hero Section */}
//             <div className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] z-0">
//                 <img 
//                     src={houseData.image} 
//                     alt={houseData.title} 
//                     className="w-full h-full object-cover"
//                 />
//                 {/* Gradient overlay to ensure the nav and top elements are visible */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>

//                 {/* Back Button */}
//                 <button 
//                     onClick={() => navigate(-1)}
//                     className="absolute top-8 left-6 md:left-12 z-20 flex items-center gap-3 text-white font-bold uppercase tracking-[2px] text-xs md:text-sm hover:text-[#ffc000] transition-colors bg-black/20 hover:bg-black/40 backdrop-blur-md px-6 py-3 rounded-full"
//                 >
//                     <i className="fa-solid fa-arrow-left"></i> Back to Portfolio
//                 </button>
//             </div>

//             {/* 2. Overlapping Content Container */}
//             <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 -mt-24 md:-mt-32 lg:-mt-48">

//                 {/* Title Card */}
//                 <div className="bg-white p-8 md:p-12 lg:p-16 rounded-t-3xl shadow-2xl border-b-[4px] border-[#ffc000]">
//                     <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//                         <div>
//                             <div className="flex items-center gap-4 mb-4">
//                                 <div className="w-10 h-[2px] bg-[#ffc000]"></div>
//                                 <span className="text-[#1a1a1a] font-bold tracking-[3px] uppercase text-xs md:text-sm flex items-center gap-2">
//                                     <i className={`${houseData.icon} text-[#ffc000]`}></i>
//                                     {houseData.subtitle}
//                                 </span>
//                             </div>
//                             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] tracking-tight leading-[1.1]">
//                                 {houseData.title}
//                             </h1>
//                         </div>

//                         {/* Quick Highlights Band */}
//                         <div className="flex flex-wrap gap-2 md:max-w-md">
//                             {houseData.keyHighlights.map((highlight, index) => (
//                                 <span 
//                                     key={index} 
//                                     className="px-4 py-2 bg-[#fafafa] text-[#1a1a1a] text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md border border-gray-100"
//                                 >
//                                     {highlight}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* 3. Main Content Body */}
//                 <div className="bg-white px-8 md:px-12 lg:px-16 pb-16 rounded-b-3xl shadow-xl flex flex-col lg:flex-row gap-16 lg:gap-24">

//                     {/* Left/Top: Long Description with Editorial Drop Cap */}
//                     <div className="w-full lg:w-[60%] pt-12">
//                         <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#ffc000] pl-4">
//                             Design Philosophy
//                         </h3>
//                         <div className="prose prose-lg max-w-none text-gray-500 leading-loose">
//                             <p className="first-letter:float-left first-letter:text-6xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-[#ffc000] first-letter:mr-3 first-letter:mt-2 first-letter:leading-none">
//                                 {houseData.longDescription}
//                             </p>
//                         </div>
//                     </div>

//                     {/* Right/Bottom: Technical Features */}
//                     <div className="w-full lg:w-[40%] pt-12">
//                         <div className="bg-[#fafafa] p-8 rounded-2xl border border-gray-100 h-full">
//                             <h3 className="text-xl font-bold text-[#1a1a1a] mb-8 flex items-center gap-3">
//                                 <i className="fa-solid fa-list-check text-[#ffc000]"></i>
//                                 Engineering Highlights
//                             </h3>

//                             <div className="flex flex-col gap-8">
//                                 {houseData.features.map((feature, index) => (
//                                     <div key={index} className="flex gap-5 group">
//                                         <div className="w-12 h-12 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:bg-[#ffc000] group-hover:border-[#ffc000] transition-colors duration-300">
//                                             <i className={`${feature.icon} text-gray-400 group-hover:text-[#1a1a1a] text-lg transition-colors duration-300`}></i>
//                                         </div>
//                                         <div>
//                                             <h4 className="text-[#1a1a1a] font-bold text-lg mb-2">{feature.title}</h4>
//                                             <p className="text-gray-500 text-sm leading-relaxed">
//                                                 {feature.description}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Call to Action Box */}
//                             <div className="mt-12 p-6 bg-[#1a1a1a] rounded-xl text-center">
//                                 <h4 className="text-white font-bold mb-2">Ready to transform your space?</h4>
//                                 <p className="text-gray-400 text-xs mb-6">Consult with our lead architects today.</p>
//                                 <button className="w-full py-3 bg-[#ffc000] hover:bg-white text-[#1a1a1a] font-bold text-xs uppercase tracking-[2px] transition-colors duration-300 rounded">
//                                     Contact Us
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//         </main>
//     );
// };

// export default HouseTypeDetail;





//  SECOND VERSION

// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion, type Variants } from 'framer-motion';
// import { HOUSE_TYPES_DATA } from '../../constants/constants';
// import { phoneNumber } from '../../components/StickySideContact';
// // import { HOUSE_TYPES_DATA } from '../constants/constants'; // Adjust path

// const HouseTypeDetail: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const navigate = useNavigate();

//     // Replace this with your actual phone number constant
//     // const phoneNumber = "+919876543210"; 

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [id]);

//     const houseData = HOUSE_TYPES_DATA.find((item) => item.id === id);

//     if (!houseData) {
//         return (
//             <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
//                 <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Design Not Found</h2>
//                 <button 
//                     onClick={() => navigate(-1)}
//                     className="text-[#ffc000] font-bold uppercase tracking-[2px] hover:text-[#1a1a1a] transition-colors"
//                 >
//                     <i className="fa-solid fa-arrow-left mr-2"></i> Go Back
//                 </button>
//             </div>
//         );
//     }

//     // Framer Motion Animation Variants
//     const fadeUp:Variants = {
//         hidden: { opacity: 0, y: 40 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
//     };

//     const staggerContainer:Variants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.15 }
//         }
//     };

//     return (
//         <main className="min-h-screen bg-[#fafafa] pb-24 font-sans selection:bg-[#ffc000] selection:text-[#1a1a1a]">

//             {/* 1. Immersive Hero Section with subtle scale animation */}
//             <div className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] z-0 overflow-hidden">
//                 <motion.img 
//                     initial={{ scale: 1.1 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 1.5, ease: 'easeOut' }}
//                     src={houseData.image} 
//                     alt={houseData.title} 
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent"></div>

//                 <button 
//                     onClick={() => navigate(-1)}
//                     className="absolute top-8 left-6 md:left-12 z-20 flex items-center gap-3 text-white font-bold uppercase tracking-[2px] text-xs md:text-sm hover:text-[#ffc000] transition-colors bg-black/20 hover:bg-black/40 backdrop-blur-md px-6 py-3 rounded-full"
//                 >
//                     <i className="fa-solid fa-arrow-left"></i> Back
//                 </button>
//             </div>

//             {/* 2. Overlapping Content Container */}
//             <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 -mt-24 md:-mt-32 lg:-mt-48">

//                 {/* Title Card */}
//                 <motion.div 
//                     initial="hidden"
//                     animate="visible"
//                     variants={fadeUp}
//                     className="bg-white p-8 md:p-12 lg:p-16 rounded-t-3xl shadow-2xl border-b-[4px] border-[#ffc000]"
//                 >
//                     <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//                         <div>
//                             <div className="flex items-center gap-4 mb-4">
//                                 <div className="w-10 h-[2px] bg-[#ffc000]"></div>
//                                 <span className="text-[#1a1a1a] font-bold tracking-[3px] uppercase text-xs md:text-sm flex items-center gap-2">
//                                     <i className={`${houseData.icon} text-[#ffc000]`}></i>
//                                     {houseData.subtitle}
//                                 </span>
//                             </div>
//                             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] tracking-tight leading-[1.1]">
//                                 {houseData.title}
//                             </h1>
//                         </div>

//                         {/* Quick Highlights Band */}
//                         <div className="flex flex-wrap gap-2 md:max-w-md">
//                             {houseData.keyHighlights.map((highlight, index) => (
//                                 <span 
//                                     key={index} 
//                                     className="px-4 py-2 bg-[#fafafa] text-[#1a1a1a] text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md border border-gray-100"
//                                 >
//                                     {highlight}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* 3. Main Content Body */}
//                 <div className="bg-white px-8 md:px-12 lg:px-16 pb-16 rounded-b-3xl shadow-xl flex flex-col lg:flex-row gap-16 lg:gap-24">

//                     {/* Left: Long Description */}
//                     <motion.div 
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, margin: "-100px" }}
//                         variants={fadeUp}
//                         className="w-full lg:w-[55%] pt-12"
//                     >
//                         <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 border-l-4 border-[#ffc000] pl-4">
//                             Design Philosophy
//                         </h3>
//                         <div className="prose prose-lg max-w-none text-gray-500 leading-loose">
//                             <p className="first-letter:float-left first-letter:text-6xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-[#ffc000] first-letter:mr-3 first-letter:mt-2 first-letter:leading-none">
//                                 {houseData.longDescription}
//                             </p>
//                         </div>
//                     </motion.div>

//                     {/* Right: Technical Features (Card Layout) */}
//                     <div className="w-full lg:w-[45%] pt-12">
//                         <div className="sticky top-12">
//                             <h3 className="text-xl font-bold text-[#1a1a1a] mb-8 flex items-center gap-3">
//                                 <i className="fa-solid fa-layer-group text-[#ffc000]"></i>
//                                 Engineering Highlights
//                             </h3>

//                             <motion.div 
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: true, margin: "-50px" }}
//                                 variants={staggerContainer}
//                                 className="flex flex-col gap-4"
//                             >
//                                 {houseData.features.map((feature, index) => (
//                                     <motion.div 
//                                         key={index} 
//                                         variants={fadeUp}
//                                         className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#ffc000]/30 transition-all duration-300 group flex gap-5"
//                                     >
//                                         <div className="w-12 h-12 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#ffc000] transition-colors duration-300">
//                                             <i className={`${feature.icon} text-gray-400 group-hover:text-[#1a1a1a] text-lg transition-colors duration-300`}></i>
//                                         </div>
//                                         <div>
//                                             <h4 className="text-[#1a1a1a] font-bold text-base mb-1">{feature.title}</h4>
//                                             <p className="text-gray-500 text-sm leading-relaxed">
//                                                 {feature.description}
//                                             </p>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>

//                             {/* Call to Action Box - Tel Link */}
//                             <motion.div 
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: true }}
//                                 variants={fadeUp}
//                                 className="mt-8 p-8 bg-[#1a1a1a] rounded-2xl text-center relative overflow-hidden group"
//                             >
//                                 {/* Background hover effect */}
//                                 <div className="absolute inset-0 bg-[#ffc000]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

//                                 <div className="relative z-10">
//                                     <h4 className="text-white font-bold mb-3 text-lg">Ready to transform your space?</h4>
//                                     <p className="text-gray-400 text-sm mb-8">Speak directly with our lead architects today.</p>

//                                     <a 
//                                         href={`tel:${phoneNumber}`}
//                                         className="inline-flex w-full items-center justify-center gap-3 py-4 bg-[#ffc000] hover:bg-white text-[#1a1a1a] font-bold text-sm uppercase tracking-[2px] transition-colors duration-300 rounded-xl shadow-lg hover:shadow-[#ffc000]/20"
//                                     >
//                                         <i className="fa-solid fa-phone-volume animate-pulse"></i>
//                                         Call {phoneNumber}
//                                     </a>
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//         </main>
//     );
// };

// export default HouseTypeDetail;



//  THIRD VERSION


// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { motion, type Variants } from 'framer-motion';
// import { HOUSE_TYPES_DATA } from '../../constants/constants';
// // import { HOUSE_TYPES_DATA } from '../constants/constants'; // Adjust path

// const HouseTypeDetail: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const navigate = useNavigate();

//     const phoneNumber = "+919876543210"; 

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [id]);

//     const houseData = HOUSE_TYPES_DATA.find((item) => item.id === id);

//     if (!houseData) {
//         return (
//             <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
//                 <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Design Not Found</h2>
//                 <button 
//                     onClick={() => navigate(-1)}
//                     className="text-[#ffc000] font-bold uppercase tracking-[2px] hover:text-[#1a1a1a] transition-colors"
//                 >
//                     <i className="fa-solid fa-arrow-left mr-2"></i> Go Back
//                 </button>
//             </div>
//         );
//     }

//     // Strictly typed Framer Motion Variants
//     const fadeUp: Variants = {
//         hidden: { opacity: 0, y: 40 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
//     };

//     const staggerContainer: Variants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.15 }
//         }
//     };

//     return (
//         <main className="min-h-screen bg-[#fafafa] font-sans selection:bg-[#ffc000] selection:text-[#1a1a1a]">

//             {/* 1. Immersive Hero - Taller for higher impact */}
//             <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] z-0 overflow-hidden">
//                 <motion.img 
//                     initial={{ scale: 1.05 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 1.5, ease: 'easeOut' }}
//                     src={houseData.image} 
//                     alt={houseData.title} 
//                     className="w-full h-full object-cover"
//                 />
//                 {/* Refined gradient for better text readability */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/40"></div>

//                 <button 
//                     onClick={() => navigate(-1)}
//                     className="absolute top-8 left-6 md:left-12 z-20 flex items-center gap-3 text-white font-bold uppercase tracking-[2px] text-xs md:text-sm hover:text-[#ffc000] transition-all bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10"
//                 >
//                     <i className="fa-solid fa-arrow-left"></i> Portfolio
//                 </button>
//             </div>

//             {/* 2. Floating Editorial Container */}
//             <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 -mt-32 md:-mt-48 lg:-mt-56 pb-24">

//                 <motion.div 
//                     initial="hidden"
//                     animate="visible"
//                     variants={fadeUp}
//                     className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden"
//                 >
//                     {/* Top Section: Title & Subtitle */}
//                     <div className="p-8 md:p-12 lg:p-16 border-b border-gray-100">
//                         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//                             <div className="max-w-3xl">
//                                 <div className="flex items-center gap-4 mb-6">
//                                     <div className="w-12 h-[2px] bg-[#ffc000]"></div>
//                                     <span className="text-[#1a1a1a] font-bold tracking-[4px] uppercase text-xs md:text-sm flex items-center gap-2">
//                                         <i className={`${houseData.icon} text-[#ffc000] text-lg mr-1`}></i>
//                                         {houseData.subtitle}
//                                     </span>
//                                 </div>
//                                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] tracking-tighter leading-[0.95]">
//                                     {houseData.title}
//                                 </h1>
//                             </div>
//                         </div>
//                     </div>


//                       <div className="flex flex-wrap gap-2 md:max-w-md">
//                           {houseData.keyHighlights.map((highlight, index) => (
//                                 <span 
//                                     key={index} 
//                                     className="px-4 py-2 bg-[#fafafa] text-[#1a1a1a] text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md border border-gray-100"
//                                 >
//                                     {highlight.text}
//                                 </span>
//                             ))}
//                         </div>

//                     {/* Middle Section: Highly Visual Highlights Ribbon */}


//                     {/* Bottom Section: Content & Features Split */}
//                     <div className="p-8 md:p-12 lg:p-16 flex flex-col xl:flex-row gap-16 lg:gap-24">

//                         {/* Left: Philosophy */}
//                         <motion.div 
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true, margin: "-100px" }}
//                             variants={fadeUp}
//                             className="w-full xl:w-[55%]"
//                         >
//                             <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 flex items-center gap-4">
//                                 <span className="w-8 h-[2px] bg-[#ffc000] block"></span>
//                                 Philosophy
//                             </h3>
//                             <div className="prose prose-lg md:prose-xl max-w-none text-gray-500 leading-loose">
//                                 <p className="first-letter:float-left first-letter:text-7xl md:first-letter:text-8xl first-letter:font-bold first-letter:text-[#ffc000] first-letter:mr-4 first-letter:mt-2 first-letter:leading-none">
//                                     {houseData.longDescription}
//                                 </p>
//                             </div>
//                         </motion.div>

//                         {/* Right: Technical Features & Call to Action */}
//                         <div className="w-full xl:w-[45%]">
//                             <div className="sticky top-12">
//                                 <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 flex items-center gap-4">
//                                     <span className="w-8 h-[2px] bg-[#ffc000] block"></span>
//                                     Engineering
//                                 </h3>

//                                 <motion.div 
//                                     initial="hidden"
//                                     whileInView="visible"
//                                     viewport={{ once: true, margin: "-50px" }}
//                                     variants={staggerContainer}
//                                     className="flex flex-col gap-6"
//                                 >
//                                     {houseData.features.map((feature, index) => (
//                                         <motion.div 
//                                             key={index} 
//                                             variants={fadeUp}
//                                             className="flex gap-6 group"
//                                         >
//                                             <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#fafafa] flex items-center justify-center border border-gray-100 group-hover:bg-[#ffc000] group-hover:rotate-6 transition-all duration-300">
//                                                 <i className={`${feature.icon} text-gray-400 group-hover:text-[#1a1a1a] text-xl transition-colors duration-300`}></i>
//                                             </div>
//                                             <div>
//                                                 <h4 className="text-[#1a1a1a] font-bold text-lg mb-2">{feature.title}</h4>
//                                                 <p className="text-gray-500 text-sm md:text-base leading-relaxed">
//                                                     {feature.description}
//                                                 </p>
//                                             </div>
//                                         </motion.div>
//                                     ))}
//                                 </motion.div>

//                                 {/* Premium CTA Block */}
//                                 <motion.div 
//                                     initial="hidden"
//                                     whileInView="visible"
//                                     viewport={{ once: true }}
//                                     variants={fadeUp}
//                                     className="mt-12 p-8 md:p-10 bg-[#1a1a1a] rounded-[2rem] text-center relative overflow-hidden group border border-gray-800 shadow-2xl"
//                                 >
//                                     {/* Animated Background Mesh/Glow effect */}
//                                     <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ffc000] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-700"></div>
//                                     <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#ffc000] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-700"></div>

//                                     <div className="relative z-10">
//                                         <h4 className="text-white font-bold mb-3 text-2xl tracking-tight">Envision your space.</h4>
//                                         <p className="text-gray-400 text-sm md:text-base mb-8 max-w-sm mx-auto leading-relaxed">
//                                             Consult with our lead architects to discuss layouts, materials, and timelines.
//                                         </p>

//                                         <a 
//                                             href={`tel:${phoneNumber}`}
//                                             className="inline-flex w-full sm:w-auto items-center justify-center gap-4 px-10 py-5 bg-[#ffc000] hover:bg-white text-[#1a1a1a] font-bold text-sm uppercase tracking-[3px] transition-all duration-300 rounded-xl shadow-[0_0_20px_rgba(255,192,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
//                                         >
//                                             <i className="fa-solid fa-phone-volume animate-pulse text-lg"></i>
//                                             Call Now
//                                         </a>
//                                     </div>
//                                 </motion.div>

//                             </div>
//                         </div>

//                     </div>
//                 </motion.div>
//             </div>

//         </main>
//     );
// };

// export default HouseTypeDetail;



import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { HOUSE_TYPES_DATA } from '../../constants/constants';
// import { HOUSE_TYPES_DATA } from '../constants/constants';

const HouseTypeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const phoneNumber = "+919876543210";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const houseData = HOUSE_TYPES_DATA.find((item) => item.id === id);

    if (!houseData) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
                <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Design Not Found</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="text-[#ffc000] font-bold uppercase tracking-[2px] hover:text-[#1a1a1a] transition-colors"
                >
                    <i className="fa-solid fa-arrow-left mr-2"></i> Go Back
                </button>
            </div>
        );
    }

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    // return (
    //     <main className="min-h-screen bg-[#fafafa] font-sans selection:bg-[#ffc000] selection:text-[#1a1a1a]">

    //         {/* 1. Immersive Hero Section */}
    //         <div className="relative w-full h-[60vh] md:h-[75vh] z-0 overflow-hidden">
    //             <motion.img
    //                 initial={{ scale: 1.05 }}
    //                 animate={{ scale: 1 }}
    //                 transition={{ duration: 1.5, ease: 'easeOut' }}
    //                 src={houseData.image}
    //                 alt={houseData.title}
    //                 className="w-full h-full object-cover"
    //             />
    //             <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/40"></div>

    //             <button
    //                 onClick={() => navigate(-1)}
    //                 className="absolute top-8 left-6 md:left-12 z-20 flex items-center gap-3 text-white font-bold uppercase tracking-[2px] text-xs md:text-sm hover:text-[#ffc000] transition-all bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10"
    //             >
    //                 <i className="fa-solid fa-arrow-left"></i> Portfolio
    //             </button>
    //         </div>

    //         {/* 2. Overlapping Content Container */}
    //         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 -mt-32 md:-mt-48 lg:-mt-56 pb-24">

    //             <motion.div
    //                 initial="hidden"
    //                 animate="visible"
    //                 variants={fadeUp}
    //                 className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden"
    //             >
    //                 {/* Top Section: Title & Highlights in the same box */}
    //                 <div className="p-8 md:p-12 lg:p-16 border-b border-gray-100">
    //                     <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

    //                         {/* Left Side: Title */}
    //                         <div className="max-w-3xl">
    //                             <div className="flex items-center gap-4 mb-6">
    //                                 <div className="w-12 h-[2px] bg-[#ffc000]"></div>
    //                                 <span className="text-[#1a1a1a] font-bold tracking-[4px] uppercase text-xs md:text-sm flex items-center gap-2">
    //                                     <i className={`${houseData.icon} text-[#ffc000] text-lg mr-1`}></i>
    //                                     {houseData.subtitle}
    //                                 </span>
    //                             </div>
    //                             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] tracking-tighter leading-[0.95]">
    //                                 {houseData.title}
    //                             </h1>
    //                         </div>

    //                         {/* Right Side: Minimalist Badge Highlights */}
    //                         <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
    //                             {houseData.keyHighlights.map((highlight, index) => (
    //                                 <span
    //                                     key={index}
    //                                     className="px-4 py-2 bg-[#fafafa] text-[#1a1a1a] text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md border border-gray-100 flex items-center gap-2"
    //                                 >
    //                                     <i className={`${highlight.icon} text-[#ffc000]`}></i>
    //                                     {highlight.text}
    //                                 </span>
    //                             ))}
    //                         </div>

    //                     </div>
    //                 </div>

    //                 {/* Bottom Section: Philosophy & Engineering */}
    //                 <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 lg:gap-24">

    //                     {/* Left: Philosophy */}
    //                     <motion.div
    //                         initial="hidden"
    //                         whileInView="visible"
    //                         viewport={{ once: true, margin: "-100px" }}
    //                         variants={fadeUp}
    //                         className="w-full lg:w-[55%]"
    //                     >
    //                         <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 flex items-center gap-4">
    //                             <span className="w-8 h-[2px] bg-[#ffc000] block"></span>
    //                             Philosophy
    //                         </h3>
    //                         <div className="prose prose-lg max-w-none text-gray-500 leading-loose">
    //                             <p className="first-letter:float-left first-letter:text-[#ffc000] first-letter:text-7xl md:first-letter:text-8xl first-letter:font-semibold first-letter:mr-4  first-letter:leading-none">
    //                                 {houseData.longDescription}
    //                             </p>
    //                         </div>
    //                     </motion.div>

    //                     {/* Who is this for? */}
    //                     <div className="mb-12">
    //                         <h3 className="text-xs font-black uppercase tracking-[4px] text-[#ffc000] mb-6">
    //                             Perfectly Suited For
    //                         </h3>
    //                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //                             {houseData.idealFor.map((item, index) => (
    //                                 <div key={index} className="flex items-center gap-4 group">
    //                                     <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:border-[#ffc000] transition-colors duration-300">
    //                                         <i className={`${item.icon} text-gray-400 group-hover:text-[#ffc000] transition-colors duration-300`}></i>
    //                                     </div>
    //                                     <span className="text-[#1a1a1a] text-sm font-bold tracking-wide">
    //                                         {item.text}
    //                                     </span>
    //                                 </div>
    //                             ))}
    //                         </div>
    //                     </div>

    //                     {/* Right: Engineering & Call to Action */}
    //                     <div className="w-full lg:w-[45%]">
    //                         <div className="sticky top-12">
    //                             <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 flex items-center gap-4">
    //                                 <span className="w-8 h-[2px] bg-[#ffc000] block"></span>
    //                                 Engineering
    //                             </h3>

    //                             <motion.div
    //                                 initial="hidden"
    //                                 whileInView="visible"
    //                                 viewport={{ once: true, margin: "-50px" }}
    //                                 variants={staggerContainer}
    //                                 className="flex flex-col gap-6"
    //                             >
    //                                 {houseData.features.map((feature, index) => (
    //                                     <motion.div
    //                                         key={index}
    //                                         variants={fadeUp}
    //                                         className="flex gap-5 group"
    //                                     >
    //                                         <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#fafafa] flex items-center justify-center border border-gray-100 group-hover:bg-[#ffc000] group-hover:rotate-6 transition-all duration-300">
    //                                             <i className={`${feature.icon} text-gray-400 group-hover:text-[#1a1a1a] text-lg transition-colors duration-300`}></i>
    //                                         </div>
    //                                         <div>
    //                                             <h4 className="text-[#1a1a1a] font-bold text-base mb-1">{feature.title}</h4>
    //                                             <p className="text-gray-500 text-sm leading-relaxed">
    //                                                 {feature.description}
    //                                             </p>
    //                                         </div>
    //                                     </motion.div>
    //                                 ))}
    //                             </motion.div>

    //                             {/* Premium CTA Block */}
    //                             <motion.div
    //                                 initial="hidden"
    //                                 whileInView="visible"
    //                                 viewport={{ once: true }}
    //                                 variants={fadeUp}
    //                                 className="mt-12 p-8 bg-[#1a1a1a] rounded-[2rem] text-center relative overflow-hidden group shadow-2xl"
    //                             >
    //                                 <div className="relative z-10">
    //                                     <h4 className="text-white font-bold mb-3 text-xl tracking-tight">Envision your space.</h4>
    //                                     <p className="text-gray-400 text-sm mb-8 leading-relaxed">
    //                                         Consult with our team to discuss abput plan, materials, and timelines.
    //                                     </p>

    //                                     <a
    //                                         href={`tel:${phoneNumber}`}
    //                                         className="inline-flex w-full items-center justify-center gap-3 py-4 bg-[#ffc000] hover:bg-white text-[#1a1a1a] font-bold text-sm uppercase tracking-[2px] transition-all duration-300 rounded-xl"
    //                                     >
    //                                         <i className="fa-solid fa-phone-volume animate-pulse"></i>
    //                                         Call Now
    //                                     </a>
    //                                 </div>
    //                             </motion.div>

    //                         </div>
    //                     </div>

    //                 </div>
    //             </motion.div>
    //         </div>

    //     </main>
    // );


    return  (
    <main className="min-h-screen bg-[#fafafa] font-sans selection:bg-[#ffc000] selection:text-[#1a1a1a]">

            {/* 1. Immersive Hero Section */}
            <div className="relative w-full h-[60vh] md:h-[75vh] z-0 overflow-hidden">
                <motion.img
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    src={houseData.image}
                    alt={houseData.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/40"></div>

                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-8 left-6 md:left-12 z-20 cursor-pointer flex items-center gap-3 text-white font-bold uppercase tracking-[2px] text-xs md:text-sm hover:text-[#ffc000] transition-all bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10"
                >
                    <i className="fa-solid fa-arrow-left"></i> Portfolio
                </button>
            </div>

            {/* 2. Overlapping Content Container */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 -mt-32 md:-mt-48 lg:-mt-56 pb-24">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden"
                >
                    {/* Top Section: Title & Highlights */}
                    <div className="p-8 md:p-12 lg:p-16 border-b border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

                            {/* Left Side: Title */}
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-4 sm:w-12 h-[2px] bg-[#ffc000]"></div>
                                    <span className="text-[#1a1a1a] font-bold tracking-[1px] sm:tracking-[4px] uppercase text-xs md:text-sm flex items-center gap-2">
                                        <i className={`${houseData.icon} text-[#ffc000] text-lg mr-1`}></i>
                                        {houseData.subtitle}
                                    </span>
                                </div>
                                <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] tracking-tighter leading-[0.95]">
                                    {houseData.title}
                                </h1>
                            </div>

                            {/* Right Side: Minimalist Badge Highlights */}
                            <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
                                {houseData.keyHighlights.map((highlight, index) => (
                                    <span
                                        key={index}
                                        className="px-2 sm:px-4 py-2 bg-[#fafafa] text-[#1a1a1a] text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md border border-gray-100 flex items-center gap-2"
                                    >
                                        <i className={`${highlight.icon} text-[#ffc000]`}></i>
                                        {highlight.text}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Bottom Section: 2-Column Layout */}
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* LEFT COLUMN: Philosophy & Perfectly Suited For */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                            className="w-full lg:w-[55%] flex flex-col gap-16"
                        >
                            {/* Philosophy Block */}
                            <div>
                                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 flex items-center gap-4">
                                    <span className="w-8 h-[2px] bg-[#ffc000] block"></span>
                                    Philosophy
                                </h3>
                                <div className="prose prose-lg max-w-none text-gray-500 sm:leading-loose">
                                    <p className="first-letter:float-left first-letter:text-[#ffc000] first-letter:text-7xl md:first-letter:text-8xl first-letter:font-semibold first-letter:mr-4 first-letter:leading-none">
                                        {houseData.longDescription}
                                    </p>
                                </div>
                            </div>

                            {/* Perfectly Suited For Block */}
                            <div>
                                <h3 className="text-sm font-bold text-[#ffc000] mb-1 sm:mb-6">
                                    Perfectly Suited For
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6">
                                    {houseData.idealFor.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 group bg-white p-3 rounded-xl border border-transparent hover:border-gray-100 transition-all duration-300 hover:shadow-sm">
                                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#fafafa] flex items-center justify-center border border-gray-100 group-hover:border-[#ffc000] transition-colors duration-300">
                                                <i className={`${item.icon} text-gray-400 group-hover:text-[#ffc000] text-lg transition-colors duration-300`}></i>
                                            </div>
                                            <span className="text-[#1a1a1a] text-sm font-bold tracking-wide">
                                                {item.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN: Engineering & Call to Action */}
                        <div className="w-full lg:w-[45%]">
                            <div className="sticky top-12">
                                
                                {/* Engineering Highlights */}
                                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 flex items-center gap-4">
                                    <span className="w-8 h-[2px] bg-[#ffc000] block"></span>
                                    Engineering
                                </h3>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={staggerContainer}
                                    className="flex flex-col gap-6"
                                >
                                    {houseData.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeUp}
                                            className="flex gap-5 group"
                                        >
                                            <div className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-[#fafafa] flex items-center justify-center border border-gray-100 group-hover:bg-[#ffc000] group-hover:rotate-6 transition-all duration-300">
                                                <i className={`${feature.icon} text-gray-400 group-hover:text-[#1a1a1a] text-lg transition-colors duration-300`}></i>
                                            </div>
                                            <div>
                                                <h4 className="text-[#1a1a1a] font-bold text-base mb-1">{feature.title}</h4>
                                                <p className="text-gray-500 text-sm sm:leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Premium CTA Block */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="mt-12 p-8 bg-[#1a1a1a] rounded-[2rem] text-center relative overflow-hidden group shadow-2xl"
                                >
                                    <div className="relative z-10">
                                        <h4 className="text-white font-bold mb-3 text-md sm:text-xl tracking-tight">Envision your space.</h4>
                                        <p className="text-gray-400 text-sm mb-8 sm:leading-relaxed">
                                            Consult with our team to discuss layout plans, materials, and expectations.
                                        </p>

                                        <a
                                            href={`tel:${phoneNumber}`}
                                            className="inline-flex w-full items-center justify-center gap-3 py-2 sm:py-4 bg-[#ffc000] hover:bg-white text-[#1a1a1a] font-bold text-sm uppercase tracking-[2px] transition-all duration-300 rounded-xl"
                                        >
                                            <i className="fa-solid fa-phone-volume animate-pulse"></i>
                                            Call Now
                                        </a>
                                    </div>
                                </motion.div>

                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>

        </main>

                                )

};

export default HouseTypeDetail;