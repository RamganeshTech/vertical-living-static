// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { PACKAGES } from '../constants/constants';
// import Booking from './Payment/Booking';
// const PackageSectionSingle: React.FC = () => {
//     const { planId } = useParams<{ planId: string }>();
//     const selectedPackage = PACKAGES.find(p => p.id === planId);

//     if (!selectedPackage) {
//         return <div className="py-20 text-center font-bold uppercase tracking-widest text-gray-400">Package not found</div>;
//     }

//     return (
//         <section className="min-h-screen bg-[#fcfcfc] py-12 md:py-20 font-inter">
//             <div className="container mx-auto px-4">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

//                     {/* Left Column: Image and Details */}
//                     <div className="space-y-10">
//                         {/* Image Header */}
//                         <div className="relative h-[300px] md:h-[450px] rounded-[40px] overflow-hidden shadow-2xl">
//                             <img 
//                                 src={selectedPackage.img} 
//                                 alt={selectedPackage.name} 
//                                 className="w-full h-full object-cover"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10">
//                                 <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
//                                     {selectedPackage.name}
//                                 </h1>
//                                 <p className="text-[#ffc000] text-2xl font-bold mt-2">
//                                     ₹{selectedPackage.price.toLocaleString()}
//                                 </p>
//                             </div>
//                         </div>

//                         {/* What's Included */}
//                         <div className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 shadow-sm">
//                             <h3 className="text-xs font-bold uppercase tracking-[3px] text-[#1a1a1a] mb-6 flex items-center gap-3">
//                                 <span className="w-8 h-[2px] bg-[#ffc000]"></span> What's Included
//                             </h3>
//                             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 {selectedPackage.includes.map((feature, idx) => (
//                                     <li key={idx} className="flex items-start gap-3 text-[13px] text-gray-600 font-medium">
//                                         <i className="fa fa-check text-[#ffc000] mt-1"></i>
//                                         {feature}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* General Service Conditions */}
//                         <div className="bg-gray-50 p-8 md:p-10 rounded-[40px] border border-gray-200/50">
//                             <h3 className="text-xs font-bold uppercase tracking-[3px] text-gray-400 mb-6">Terms & Conditions</h3>
//                             <ul className="space-y-4">
//                                 {[
//                                     "All services are stage-specific and do not automatically include other deliverables.",
//                                     "Revisions are managed under the structured revision framework.",
//                                     "Delays in client feedback may affect delivery timelines.",
//                                     "Deliverables are issued only after full payment of the respective package.",
//                                     "Intellectual property remains with the firm until agreed terms are fulfilled."
//                                 ].map((condition, idx) => (
//                                     <li key={idx} className="text-[11px] text-gray-500 leading-relaxed flex gap-3 italic">
//                                         <span className="text-[#ffc000]">•</span>
//                                         {condition}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Right Column: Booking Component */}
//                     <div className="sticky top-10">
//                         {/* We pass PACKAGES here as requested */}
//                         <Booking planId={planId!} PLANS={PACKAGES} />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PackageSectionSingle;




//  SECOND VERSION

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { PACKAGES } from '../constants/constants';
// import Booking from './Payment/Booking';

// const PackageSectionSingle: React.FC = () => {
//     const { planId } = useParams<{ planId: string }>();
//     const selectedPackage = PACKAGES.find(p => p.id === planId);

//     if (!selectedPackage) {
//         return (
//             <div className="h-screen flex items-center justify-center">
//                 <p className="text-gray-400 font-bold uppercase tracking-[4px]">Package not found</p>
//             </div>
//         );
//     }

//     return (
//         <section className="min-h-screen bg-white font-inter">
//             {/* 1. Immersive Hero Image - No margins, fills width */}
//             <section className="relative w-full h-[90vh] md:h-[90vh] overflow-hidden">
//                 <img 
//                     src={selectedPackage.img} 
//                     alt={selectedPackage.name} 
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-20">
//                     <h1 className="text-4xl md:text-7xl font-bold text-white uppercase  leading-none">
//                         {selectedPackage.name}
//                     </h1>
//                     <div className="flex items-center gap-6 mt-6">
//                         <p className="text-3xl md:text-5xl font-bold text-[#ffc000]">₹{selectedPackage.price.toLocaleString()}</p>
//                         {/* <div className="h-[2px] w-20 bg-[#ffc000]/50"></div> */}
//                         {/* <span className="text-xs md:text-sm text-gray-300 uppercase tracking-[3px] font-bold">Premium Service</span> */}
//                     </div>
//                 </div>
//             </section>

//             {/* Main Content Area - Wider container for "Filled" look */}
//             <div className="max-w-[1100px] mx-auto px-6 py-12 space-y-20">

