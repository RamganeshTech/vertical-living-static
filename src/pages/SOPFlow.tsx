

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
// 

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const sopSteps = [
  { 
    title: "Consultation", 
    desc: "Talk to our Interior Designer & Get an Estimate", 
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  { 
    title: "Design", 
    desc: "Detailed Drawing and Final Approval", 
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  },
  { 
    title: "Production", 
    desc: "Crafting at Our Specialized Factories", 
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    title: "Execution", 
    desc: "Material Delivery & On-site Execution", 
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" />
      </svg>
    )
  },
  { 
    title: "Handover", 
    desc: "On Time Project Hand Over", 
    icon: (
      <svg className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    )
  }
];

const ArrowCurve = ({ direction }: { direction: 'left' | 'right' }) => {
  const isRight = direction === 'right';
  return (
    // overflow: 'visible' ensures the arrowheads don't get clipped at the edges
    <svg className="w-full h-full drop-shadow-md" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
      {/* Dashed Connecting Line */}
      <motion.path 
         initial={{ pathLength: 0 }} 
         whileInView={{ pathLength: 1 }} 
         viewport={{ once: true, margin: "-20% 0px" }}
         transition={{ duration: 1.2, ease: "easeInOut" }}
         // Starts at top center of current icon, curves to top center of next icon
         d={isRight ? "M 0,0 C 0,50 100,50 100,100" : "M 100,0 C 100,50 0,50 0,100"} 
         fill="none" 
         stroke="#ffc000" 
         strokeWidth="3" 
         strokeDasharray="6 6" 
      />
      {/* Solid Arrowhead */}
      <motion.path 
         initial={{ opacity: 0 }} 
         whileInView={{ opacity: 1 }} 
         viewport={{ once: true, margin: "-20% 0px" }}
         transition={{ delay: 1.1, duration: 0.3 }}
         d={isRight ? "M 90,90 L 100,100 L 110,90" : "M -10,90 L 0,100 L 10,90"} 
         fill="none" 
         stroke="#ffc000" 
         strokeWidth="4"
         strokeLinecap="round"
         strokeLinejoin="round"
      />
    </svg>
  )
}

