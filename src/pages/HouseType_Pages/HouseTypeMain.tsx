import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOUSE_TYPES_DATA } from '../../constants/constants';
// import { HOUSE_TYPES_DATA } from '../constants/constants';

const HouseTypeMain: React.FC = () => {
    const navigate = useNavigate();
    const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

    return (
        <section className="min-h-screen bg-[#fffffa] py-16 md:py-24 font-sans selection:bg-[#ffc000] selection:text-[#1a1a1a] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

                {/* Modern Minimalist Header */}
                <div className="mb-20 md:mb-32 max-w-3xl">
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                        <div className="w-8 md:w-12 h-[2px] bg-[#ffc000]"></div>
                        <span className="text-[#1a1a1a] font-bold tracking-[3px] md:tracking-[4px] uppercase text-xs md:text-sm">
                            Curated Spaces
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#1a1a1a] tracking-tight leading-[1.1] mb-6 md:mb-8">
                        Architecture tailored to your scale.
                    </h2>
                    <p className="text-gray-500 text-base md:text-xl font-medium leading-relaxed">
                        Explore our design philosophies categorized by space. From smart urban apartments to sprawling luxury villas, every vertical inch is engineered for purpose and elegance.
                    </p>
                </div>

                {/* Alternating Layout List */}
                <div className="flex flex-col gap-24 md:gap-32 lg:gap-40">
                    {HOUSE_TYPES_DATA.map((type, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={type.id}
                                onClick={() => navigate(`/residential-spaces/${type.id}`)}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} cursor-pointer relative group items-center`}
                            >
                                {/* Image Container */}
                                <div className="w-full lg:w-[60%] relative z-0">
                                    <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                                        <img
                                            src={type.image}
                                            alt={type.title}
                                            onLoad={() => setLoadedImages(prev => ({ ...prev, [type.id]: true }))}
                                            className={`w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105
                                                ${loadedImages[type.id] ? 'blur-0 scale-100 opacity-100' : 'blur-xl scale-110 opacity-0'}
                                            `}
                                        />
                                        {/* Subtle overlay for depth */}
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </div>

                                {/* Content Container 
                                    Mobile: 90% width, floats over the bottom of the image (-mt-16)
                                    Desktop (lg): 50% width, alternates left/right overlap
                                */}
                                <div className={`w-[90%] sm:w-[85%] lg:w-[50%] relative z-10 -mt-16 sm:-mt-24 lg:mt-0 
                                    ${isEven ? 'lg:-ml-[10%]' : 'lg:-mr-[10%]'}
                                `}>
                                    <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-2xl transition-transform duration-500 lg:group-hover:-translate-y-2">

                                        {/* Subtitle & Icon */}
                                        <div className="flex items-center justify-between mb-4 lg:mb-6">
                                            <span className="text-[#ffc000] font-bold text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px]">
                                                {type.subtitle}
                                            </span>
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#ffc000] group-hover:text-[#1a1a1a] transition-colors duration-300 shadow-sm">
                                                <i className={`${type.icon} text-sm`}></i>
                                            </div>
                                        </div>

                                        {/* Title & Short Description */}
                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4 lg:mb-6 tracking-tight">
                                            {type.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                                            {type.shortDescription}
                                        </p>

                                        {/* Features Grid - Hidden on very small screens, visible on SM and up to save space */}
                                        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8 pt-6 lg:pt-8 border-t border-gray-100">
                                            {type.features.slice(0, 2).map((feature, fIndex) => (
                                                <div key={fIndex} className="flex gap-3 lg:gap-4">
                                                    <div className="mt-1">
                                                        <i className={`${feature.icon} text-[#ffc000] text-base lg:text-lg`}></i>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[#1a1a1a] font-bold text-sm lg:text-base mb-1">{feature.title}</h4>
                                                        <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Key Highlights (Tags) */}
                                        <div className="flex flex-wrap gap-2 mb-8 lg:mb-10 pt-6 sm:pt-0 border-t sm:border-0 border-gray-100">
                                            {type.keyHighlights.slice(0, 3).map((highlight, hIndex) => (
                                                <span
                                                    key={hIndex}
                                                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-50 text-gray-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full border border-gray-100"
                                                >
                                                    {highlight.text}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Button */}
                                        <button
                                            onClick={() => navigate(`/residential-spaces/${type.id}`)}
                                            className="group/btn flex items-center gap-3 sm:gap-4 text-[#1a1a1a] font-bold uppercase tracking-[1px] sm:tracking-[2px] text-xs sm:text-sm hover:text-[#ffc000] transition-colors duration-300 w-full sm:w-auto justify-between sm:justify-start"
                                        >
                                            Explore Details
                                            <div className="w-8 h-[2px] bg-[#1a1a1a] group-hover/btn:bg-[#ffc000] group-hover/btn:w-12 transition-all duration-300 relative">
                                                <i className="fa-solid fa-chevron-right absolute -right-1 -top-[7px] text-[14px] sm:text-[16px]"></i>
                                            </div>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default HouseTypeMain;