//                 {/* 2. Service Deliverables - Larger text and cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
//                     <div className="md:col-span-4">
//                         <h3 className="text-[14px] font-bold uppercase tracking-[4px] text-gray-400 sticky top-24">
//                             Deliverables
//                         </h3>
//                     </div>
//                     <div className="md:col-span-8 bg-[#fcfcfc] rounded-[50px] p-10 md:p-16 border border-gray-100 shadow-sm">
//                         <ul className="space-y-8">
//                             {selectedPackage.includes.map((feature, idx) => (
//                                 <li key={idx} className="flex items-start gap-6 text-[18px] md:text-[22px] text-gray-800 font-semibold leading-tight">
//                                     <i className="fa fa-check-circle text-[#ffc000] text-2xl md:text-3xl mt-1"></i>
//                                     {feature}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>

//                 {/* 3. General Service Conditions - Two Column for better space usage */}
//                 <div className="space-y-10">
//                      <div className="text-center">
//                         <h3 className="text-[14px] font-bold uppercase tracking-[4px] text-gray-400 mb-2">Terms of Service</h3>
//                         <div className="w-12 h-1 bg-[#ffc000] mx-auto"></div>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {[
//                             "All services are stage-specific and do not automatically include other deliverables.",
//                             "Revisions are managed under the structured revision framework.",
//                             "Delays in client feedback may affect delivery timelines.",
//                             "Deliverables are issued only after full payment of the respective package.",
//                             "Intellectual property remains with the firm until agreed terms are fulfilled."
//                         ].map((condition, idx) => (
//                             <div key={idx} className="flex gap-6 p-8 bg-gray-50 rounded-[30px] border border-gray-100 items-center transition-hover hover:bg-white hover:shadow-md duration-300">
//                                 <span className="text-3xl font-bold text-[#ffc000]/30 italic">0{idx + 1}</span>
//                                 <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
//                                     {condition}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* 4. Payment Section - High impact background */}
//                 <div className="bg-[#1a1a1a] rounded-[60px] p-10 md:p-20 text-white relative overflow-hidden">
//                     {/* Background decoration to fill space */}
//                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc000] opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>

//                     <div className="relative z-10 flex flex-col items-center">
//                         <div className="text-center mb-12">
//                             <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 tracking-tighter">Secure Your Design</h2>
//                             <p className="text-gray-400 text-sm uppercase tracking-[4px]">Confirm details to initiate {selectedPackage.name}</p>
//                         </div>

//                         <div className="w-full max-w-[600px] bg-white rounded-[40px] overflow-hidden text-black shadow-2xl">
//                             <Booking planId={planId!} PLANS={PACKAGES} />
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default PackageSectionSingle;



//  THIRD VERSION

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { PACKAGES } from '../constants/constants';
// import Booking from './Payment/Booking';

// const PackageSectionSingle: React.FC = () => {
//     const { planId } = useParams<{ planId: string }>();
//     const selectedPackage = PACKAGES.find(p => p.id === planId);

//     if (!selectedPackage) {
//         return (
//             <div className="h-screen flex items-center justify-center">
//                 <p className="text-gray-400 font-bold uppercase tracking-[4px]">Package not found</p>
//             </div>
//         );
//     }

//     return (
//         <section className="min-h-screen bg-white font-inter">
//             {/* 1. Immersive Hero Section */}
//             <div className="relative w-full h-[90vh] overflow-hidden">
//                 <img 
//                     src={selectedPackage.img} 
//                     alt={selectedPackage.name} 
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-20">
//                     <h1 className="text-4xl md:text-8xl font-bold text-white uppercase leading-none tracking-tighter">
//                         {selectedPackage.name}
//                     </h1>
//                     <div className="flex items-center gap-8 mt-8">
//                         <p className="text-4xl md:text-6xl font-bold text-[#ffc000]">₹{selectedPackage.price.toLocaleString()}</p>
//                         <div className="h-1 w-24 bg-[#ffc000]"></div>
//                         <p className="text-gray-300 text-sm md:text-lg font-medium max-w-xl uppercase tracking-widest leading-relaxed">
//                             {selectedPackage.suitable}
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content Area - Expanded to 2xl for Wider Look */}
//             <div className="max-w-screen-2xl mx-auto px-6 py-20 space-y-32">

