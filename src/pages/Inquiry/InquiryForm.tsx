// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import heroImage from '../../assets/images/vertical_living_hero_img.png';

// const InquiryForm: React.FC = () => {
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
//     <section className="bg-gradient-to-br from-[#fcfcfc] to-[#f5f5f5] py-12 md:py-24 font-inter">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-6xl mx-auto bg-white flex flex-col md:flex-row rounded-[20px] overflow-hidden shadow-2xl border border-gray-100 border-t-4 border-t-brandYellow"
//         >
//           {/* Image Side - Hidden on small mobile, visible on tablet+ */}
//           <div className="hidden md:block md:w-5/12">
//             <img 
//               src={heroImage} 
//               alt="Vertical Living Interiors" 
//               className="w-full h-full object-cover" 
//             />
//           </div>

//           {/* Form Side */}
//           <div className="w-full md:w-7/12 p-6 md:p-12">
//             <div className="mb-8">
//               <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-gray-900 text-left">
//                 Tell Us About Your Project
//               </h2>
//               <div className="w-12 h-1 bg-brandYellow my-3"></div>
//               <p className="text-gray-500 text-sm">
//                 Bring your vision to life with bespoke interior solutions.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="space-y-1">
//                 <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block">Your Full Name *</label>
//                 <input 
//                   type="text" 
//                   name="Full Name" 
//                   required 
//                   placeholder="Your answer"
//                   className="w-full h-11 bg-gray-50 border border-gray-200 border-l-4 border-l-gray-200 focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-4 py-2 outline-none transition-all text-sm"
//                 />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block">Mobile Number *</label>
//                 <input 
//                   type="tel" 
//                   name="Mobile Number" 
//                   required 
//                   maxLength={10}
//                   pattern="[0-9]{10}"
//                   placeholder="10-digit mobile number"
//                   className="w-full h-11 bg-gray-50 border border-gray-200 border-l-4 border-l-gray-200 focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-4 py-2 outline-none transition-all text-sm"
//                   onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''))}
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-1">
//                   <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block">Project Category *</label>
//                   <select name="Project Category" required className="w-full h-11 bg-gray-50 border border-gray-200 border-l-4 border-l-gray-200 focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-3 text-sm outline-none">
//                     <option value="" disabled selected>Select option</option>
//                     <option>Residential</option>
//                     <option>Commercial</option>
//                   </select>
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block">Budget *</label>
//                   <select name="Budget" required className="w-full h-11 bg-gray-50 border border-gray-200 border-l-4 border-l-gray-200 focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-3 text-sm outline-none">
//                     <option value="" disabled selected>Select Range</option>
//                     <option>5L - 8L</option>
//                     <option>9L - 12L</option>
//                     <option>12L - 16L</option>
//                     <option>20L+</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block">Location *</label>
//                 <select name="Location" required className="w-full h-11 bg-gray-50 border border-gray-200 border-l-4 border-l-gray-200 focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-3 text-sm outline-none">
//                   <option value="" disabled selected>Select Area</option>
//                   <option>Anna Nagar</option>
//                   <option>OMR</option>
//                   <option>Adyar</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <button 
//                 type="submit" 
//                 disabled={isSubmitting}
//                 className="w-full bg-gray-900 text-white font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-brandYellow hover:text-black transition-all disabled:opacity-50 mt-4 shadow-lg active:scale-95"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit Inquiry"}
//               </button>

//               {showSuccess && (
//                 <p className="text-green-600 font-bold text-center text-xs uppercase mt-4 animate-bounce">
//                   Information submitted! We will contact you soon.
//                 </p>
//               )}
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default InquiryForm;




// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import heroImage from '../../assets/images/vertical_living_hero_img.png';

// const InquiryForm: React.FC = () => {
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
//     <section className="bg-gradient-to-br from-[#fcfcfc] to-[#f5f5f5] py-[100px] font-inter">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.2, delay: 0.2 }}
//           className="max-w-[1140px] mx-auto bg-white flex flex-col md:flex-row rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#f1f1f1] border-t-[5px] border-t-brandYellow"
//         >
//           {/* Exact Form-Image-Side */}
//           <div className="hidden md:block md:w-1/2">
//             <img 
//               src={heroImage} 
//               alt="Vertical Living Interiors" 
//               className="w-full h-full object-cover" 
//             />
//           </div>

