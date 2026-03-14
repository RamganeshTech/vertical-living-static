

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CASE_STUDIES_DATA, COMPANY_NAME } from '../constants/constants';
import { Helmet } from 'react-helmet-async';

const CaseStudiesSingle: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const study = CASE_STUDIES_DATA.find(s => s.id === id);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);


   

    if (!study) return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl font-bold">Case Study Not Found</h1>
        </div>
    );


     // Create a Schema object for Google
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": study.title,
        "description": study.preview,
        "image": study.image,
        "author": {
            "@type": "Organization",
            "name": COMPANY_NAME
        },
        "publisher": {
            "@type": "Organization",
            "name": COMPANY_NAME,
            "logo": {
                "@type": "ImageObject",
                "url": "https://theverticalliving.com/logo.png" // Replace with your actual logo URL
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://theverticalliving.com/case-studies/${id}`
        }
    };


    return (
         <>

   <Helmet>
                    <title>{study.title} Interior Design & Execution in Chennai | {COMPANY_NAME}</title> 


<meta 
        name="description" 
        content={`${study.preview} Explore our professional technical study on materials, hardware, and space-saving secrets used by ${COMPANY_NAME} Chennai.`} 
    />                
                {/* Social Media Tags */}
                <meta property="og:title" content={`${study.title} | ${COMPANY_NAME}`} />
                <meta property="og:description" content={study.preview} />
                <meta property="og:image" content={study.image} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />

                <link rel="canonical" href={`https://theverticalliving.com/case-studies/${id}`} />

                {/* --- JSON-LD Structured Data --- */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

        <div className="min-h-screen bg-white font-sans text-[#333]">
            {/* Immersive Hero Section */}
            <div className="relative h-[80vh] w-full overflow-hidden">
                <img 
                    src={study.image} 
                    className="w-full h-full object-cover scale-105" 
                    // alt={study.title} 
                      alt={`${study.title} - Modern Interior Design by ${COMPANY_NAME} Chennai`} 

                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#1a1a1a]" />
                
                <button 
                    onClick={() => navigate("/case-studies")}
                    className="absolute top-10 left-10 z-20 flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full hover:bg-[#ffc000] hover:text-[#1a1a1a] transition-all border border-white/20"
                >
                    <i className="fa-solid fa-arrow-left"></i> Gallery
                </button>

                <div className="absolute bottom-24 left-0 w-full px-6 md:px-24">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-[#ffc000]"></div>
                        <p className="text-[#ffc000] font-bold uppercase tracking-[8px] text-xs md:text-sm">Technical Study</p>
                    </div>
                    <h1 className="text-white text-6xl md:text-9xl font-bold leading-[0.85] tracking-tighter max-w-5xl">
                        {study.title}
                    </h1>
                </div>
            </div>

            {/* Content Layout */}
            <article className="max-w-[1400px] mx-auto px-6 py-40">
                <div className="flex flex-col lg:flex-row gap-24">
                    
                    {/* Left Aspect: High-Level Narrative */}
                    <div className="lg:w-1/3 space-y-16 lg:sticky lg:top-32 h-fit">
                        <div>
                            <h2 className="text-[#1a1a1a] text-xs font-bold uppercase tracking-[5px] mb-8 flex items-center gap-3">
                                <span className="w-2 h-2 bg-[#ffc000] rounded-full"></span>
                                Introduction
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium italic pr-10">
                                {study.fullContent.introduction}
                            </p>
                        </div>

                        {/* Summary Insight Box */}
                        <div className="p-12 bg-[#fdfdfd] border border-gray-100 rounded-[50px] relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16"></div>
                             <h3 className="text-[#1a1a1a] text-xs font-bold uppercase tracking-widest mb-6 relative z-10">Selection Insight</h3>
                             <p className="text-lg text-gray-600 leading-relaxed relative z-10">
                                {study.fullContent.selectionProcess.split('.')[0]}. 
                                This fundamental approach ensures durability and aesthetic cohesion.
                             </p>
                        </div>
                    </div>

                    {/* Right Aspect: Deep Technical Sections */}
                    <div className="lg:w-2/3 space-y-40">
                        
                        {/* Process Section */}
                        <section className="relative">
                            <span className="text-[120px] md:text-[200px] font-bold text-gray-50 leading-none absolute -top-20 -left-10 select-none uppercase z-0">
                                Step.01
                            </span>
                            <div className="relative z-10 pl-4">
                                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12 tracking-tight">The Selection Process</h2>
                                <p className="text-xl md:text-2xl text-gray-600 leading-[1.8] font-light">
                                    {study.fullContent.selectionProcess}
                                </p>
                            </div>
                        </section>

                        {/* Material Section */}
                        <section className="relative group">
                            <div className="absolute -left-10 top-0 h-full w-2 bg-[#ffc000] rounded-full transition-all group-hover:w-4" />
                            <div className="pl-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12 tracking-tight">Material & Durability</h2>
                                <p className="text-xl md:text-2xl text-gray-600 leading-[1.8] font-light">
                                    {study.fullContent.materialScience}
                                </p>
                            </div>
                        </section>

                        {/* Technical Execution Card */}
                        <section className="bg-[#1a1a1a] text-white p-16 md:p-24 rounded-[80px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-white/5">
                            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#ffc000] tracking-tight">Technical Execution</h2>
                            <p className="text-xl md:text-2xl text-gray-300 leading-[1.9] font-light">
                                {study.fullContent.technicalInsights}
                            </p>
                        </section>

                    </div>
                </div>
            </article>

            {/* High-Impact CTA */}
            <section className="bg-[#fafafa] py-24 px-6">
                <div className="max-w-[1200px] mx-auto text-center">
                    <div className="inline-block px-6 py-2 bg-white rounded-full border border-gray-100 mb-10 shadow-sm">
                         <p className="text-[#ffc000] font-bold uppercase tracking-[8px] text-[10px]">Start Your Project</p>
                    </div>
                    <h3 className="text-6xl md:text-9xl font-bold text-[#1a1a1a] mb-20 tracking-tighter leading-[0.85]">
                        Build your <br /> dream space.
                    </h3>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <button 
                            onClick={() => navigate('/cost-calculation')}
                            className="bg-[#1a1a1a] cursor-pointer text-white px-16 py-8 rounded-full font-bold uppercase tracking-widest hover:bg-[#ffc000] hover:text-[#1a1a1a] transition-all shadow-2xl hover:-translate-y-2"
                        >
                            Start Calculation
                        </button>
                        <button 
                            onClick={() => navigate('/#contact')}
                            className="text-[#1a1a1a] cursor-pointer px-16 py-8 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all flex items-center gap-4"
                        >
                            Contact Designer <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default CaseStudiesSingle;





// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { CASE_STUDIES_DATA } from '../constants/constants';

// const CaseStudiesSingle: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const navigate = useNavigate();
//     const study = CASE_STUDIES_DATA.find(s => s.id === id);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [id]);

//     if (!study) return (
//         <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
//             <div className="text-center">
//                 <h1 className="text-4xl font-light tracking-tighter text-gray-300 mb-4">404</h1>
//                 <p className="text-gray-600 uppercase tracking-widest text-xs">Project Not Found</p>
//                 <button onClick={() => navigate(-1)} className="mt-8 text-black underline text-sm">Return to Gallery</button>
//             </div>
//         </div>
//     );

//     return (
//         <div className="min-h-screen bg-[#fff] selection:bg-[#ffc000] selection:text-black">
//             {/* Header / Back Navigation */}
//             <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 pointer-events-none">
//                 <button 
//                     onClick={() => navigate("/case-studies")}
//                     className="pointer-events-auto flex items-center gap-4 text-white font-medium text-[11px] uppercase tracking-[0.2em] bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:bg-[#ffc000] hover:text-black transition-all duration-500 group"
//                 >
//                     <i className="fa-solid fa-arrow-left-long transition-transform group-hover:-translate-x-1"></i>
//                     Back to Collection
//                 </button>
//             </nav>

//             {/* Cinematic Hero Section */}
//             <header className="relative h-[90vh] w-full flex items-end overflow-hidden bg-black">
//                 <img 
//                     src={study.image} 
//                     className="absolute inset-0 w-full h-full object-cover opacity-80" 
//                     alt={study.title} 
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
//                 <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pb-20">
//                     <div className="flex items-center gap-4 mb-8">
//                         <span className="h-[1px] w-12 bg-[#ffc000]"></span>
//                         <p className="text-[#ffc000] font-semibold uppercase tracking-[0.4em] text-[10px] md:text-xs">
//                             Design Deep Dive
//                         </p>
//                     </div>
//                     <h1 className="text-white text-5xl md:text-[120px] font-bold leading-[0.9] tracking-tighter max-w-4xl mb-4">
//                         {study.title}
//                     </h1>
//                 </div>
//             </header>

//             {/* Article Content */}
//             <main className="max-w-[1400px] mx-auto px-6 py-32 md:py-48">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    
//                     {/* Left: Sticky Abstract */}
//                     <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
//                         <div className="space-y-6">
//                             <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Introduction</h4>
//                             <p className="text-2xl md:text-3xl font-light leading-snug text-gray-900 border-l-2 border-[#ffc000] pl-8">
//                                 {study.fullContent.introduction}
//                             </p>
//                         </div>

//                         {/* Professional Metric / Quote Box */}
//                         <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
//                             <i className="fa-solid fa-quote-left text-[#ffc000] text-2xl mb-6 block"></i>
//                             <p className="text-gray-600 leading-relaxed font-medium italic">
//                                 {study.fullContent.selectionProcess.split('.')[0]}.
//                             </p>
//                             <p className="mt-4 text-[10px] uppercase tracking-widest text-gray-400 font-bold">Design Philosophy</p>
//                         </div>
//                     </aside>

//                     {/* Right: Technical Details */}
//                     <article className="lg:col-span-8 space-y-32 md:space-y-48">
                        
//                         {/* Selection Process Section */}
//                         <section className="group">
//                             <div className="flex items-baseline gap-4 mb-10">
//                                 <span className="text-[#ffc000] font-mono text-sm font-bold italic">01 //</span>
//                                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Selection Process</h2>
//                             </div>
//                             <div className="text-lg md:text-xl text-gray-600 leading-[1.8] font-normal space-y-6">
//                                 {study.fullContent.selectionProcess}
//                             </div>
//                         </section>

//                         {/* Material Section with Visual Accent */}
//                         <section className="relative">
//                             <div className="flex items-baseline gap-4 mb-10">
//                                 <span className="text-[#ffc000] font-mono text-sm font-bold italic">02 //</span>
//                                 <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Material & Durability</h2>
//                             </div>
//                             <div className="bg-white p-1 md:p-10 -ml-1 md:-ml-10 border-l border-gray-100">
//                                 <p className="text-lg md:text-xl text-gray-600 leading-[1.8]">
//                                     {study.fullContent.materialScience}
//                                 </p>
//                             </div>
//                         </section>

//                         {/* Dark Technical Card */}
//                         <section className="bg-[#0a0a0a] text-white p-12 md:p-24 rounded-3xl shadow-2xl relative overflow-hidden">
//                             <div className="absolute top-0 right-0 p-10 opacity-10">
//                                 <i className="fa-solid fa-microchip text-9xl"></i>
//                             </div>
//                             <div className="relative z-10">
//                                 <span className="text-[#ffc000] text-[10px] uppercase tracking-[0.5em] font-bold block mb-6">Internal Systems</span>
//                                 <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">Technical Execution</h2>
//                                 <p className="text-lg md:text-xl text-gray-400 leading-[1.9] font-light max-w-2xl">
//                                     {study.fullContent.technicalInsights}
//                                 </p>
//                             </div>
//                         </section>

//                     </article>
//                 </div>
//             </main>

//             {/* Footer CTA */}
//             <section className="bg-[#fcfcfc] border-t border-gray-100 py-32 px-6">
//                 <div className="max-w-[1000px] mx-auto text-center">
//                     <h3 className="text-4xl md:text-7xl font-bold text-gray-900 mb-12 tracking-tighter">
//                         Ready to elevate <br /> your home?
//                     </h3>
//                     <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                         <button 
//                             onClick={() => navigate('/cost-calculation')}
//                             className="bg-black text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#ffc000] hover:text-black transition-all duration-500 shadow-xl"
//                         >
//                             Get a Quote
//                         </button>
//                         <button 
//                             onClick={() => navigate('/#contact')}
//                             className="bg-transparent text-black border border-black/10 px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-500"
//                         >
//                             Speak with a Designer
//                         </button>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default CaseStudiesSingle;