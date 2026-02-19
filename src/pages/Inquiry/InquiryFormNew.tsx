// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import heroImage from '../../assets/images/vertical_living_hero_img.png';

// const InquiryFormNew: React.FC = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const formData = new FormData(e.currentTarget);
//     const actionUrl = "https://script.google.com/macros/s/AKfycbzHOjt3OivmNOJq0pUYQ9MzM2XENCubYpDVwiR4qKBh_2x63YNkqD0KuEoIoa2WJ5Q/exec";

//     try {
//       await fetch(actionUrl, { method: 'POST', body: formData });
//       setShowSuccess(true);
//       (e.target as HTMLFormElement).reset();
//       setTimeout(() => setShowSuccess(false), 3000);
//     } catch (error) {
//       alert("Submission failed. Please check your connection.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="w-full bg-white font-inter">
//       <div className="flex flex-col md:flex-row w-full min-h-[600px] md:min-h-[800px]">

//         {/* FIRST HALF: IMAGE (Hidden on Mobile) */}
//         <div className="hidden md:block md:w-1/2 relative overflow-hidden">
//           <img 
//             src={heroImage} 
//             alt="Vertical Living Interiors" 
//             className="absolute inset-0 w-full h-full object-cover z-0" 
//           />
//           <div className="absolute inset-0 bg-black/10 z-10"></div>
//         </div>

//         {/* SECOND HALF: FORM (Full Width on Mobile) */}
//         <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16 bg-[#fafafa]">
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full max-w-[550px]"
//           >
//             <div className="section-title mb-8">
//               <h2 className="text-[28px] font-[800] uppercase tracking-[2px] text-[#1a1a1a] text-left after:content-[''] after:block after:w-[50px] after:h-[4px] after:bg-[#ffc000] after:mt-2">
//                 Tell Us About Your Project
//               </h2>
//               <p className="text-[#666] text-[14px] mt-4 mb-8 text-left">
//                 Bring your vision to life with bespoke interior solutions.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Full Name */}
//               <div className="space-y-1">
//                 <label className="text-[10px] font-[700] uppercase tracking-[1.2px] text-[#444] block mb-[6px]">Your Full Name *</label>
//                 <input 
//                   type="text" 
//                   name="Full Name" 
//                   required 
//                   placeholder="Your answer"
//                   className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-[#ffc000] focus:border-l-[#ffc000] focus:bg-white px-3 outline-none transition-all text-[13px]"
//                 />
//               </div>

//               {/* Mobile Number */}
//               <div className="space-y-1">
//                 <label className="text-[10px] font-[700] uppercase tracking-[1.2px] text-[#444] block mb-[6px]">Your Mobile Number * (we will call to confirm your project details)</label>
//                 <input 
//                   type="tel" 
//                   name="Mobile Number" 
//                   required 
//                   maxLength={10}
//                   minLength={10}
//                   pattern="[0-9]{10,15}"
//                   placeholder="Your answer"
//                   className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-[#ffc000] focus:border-l-[#ffc000] focus:bg-white px-3 outline-none transition-all text-[13px]"
//                   onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''))}
//                 />
//               </div>

//               {/* Category */}
//               <div className="space-y-1">
//                 <label className="text-[10px] font-[700] uppercase tracking-[1.2px] text-[#444] block mb-[6px]">Residential or Commercial project? *</label>
//                 <select name="Project Category" required className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-[#ffc000] focus:border-l-[#ffc000] focus:bg-white px-3 text-[13px] outline-none appearance-none cursor-pointer">
//                   <option value="" disabled selected>Select an option</option>
//                   <option>Residential (Apartment / Villa)</option>
//                   <option>Commercial (Office / Cafe / Showroom)</option>
//                 </select>
//               </div>

//               {/* Property Type */}
//               <div className="space-y-1">
//                 <label className="text-[10px] font-[700] uppercase tracking-[1.2px] text-[#444] block mb-[6px]">What type of property is this project for? *</label>
//                 <select name="Property Type" required className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-[#ffc000] focus:border-l-[#ffc000] focus:bg-white px-3 text-[13px] outline-none appearance-none cursor-pointer">
//                   <option value="" disabled selected>Select property type</option>
//                   <option>3BHK Apartment (Residential)</option>
//                   <option>Villa / Independent House (Residential)</option>
//                   <option>Office space / Showroom / Hospital / Cafe (Commercial)</option>
//                 </select>
//               </div>

//               {/* Location */}
//               <div className="space-y-1">
//                 <label className="text-[10px] font-[700] uppercase tracking-[1.2px] text-[#444] block mb-[6px]">Which area is your project located in *</label>
//                 <select name="Location" required className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-[#ffc000] focus:border-l-[#ffc000] focus:bg-white px-3 text-[13px] outline-none appearance-none cursor-pointer">
//                   <option value="" disabled selected>Select Area</option>
//                   <option>Anna nagar</option>
//                   <option>Mogappair</option>
//                   <option>OMR</option>
//                   <option>ECR</option>
//                   <option>Adyar</option>
//                   <option>T Nagar</option>
//                   <option>Ambattur</option>
//                   <option>Other Chennai location</option>
//                 </select>
//               </div>

//               {/* Budget */}
//               <div className="space-y-1">
//                 <label className="text-[10px] font-[700] uppercase tracking-[1.2px] text-[#444] block mb-[6px]">Mention Your Budget *</label>
//                 <select name="Budget" required className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-[#ffc000] focus:border-l-[#ffc000] focus:bg-white px-3 text-[13px] outline-none appearance-none cursor-pointer">
//                   <option value="" disabled selected>Select Budget Range</option>
//                   <option>5 Lakhs - 8 lakhs</option>
//                   <option>9 lakhs - 12 lakhs</option>
//                   <option>12 lakhs - 16 lakhs</option>
//                   <option>20 lakhs above</option>
//                 </select>
//               </div>

//               {/* Timeline */}
//               <div className="space-y-1">
//                 <label className="text-[10px] font-[700] uppercase tracking-[1.2px] text-[#444] block mb-[6px]">When Do You Plan to Start the Project? *</label>
//                 <select name="Timeline" required className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-[#ffc000] focus:border-l-[#ffc000] focus:bg-white px-3 text-[13px] outline-none appearance-none cursor-pointer">
//                   <option value="" disabled selected>Select Timeline</option>
//                   <option>Immediate (0–30 days)</option>
//                   <option>1–3 months</option>
//                   <option>Just exploring</option>
//                 </select>
//               </div>

//               {/* Service Type */}
//               <div className="space-y-1">
//                 <label className="text-[10px] font-[700] uppercase tracking-[1.2px] text-[#444] block mb-[6px]">What kind of service are you looking for? *</label>
//                 <select name="Service Type" required className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-[#ffc000] focus:border-l-[#ffc000] focus:bg-white px-3 text-[13px] outline-none appearance-none cursor-pointer">
//                   <option value="" disabled selected>Select Service Type</option>
//                   <option>Design + Execution (Flexible Budget)</option>
//                   <option>Design Support + Execution (Fixed Budget)</option>
//                   <option>Execution only (Designs Ready)</option>
//                 </select>
//               </div>

//               <button 
//                 type="submit" 
//                 disabled={isSubmitting}
//                 className="w-full bg-[#1a1a1a] text-white font-[700] uppercase tracking-[2px] py-[12px] px-[40px] rounded-[10px] hover:bg-[#ffc000] hover:text-black transition-all duration-400 disabled:opacity-50 mt-[10px] shadow-lg active:scale-95"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit Inquiry"}
//               </button>

//               {showSuccess && (
//                 <p id="form-message" className="text-[#28a745] font-[700] text-center text-[14px] uppercase mt-4">
//                   Submitted! We will contact you soon.
//                 </p>
//               )}
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InquiryFormNew;

//  SECOND VERSION

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import heroImage from '../../assets/images/vertical_living_hero_img.png';

