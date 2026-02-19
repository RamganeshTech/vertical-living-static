// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import img1 from '../assets/images/1.jpg';
// import img2 from '../assets/images/2.jpg';
// import img3 from '../assets/images/3.jpg';
// import img4 from '../assets/images/4.jpg';
// import img5 from '../assets/images/5.jpg';

// const workImages = [img1, img2, img3, img4, img5];

// const WorkCarousel: React.FC = () => {
//   const [index, setIndex] = useState(0);

//   // Function to handle "Next" with infinite loop logic
//   const nextStep = () => {
//     setIndex((prev) => (prev === workImages.length - 1 ? 0 : prev + 1));
//   };

//   // Function to handle "Previous" with infinite loop logic
//   const prevStep = () => {
//     setIndex((prev) => (prev === 0 ? workImages.length - 1 : prev - 1));
//   };

//   return (
//     <section className="py-24 bg-[#fafafa] font-inter">
//       <div className="container mx-auto px-4">
//         <div className="mb-16 text-center">
//           <h2 className="text-[32px] font-[900] uppercase tracking-tighter text-[#1a1a1a]">
//             Our <span className="text-[#ffc000]">Masterpieces</span>
//           </h2>
//           <div className="w-16 h-2 bg-[#ffc000] mx-auto mt-4 rounded-full"></div>
//         </div>

//         <div className="relative max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={index}
//               src={workImages[index]}
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               className="absolute inset-0 w-full h-full object-cover"
//               alt={`Work ${index + 1}`}
//             />
//           </AnimatePresence>

//           {/* Navigation Controls */}
//           <div className="absolute inset-0 flex items-center justify-between px-6 z-20">
//             <button 
//               onClick={prevStep}
//               className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-[#ffc000] transition-all group"
//             >
//               <i className="fa fa-chevron-left text-[#1a1a1a] group-hover:scale-110 transition-transform"></i>
//             </button>
//             <button 
//               onClick={nextStep}
//               className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-[#ffc000] transition-all group"
//             >
//               <i className="fa fa-chevron-right text-[#1a1a1a] group-hover:scale-110 transition-transform"></i>
//             </button>
//           </div>

//           {/* Progress Dots */}
//           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//             {workImages.map((_, i) => (
//               <div 
//                 key={i}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   i === index ? 'w-8 bg-[#ffc000]' : 'w-2 bg-white/50'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkCarousel;


//  SECOND VERSION

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';

const images = [img1, img2, img3, img4, img5];

const WorkCarousel: React.FC = () => {
  return (
    <section className="py-24 bg-white font-inter overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-[32px] font-[500] uppercase tracking-tighter text-[#1a1a1a]">
          Our <span className="text-[#ffc000]">Works</span>
        </h2>
        <div className="w-26 h-1.5 bg-[#ffc000] mx-auto mt-1 rounded-full"></div>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-10">
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true} // Shows the next/prev images on sides
          loop={true}           // Infinite looping logic
          slidesPerView={1.2}   // Controls how much of the next image is visible
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className="w-full py-10"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="px-4">
              <div className="w-full h-[400px] md:h-[550px] rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-500">
                <img 
                  src={img} 
                  alt={`Project ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows (No progress dots provided) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-30 swiper-button-prev-custom cursor-pointer">
          <div className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#ffc000] transition-all">
            <i className="fa fa-chevron-left text-black"></i>
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-30 swiper-button-next-custom cursor-pointer">
          <div className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#ffc000] transition-all">
            <i className="fa fa-chevron-right text-black"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCarousel;