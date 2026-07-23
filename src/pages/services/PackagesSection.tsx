import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PACKAGES } from '../../constants/constants';
import { motion } from 'framer-motion';
// Import Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import QuoteButton from '../../components/QuoteButton';

type PackagesSectiontype = {
    showLink?: boolean
}


const PackagesSection: React.FC<PackagesSectiontype> = ({ showLink }) => {
    const navigate = useNavigate();
    const swiperRef = useRef<SwiperType | null>(null);


    return (
        <section id="service" className="py-20  bg-white">
            <div className="mx-auto px-1 md:px-4 mb-12 text-center">

                {/* <h2 onClick={() => navigate('/service-packages')} className="text-xl w-fit mx-auto sm:text-3xl md:text-5xl flex items-center justify-center  
                gap-2 md:gap-3 cursor-pointer  font-bold tracking-tight text-[#1a1a1a]">
                    Our <span className="text-[#ffc000]">Service Packages</span>
                    {showLink && <i className="fa-solid fa-link text-xl md:text-2xl text-[#ffc000] mt-1 group-hover:scale-110 transition-transform"></i>}
                </h2>
                {showLink && <QuoteButton />}
                <div className="w-24 h-1.5 bg-[#ffc000] mx-auto mt-6 rounded-full shadow-[0_5px_15px_rgba(255,192,0,0.3)]"></div> */}

                {/* Parent Wrapper to align the Heading and the Button */}
                <div className="flex flex-col items-center w-full relative">

                    {/* TOP ROW: Heading (Always Centered) + Button (Right on Desktop, Below on Mobile) */}
                    <div className="w-full relative flex flex-col sm:flex-row items-center justify-center">

                        {/* The Heading */}
                        <h2
                            onClick={() => navigate('/service-packages')}
                            className="text-xl sm:text-3xl md:text-5xl flex items-center justify-center 
                 gap-2 md:gap-3 cursor-pointer font-bold tracking-tight text-[#1a1a1a]"
                        >
                            Our <span className="text-[#ffc000]">Service Packages</span>
                            {showLink && (
                                <i className="fa-solid fa-link text-xl md:text-2xl text-[#ffc000] mt-1 group-hover:scale-110 transition-transform"></i>
                            )}
                        </h2>

                        {/* The Button Wrapper */}
                        {showLink && (
                            // <div className="mt-5 sm:mt-0 sm:absolute sm:right-10 md:right-5 lg:right-70">
                            <div className="mt-5 sm:mt-0 sm:absolute sm:right-10 md:right-20 lg:right-[5%] xl:right-[15%]">
                                <QuoteButton />
                            </div>
                        )}

                    </div>

                    {/* THE UNDERLINE: Now sits completely isolated and perfectly centered under the heading */}
                    <div className="w-24 h-1.5 bg-[#ffc000] mt-6 rounded-full shadow-[0_5px_15px_rgba(255,192,0,0.3)]"></div>

                </div>

                <p className="mt-6 !text-center  text-gray-500 font-semibold text-[12px] md:text-[18px] tracking-widest font-poppins">
                    Available individually or as part of a larger project engagement.
                </p>
            </div>
            {/* Swiper Container for Automatic Scrolling */}
            <div className="px-0  md:px-[2%] relative ">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Autoplay, Navigation, Pagination]}
                    grabCursor={true}
                    spaceBetween={30}
                    // Loop ensures infinite scrolling
                    loop={true}

                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false, // Keep scrolling after user interaction
                        pauseOnMouseEnter: true,      // Pause when user hovers to read
                    }}
                    // Responsive breakpoints for slide visibility
                    slidesPerView={1}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.05,
                            // spaceBetween: 10
                        },
                        640: { slidesPerView: 1.2 }, // Slightly peek the next card
                        768: { slidesPerView: 1.8 }, // Gives each card more "breathing room"
                        1024: { slidesPerView: 2.2 }, // Best for readability; cards feel wide and premium
                        1440: { slidesPerView: 3.2 }, // Prevents cards from becoming too skinny on huge monitors
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    // Standard slide transition speed
                    speed={800}
                    className="pb-14 "
                >
                    {PACKAGES.map((pkg) => (
                        <SwiperSlide key={pkg.id}>
                            <motion.div
                                // whileHover={{ y: -10 }}
                                onClick={() => navigate(`/singleservice/${pkg.id}`)}
                                className="w-full h-[350px]  md:h-[450px] group relative rounded-[35px] overflow-hidden shadow-xl border border-gray-100"
                            >
                                {/* Background Image */}
                                <img
                                    src={pkg.img}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    // alt={pkg.name}
                                    alt={`${pkg.name} - Interior Design Packages in Chennai`}
                                // decoding="async" // <-- ADD THIS FOR BETTER PAINT PERFORMANCE
                                />

                                {/* Darkened Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-300"></div>

                                {/* Card Content Container */}
                                <div className="absolute inset-x-0 bottom-0 p-8 text-white flex flex-col justify-end">
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2 group-hover:text-[#ffc000] transition-colors">
                                        {pkg.name}
                                    </h3>

                                    <div className="flex items-center gap-3 mb-4">
                                        <p className="text-[#ffc000] font-bold text-xl">₹{pkg.price.toLocaleString()}</p>
                                    </div>

                                    <p className="text-[11px] text-gray-300 font-bold uppercase tracking-wider mb-6 leading-relaxed">
                                        {pkg.suitable}
                                    </p>

                                    <div className="max-h-0 opacity-0 group-hover:max-h-[100px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                                        <button
                                            className="w-full cursor-pointer bg-[#ffc000] text-[#1a1a1a] py-3.5 rounded-xl font-bold uppercase text-[11px] tracking-[2px] hover:bg-white transition-all duration-300"
                                        >
                                            Book
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Arrows (No progress dots provided) */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0  z-30 swiper-button-prev-custom cursor-pointer translate-x-[-50%]">
                    <div className="w-9 h-9 md:w-12 md:h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#ffc000] transition-all">
                        <i className="fa fa-chevron-left text-black"></i>
                    </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-0 z-30 swiper-button-next-custom cursor-pointer translate-x-[50%]">
                    <div className="w-9 h-9 md:w-12 md:h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#ffc000] transition-all">
                        <i className="fa fa-chevron-right text-black"></i>
                    </div>
                </div>
            </div>

            {/* Optional: Add custom CSS for pagination color if you want dots at the bottom */}
            <style>{`
                .swiper-pagination-bullet-active {
                    background: #ffc000 !important;
                }
            `}</style>
        </section>
    );
};

export default PackagesSection;