//                {/* 2. Nature of Service Highlight (Solid Design) */}
//                 <div className="bg-[#1a1a1a] rounded-[40px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border-b-8 border-[#ffc000]">
//                     <div className="max-w-3xl">
//                         <span className="text-[14px] font-black uppercase tracking-[6px] text-[#ffc000] block mb-6">Nature of Service</span>
//                         <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight italic">
//                             "{selectedPackage.nature}"
//                         </h2>
//                     </div>
//                     <div className="w-24 h-24 bg-[#ffc000] rounded-2xl flex items-center justify-center shadow-2xl text-4xl text-[#1a1a1a] rotate-3 group-hover:rotate-0 transition-transform">
//                         <i className={`fa ${selectedPackage.icon}`}></i>
//                     </div>
//                 </div>

//                 {/* 3. Redesigned Scope Table (Includes vs Not Includes) */}
//                 <div className="space-y-16">
//                     <div className="flex items-center gap-6">
//                         <div className="h-[2px] w-20 bg-[#1a1a1a]"></div>
//                         <h3 className="text-[18px] font-black uppercase tracking-[8px] text-[#1a1a1a]">Scope Analysis</h3>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 rounded-[50px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-2 border-[#eee]">
//                         {/* Includes Column */}
//                         <div className="bg-white p-12 md:p-24">
//                             <div className="bg-green-600 text-white inline-flex items-center gap-4 px-8 py-3 rounded-full mb-16 shadow-xl shadow-green-200">
//                                 <i className="fa fa-check text-xl"></i>
//                                 <h4 className="text-xl font-black uppercase tracking-widest">Inclusions</h4>
//                             </div>
//                             <ul className="space-y-10">
//                                 {selectedPackage.includes.map((item, idx) => (
//                                     <li key={idx} className="flex items-start gap-8 text-[20px] md:text-[24px] text-[#1a1a1a] font-bold leading-tight">
//                                         <span className="text-[#ffc000] text-3xl">•</span>
//                                         {item}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Not Includes Column */}
//                         <div className="bg-[#1a1a1a] p-12 md:p-24">
//                             <div className="bg-red-600 text-white inline-flex items-center gap-4 px-8 py-3 rounded-full mb-16 shadow-xl shadow-red-900/40">
//                                 <i className="fa fa-times text-xl"></i>
//                                 <h4 className="text-xl font-black uppercase tracking-widest">Exclusions</h4>
//                             </div>
//                             <ul className="space-y-10">
//                                 {selectedPackage.notIncludes.map((item, idx) => (
//                                     <li key={idx} className="flex items-start gap-8 text-[20px] md:text-[24px] text-gray-500 font-bold leading-tight">
//                                         <span className="text-red-600 text-3xl">/</span>
//                                         {item}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 4. Service Conditions - Left Aligned & High Visibility */}
//                 <div className="max-w-screen-xl mr-auto space-y-16">
//                     <div className="flex items-center gap-6">
//                         <div className="h-[2px] w-20 bg-[#1a1a1a]"></div>
//                         <h3 className="text-[18px] font-black uppercase tracking-[8px] text-[#1a1a1a]">General Service Conditions</h3>
//                     </div>

//                     <div className="space-y-6">
//                         {[
//                             "All services are stage-specific and do not automatically include other deliverables.",
//                             "Revisions are managed under the structured revision framework.",
//                             "Delays in client feedback may affect delivery timelines.",
//                             "Deliverables are issued only after full payment of the respective package.",
//                             "Intellectual property remains with the firm until agreed terms are fulfilled."
//                         ].map((condition, idx) => (
//                             <div key={idx} className="group flex items-center gap-10 p-12 bg-[#fcfcfc] border-l-8 border-[#eee] hover:border-[#ffc000] transition-all rounded-r-[30px] shadow-sm">
//                                 <span className="text-6xl font-black text-[#eee] group-hover:text-[#ffc000]/20 transition-colors italic leading-none">0{idx + 1}</span>
//                                 <p className="text-[20px] md:text-[23px] text-[#222] leading-relaxed font-bold">
//                                     {condition}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* 5. Payment Section */}
//                 <div className="bg-[#1a1a1a] rounded-[80px] p-10 md:p-24 text-white">
//                     <div className="flex flex-col items-center">
//                         <div className="text-center mb-16">
//                             <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">Secure Your Booking</h2>
//                             <p className="text-gray-400 text-sm md:text-lg uppercase tracking-[6px] font-medium">Complete payment to activate {selectedPackage.name}</p>
//                         </div>

//                         <div className="w-full max-w-[650px] bg-white rounded-[50px] overflow-hidden text-black shadow-2xl shadow-black/50">
//                             <Booking planId={planId!} PLANS={PACKAGES} />
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default PackageSectionSingle;



//  FOURTH VERSION

import React from 'react';
import { useParams } from 'react-router-dom';
import { PACKAGES } from '../constants/constants';
import Booking from './Payment/Booking';

