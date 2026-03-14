
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CASE_STUDIES_DATA, COMPANY_NAME } from '../constants/constants';
import { Helmet } from 'react-helmet-async';

const CaseStudiesMain: React.FC = () => {
    const navigate = useNavigate();
    const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

    return (
        <>
            <Helmet>
                <title>Modern Interior Design Case Studies Chennai | {COMPANY_NAME}</title>

                <meta
                    name="description"
                    content={`Discover how ${COMPANY_NAME} transforms homes in Chennai. Explore 16+ case studies covering modular kitchens, luxury wardrobes, and space-saving furniture.`}
                />
                {/* <meta name="keywords" content="interior design portfolio, chennai home interiors, kitchen design gallery, wardrobe design projects" /> */}
                <meta
                    name="keywords"
                    content="interior design gallery chennai, home decor portfolio, modular kitchen designs chennai, luxury wardrobe collection, 3BHK interior ideas, best interior designers near me"
                />
                <meta property="og:title" content={`Interior Design Case Studies | ${COMPANY_NAME}`} />

                <meta
                    property="og:description"
                    content={`Discover how ${COMPANY_NAME} transforms homes in Chennai. Explore 16+ case studies covering modular kitchens, wardrobes, space-saving furniture projects and smart storage, and bespoke furniture.`}
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://theverticalliving.com/feature-image.jpg" />
                <link rel="canonical" href="https://theverticalliving.com/case-studies" />

                {/* 5. Collection Schema: Tells Google this is a list of items */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Interior Design Case Studies Gallery",
                        "description": "A collection of residential interior design projects in Chennai including kitchens, wardrobes, and living spaces.",
                        "url": "https://theverticalliving.com/case-studies",
                        "about": "Home Interior Design",
                        "creator": {
                            "@type": "Organization",
                            "name": COMPANY_NAME,
                            "url": "https://theverticalliving.com"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": COMPANY_NAME,
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://theverticalliving.com/logo.png" // Make sure logo.png is in your public folder!
                            }
                        }
                    })}
                </script>
            </Helmet>
            <div className="min-h-screen bg-white font-sans">
                <main className="max-w-[1400px] mx-auto px-6 py-24">
                    {/* Modern Minimalist Header */}
                    <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl md:text-8xl font-bold text-[#1a1a1a] tracking-tighter leading-[0.9] mb-8">
                                Design <br />
                                <span className="text-[#ffc000]">Excellence.</span>
                            </h1>
                            <div className="w-20 h-2 bg-[#ffc000] mb-8"></div>
                            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                                A curation of our most challenging and rewarding interior projects,
                                detailing the technical precision behind every vertical inch.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <span className="text-[140px] font-bold text-gray-100 leading-none select-none">
                                STUDIES
                            </span>
                        </div>
                    </div>

                    {/* Refined Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {CASE_STUDIES_DATA.map((study, index) => (
                            <div
                                key={study.id}
                                onClick={() => navigate(`/case-studies/${study.id}`)}
                                className={`group relative cursor-pointer transition-all duration-700 ${index % 2 !== 0 ? 'md:mt-24' : '' // Staggered Masonry effect
                                    }`}
                            >
                                {/* Image Container with Floating Label */}
                                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl mb-8">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        // className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 

                                        // 2. Trigger state change when download completes
                                        onLoad={() => setLoadedImages(prev => ({ ...prev, [study.id]: true }))}

                                        // 3. The CSS Trick:
                                        // If not loaded: Blur + Scale up + Low Opacity
                                        // If loaded: Remove blur + Normal Scale + Full Opacity
                                        className={`
                    w-full h-full object-cover transition-all duration-500 ease-out
                    group-hover:scale-110
                    ${loadedImages[study.id]
                                                ? 'blur-0 scale-100 opacity-100'
                                                : 'blur-2xl scale-110 opacity-0'}
                `}
                                    />

                                    {/* Image Overlay Fade */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[3px] text-[#1a1a1a] shadow-sm">
                                            Interior Architecture
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="px-2">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-[#ffc000] font-bold text-lg">0{index + 1}</span>
                                        <div className="h-[1px] w-12 bg-gray-200 group-hover:w-20 group-hover:bg-[#ffc000] transition-all duration-500"></div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#ffc000] transition-colors duration-300">
                                        {study.title}
                                    </h3>

                                    <p className="text-gray-500 text-lg leading-relaxed mb-6 line-clamp-2 max-w-md">
                                        {study.preview}
                                    </p>

                                    <div className="flex items-center gap-2 text-[#1a1a1a] font-bold text-xs uppercase tracking-[4px] group-hover:gap-4 transition-all duration-300">
                                        Explore Case <i className="fa-solid fa-chevron-right text-[10px] mt-0.5"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Aesthetic Footer Background Element */}
                {/* <div className="absolute -z-10 bottom-0 right-0 opacity-5 pointer-events-none">
                <img src="/logo.png" alt="" className="w-96 grayscale" />
            </div> */}
            </div>
        </>
    );
};

export default CaseStudiesMain;