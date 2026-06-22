
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

// Import Swiper styles

// import img1 from '../assets/images/1.webp';
// import img2 from '../assets/images/2.webp';
// import img3 from '../assets/images/3.webp';
// import img4 from '../assets/images/4.webp';

import img5 from '../assets/images/5.webp';



// import img1 from '../assets/images/image1.jpeg';
// import img2 from '../assets/images/image2.jpeg';
// import img3 from '../assets/images/image3.jpeg';
// import img4 from '../assets/images/image4.jpeg';
// import img5 from '../assets/images/image5.jpeg';
// import img6 from '../assets/images/image6.jpeg';
// import img7 from '../assets/images/image7.jpeg';
// import img8 from '../assets/images/image8.jpeg';

import img8 from '../assets/images/image10.webp';
import img11 from '../assets/images/image11.webp';
import img12 from '../assets/images/image12.webp';
import img13 from '../assets/images/image13.webp';
import img14 from '../assets/images/image14.webp';
import img15 from '../assets/images/image15.webp';
import img16 from '../assets/images/image16.webp';
import img17 from '../assets/images/image17.webp';
import img18 from '../assets/images/image18.webp';



// import video1 from '../assets/videos/video1.mp4';
// import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// const images = [img1, img2, img3, img4, img5, img6, img7, img8];
// const images = [img1, img2, img3, img4, img5, img8, video1,video2, img8];
const portfolioItems = [
    // { src: img1, type: 'image' },
    // { src: img2, type: 'image' },
    // { src: video1, type: 'video' }, // Video added
    // { src: img3, type: 'image' },
    // { src: img4, type: 'image' },
    // { src: video2, type: 'video' }, // Video added
    { src: img5, type: 'image' },
    { src: img8, type: 'image' },
    { src: img11, type: 'image' },
    { src: img12, type: 'image' },
    { src: img13, type: 'image' },
    { src: video3, type: 'video' }, // Video added
    { src: img14, type: 'image' },
    { src: img15, type: 'image' },
    { src: img16, type: 'image' },
    { src: video4, type: 'video' }, // Video added
    { src: img17, type: 'image' },
    { src: img18, type: 'image' },
];


type WorkCarouseltype = {
    showLink?: boolean
}

