
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import { motion } from 'framer-motion';

const images = [img1, img2, img3, img4, img5];

const WorkCarousel: React.FC = () => {
    return (
        <section id="portfolio" className="py-24 bg-white font-inter overflow-hidden">
            {/* <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-2xl md:text-4xl font-[500] uppercase tracking-tighter text-[#1a1a1a]">
          Our <span className="text-[#ffc000]">Works</span>
        </h2>
        <div className="w-26 h-1.5 bg-[#ffc000] mx-auto mt-1 rounded-full"></div>
      </div> */}


            <div className="container mx-auto px-4 mb-16 text-center">
                {/* Refined Header */}
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
                    Our <span className="text-[#ffc000]">Portfolio</span>
                </h2>
                <div className="w-26 h-1.5 bg-[#ffc000] mx-auto mt-3 rounded-full shadow-[0_5px_15px_rgba(255,192,0,0.3)]"></div>


                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-10 text-gray-600 text-[16px] md:text-[18px] leading-[1.8] max-w-4xl mx-auto font-medium italic"
                >
                    Take a peek at some of our recent projects and see how we have transformed spaces into stunning,
                    functional works of art. From cozy living rooms to sleek kitchens and everything in between,
                    our portfolio showcases our versatility and attention to detail.
                </motion.p>


                {/* Portfolio Description - Presented elegantly */}
                {/* <p className="mt-8 text-gray-500 text-[16px] md:text-[18px] leading-[1.8] max-w-3xl mx-auto font-medium">
                    Take a peek at some of our recent projects and see how we have transformed spaces into stunning,
                    functional works of art. From cozy living rooms to sleek kitchens and everything in between,
                    our portfolio showcases our versatility and attention to detail.
                </p> */}
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