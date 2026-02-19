// import { motion } from 'framer-motion';

// const sopSteps = [
//   { title: "Consultation", desc: "Talk to our Interior Designer & Get an Estimate" },
//   { title: "Design & Approval", desc: "Detailed Drawing and Final Approval" },
//   { title: "Production", desc: "Crafting at Our Specialized Factories" },
//   { title: "Execution", desc: "Material Delivery & On-site Execution" },
//   { title: "Handover", desc: "On Time Project Hand Over" }
// ];

// export const SOPFlow = () => (
//   <section className="py-20 bg-white overflow-hidden">
//     <div className="container mx-auto px-4">
//       <h2 className="text-center text-3xl font-black uppercase mb-16 tracking-tighter">
//         Our <span className="text-[#ffc000]">Process</span>
//       </h2>
//       <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
//         {/* Connection Line (Desktop) */}
//         <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#eee] z-0" />
        
//         {sopSteps.map((step, idx) => (
//           <motion.div 
//             key={idx}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.1 }}
//             className="relative z-10 flex flex-col items-center text-center md:w-1/5"
//           >
//             <div className="w-24 h-24 rounded-full bg-[#ffc000] flex items-center justify-center shadow-lg mb-6 border-4 border-white">
//                <span className="text-2xl font-bold">0{idx + 1}</span>
//             </div>
//             <h3 className="font-bold uppercase text-sm mb-2">{step.title}</h3>
//             <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );


//  SECOND VERSION

// import { motion, useScroll, useSpring } from 'framer-motion';
// import { useRef } from 'react';

// const sopSteps = [
//   { title: "Consultation", desc: "Talk to our Interior Designer & Get an Estimate", icon: "fa-comments" },
//   { title: "Design & Approval", desc: "Detailed Drawing and Final Approval", icon: "fa-pencil-ruler" },
//   { title: "Production", desc: "Crafting at Our Specialized Factories", icon: "fa-industry" },
//   { title: "Execution", desc: "Material Delivery & On-site Execution", icon: "fa-truck-loading" },
//   { title: "Handover", desc: "On Time Project Hand Over", icon: "fa-key" }
// ];

// export const SOPFlow = () => {
//   const containerRef = useRef(null);
  
//   // Create a scroll-linked animation for the progress line
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"]
//   });

//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <section ref={containerRef} className="py-24 bg-white overflow-hidden font-inter">
//       <div className="container mx-auto px-4">
//         <div className="mb-20 text-center">
//           <h2 className="text-4xl font-[900] uppercase tracking-tighter text-[#1a1a1a]">
//             Our <span className="text-[#ffc000]">Process</span>
//           </h2>
//           <div className="w-16 h-1.5 bg-[#ffc000] mx-auto mt-4 rounded-full"></div>
//         </div>

//         <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
          
//           {/* Animated Connection Line (Desktop Only) */}
//           <div className="hidden md:block absolute top-14 left-0 w-full h-[3px] bg-[#f0f0f0] z-0">
//             <motion.div 
//               style={{ scaleX }}
//               className="absolute top-0 left-0 w-full h-full bg-[#ffc000] origin-left"
//             />
//           </div>
          
//           {sopSteps.map((step, idx) => (
//             <motion.div 
//               key={idx}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5, delay: idx * 0.2 }}
//               className="relative z-10 flex flex-col items-center text-center md:w-1/5 group"
//             >
//               {/* Illustration Circle */}
//               <div className="w-28 h-28 rounded-[35%] bg-white border-2 border-[#f0f0f0] flex items-center justify-center shadow-sm mb-8 transition-all duration-500 group-hover:border-[#ffc000] group-hover:shadow-[0_10px_30px_rgba(255,192,0,0.2)]">
//                 <motion.div
//                   whileHover={{ rotate: [0, -10, 10, 0] }}
//                   className="w-20 h-20 rounded-[30%] bg-[#fafafa] flex items-center justify-center text-[#1a1a1a] group-hover:bg-[#ffc000] transition-colors duration-500"
//                 >
//                   <i className={`fa ${step.icon} text-3xl`}></i>
//                 </motion.div>
//               </div>

//               {/* Text Content */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: (idx * 0.2) + 0.3 }}
//               >
//                 <h3 className="font-[800] uppercase text-[13px] tracking-[2px] mb-3 text-[#1a1a1a]">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-400 text-[11px] leading-[1.8] font-medium max-w-[150px] mx-auto uppercase tracking-wide">
//                   {step.desc}
//                 </p>
//               </motion.div>

//               {/* Step indicator for mobile */}
//               <div className="md:hidden mt-4 text-[10px] font-bold text-[#ffc000] uppercase tracking-widest">
//                 Step 0{idx + 1}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };




//  THIRD VERSION

// import { motion, useScroll, useSpring } from 'framer-motion';
// import { useRef } from 'react';

// const sopSteps = [
//   { 
//     title: "Consultation", 
//     desc: "Talk to our Interior Designer & Get an Estimate", 
//     icon: (
//       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//       </svg>
//     )
//   },
//   { 
//     title: "Design", 
//     desc: "Detailed Drawing and Final Approval", 
//     icon: (
//       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//       </svg>
//     )
//   },
//   { 
//     title: "Production", 
//     desc: "Crafting at Our Specialized Factories", 
//     icon: (
//       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//       </svg>
//     )
//   },
//   { 
//     title: "Execution", 
//     desc: "Material Delivery & On-site Execution", 
//     icon: (
//       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
//         <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" />
//       </svg>
//     )
//   },
//   { 
//     title: "Handover", 
//     desc: "On Time Project Hand Over", 
//     icon: (
//       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
//       </svg>
//     )
//   }
// ];