const WorkCarousel: React.FC<WorkCarouseltype> = ({ showLink }) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const navigate = useNavigate();



    const handleSlideChange = (swiper: SwiperType) => {
        // 1. Find all videos in the carousel
        const allVideos = document.querySelectorAll<HTMLVideoElement>('#portfolio video');

        // 2. Pause and reset all videos
        allVideos.forEach((video) => {
            video.pause();
            video.currentTime = 0;
        });

        // 3. Get the active slide element
        const activeSlide = swiper.slides[swiper.activeIndex];
        const activeVideo = activeSlide?.querySelector('video');

        if (activeVideo) {
            // 4. If center is a video, stop autoplay and play video
            swiper.autoplay.stop();

            // LAZY LOAD INJECTION: Only give it the source when it's active
            if (!activeVideo.src) {
                activeVideo.src = activeVideo.getAttribute('data-src') || '';
                activeVideo.load();
            }


            activeVideo.play().catch(err => console.log("Autoplay blocked:", err));
        } else {
            // 5. If center is an image, restart the 3-second timer
            swiper.autoplay.start();
        }
    };


    return (
        <section id="portfolio" className="py-24 bg-white font-inter overflow-hidden">
            {/* <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-2xl md:text-4xl font-[500] uppercase tracking-tighter text-[#1a1a1a]">
          Our <span className="text-[#ffc000]">Works</span>
        </h2>
        <div className="w-26 h-1.5 bg-[#ffc000] mx-auto mt-1 rounded-full"></div>
      </div> */}


            <div className="container mx-auto px-4  mb-16 text-center">
                {/* Refined Header */}
                <h2 onClick={() => navigate('/portfolio')} className="text-3xl flex items-center justify-center gap-3 cursor-pointer md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
                    Our <span className="text-[#ffc000]">Portfolio</span>
                    {showLink && <i className="fa-solid fa-link text-xl md:text-2xl text-[#ffc000] mt-1 group-hover:scale-110 transition-transform"></i>}

                </h2>
                <div className="w-26 h-1.5 bg-[#ffc000] mx-auto mt-3 rounded-full shadow-[0_5px_15px_rgba(255,192,0,0.3)]"></div>


                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-10 text-gray-600 text-[16px] md:text-[18px] leading-[1.8] max-w-4xl mx-auto font-medium font-poppins"
                >
                    Take a peek at some of our recent projects and see how we have transformed spaces into stunning,
                    functional works of art. From cozy living rooms to sleek kitchens and everything in between,
                    our portfolio showcases our versatility and attention to detail.
                </motion.p>

            </div>
            <div className="relative w-full max-w-[1400px] mx-auto px-2">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={handleSlideChange} // Trigger logic on change
                    modules={[Navigation, Autoplay, EffectCoverflow]}
                    observer={true}            // Forces Swiper to refresh if images change
                    observeParents={true}
                    watchSlidesProgress={true}     // Pre-renders slides that are "near" the view
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
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    className="w-full py-10"
                >
                    {/* {portfolioItems.map((item, index) => {
                        // PERFORMANCE FIX: Only eagerly load the first 2 slides. Lazy load the rest.
                        const isVisibleInitially = index <= 1;

                        return(
                        <SwiperSlide key={index} className="px-4">
                            <div className="w-full h-[400px] md:h-[550px] rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-500">
                               

                                {item.type === 'video' ? (
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover"
                                        disablePictureInPicture   // Disables the 'Pop-out' icon
                                        // autoPlay
                                        muted
                                        playsInline
                                        // preload="auto"
                                            // preload="metadata"
                                            preload="none" // Completely stop loading until commanded

                                        onEnded={() => {
                                            // When video ends, move to next and restart autoplay
                                            swiperRef.current?.autoplay.start();
                                            swiperRef.current?.slideNext();
                                        }}
                                    // onPlay={() => swiperRef.current?.autoplay.stop()}
                                    // onPause={() => swiperRef.current?.autoplay.start()}
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={`Project ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        // loading="eager"
                                            loading={isVisibleInitially ? "eager" : "lazy"}
                                        // fetchPriority="high"
                                        fetchPriority={isVisibleInitially ? "high" : "auto"}
                                        decoding="async"
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    )
                    }
                )} */}


                    {portfolioItems.map((item, index) => {
                        // PERFORMANCE FIX: Only eagerly load the first 2 slides. Lazy load the rest.
                        const isVisibleInitially = index <= 1;

                        return (
                            <SwiperSlide key={index} className="px-4">
                                {/* We MUST use this Swiper render prop to know if the slide is on screen */}
                                {({ isActive, isVisible }) => (
                                    // Added a neutral background color (bg-gray-200) to look nice while the video loads
                                    <div className="w-full h-[400px] md:h-[550px] rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-500 bg-gray-200">

                                        {item.type === 'video' ? (
                                            <video
                                                // THE MAGIC TRICK: If the slide is visible, load the video. 
                                                // If it is a hidden clone, leave the src empty!
                                                src={isActive || isVisible ? item.src : ""}
                                                className="w-full h-full object-cover"
                                                disablePictureInPicture
                                                muted
                                                playsInline
                                                preload="none"
                                                // Use React to force autoplay only when active
                                                autoPlay={isActive}
                                                onEnded={() => {
                                                    swiperRef.current?.autoplay.start();
                                                    swiperRef.current?.slideNext();
                                                }}
                                            />
                                        ) : (
                                            <img
                                                src={item.src}
                                                alt={`Project ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                loading={isVisibleInitially ? "eager" : "lazy"}
                                                fetchPriority={isVisibleInitially ? "high" : "auto"}
                                                decoding="async"
                                            />
                                        )}
                                    </div>
                                )}
                            </SwiperSlide>
                        );
                    })}

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