// const InquiryFormNew: React.FC = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const formData = new FormData(e.currentTarget);
//     const actionUrl = "https://script.google.com/macros/s/AKfycbzHOjt3OivmNOJq0pUYQ9MzM2XENCubYpDVwiR4qKBh_2x63YNkqD0KuEoIoa2WJ5Q/exec";

//     try {
//       await fetch(actionUrl, { method: 'POST', body: formData });
//       setShowSuccess(true);
//       (e.target as HTMLFormElement).reset();
//       setTimeout(() => setShowSuccess(false), 3000);
//     } catch (error) {
//       alert("Submission failed. Please check your connection.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Reusable Modern Select Wrapper to fix the "ugly" default look
//   const selectClass = "w-full h-[45px] bg-white border border-[#e1e1e1] border-l-[4px] border-l-[#eeeeee] focus:border-[#ffc000] focus:border-l-[#ffc000] px-4 text-[13px] outline-none cursor-pointer appearance-none transition-all hover:border-[#ffc000]";
//   const inputClass = "w-full h-[45px] bg-white border border-[#e1e1e1] border-l-[4px] border-l-[#eeeeee] focus:border-[#ffc000] focus:border-l-[#ffc000] px-4 text-[13px] outline-none transition-all hover:border-[#ffc000]";
//   const labelClass = "text-[10px] font-[700] uppercase tracking-[1.5px] text-[#444] block mb-2";

//   return (
//     <section id="contact" className="w-full bg-white font-inter">
//       <div className="flex flex-col md:flex-row w-full min-h-[650px] md:min-h-[850px]">

//         {/* FIRST HALF: IMAGE - Styled with a premium zoom effect */}
//         <div className="hidden md:block md:w-1/2 relative overflow-hidden group">
//           <motion.img 
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1.5 }}
//             src={heroImage} 
//             alt="Vertical Living Interiors" 
//             className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" 
//           />
//           <div className="absolute inset-0 bg-black/20 z-10"></div>
//           {/* Decorative Overlay for a modern look */}
//           <div className="absolute bottom-10 left-10 z-20 text-white border-l-4 border-[#ffc000] pl-6">
//              <h3 className="text-4xl font-bold uppercase tracking-widest">Crafting<br/>Spaces</h3>
//           </div>
//         </div>

//         {/* SECOND HALF: FORM - Modernized Spacing and Selects */}
//         <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-[#fafafa]">
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full max-w-[500px]"
//           >
//             <div className="mb-10">
//               <h2 className="text-[32px] font-[900] uppercase tracking-[3px] text-[#1a1a1a] text-left leading-none">
//                 Tell Us About Your Project
//               </h2>
//               <div className="w-16 h-[5px] bg-[#ffc000] mt-4 mb-4"></div>
//               <p className="text-[#888] text-[14px] font-medium tracking-wide">
//                 Bring your vision to life with bespoke interior solutions.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Full Name */}
//               <div className="group">
//                 <label className={labelClass}>Your Full Name *</label>
//                 <input type="text" name="Full Name" required placeholder="Your answer" className={inputClass} />
//               </div>

//               {/* Mobile Number */}
//               <div className="group">
//                 <label className={labelClass}>Your Mobile Number * (we will call to confirm)</label>
//                 <input 
//                   type="tel" name="Mobile Number" required maxLength={10} minLength={10} placeholder="10-digit mobile number"
//                   className={inputClass}
//                   onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''))}
//                 />
//               </div>

//               {/* Custom Select for Category */}
//               <div className="relative group">
//                 <label className={labelClass}>Residential or Commercial project? *</label>
//                 <div className="relative">
//                   <select name="Project Category" required className={selectClass}>
//                     <option value="" disabled selected>Select an option</option>
//                     <option>Residential (Apartment / Villa)</option>
//                     <option>Commercial (Office / Cafe / Showroom)</option>
//                   </select>
//                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#ffc000]">
//                     <i className="fa fa-chevron-down text-sm"></i>
//                   </div>
//                 </div>
//               </div>

