import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

// Asset Imports
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import portfolioBg from '../assets/images/portfolio-bg.jpg';

const images = [img1, img2, img3, img4, img5];
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

  

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            const activeThumb = container.children[index] as HTMLElement;
            if (activeThumb) {
                const scrollLeft = activeThumb.offsetLeft - container.offsetWidth / 2 + activeThumb.offsetWidth / 2;
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }

        // Logic to reset index if we get too close to the "real" edges (seamless loop)
        if (index >= images.length * 4) {
            setTimeout(() => setIndex(images.length * 2), 500);
        }
        if (index < images.length) {
            setTimeout(() => setIndex(images.length * 2), 500);
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
                    <div className="relative w-full aspect-video  bg-white p-2.5  rounded-[20px] shadow-lg overflow-hidden mb-8">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={index}
                                src={infiniteImages[index]}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover rounded-[15px]"
                            />
                        </AnimatePresence>
                    </div>

                  

                    <div
                        ref={scrollRef}
                        className="flex gap-4 mt-10 md:gap-8 overflow-x-auto pb-8 px-4 no-scrollbar items-center scroll-smooth"
                    >
                        {infiniteImages.map((src, i) => (
                            <motion.div
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`relative shrink-0 cursor-pointer p-[3px] rounded-[15px] md:rounded-[20px] transition-all  
                                          scale-110`}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src={src}
                                    alt={`Thumb ${i}`}
                                    className="w-24 h-24 md:w-48 md:h-32 object-cover rounded-[12px] md:rounded-[18px]"
                                />
                            </motion.div>
                        ))}
                    </div>



                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;