// export const SOPFlow = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"]
//   });

//   const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

//   return (
//     <section ref={containerRef} className="py-24 bg-white font-inter">
//       <div className="container mx-auto px-4">
//         <div className="mb-24 text-center">
//           <h2 className="text-[32px] font-[900] uppercase tracking-tighter text-[#1a1a1a]">
//             Our <span className="text-[#ffc000]">Process</span>
//           </h2>
//           <div className="w-16 h-2 bg-[#ffc000] mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* Mobile Scroll Hint */}
//         <div className="md:hidden text-center text-[10px] text-gray-400 uppercase tracking-widest mb-6 animate-pulse">
//            Swipe to explore our journey →
//         </div>

//         {/* Single Row Container */}
//         <div className="relative overflow-x-auto pb-10 scrollbar-hide md:overflow-visible">
//           <div className="flex flex-row justify-between items-start min-w-[900px] md:min-w-full relative px-10">
            
//             {/* Animated Connection Line */}
//             <div className="absolute top-16 left-0 w-full h-[4px] bg-[#f0f0f0] z-0">
//               <motion.div 
//                 style={{ scaleX }}
//                 className="absolute top-0 left-0 w-full h-full bg-[#ffc000] origin-left shadow-[0_0_15px_rgba(255,192,0,0.5)]"
//               />
//             </div>
            
//             {sopSteps.map((step, idx) => (
//               <motion.div 
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: idx * 0.2 }}
//                 className="relative z-10 flex flex-col items-center text-center w-[200px] group"
//               >
//                 {/* Large SVG Illustration Bubble */}
//                 <div className="w-32 h-32 rounded-full bg-white border-4 border-[#f0f0f0] flex items-center justify-center shadow-lg mb-8 transition-all duration-500 group-hover:border-[#ffc000] group-hover:scale-110">
//                   <div className="w-24 h-24 rounded-full bg-[#fafafa] flex items-center justify-center text-[#1a1a1a] group-hover:bg-[#ffc000] transition-colors duration-500 shadow-inner">
//                     {step.icon}
//                   </div>
//                 </div>

//                 {/* Content Block */}
//                 <h3 className="font-[900] uppercase text-[14px] tracking-[2px] mb-3 text-[#1a1a1a] px-2">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-400 text-[11px] leading-[1.6] font-semibold uppercase tracking-wide max-w-[160px]">
//                   {step.desc}
//                 </p>

//                 {/* Vertical Fill Progress (Mobile Indicator) */}
//                 <div className="mt-6 flex flex-col items-center">
//                    <div className="text-[10px] font-black text-[#ffc000]">0{idx + 1}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



//  FOURTH VERSION (selected pre final)

import { motion } from 'framer-motion';

const sopSteps = [
  { 
    title: "Consultation", 
    desc: "Talk to our Interior Designer & Get an Estimate", 
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  { 
    title: "Design", 
    desc: "Detailed Drawing and Final Approval", 
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  },
  { 
    title: "Production", 
    desc: "Crafting at Our Specialized Factories", 
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    title: "Execution", 
    desc: "Material Delivery & On-site Execution", 
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" />
      </svg>
    )
  },
  { 
    title: "Handover", 
    desc: "On Time Project Hand Over", 
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    )
  }
];

export const SOPFlow = () => {
  return (
    <section className="py-10 bg-white font-inter">
      <div className="container mx-auto px-4">
        <div className="mb-24 text-center">
          <h2 className="text-2xl md:text-4xl font-[500] uppercase tracking-tighter text-[#1a1a1a]">
            Our <span className="text-[#ffc000]">Process</span>
          </h2>
          <div className="w-26 h-1.5 bg-[#ffc000] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Single Row Container with Horizontal Scroll on Mobile */}
        <div className="relative overflow-x-auto pb-10 scrollbar-hide md:overflow-visible">
          <div className="flex flex-row justify-between items-start min-w-[1000px] md:min-w-full relative px-10">
            
            {/* PROGRESS LINE: Fills with #ffc000 when scrolled into view */}
            <div className="absolute top-16 left-0 w-full h-[4px] bg-[#f0f0f0] z-0">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full bg-[#ffc000] origin-left shadow-[0_0_15px_rgba(255,192,0,0.6)]"
              />
            </div>
            
            {sopSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center w-[200px] group">
                
                {/* SVG ILLUSTRATION BUBBLE: Fills yellow automatically */}
                <motion.div 
                  initial={{ backgroundColor: "#ffffff", borderColor: "#f0f0f0" }}
                  whileInView={{ backgroundColor: "#ffc000", borderColor: "#ffc000" }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5, delay: idx * 0.4 }}
                  className="w-32 h-32 rounded-full border-4 flex items-center justify-center shadow-lg mb-8 relative"
                >
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-black">
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1a1a1a] text-[#ffc000] rounded-full flex items-center justify-center text-[10px] font-black border-2 border-white">
                    0{idx + 1}
                  </div> */}
                </motion.div>

                {/* TEXT CONTENT */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.4 + 0.2 }}
                >
                  <h3 className="font-[900] uppercase text-[14px] tracking-[2px] mb-3 text-[#1a1a1a]">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-[11px] leading-[1.6] font-semibold uppercase tracking-wide max-w-[160px] mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};