const PackageSectionSingle: React.FC = () => {
    const { planId } = useParams<{ planId: string }>();
    const selectedPackage = PACKAGES.find(p => p.id === planId);

    if (!selectedPackage) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p className="text-gray-500 font-bold uppercase tracking-[4px]">Package not found</p>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-white font-inter">
            {/* 1. Full-Height Immersive Hero */}
            <div className="relative w-full h-[90vh] overflow-hidden">
                <img
                    src={selectedPackage.img}
                    alt={selectedPackage.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-black/20 to-transparent flex flex-col justify-end p-8 md:p-20">
                    <h1 className="text-4xl md:text-8xl font-bold text-white uppercase leading-none tracking-tighter">
                        {selectedPackage.name}
                    </h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mt-8">
                        <p className="text-4xl md:text-6xl font-bold text-[#ffc000]">₹{selectedPackage.price.toLocaleString()}</p>
                        <div className="hidden md:block h-[2px] w-20 bg-[#ffc000]"></div>
                        <p className="text-white/90 text-sm md:text-xl font-medium max-w-2xl uppercase tracking-[2px] leading-tight">
                            {selectedPackage.suitable}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 py-24 space-y-40">

                {/* 2. Professional Details & Nature Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                    <div className="md:col-span-7 space-y-8">
                        <span className="text-xs font-bold uppercase tracking-[6px] text-[#ffc000]">Package Description</span>
                        <h2 className="text-2xl md:text-5xl font-bold text-[#111] leading-tight">
                            {selectedPackage.details}
                        </h2>
                        <div className="flex items-center gap-6 p-8 bg-[#f9f9f9] border-l-4 border-[#ffc000] rounded-r-3xl">
                            <div className="text-3xl text-[#ffc000]"><i className={`fa ${selectedPackage.icon}`}></i></div>
                            <p className="text-[#333] font-bold italic text-lg leading-snug">"{selectedPackage.nature}"</p>
                        </div>
                    </div>
                    <div className="hidden md:block md:col-span-5 h-[400px] rounded-[40px] overflow-hidden">
                        <img src={selectedPackage.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Detail view" />
                    </div>
                </div>

                {/* 3. Package Inclusions - Clean Vertical Grid */}
                <div className="space-y-16">
                    <div className="flex items-center gap-4">
                        <div className="h-1 w-12 bg-[#ffc000]"></div>
                        <h3 className="text-[14px] font-bold uppercase tracking-[8px] text-[#111]">Includes</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                        {selectedPackage.includes.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-6 group">
                                <span className="flex-shrink-0 w-12 h-12 bg-[#ffc000] rounded-full flex items-center justify-center text-[#111] font-bold shadow-lg shadow-[#ffc000]/20">
                                    <i className="fa fa-check"></i>
                                </span>
                                <p className="text-xl md:text-2xl font-bold text-[#222] leading-tight pt-2">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Terms & Conditions - Left Aligned Solid Block */}
                <div className="space-y-12 max-w-5xl">
                    {/* Section Header */}
                    <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                        <div className="h-6 w-[3px] bg-[#ffc000]"></div>
                        <h3 className="text-[13px] font-bold uppercase tracking-[5px] text-[#111]">
                            Terms & Conditions
                        </h3>
                    </div>

                    {/* Clean, Professional List */}
                    <div className="space-y-8 pl-2">
                        {selectedPackage.termsAndConditions.map((term, idx) => (
                            <div key={idx} className="flex gap-8 group">
                                {/* Subtle Numbering */}
                                <span className="text-[14px] font-bold text-gray-500 min-w-[25px] pt-1">
                                    0{idx + 1}.
                                </span>

                                {/* Refined Text - Not too bold, high legibility */}
                                <p className="text-[17px] md:text-[19px] text-[#333] font-medium leading-relaxed tracking-tight group-hover:text-black transition-colors duration-300">
                                    {term}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Subtle Footer Note */}
                    {/* <p className="text-[11px] text-gray-400 font-bold uppercase tracking-[2px] pt-4 italic">
                        * These terms are specific to the {selectedPackage.name} and are legally binding upon payment.
                    </p> */}
                </div>

                {/* 5. Direct Payment Portal */}
                <div className="bg-[#1a1a1a] rounded-[80px] p-10 md:p-24 text-white">
                    <div className="flex flex-col items-center">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4 ">Secure Your Booking</h2>
                            <p className="text-gray-400 text-sm md:text-lg uppercase tracking-[6px] font-medium">Complete payment to activate {selectedPackage.name}</p>
                        </div>

                        <div className="w-full max-w-[650px] bg-white rounded-[50px] overflow-hidden text-black shadow-2xl shadow-black/50">
                            <Booking planId={planId!} PLANS={PACKAGES} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageSectionSingle;