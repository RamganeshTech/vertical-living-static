

// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { CASE_STUDIES_DATA, COMPANY_NAME } from '../constants/constants';
// import { Helmet } from 'react-helmet-async';

// const CaseStudiesSingle: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const navigate = useNavigate();
//     const study = CASE_STUDIES_DATA.find(s => s.id === id);

//     // Scroll to top on load
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [id]);




//     if (!study) return (
//         <div className="min-h-screen flex items-center justify-center">
//             <h1 className="text-2xl font-bold">Case Study Not Found</h1>
//         </div>
//     );


//      // Create a Schema object for Google
//     const schemaData = {
//         "@context": "https://schema.org",
//         "@type": "Article",
//         "headline": study.title,
//         "description": study.preview,
//         "image": study.image,
//         "author": {
//             "@type": "Organization",
//             "name": COMPANY_NAME
//         },
//         "publisher": {
//             "@type": "Organization",
//             "name": COMPANY_NAME,
//             "logo": {
//                 "@type": "ImageObject",
//                 "url": "https://theverticalliving.com/logo.png" // Replace with your actual logo URL
//             }
//         },
//         "mainEntityOfPage": {
//             "@type": "WebPage",
//             "@id": `https://theverticalliving.com/case-studies/${id}`
//         }
//     };


//     return (
//          <>

//    <Helmet>
//                     <title>{study.title} Interior Design & Execution in Chennai | {COMPANY_NAME}</title> 


// <meta 
//         name="description" 
//         content={`${study.preview} Explore our professional technical study on materials, hardware, and space-saving secrets used by ${COMPANY_NAME} Chennai.`} 
//     />                
//                 {/* Social Media Tags */}
//                 <meta property="og:title" content={`${study.title} | ${COMPANY_NAME}`} />
//                 <meta property="og:description" content={study.preview} />
//                 <meta property="og:image" content={study.image} />
//                 <meta property="og:type" content="article" />
//                 <meta name="twitter:card" content="summary_large_image" />

//                 <link rel="canonical" href={`https://theverticalliving.com/case-studies/${id}`} />

//                 {/* --- JSON-LD Structured Data --- */}
//                 <script type="application/ld+json">
//                     {JSON.stringify(schemaData)}
//                 </script>
//             </Helmet>

//         <div className="min-h-screen bg-white font-sans text-[#333]">
//             {/* Immersive Hero Section */}
//             <div className="relative h-[80vh] w-full overflow-hidden">
//                 <img 
//                     src={study.image} 
//                     className="w-full h-full object-cover scale-105" 
//                     // alt={study.title} 
//                       alt={`${study.title} - Modern Interior Design by ${COMPANY_NAME} Chennai`} 

//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#1a1a1a]" />

//                 <button 
//                     onClick={() => navigate("/case-studies")}
//                     className="absolute top-10 left-10 z-20 flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full hover:bg-[#ffc000] hover:text-[#1a1a1a] transition-all border border-white/20"
//                 >
//                     <i className="fa-solid fa-arrow-left"></i> Gallery
//                 </button>

//                 <div className="absolute bottom-24 left-0 w-full px-6 md:px-24">
//                     <div className="flex items-center gap-4 mb-6">
//                         <div className="h-[2px] w-12 bg-[#ffc000]"></div>
//                         <p className="text-[#ffc000] font-bold uppercase tracking-[8px] text-xs md:text-sm">Technical Study</p>
//                     </div>
//                     <h1 className="text-white text-6xl md:text-9xl font-bold leading-[0.85] tracking-tighter max-w-5xl">
//                         {study.title}
//                     </h1>
//                 </div>
//             </div>

//             {/* Content Layout */}
//             <article className="max-w-[1400px] mx-auto px-6 py-40">
//                 <div className="flex flex-col lg:flex-row gap-24">

//                     {/* Left Aspect: High-Level Narrative */}
//                     <div className="lg:w-1/3 space-y-16 lg:sticky lg:top-32 h-fit">
//                         <div>
//                             <h2 className="text-[#1a1a1a] text-xs font-bold uppercase tracking-[5px] mb-8 flex items-center gap-3">
//                                 <span className="w-2 h-2 bg-[#ffc000] rounded-full"></span>
//                                 Introduction
//                             </h2>
//                             <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium italic pr-10">
//                                 {study.fullContent.introduction}
//                             </p>
//                         </div>