//               {/* Grid for small desktop fields */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div className="relative group">
//                   <label className={labelClass}>Property Type *</label>
//                   <select name="Property Type" required className={selectClass}>
//                     <option value="" disabled selected>Select property type</option>
//                     <option>3BHK Apartment</option>
//                     <option>Villa / Independent House</option>
//                     <option>Commercial Space</option>
//                   </select>
//                   <i className="fa fa-chevron-down absolute right-4 bottom-[15px] text-xs text-[#ffc000] pointer-events-none"></i>
//                 </div>

//                 <div className="relative group">
//                   <label className={labelClass}>Budget *</label>
//                   <select name="Budget" required className={selectClass}>
//                     <option value="" disabled selected>Select Range</option>
//                     <option>5 Lakhs - 8 lakhs</option>
//                     <option>9 lakhs - 12 lakhs</option>
//                     <option>12 lakhs - 16 lakhs</option>
//                     <option>20 lakhs above</option>
//                   </select>
//                   <i className="fa fa-chevron-down absolute right-4 bottom-[15px] text-xs text-[#ffc000] pointer-events-none"></i>
//                 </div>
//               </div>

//               <div className="relative group">
//                 <label className={labelClass}>Which area is your project located in *</label>
//                 <select name="Location" required className={selectClass}>
//                   <option value="" disabled selected>Select Area</option>
//                   <option>Anna nagar</option>
//                   <option>Mogappair</option>
//                   <option>OMR</option>
//                   <option>ECR</option>
//                   <option>Adyar</option>
//                   <option>T Nagar</option>
//                   <option>Ambattur</option>
//                   <option>Other Chennai location</option>
//                 </select>
//                 <i className="fa fa-chevron-down absolute right-4 bottom-[15px] text-xs text-[#ffc000] pointer-events-none"></i>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                  <div className="relative group">
//                     <label className={labelClass}>Timeline *</label>
//                     <select name="Timeline" required className={selectClass}>
//                         <option value="" disabled selected>Select Timeline</option>
//                         <option>Immediate (0–30 days)</option>
//                         <option>1–3 months</option>
//                         <option>Just exploring</option>
//                     </select>
//                     <i className="fa fa-chevron-down absolute right-4 bottom-[15px] text-xs text-[#ffc000] pointer-events-none"></i>
//                  </div>
//                  <div className="relative group">
//                     <label className={labelClass}>Service Type *</label>
//                     <select name="Service Type" required className={selectClass}>
//                         <option value="" disabled selected>Select Service Type</option>
//                         <option>Design + Execution</option>
//                         <option>Design Support + Execution</option>
//                         <option>Execution only</option>
//                     </select>
//                     <i className="fa fa-chevron-down absolute right-4 bottom-[15px] text-xs text-[#ffc000] pointer-events-none"></i>
//                  </div>
//               </div>

//               <motion.button 
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit" 
//                 disabled={isSubmitting}
//                 className="w-full bg-[#1a1a1a] text-white font-[800] uppercase tracking-[3px] py-[15px] px-[40px] rounded-[4px] hover:bg-[#ffc000] hover:text-[#1a1a1a] transition-all duration-300 disabled:opacity-50 mt-4 shadow-xl flex items-center justify-center gap-3"
//               >
//                 {isSubmitting ? "Processing..." : "Submit Inquiry"}
//                 <i className="fa fa-paper-plane text-sm"></i>
//               </motion.button>

//               {showSuccess && (
//                 <motion.p 
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   className="text-[#28a745] font-[700] text-center text-[13px] uppercase mt-4 bg-green-50 py-3 border-l-4 border-[#28a745]"
//                 >
//                   Successfully submitted! We will contact you shortly.
//                 </motion.p>
//               )}
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InquiryFormNew;


// FOURTH VERSION

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import heroImage from '../../assets/images/vertical_living_hero_img.png';

// // Reusable Elegant Custom Select Component
// const ModernDropdown = ({ label, name, options, placeholder }: { label: string, name: string, options: string[], placeholder: string }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState("");

