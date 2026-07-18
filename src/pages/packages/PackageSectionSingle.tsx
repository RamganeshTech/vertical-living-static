import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { PACKAGES } from '../constants/constants'; // Adjust path to your allPackages data
import Booking from '../Payment/Booking';
import { motion } from 'framer-motion';
import { allPackages } from '../../constants/constants';

const PackageSectionSingle: React.FC = () => {
    const { planId } = useParams<{ planId: string }>();
    const selectedPackage = allPackages.find(p => p.id === planId);



    const [isCopied, setIsCopied] = useState<boolean>(false);

    // Function to handle Copying Link
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2s
    };



    if (!selectedPackage) {
        return <div className="h-screen flex items-center justify-center">
            <p className="text-gray-500 font-bold uppercase tracking-[4px]">Package not found</p>
        </div>
    }


    // Function to handle WhatsApp Sharing
    const handleWhatsAppShare = () => {
        const shareText = `Check out the ${selectedPackage.name} at Vertical Living: ${window.location.href}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    };

    return (
        <section className="min-h-screen bg-white font-inter">
            {/* 1. Immersive Hero */}
            {/* <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
                <img src={selectedPackage.img} className="w-full h-full object-cover" alt={selectedPackage.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8 md:p-24">
                    <h1 className="text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter leading-none">
                        {selectedPackage.name}
                    </h1>
                    <p className="text-[#ffc000] text-3xl md:text-5xl font-bold mt-6 italic">₹{selectedPackage.price}</p>
                </div>
            </div> */}


            {/* 1. Full-Height Immersive Hero */}
            <div className="relative w-full h-[90vh] overflow-hidden">
                <img
                    src={selectedPackage.img}
                    alt={selectedPackage.name}
                    className="w-full h-full object-cover"
                />
                {/* High-contrast gradient for maximum text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-black/20 to-transparent flex flex-col justify-end p-8 md:p-20">
                    <h1 className="text-4xl md:text-7xl font-bold text-white uppercase leading-none">
                        {selectedPackage.name}
                    </h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mt-8">
                        {/* Price highlight in signature gold */}
                        <p className="text-4xl md:text-6xl font-bold text-[#ffc000]">
                            {selectedPackage.price.toLocaleString()}
                        </p>
                        {/* Architectural accent line */}
                        <div className="hidden md:block h-[2px] w-20 bg-[#ffc000]"></div>
                        {/* Suitable-for statement with reduced opacity for hierarchy */}
                        <p className="text-white/90 text-sm md:text-xl font-medium max-w-2xl uppercase tracking-[2px] leading-tight">
                            {selectedPackage.suitable}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 py-24 space-y-32">

                {/* 2. Professional Details & Material Profile */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                    <div className="md:col-span-7 space-y-10">
                        <div className="space-y-4">
                            <span className="text-xs font-bold uppercase tracking-[6px] text-[#ffc000]">Technical Profile</span>
                            <div className="flex items-center gap-4">
                                <div className="h-1 w-12 bg-[#ffc000]"></div>
                                <h3 className="text-[14px] font-bold uppercase tracking-[8px] text-[#111]">Material Specifications</h3>
                            </div>
                        </div>

                        {/* Professional One-by-One Material Listing */}
                        <div className="space-y-4">
                            {selectedPackage.specs.map((spec, i) => (
                                <div key={i} className="flex items-center gap-6 p-5 bg-[#fcfcfc] border-l-4 border-[#ffc000] transition-all group">
                                    <span className="text-[12px] font-bold text-[#ffc000]">0{i + 1}</span>
                                    <p className="text-[16px] md:text-[18px] font-bold text-[#444] leading-tight">
                                        {spec}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Simplified Suitable For Label */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-3">
                                <i className="fa fa-info-circle text-[#ffc000]"></i>
                                <span className="text-[12px] font-bold uppercase tracking-[4px] text-gray-800">Suitable For</span>
                            </div>
                            <div className="p-8 bg-[#f9f9f9] rounded-[30px] border border-gray-100">
                                <p className="text-[#1a1a1a] font-bold text-lg md:text-xl leading-relaxed">
                                    {selectedPackage.suitable}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Architectural Side Image */}
                    <div className="hidden md:block md:col-span-5 h-[500px] rounded-[40px] overflow-hidden shadow-sm">
                        <img
                            src={selectedPackage.img}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            alt="Technical View"
                        />
                    </div>
                </div>

                {/* 3. Terms & Conditions - Clean Vertical Flow */}
                <div className="space-y-12 max-w-5xl">
                    <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                        <div className="h-6 w-[3px] bg-[#ffc000]"></div>
                        <h3 className="text-[13px] font-bold uppercase tracking-[5px] text-[#111]">
                            Standard Service Conditions
                        </h3>
                    </div>

                    <div className="space-y-8 pl-2">
                        {[
                            "Budget range is indicative and subject to final site measurements.",
                            "Selections are restricted to specific catalogs within this package tier.",
                            "Execution timelines vary based on civil site readiness.",
                            "Vertical Living retains intellectual property of all issued designs."
                        ].map((term, idx) => (
                            <div key={idx} className="flex gap-8 group">
                                <span className="text-[14px] font-bold text-gray-500 min-w-[25px] pt-1">
                                    0{idx + 1}.
                                </span>
                                <p className="text-[17px] md:text-[19px] text-[#333] font-medium leading-relaxed tracking-tight group-hover:text-black transition-colors duration-300">
                                    {term}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Payment Integration */}
                <div className="bg-[#1a1a1a] rounded-[60px] p-10 md:p-24 text-white flex flex-col items-center">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">Secure Your Booking</h2>
                        <p className="text-gray-400 text-sm md:text-lg uppercase tracking-[6px] font-medium">Initial Deposit for {selectedPackage.name}</p>
                    </div>
                    <div className="w-full max-w-[650px] bg-white rounded-[50px] overflow-hidden text-black shadow-2xl">
                        {/* Ensure your Booking component matches your provided structure */}
                        <Booking planId={planId!} PLANS={allPackages} />
                    </div>
                </div>


                <div className="border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-xl md:text-3xl font-bold uppercase  text-[#1a1a1a]">
                                Share This <span className="text-[#ffc000]">Package</span>
                            </h2>
                            <div className="w-12 h-1 bg-[#ffc000] mx-auto mt-3 rounded-full"></div>
                            <p className="text-gray-500 text-[11px] md:text-xs mt-4 max-w-md mx-auto leading-relaxed font-bold uppercase tracking-[2px]">
                                Share these details with your partner or client to discuss the design further.
                            </p>
                        </motion.div>

                        {/* Action Buttons Container */}
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">

                            {/* WhatsApp Button */}
                            <motion.button
                                onClick={handleWhatsAppShare}
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-3 bg-white border-2 border-[#eee] text-[#1a1a1a] px-10 py-5 rounded-full font-bold uppercase tracking-[2px] text-[12px] shadow-sm hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300"
                            >
                                <i className="fa fa-whatsapp text-xl text-[#25D366]"></i>
                                Share on WhatsApp
                            </motion.button>

                            {/* Copy Link Button */}
                            <motion.button
                                onClick={handleCopyLink}
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-3 bg-[#1a1a1a] text-white px-10 py-5 rounded-full font-bold uppercase tracking-[2px] text-[12px] shadow-xl hover:bg-[#ffc000] hover:text-black transition-all duration-300"
                            >
                                <i className={`fa ${isCopied ? 'fa-check' : 'fa-link'} text-lg`}></i>
                                {isCopied ? 'Link Copied!' : 'Copy Package Link'}
                            </motion.button>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default PackageSectionSingle;