//           {/* Exact Form-Content-Side */}
//           <div className="w-full md:w-[60%] p-10 md:p-[40px]">
//             <div className="section-title mb-8">
//               <h2 className="text-[28px] font-[800] uppercase tracking-[2px] text-[#1a1a1a] text-left after:content-[''] after:block after:w-[50px] after:h-[4px] after:bg-brandYellow after:mt-2">
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
//                   className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-3 outline-none transition-all text-[13px]"
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
//                   className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-3 outline-none transition-all text-[13px]"
//                   onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''))}
//                 />
//               </div>

//               {/* Category */}
//               <div className="space-y-1">
//                 <label className="text-[10px] font-[700] uppercase tracking-[1.2px] text-[#444] block mb-[6px]">Residential or Commercial project? *</label>
//                 <select name="Project Category" required className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-3 text-[13px] outline-none appearance-none cursor-pointer">
//                   <option value="" disabled selected>Select an option</option>
//                   <option>Residential (Apartment / Villa)</option>
//                   <option>Commercial (Office / Cafe / Showroom)</option>
//                 </select>
//               </div>

//               {/* Property Type */}
//               <div className="space-y-1">
//                 <label className="text-[10px] font-[700] uppercase tracking-[1.2px] text-[#444] block mb-[6px]">What type of property is this project for? *</label>
//                 <select name="Property Type" required className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-3 text-[13px] outline-none appearance-none cursor-pointer">
//                   <option value="" disabled selected>Select property type</option>
//                   <option>3BHK Apartment (Residential)</option>
//                   <option>Villa / Independent House (Residential)</option>
//                   <option>Office space / Showroom / Hospital / Cafe (Commercial)</option>
//                 </select>
//               </div>

//               {/* Location */}
//               <div className="space-y-1">
//                 <label className="text-[10px] font-[700] uppercase tracking-[1.2px] text-[#444] block mb-[6px]">Which area is your project located in *</label>
//                 <select name="Location" required className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-3 text-[13px] outline-none appearance-none cursor-pointer">
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
//                 <select name="Budget" required className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-3 text-[13px] outline-none appearance-none cursor-pointer">
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
//                 <select name="Timeline" required className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-3 text-[13px] outline-none appearance-none cursor-pointer">
//                   <option value="" disabled selected>Select Timeline</option>
//                   <option>Immediate (0–30 days)</option>
//                   <option>1–3 months</option>
//                   <option>Just exploring</option>
//                 </select>
//               </div>

//               {/* Service Type */}
//               <div className="space-y-1">
//                 <label className="text-[10px] font-[700] uppercase tracking-[1.2px] text-[#444] block mb-[6px]">What kind of service are you looking for? *</label>
//                 <select name="Service Type" required className="w-full h-[42px] bg-[#fafafa] border border-[#e1e1e1] border-l-[3px] border-l-[#eeeeee] focus:border-brandYellow focus:border-l-brandYellow focus:bg-white px-3 text-[13px] outline-none appearance-none cursor-pointer">
//                   <option value="" disabled selected>Select Service Type</option>
//                   <option>Design + Execution (Flexible Budget)</option>
//                   <option>Design Support + Execution (Fixed Budget)</option>
//                   <option>Execution only (Designs Ready)</option>
//                 </select>
//               </div>

//               <button 
//                 type="submit" 
//                 disabled={isSubmitting}
//                 className="w-full bg-[#1a1a1a] text-white font-[700] uppercase tracking-[2px] py-[12px] px-[40px] rounded-[10px] hover:bg-brandYellow hover:text-black transition-all duration-400 disabled:opacity-50 mt-[10px] shadow-lg active:scale-95"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit"}
//               </button>

//               {showSuccess && (
//                 <p id="form-message" className="text-[#28a745] font-[700] text-center text-[14px] uppercase mt-4">
//                   Information submitted! We will contact you soon.
//                 </p>
//               )}
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default InquiryForm; 


import InquiryFormNew from './InquiryFormNew'

const InquiryForm = () => {
  return (
    <div>

        <InquiryFormNew/>
    </div>
  )
}

export default InquiryForm