//   return (
//     <div className="relative w-full space-y-2">
//       <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">
//         {label}
//       </label>
//       <input type="hidden" name={name} value={selected} required />

//       <div 
//         onClick={() => setIsOpen(!isOpen)}
//         className={`w-full h-[50px] bg-white border-2 rounded-full px-5 flex items-center justify-between cursor-pointer transition-all duration-300 ${
//           isOpen ? 'border-[#ffc000] shadow-[0_0_15px_rgba(255,192,0,0.2)]' : 'border-[#eee] hover:border-[#ffc000]'
//         }`}
//       >
//         <span className={`text-[13px] ${selected ? 'text-black font-semibold' : 'text-gray-400'}`}>
//           {selected || placeholder}
//         </span>
//         <motion.i 
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           className="fa fa-chevron-down text-[#ffc000] text-xs"
//         />
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 5 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="absolute z-[100] w-full bg-white border border-[#eee] rounded-[20px] shadow-2xl overflow-hidden py-2"
//           >
//             {options.map((opt) => (
//               <div
//                 key={opt}
//                 onClick={() => { setSelected(opt); setIsOpen(false); }}
//                 className="px-5 py-3 text-[13px] hover:bg-[#ffc000] hover:text-black transition-colors cursor-pointer"
//               >
//                 {opt}
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const InquiryFormNew: React.FC = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   return (
//     <section id="contact" className="w-full bg-[#f9f9f9] py-16 md:py-24 font-inter">
//       <div className="container mx-auto px-4">
//         <div className="max-w-[1200px] mx-auto bg-white rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row border border-gray-50">

//           {/* Visual Content Side */}
//           <div className="hidden md:block md:w-1/2 relative group">
//             <img src={heroImage} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Interior" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//             <div className="absolute bottom-12 left-12 text-white">
//               <h3 className="text-5xl font-black uppercase leading-none tracking-tighter">
//                 Redefining<br /><span className="text-[#ffc000]">Living</span>
//               </h3>
//             </div>
//           </div>

//           {/* Form Content Side */}
//           <div className="w-full md:w-1/2 p-8 md:p-16">
//             <div className="mb-10 text-left">
//               <h2 className="text-[32px] font-black uppercase tracking-tight text-[#1a1a1a]">Get An Estimate</h2>
//               <div className="w-12 h-1.5 bg-[#ffc000] rounded-full mt-2"></div>
//               <p className="text-gray-400 text-sm mt-4 font-medium italic">Premium design consultation for your dream space.</p>
//             </div>

//             <form className="space-y-6">
//               {/* Modern Input Pattern */}
//               <div className="space-y-2 group">
//                 <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">Your Full Name *</label>
//                 <input 
//                   type="text" 
//                   name="Full Name"
//                   className="w-full h-[50px] bg-white border-2 border-[#eee] rounded-full px-6 text-[13px] outline-none transition-all focus:border-[#ffc000] focus:shadow-[0_0_15px_rgba(255,192,0,0.1)]"
//                   placeholder="e.g. John Doe"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">Mobile Number *</label>
//                 <input 
//                   type="tel" 
//                   name="Mobile Number"
//                   className="w-full h-[50px] bg-white border-2 border-[#eee] rounded-full px-6 text-[13px] outline-none transition-all focus:border-[#ffc000]"
//                   placeholder="+91 XXXXX XXXXX"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <ModernDropdown 
//                   label="Category *" 
//                   name="Project Category" 
//                   options={["Residential", "Commercial"]} 
//                   placeholder="Select Project" 
//                 />
//                 <ModernDropdown 
//                   label="Budget *" 
//                   name="Budget" 
//                   options={["5L - 8L", "9L - 12L", "12L - 16L", "20L+"]} 
//                   placeholder="Select Range" 
//                 />
//               </div>

//               <ModernDropdown 
//                 label="Location *" 
//                 name="Location" 
//                 options={["Anna Nagar", "OMR", "Adyar", "Ambattur", "Other"]} 
//                 placeholder="Where is your project?" 
//               />

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full bg-[#1a1a1a] text-white py-4 rounded-full font-bold uppercase tracking-[3px] text-sm mt-6 shadow-xl hover:bg-[#ffc000] hover:text-black transition-all duration-300"
//               >
//                 Submit Application
//               </motion.button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InquiryFormNew;


//  FIVTH VEFRSION


import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '../../assets/images/vertical_living_hero_img.png';

// Reusable Elegant Custom Select Component for a modern, neat look
const ModernDropdown = ({ label, name, options, placeholder }: { label: string, name: string, options: string[], placeholder: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");


    // 1. Create a reference to the dropdown container
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 2. Add the click-outside listener
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // Attach the listener to the document
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div ref={dropdownRef} className="relative w-full space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">
                {label}
            </label>
            <input type="hidden" name={name} value={selected} required />

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full h-[50px] bg-white border-2 rounded-full px-5 flex items-center justify-between cursor-pointer transition-all duration-300 ${isOpen ? 'border-[#ffc000] shadow-[0_0_15px_rgba(255,192,0,0.2)]' : 'border-[#eee] hover:border-[#ffc000]'
                    }`}
            >
                <span className={`text-[13px] ${selected ? 'text-black font-semibold' : 'text-gray-400'}`}>
                    {selected || placeholder}
                </span>
                <motion.i
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="fa fa-chevron-down text-[#ffc000] text-xs"
                />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 5 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-[100] w-full bg-white border border-[#eee] rounded-[20px] shadow-2xl overflow-hidden py-2"
                    >
                        {options.map((opt) => (
                            <div
                                key={opt}
                                onClick={() => { setSelected(opt); setIsOpen(false); }}
                                className="px-5 py-3 text-[13px] hover:bg-[#ffc000] hover:text-black transition-colors cursor-pointer"
                            >
                                {opt}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const InquiryFormNew: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);
        const actionUrl = "https://script.google.com/macros/s/AKfycbzHOjt3OivmNOJq0pUYQ9MzM2XENCubYpDVwiR4qKBh_2x63YNkqD0KuEoIoa2WJ5Q/exec";

        try {
            await fetch(actionUrl, { method: 'POST', body: formData });
            setShowSuccess(true);
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setShowSuccess(false), 4000);
        } catch (error) {
            alert("Submission failed. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // bg-[#f9f9f9]
    return (
        <section id="contact" className="w-full bg-white py-16 md:py-24 font-inter">
            <div className="container mx-auto px-4">
                {/* <div className="max-w-[1200px] mx-auto bg-white rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row border border-gray-50"> */}
                <div className="max-w-[1200px]  mx-auto bg-white rounded-[40px] overflow-visible shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row border border-gray-50">

                    {/* IMAGE SIDE */}
                    {/* <div className="hidden md:block md:w-1/2 relative group">
            <img src={heroImage} className="absolute inset-0 w-full h-full object-cover" alt="Interior" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12 text-white border-l-4 border-[#ffc000] pl-6">
              <h3 className="text-4xl font-black uppercase tracking-widest leading-none">
                Crafting<br /><span className="text-[#ffc000]">Excellence</span>
              </h3>
            </div>
          </div> */}

                    {/* IMAGE SIDE - Added rounding and height fixes */}
                    <div className="hidden md:block md:w-1/2 relative group rounded-l-[40px] overflow-hidden min-h-[600px] md:min-h-[850px]">
                        <img
                            src={heroImage}
                            className="absolute inset-0 w-full h-full object-cover rounded-l-[40px]"
                            alt="Interior"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-12 left-12 text-white border-l-4 border-[#ffc000] pl-6">
                            <h3 className="text-4xl font-black uppercase tracking-widest leading-none">
                                Crafting<br /><span className="text-[#ffc000]">Excellence</span>
                            </h3>
                        </div>
                    </div>

                    {/* FORM SIDE */}
                    <div className="w-full md:w-1/2 p-8 md:p-14 relative">

                        {/* RESPONSIVE Top Right Corner Accent */}
                        <div className="absolute top-0 right-0 
                    w-16 h-16          /* Smaller on mobile */
                    md:w-24 md:h-24    /* Original size on desktop */
                    bg-[#ffc000] 
                    transition-transform duration-500 hover:scale-110 
                    z-0"               /* Ensures it stays behind text */
                            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}>
                        </div>


                        <div className="mb-10 text-left">
                            <h2 className="text-[20px] md:text-[25px] lg:text-[30px] font-black uppercase tracking-tight text-[#1a1a1a]">Tell Us About Your Project</h2>
                            <div className="w-12 h-1.5 bg-[#ffc000] rounded-full mt-2"></div>
                            <p className="text-gray-400 text-[14px] mt-4 font-medium tracking-wide">Bring your vision to life with bespoke interior solutions.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">Your Full Name *</label>
                                <input
                                    type="text" name="Full Name" required placeholder="Your answer"
                                    className="w-full h-[50px] bg-white border-2 border-[#eee] rounded-full px-6 text-[13px] outline-none transition-all focus:border-[#ffc000] focus:shadow-[0_0_15px_rgba(255,192,0,0.1)]"
                                />
                            </div>

                            {/* Mobile Number */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">Your Mobile Number * (we will call to confirm your project details)</label>
                                <input
                                    type="tel" name="Mobile Number" required maxLength={10} minLength={10} placeholder="10-digit mobile number"
                                    className="w-full h-[50px] bg-white border-2 border-[#eee] rounded-full px-6 text-[13px] outline-none transition-all focus:border-[#ffc000]"
                                    onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''))}
                                />
                            </div>

                            {/* Project Category */}
                            <ModernDropdown
                                label="Residential or Commercial project? *"
                                name="Project Category"
                                options={["Residential (Apartment / Villa)", "Commercial (Office / Cafe / Showroom)"]}
                                placeholder="Select an option"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Property Type */}
                                <ModernDropdown
                                    label="What type of property is this project for? *"
                                    name="Property Type"
                                    options={["3BHK Apartment (Residential)", "Villa / Independent House (Residential)", "Office space / Showroom / Hospital / Cafe (Commercial)"]}
                                    placeholder="Select property type"
                                />
                                {/* Budget */}
                                <ModernDropdown
                                    label="Mention Your Budget *"
                                    name="Budget"
                                    options={["5 Lakhs - 8 lakhs", "9 lakhs - 12 lakhs", "12 lakhs - 16 lakhs", "20 lakhs above"]}
                                    placeholder="Select Budget Range"
                                />
                            </div>

                            {/* Location */}
                            <ModernDropdown
                                label="Which area is your project located in *"
                                name="Location"
                                options={["Anna nagar", "Mogappair", "OMR", "ECR", "Adyar", "T Nagar", "Ambattur", "Other Chennai location"]}
                                placeholder="Select Area"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Timeline */}
                                <ModernDropdown
                                    label="When Do You Plan to Start the Project? *"
                                    name="Timeline"
                                    options={["Immediate (0–30 days)", "1–3 months", "Just exploring"]}
                                    placeholder="Select Timeline"
                                />
                                {/* Service Type */}
                                <ModernDropdown
                                    label="What kind of service are you looking for? *"
                                    name="Service Type"
                                    options={["Design + Execution (Flexible Budget)", "Design Support + Execution (Fixed Budget)", "Execution only (Designs Ready)"]}
                                    placeholder="Select Service Type"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                                className="w-full bg-[#1a1a1a] cursor-pointer text-white py-4 rounded-full font-extrabold uppercase tracking-[3px] text-sm mt-4 shadow-xl hover:bg-[#ffc000] hover:text-black transition-all duration-300 disabled:opacity-50"
                            >
                                {isSubmitting ? "Processing..." : "Submit Inquiry"}
                            </motion.button>

                            {showSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="bg-green-50 text-[#28a745] font-bold text-center text-xs uppercase p-4 rounded-2xl border-l-4 border-[#28a745]"
                                >
                                    Information submitted! We will contact you soon.
                                </motion.div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InquiryFormNew;