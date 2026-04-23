import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TestimonialType = {
    showLink?: boolean;
};

const TESTIMONIAL_DATA = [
    {
        name: "Rajesh Kumar",
        location: "Anna Nagar, Chennai",
        text: "The Vertical Living team transformed my 3BHK into a masterpiece. Their attention to detail in the modular kitchen is unmatched.",
        rating: 5,
        initials: "RK"
    },
    {
        name: "Suresh Kannan",
        location: "K.K Nagar, Madurai",
        text: "Excellent workmanship and timely delivery. My home interiors came out exactly as planned, and the team was very responsive throughout the process.",
        rating: 5,
        initials: "SK"
    },
    {
        name: "Meena Lakshmi",
        location: "RS Puram, Coimbatore",
        // text: "Loved their modern design approach. The wardrobe and storage solutions they provided are both stylish and highly functional.",
        text: "Absolutely loved their modern design approach and attention to detail. The wardrobe and storage solutions are elegant and also incredibly practical, making everyday living so much easier.",

        rating: 5,
        initials: "ML"
    },
     {
        name: "Priya Sharma",
        location: "Nungambakkam, Chennai",
        text: "Best interior firm in Chennai! The cost calculator was so accurate, and the final execution was exactly like the 3D designs.",
        rating: 5,
        initials: "PS"
    },
    {
        name: "Rohit Verma",
        location: "Vaishali Nagar, Jaipur",
        // text: "Very professional team with great design sense. The 3D previews helped me visualize everything clearly before execution.",
        text: "A highly professional team with an exceptional design sense. The 3D previews were incredibly detailed and helped me visualize every aspect perfectly before execution, giving me complete confidence in the process.",
        rating: 4,
        initials: "RV"
    },
    {
        name: "Dhanush Gowda",
        location: "Basavanagudi, Bengaluru",
        // text: "From design to execution, everything was smooth. Their modular kitchen design completely changed the look of my home.",
        text: "From initial design discussions to final execution, everything was seamless and well-coordinated. The modular kitchen they designed has completely transformed the look and functionality of my home.",
        rating: 5,
        initials: "DG"
    },
     {
        name: "Anand Viswanathan",
        location: "Adyar, Chennai",
        text: "Professional, timely, and creative. They managed the entire construction process without me having to worry about a thing.",
        rating: 4,
        initials: "AV"
    },
    {
        name: "Amit Patil",
        location: "Baner, Pune",
        // text: "Great experience overall. The pricing was transparent, and the final outcome matched the promised quality.",
        text: "An excellent experience from start to finish. The pricing was transparent, timelines were well-managed, and the final outcome not only met but exceeded the promised quality standards.",
        rating: 4,
        initials: "AP"
    },
    {
        name: "Karthik Reddy",
        location: "Gachibowli, Hyderabad",
        // text: "Highly reliable and creative team. They optimized my apartment space beautifully with smart storage ideas.",
        text: "A highly reliable and creative team that truly understands space optimization. They transformed my apartment with smart, innovative storage solutions without compromising on aesthetics.",
        rating: 5,
        initials: "KR"
    },
    {
        name: "Deepika R.",
        location: "Besant Nagar, Chennai",
        text: "Working with them was a seamless experience. Their space-saving furniture solutions for my compact apartment were brilliant, maximizing every square foot without compromising on style.",
        rating: 5,
        initials: "DR"
    },
    {
        name: "Neha Gupta",
        location: "Sector 62, Noida",
        // text: "The team was extremely cooperative and understood my requirements perfectly. The final interiors exceeded my expectations.",
        text: "The team was extremely supportive and attentive to every detail. They understood my vision perfectly and delivered interiors that truly exceeded my expectations in both design and quality.",
        rating: 5,
        initials: "NG"
    },
    {
        name: "Vikram Singh",
        location: "Andheri West, Mumbai",
        // text: "Impressed with their attention to detail and finishing quality. My living room design turned out elegant and modern.",
        text: "Truly impressed by their attention to detail and premium finishing. The living room design turned out to be both elegant and contemporary, creating a perfect balance of style and comfort.",
        rating: 4,
        initials: "VS"
    }
];

export const Testimonials: React.FC<TestimonialType> = ({ showLink }) => {
    const navigate = useNavigate();

    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Infinite Loop Logic
    useEffect(() => {
        const slider = scrollRef.current;
        if (!slider) return;

        let animationFrameId: number;
        const speed = 1; // Adjust this for faster/slower auto-scroll

        const scroll = () => {
            if (!isDragging) {
                slider.scrollLeft += speed;

                // Calculate the width of a single set of testimonials
                // Since you have 4 copies, one set is 1/4 of the total scrollWidth


                const singleSetWidth = slider.scrollWidth / 4;
                if (slider.scrollLeft >= singleSetWidth) {
                    slider.scrollLeft -= singleSetWidth;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isDragging]);

    // Drag Logic
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const stopDragging = () => setIsDragging(false);

    return (
        <section className="py-10 md:py-15 bg-white overflow-hidden">
            {/* Header - Stays exactly as you wanted */}
            <div className="mb-5 md:mb-10 text-center">
                <h2
                    onClick={() => navigate('/testimonials')}
                    className="text-3xl cursor-pointer flex items-center justify-center gap-3 md:text-5xl font-bold tracking-tight text-[#1a1a1a] group"
                >
                    Client <span className="text-[#ffc000]">Testimonials</span>
                    {showLink && (
                        <i className="fa-solid fa-link text-xl md:text-2xl text-[#ffc000] mt-1 group-hover:scale-110 transition-transform"></i>
                    )}
                </h2>
                <div className="w-24 h-1.5 bg-[#ffc000] mx-auto mt-4 rounded-full shadow-[0_5px_15px_rgba(255,192,0,0.3)]"></div>
            </div>

            {/* Manual Scroll & Auto Scroll Container */}
            <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                className="testimonial-scroll-wrapper relative overflow-x-auto no-scrollbar touch-pan-x cursor-grab active:cursor-grabbing">

                <div className={`testimonial-track whitespace-nowrap py-12 ${isDragging ? 'pause-animation' : ''}`}>
                    {[...TESTIMONIAL_DATA, ...TESTIMONIAL_DATA, ...TESTIMONIAL_DATA, ...TESTIMONIAL_DATA].map((item, index) => (
                        <div
                            key={index}
                            className="inline-block mx-2 md:mx-4 w-[280px] sm:w-[350px] md:w-[450px] bg-[#fbfbfb] border border-gray-100 p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 whitespace-normal align-top pointer-events-none select-none group"
                        >
                            {/* Star Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <i key={i} className="fa-solid fa-star text-[#ffc000] text-sm"></i>
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-[#555] text-sm md:text-xl leading-relaxed font-poppins">
                                "{item.text}"
                            </p>

                            {/* Client Info */}
                            <div className="mt-4  md:mt-8 flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-[#ffc000] font-bold text-lg group-hover:bg-[#ffc000] group-hover:text-[#1a1a1a] transition-colors">
                                    {item.initials}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-black text-[#1a1a1a] text-sm uppercase tracking-wider">{item.name}</h4>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};