// --- REUSABLE ICON BLOCK ---
const IconBlock = ({ step, idx }: { step: any, idx: number }) => (
  <div className="flex flex-col items-center group relative z-10 bg-white rounded-full p-2">
    <div className="text-[12px] md:text-[14px] font-black text-[#ffc000] mb-3 tracking-[3px] uppercase">
      Step 0{idx + 1}
    </div>
    <motion.div 
      variants={{
        hidden: { borderColor: "#f0f0f0", scale: 0.9 },
        visible: { borderColor: "#ffc000", scale: 1, transition: { duration: 0.5 } }
      }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20% 0px" }}
      className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full border-4 md:border-8 flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-105"
    >
      <motion.div 
        variants={{
          hidden: { backgroundColor: "#fafafa", color: "#1a1a1a" },
          visible: { backgroundColor: "#ffc000", color: "#1a1a1a", transition: { duration: 0.5, delay: 0.2 } }
        }}
        className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center shadow-inner transition-colors duration-500 hover:bg-[#ffc000]"
      >
        {step.icon}
      </motion.div>
    </motion.div>
  </div>
);

// --- REUSABLE TEXT BLOCK ---
const TextBlock = ({ step }: { step: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20% 0px" }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="bg-white px-6 md:px-10 py-6 rounded-3xl border border-gray-50 max-w-[400px] text-center relative z-10"
  >
    <h3 className="font-[900] uppercase text-[18px] md:text-[22px] tracking-[2px] mb-3 text-[#1a1a1a]">
      {step.title}
    </h3>
    <p className="text-gray-400 text-[13px] md:text-[15px] leading-[1.6] font-semibold uppercase tracking-wide">
      {step.desc}
    </p>
  </motion.div>
);



type SOPFlowtype = {
  showLink?: boolean
}

// export const SOPFlow = () => {
export const SOPFlow: React.FC<SOPFlowtype> = ({ showLink }) => {

  const navigate = useNavigate()


  return (
    <section className="py-24 bg-white font-inter overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="mb-20 md:mb-32 text-center">
           <h2 onClick={() => navigate('/process')} className="text-3xl cursor-pointer flex items-center justify-center gap-3 md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
           Our <span className="text-[#ffc000]"> Process</span>
             {showLink &&  <i className="fa-solid fa-link text-xl md:text-2xl text-[#ffc000] mt-1 group-hover:scale-110 transition-transform"></i>}
           </h2>
          <div className="w-16 md:w-24 h-2 md:h-3 bg-[#ffc000] mx-auto mt-4 md:mt-6 rounded-full"></div>
        </div>

        {/* ZIG-ZAG TIMELINE CONTAINER 
          Widens to 5xl on desktop to give the left/right layout room to breathe.
        */}
      {/* Steps Wrapper */}
          <div className="flex flex-col gap-16 md:gap-24 relative z-10 w-full">
            {sopSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isLast = idx === sopSteps.length - 1;

              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center w-full pb-20 md:pb-32">
                  
                  {/* --- DESKTOP ANIMATED ARROW --- */}
                  {/* FIX: Changed -z-10 to z-0 so it sits above the background but below the icons */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-[50%] w-[50%] h-[100%] left-[25%] z-0 pointer-events-none">
                      <ArrowCurve direction={isEven ? 'right' : 'left'} />
                    </div>
                  )}

                  {/* --- MOBILE ANIMATED LINE --- */}
                  {!isLast && (
                    <div className="md:hidden absolute top-[160px] left-1/2 w-[3px] h-[calc(100%-120px)] -translate-x-1/2 z-0 pointer-events-none">
                       <motion.div 
                         initial={{ scaleY: 0 }} 
                         whileInView={{ scaleY: 1 }} 
                         viewport={{ once: true, margin: "-20% 0px" }}
                         transition={{ duration: 0.8 }}
                         className="w-full h-full bg-[#ffc000] origin-top rounded-full"
                       />
                    </div>
                  )}

                  {/* --- LEFT COLUMN --- */}
                  <div className={`w-full md:w-1/2 flex justify-center z-10 ${!isEven ? 'order-2 md:order-1 mt-6 md:mt-0' : 'order-1'}`}>
                    {isEven ? <IconBlock step={step} idx={idx} /> : <TextBlock step={step} />}
                  </div>

                  {/* --- RIGHT COLUMN --- */}
                  <div className={`w-full md:w-1/2 flex justify-center z-10 ${!isEven ? 'order-1 md:order-2' : 'order-2 mt-6 md:mt-0'}`}>
                    {isEven ? <TextBlock step={step} /> : <IconBlock step={step} idx={idx} />}
                  </div>

                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
};


//  SECOND VERSION (selected pre final)

// import { motion } from 'framer-motion';

// const sopSteps = [
//   { 
//     title: "Consultation", 
//     desc: "Talk to our Interior Designer & Get an Estimate", 
//     icon: (
//       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//       </svg>
//     )
//   },
//   { 
//     title: "Design", 
//     desc: "Detailed Drawing and Final Approval", 
//     icon: (
//       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//       </svg>
//     )
//   },
//   { 
//     title: "Production", 
//     desc: "Crafting at Our Specialized Factories", 
//     icon: (
//       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//       </svg>
//     )
//   },
//   { 
//     title: "Execution", 
//     desc: "Material Delivery & On-site Execution", 
//     icon: (
//       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
//         <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" />
//       </svg>
//     )
//   },
//   { 
//     title: "Handover", 
//     desc: "On Time Project Hand Over", 
//     icon: (
//       <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
//       </svg>
//     )
//   }
// ];

// export const SOPFlow = () => {
//   return (
//     <section className="py-10 bg-white font-inter">
//       <div className="container mx-auto px-4">
//         <div className="mb-24 text-center">
//           <h2 className="text-2xl md:text-4xl font-[500] uppercase tracking-tighter text-[#1a1a1a]">
//             Our <span className="text-[#ffc000]">Process</span>
//           </h2>
//           <div className="w-26 h-1.5 bg-[#ffc000] mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* Single Row Container with Horizontal Scroll on Mobile */}
//         <div className="relative overflow-x-auto pb-10 scrollbar-hide md:overflow-visible">
//           <div className="flex flex-row justify-between items-start min-w-[1000px] md:min-w-full relative px-10">

//             {/* PROGRESS LINE: Fills with #ffc000 when scrolled into view */}
//             <div className="absolute top-16 left-0 w-full h-[4px] bg-[#f0f0f0] z-0">
//               <motion.div 
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 viewport={{ once: true, amount: 0.8 }}
//                 transition={{ duration: 2, ease: "easeInOut" }}
//                 className="absolute top-0 left-0 w-full h-full bg-[#ffc000] origin-left shadow-[0_0_15px_rgba(255,192,0,0.6)]"
//               />
//             </div>

//             {sopSteps.map((step, idx) => (
//               <div key={idx} className="relative z-10 flex flex-col items-center text-center w-[200px] group">

//                 {/* SVG ILLUSTRATION BUBBLE: Fills yellow automatically */}
//                 <motion.div 
//                   initial={{ backgroundColor: "#ffffff", borderColor: "#f0f0f0" }}
//                   whileInView={{ backgroundColor: "#ffc000", borderColor: "#ffc000" }}
//                   viewport={{ once: true, amount: 0.8 }}
//                   transition={{ duration: 0.5, delay: idx * 0.4 }}
//                   className="w-32 h-32 rounded-full border-4 flex items-center justify-center shadow-lg mb-8 relative"
//                 >
//                   <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-black">
//                     {step.icon}
//                   </div>
//                   {/* Step Number Badge */}
//                   {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1a1a1a] text-[#ffc000] rounded-full flex items-center justify-center text-[10px] font-black border-2 border-white">
//                     0{idx + 1}
//                   </div> */}
//                 </motion.div>

//                 {/* TEXT CONTENT */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: idx * 0.4 + 0.2 }}
//                 >
//                   <h3 className="font-[900] uppercase text-[14px] tracking-[2px] mb-3 text-[#1a1a1a]">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-400 text-[11px] leading-[1.6] font-semibold uppercase tracking-wide max-w-[160px] mx-auto">
//                     {step.desc}
//                   </p>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




//  THIRD VERSION

// import { motion } from 'framer-motion';
// import { useRef, useEffect } from 'react';

// // 1. Import your local video files
// import consultationVid from '../assets/videos/consultation.mp4';
// import designVid from '../assets/videos/design.mp4';
// import productionVid from '../assets/videos/production.mp4';
// import executionVid from '../assets/videos/execution.mp4';
// import handoverVid from '../assets/videos/handover.mp4';
// import { useNavigate } from 'react-router-dom';

// const StepVideo = ({ src }: { src: string }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (videoRef.current) {
//           entry.isIntersecting ? videoRef.current.play() : videoRef.current.pause();
//         }
//       },
//       { threshold: 0.2 }
//     );
//     if (videoRef.current) observer.observe(videoRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <video
//       ref={videoRef}
//       src={src}
//       muted
//       loop
//       playsInline
//       preload="none"
//       className="w-full h-full object-cover"
//       style={{ willChange: 'transform', transform: 'translateZ(0)' }} // Tells the GPU to prepare for animation
//     />
//   );
// };

// // 2. Update your array to use the imported variables
// const sopSteps = [
//   {
//     title: "Consultation",
//     desc: "Talk to our Interior Designer & Get an Estimate. We discuss your vision and budget to create a roadmap.",
//     video: consultationVid
//   },
//   {
//     title: "Design",
//     desc: "Detailed Drawing and Final Approval. Our experts create 3D renders so you can see your home before it's built.",
//     video: designVid
//   },
//   {
//     title: "Production",
//     desc: "Crafting at Our Specialized Factories. Precision engineering meets high-quality materials.",
//     video: productionVid
//   },
//   {
//     title: "Execution",
//     desc: "Material Delivery & On-site Execution. Our team ensures a seamless installation process.",
//     video: executionVid
//   },
//   {
//     title: "Handover",
//     desc: "On Time Project Hand Over. Step into your dream home, exactly as promised.",
//     video: handoverVid
//   }
// ];



// type SOPFlowtype = {
//   showLink?: boolean
// }



// export const SOPFlow: React.FC<SOPFlowtype> = ({ showLink }) => {

//   const navigate = useNavigate()

//   return (
//     <section className="py-15 bg-white font-inter overflow-hidden">
//       <div className="container mx-auto px-6">
//         <div className="mb-32 text-center">
//           <h2 onClick={() => navigate('/process')} className="text-3xl cursor-pointer flex items-center justify-center gap-3 md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
//             Our <span className="text-[#ffc000]"> Process</span>
//             {showLink &&  <i className="fa-solid fa-link text-xl md:text-2xl text-[#ffc000] mt-1 group-hover:scale-110 transition-transform"></i>}
//           </h2>
//           <div className="w-24 h-1.5 bg-[#ffc000] mx-auto mt-4 rounded-full shadow-[0_5px_15px_rgba(255,192,0,0.3)]"></div>
//         </div>

//         <div className="relative max-w-6xl mx-auto">
//           {sopSteps.map((step, idx) => {
//             const isEven = idx % 2 === 0;


//             return (
//               <div key={idx} className="relative mb-32 last:mb-0">
//                 {/* KEY CHANGE: 
//                    The default is 'flex-col' (Mobile: Video then Text).
//                    The 'md:flex-row-reverse' or 'md:flex-row' only kicks in on larger screens.
//                 */}
//                 <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>

//                   {/* VIDEO SIDE - Always appears first in vertical stack */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20, x: 0 }} // Base mobile state
//                     whileInView={{
//                       opacity: 1,
//                       y: 0,
//                       x: window.innerWidth > 768 ? (isEven ? -50 : 50) : 0 // Responsive side-slide
//                     }}
//                     viewport={{ once: true, margin: "-100px" }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     className="w-full md:w-1/2"
//                   >
//                     <div className="aspect-video md:aspect-square rounded-[40px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100 relative group">
//                       <StepVideo src={step.video} />
//                       <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700"></div>
//                     </div>
//                   </motion.div>

//                   {/* TEXT SIDE */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20, x: 0 }}
//                     whileInView={{
//                       opacity: 1,
//                       y: 0,
//                       x: window.innerWidth > 768 ? (isEven ? 50 : -50) : 0
//                     }}
//                     viewport={{ once: true, margin: "-100px" }}
//                     transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//                     className="w-full md:w-1/2 text-center md:text-left"
//                   >
//                     <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] text-[#ffc000] font-black text-sm mb-6 shadow-xl`}>
//                       0{idx + 1}
//                     </div>
//                     <h3 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] mb-4 uppercase tracking-tight">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto md:mx-0 font-medium">
//                       {step.desc}
//                     </p>
//                   </motion.div>
//                 </div>

//                 {/* CONNECTING ARROW (ZIG-ZAG) - Remains desktop only */}
//                 {idx < sopSteps.length - 1 && (
//                   <div className={`hidden md:block absolute -bottom-24 ${isEven ? 'right-1/4' : 'left-1/4'} z-0`}>
//                     <motion.svg
//                       width="120" height="100" viewBox="0 0 120 100" fill="none"
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       viewport={{ once: true }}
//                     >
//                       <motion.path
//                         d={isEven ? "M10 10 Q 60 50, 110 90" : "M110 10 Q 60 50, 10 90"}
//                         stroke="#1a1a1a"
//                         strokeWidth="4"
//                         strokeLinecap="round"
//                         initial={{ pathLength: 0, stroke: "#1a1a1a" }}
//                         whileInView={{ pathLength: 1, stroke: "#ffc000" }}
//                         transition={{ duration: 1.2, ease: "easeInOut" }}
//                       />
//                       <motion.path
//                         d={isEven ? "M100 90 L 110 90 L 110 80" : "M20 90 L 10 90 L 10 80"}
//                         stroke="#ffc000"
//                         strokeWidth="4"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ delay: 1.2 }}
//                       />
//                     </motion.svg>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };