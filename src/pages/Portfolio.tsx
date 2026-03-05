import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

// Asset Imports
// import img1 from '../assets/images/image1.jpeg';
// import img2 from '../assets/images/image2.jpeg';
// import img3 from '../assets/images/image3.jpeg';
// import img4 from '../assets/images/image4.jpeg';
// import img5 from '../assets/images/image5.jpeg';
// import img6 from '../assets/images/image6.jpeg';
// import img7 from '../assets/images/image7.jpeg';
// import img8 from '../assets/images/image8.jpeg';


import img11 from '../assets/images/image11.jpeg';
import img12 from '../assets/images/image12.jpeg';
import img13 from '../assets/images/image13.jpeg';
import img14 from '../assets/images/image14.jpeg';
import img15 from '../assets/images/image15.jpeg';
import img16 from '../assets/images/image16.jpeg';
import img17 from '../assets/images/image17.jpeg';
import img18 from '../assets/images/image18.jpeg';



import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';

import portfolioBg from '../assets/images/portfolio-bg.jpg';

const images = [img11, img12, img13, img14, video3, img15, img16, video4, img17, img18];
const infiniteImages = [...images, ...images, ...images];

// Animation for the "WOW" scroll effect
const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" as const }
    }
};

const Portfolio: React.FC = () => {
    const [index, setIndex] = useState(0);

    const scrollRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // const isVideo = (src: string) => src.endsWith('.mp4') || src.endsWith('.jpeg');
    const checkIsVideo = (src: string) => src.toLowerCase().endsWith('.mp4');

    const handleNext = () => setIndex((prev) => prev + 1);

    // 1. Auto-play Logic: Change slide every 5 seconds
   useEffect(() => {
        const currentSrc = infiniteImages[index];
        if (!checkIsVideo(currentSrc)) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [index]);

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            const activeThumb = container.children[index] as HTMLElement;
            if (activeThumb) {
                const scrollLeft = activeThumb.offsetLeft - container.offsetWidth / 2 + activeThumb.offsetWidth / 2;
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }

        // // Logic to reset index if we get too close to the "real" edges (seamless loop)
        // if (index >= images.length * 4) {
        //     setTimeout(() => setIndex(images.length * 2), 500);
        // }
        // if (index < images.length) {
        //     setTimeout(() => setIndex(images.length * 2), 500);
        // }

        // Seamless Loop Logic
        if (index >= images.length * 2) {
            setTimeout(() => setIndex(images.length), 500);
        }
    }, [index]);

    return (
        <section
            // id="portfolio"
            className="py-10 bg-repeat-x bg-top overflow-hidden"
            style={{ backgroundImage: `url(${portfolioBg})` }}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInRight}
                >
                    <h2 className="font-luxe text-[40px] md:text-[70px] font-semibold mb-[100px]  leading-[1]">
                        <span className="block text-[20px] md:text-[25px] lg:text-[40px] font-light mb-[13px] uppercase text-black">
                            Designs That Define
                        </span>
                        Our Interior Design Gallery
                    </h2>

                    {/* MAIN IMAGE DISPLAY (slider-for replacement) */}
                    <div className="relative w-full aspect-video  bg-white p-1.5  rounded-[20px] shadow-lg overflow-hidden mb-8">
                        <AnimatePresence mode="wait">
                            {/* <motion.img
                                key={index}
                                src={infiniteImages[index]}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover rounded-[15px]"
                            /> */}

                            {checkIsVideo(infiniteImages[index]) ? (
                                <motion.video
                                   key={infiniteImages[index]}
                                    ref={videoRef}
                                    src={infiniteImages[index]}
                                    autoPlay
                                    muted
                                    playsInline
                                    onEnded={handleNext} // FIX: Go to next only when video ends
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full h-full object-cover rounded-[15px]"
                                />
                            ) : (
                                // <img
                                //     src={infiniteImages[index]}
                                //     alt="Portfolio Main"
                                //     className="w-full h-full object-cover rounded-[15px]"
                                // />
                                <motion.img
                                    key={infiniteImages[index]}
                                    src={infiniteImages[index]}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full h-full object-cover rounded-[15px]"
                                />
                            )}
                        </AnimatePresence>
                    </div>



                    <div
                        ref={scrollRef}
                        className="flex gap-4 mt-10 md:gap-8 overflow-x-auto pb-8 px-4 no-scrollbar items-center scroll-smooth"
                    >
                        {infiniteImages.map((src, i) => (
                            // <motion.div
                            //     key={i}
                            //     onClick={() => setIndex(i)}
                            //     className={`relative shrink-0 cursor-pointer p-[3px] rounded-[15px] md:rounded-[20px] transition-all  
                            //               scale-110`}
                            //     whileHover={{ scale: 1.05 }}
                            // >
                            //     <img
                            //         src={src}
                            //         alt={`Thumb ${i}`}
                            //         className="w-24 h-24 md:w-48 md:h-32 object-cover rounded-[12px] md:rounded-[18px]"
                            //     />
                            // </motion.div>
                            <motion.div
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`relative shrink-0 cursor-pointer p-[3px] rounded-[15px] md:rounded-[20px] transition-all 
                                    ${index === i ? 'ring-2 ring-black scale-105 opacity-100' : 'opacity-100'} `}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="relative w-24 h-24 md:w-48 md:h-32">
                                    {checkIsVideo(src) ? (
                                        <>
                                            <video
                                                src={src}
                                                muted
                                                className="w-full h-full object-cover rounded-[12px] md:rounded-[18px]"
                                            />
                                            {/* Play icon ONLY for videos */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-[12px] md:rounded-[18px]">
                                                <div className="w-8 h-8 bg-white/70 rounded-full flex items-center justify-center">
                                                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1" />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <img
                                            src={src}
                                            alt={`Thumb ${i}`}
                                            className="w-full h-full object-cover rounded-[12px] md:rounded-[18px]"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>



                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;