//                         {/* Summary Insight Box */}
//                         <div className="p-12 bg-[#fdfdfd] border border-gray-100 rounded-[50px] relative overflow-hidden">
//                              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16"></div>
//                              <h3 className="text-[#1a1a1a] text-xs font-bold uppercase tracking-widest mb-6 relative z-10">Selection Insight</h3>
//                              <p className="text-lg text-gray-600 leading-relaxed relative z-10">
//                                 {study.fullContent.selectionProcess.split('.')[0]}. 
//                                 This fundamental approach ensures durability and aesthetic cohesion.
//                              </p>
//                         </div>
//                     </div>

//                     {/* Right Aspect: Deep Technical Sections */}
//                     <div className="lg:w-2/3 space-y-40">

//                         {/* Process Section */}
//                         <section className="relative">
//                             <span className="text-[120px] md:text-[200px] font-bold text-gray-50 leading-none absolute -top-20 -left-10 select-none uppercase z-0">
//                                 Step.01
//                             </span>
//                             <div className="relative z-10 pl-4">
//                                 <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12 tracking-tight">The Selection Process</h2>
//                                 <p className="text-xl md:text-2xl text-gray-600 leading-[1.8] font-light">
//                                     {study.fullContent.selectionProcess}
//                                 </p>
//                             </div>
//                         </section>

//                         {/* Material Section */}
//                         <section className="relative group">
//                             <div className="absolute -left-10 top-0 h-full w-2 bg-[#ffc000] rounded-full transition-all group-hover:w-4" />
//                             <div className="pl-6">
//                                 <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12 tracking-tight">Material & Durability</h2>
//                                 <p className="text-xl md:text-2xl text-gray-600 leading-[1.8] font-light">
//                                     {study.fullContent.materialScience}
//                                 </p>
//                             </div>
//                         </section>

//                         {/* Technical Execution Card */}
//                         <section className="bg-[#1a1a1a] text-white p-16 md:p-24 rounded-[80px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-white/5">
//                             <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#ffc000] tracking-tight">Technical Execution</h2>
//                             <p className="text-xl md:text-2xl text-gray-300 leading-[1.9] font-light">
//                                 {study.fullContent.technicalInsights}
//                             </p>
//                         </section>

//                     </div>
//                 </div>
//             </article>

//             {/* High-Impact CTA */}
//             <section className="bg-[#fafafa] py-24 px-6">
//                 <div className="max-w-[1200px] mx-auto text-center">
//                     <div className="inline-block px-6 py-2 bg-white rounded-full border border-gray-100 mb-10 shadow-sm">
//                          <p className="text-[#ffc000] font-bold uppercase tracking-[8px] text-[10px]">Start Your Project</p>
//                     </div>
//                     <h3 className="text-6xl md:text-9xl font-bold text-[#1a1a1a] mb-20 tracking-tighter leading-[0.85]">
//                         Build your <br /> dream space.
//                     </h3>
//                     <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
//                         <button 
//                             onClick={() => navigate('/cost-calculation')}
//                             className="bg-[#1a1a1a] cursor-pointer text-white px-16 py-8 rounded-full font-bold uppercase tracking-widest hover:bg-[#ffc000] hover:text-[#1a1a1a] transition-all shadow-2xl hover:-translate-y-2"
//                         >
//                             Start Calculation
//                         </button>
//                         <button 
//                             onClick={() => navigate('/#contact')}
//                             className="text-[#1a1a1a] cursor-pointer px-16 py-8 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all flex items-center gap-4"
//                         >
//                             Contact Designer <i className="fa-solid fa-arrow-right-long"></i>
//                         </button>
//                     </div>
//                 </div>
//             </section>
//         </div>
//         </>
//     );
// };

// export default CaseStudiesSingle;


import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CASE_STUDIES_DATA, COMPANY_NAME } from '../constants/constants';
import { Helmet } from 'react-helmet-async';

const CaseStudiesSingle: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const study = CASE_STUDIES_DATA.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!study) return <div className="py-20 text-center uppercase tracking-widest text-gray-400">Project Not Found</div>;



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
            {/* <Helmet>
                <title>{study.title} Interior Design & Execution | {COMPANY_NAME}</title>
                <meta name="description" content={study.preview} />
                <link rel="canonical" href={`https://theverticalliving.com/case-studies/${id}`} />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet> */}

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


            <div className="bg-white min-h-screen antialiased text-[#1a1a1a] selection:bg-[#ffc000]/30">

                {/* 1. Cinematic Full-Width Hero Section */}
                <div className="relative h-[90vh] w-full overflow-hidden bg-[#1a1a1a]">
                    <img
                        src={study.image}
                        className="w-full h-full object-cover scale-105"
                        alt={`${study.title} - Modern Interior Design by ${COMPANY_NAME} Chennai`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1a1a1a]" />

                    <button
                        onClick={() => navigate("/case-studies")}
                        className="absolute cursor-pointer top-10 left-6 md:left-10 z-20 flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[8px] md:text-[10px] bg-white/10 backdrop-blur-xl px-4 md:px-8 py-2 md:py-4 rounded-full  border border-white/20"
                    >
                        <i className="fa-solid fa-arrow-left"></i> Gallery
                    </button>

                    <div className="absolute bottom-24 left-0 w-full px-6 md:px-24">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[2px] w-12 bg-[#ffc000]"></div>
                            <p className="text-[#ffc000] font-bold uppercase tracking-[4px] md:tracking-[8px] text-xs md:text-sm">Technical Study</p>
                        </div>
                        <h1 className="text-white text-3xl md:text-7xl font-bold leading-[0.85] tracking-tighter max-w-5xl">
                            {study.title}
                        </h1>
                    </div>
                </div>

                {/* 2. Medium-Style Content Section */}
                <main className=" mx-auto px-6 pt-24 pb-32">

                    {/* Editorial Intro */}
                    <div className="mb-16 font-poppins">
                        <p className="text-gray-800 font-sans uppercase tracking-widest text-[10px] mb-4">Introduction </p>
                        <p className="text-sm md:text-3xl font-poppins leading-[1.6] text-gray-800  border-l-4 border-[#ffc000] pl-8">
                            {study.fullContent.introduction}
                        </p>
                    </div>

                    {/* NEW Technical Deep Dive Section */}
                    <div className="mb-24 font-poppins">
                        <p className="text-gray-800 font-sans uppercase tracking-widest text-[10px] mb-6">Technical Analysis</p>
                        <div className="text-sm md:text-xl leading-[1.9] text-gray-900 font-poppins font-light text-justify md:text-left">
                            {study.technicalDeepDive}
                        </div>
                    </div>

                    {/* Dynamic Technical Sections */}
                    <div className="space-y-24 font-sans">
                        {study.fullContent.detailedSections.map((section, index) => (
                            <section key={index} className="group">
                                <h2 className="text-xl md:text-4xl font-bold mb-4 tracking-tight text-[#1a1a1a]">
                                    {section.heading}
                                </h2>

                                <p className="text-sm md:text-xl leading-[1.9] text-gray-800 mb-10 ">
                                    {section.content}
                                </p>

                                {/* Bulleted Technical Specs */}
                                <div className="bg-gray-50 rounded-3xl p-4 md:p-12">
                                    <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3 md:mb-6">Technical Specifications</h4>
                                    <ul className="space-y-4">
                                        {section.bullets.map((bullet, bIndex) => (
                                            <li key={bIndex} className="flex items-start gap-4 text-sm md:text-base text-gray-700 leading-relaxed">
                                                <span className="w-1.5 h-1.5 bg-[#ffc000] rounded-full mt-2 shrink-0" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {index === 0 && (
                                    <div className="my-6 md:my-20 text-center px-10">
                                        <p className="text-4xl md:text-5xl font-bold tracking-tighter opacity-10 select-none">
                                            VERTICAL LIVING
                                        </p>
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>
                </main>

                {/* 3. High-Impact CTA Section */}
                <section className="bg-[#fafafa] py-16 md:py-32 px-6 border-t border-gray-100">
                    <div className="max-w-[1200px] mx-auto text-center">
                        <div className="inline-block px-6 py-2 bg-white rounded-full border border-gray-100 mb-10 shadow-sm">
                            <p className="text-[#ffc000] font-bold uppercase tracking-[4px] md:tracking-[8px] text-[10px]">Start Your Project</p>
                        </div>
                        <h3 className="text-3xl md:text-6xl font-bold text-[#1a1a1a] mb-10 md:mb-20 tracking-tighter leading-[0.85]">
                            Build your <br /> dream space.
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <button
                                onClick={() => navigate('/cost-calculation')}
                                className="w-fit md:w-auto bg-[#1a1a1a] cursor-pointer text-white px-8 py-4 md:px-16 md:py-8 rounded-full font-bold uppercase tracking-widest text-[12px] hover:bg-[#ffc000] hover:text-[#1a1a1a] transition-all shadow-2xl hover:-translate-y-2"
                            >
                                Start Calculation
                            </button>
                            <button
                                onClick={() => navigate('/#contact-us')}
                                className="w-fit md:w-auto text-[#1a1a1a] cursor-pointer px-8 py-4 md:px-16 md:py-8 rounded-full font-bold uppercase tracking-widest text-[12px] hover:bg-gray-100 transition-all flex items-center justify-center gap-4 border border-gray-200 "
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