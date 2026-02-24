import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PACKAGES } from '../../constants/constants';
import { motion } from 'framer-motion';

const PackagesSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section id="service" className="py-20 bg-white">
            <div className="mx-auto px-4 mb-12 text-center">
                {/* <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#1a1a1a]">
                    Our <span className="text-[#ffc000]">Service Packages</span>
                </h2>
                <div className="w-20 h-1.5 bg-[#ffc000] mt-4"></div> */}

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
                    Our <span className="text-[#ffc000]">Service Packages</span>
                </h2>
                <div className="w-24 h-1.5 bg-[#ffc000] mx-auto mt-6 rounded-full shadow-[0_5px_15px_rgba(255,192,0,0.3)]"></div>



                <p className="mt-6 !text-center  text-gray-500 font-medium  uppercase text-xs tracking-widest">
                    Available individually or as part of a larger project engagement.
                </p>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto no-scrollbar gap-8 px-[5%] pb-12">
                {PACKAGES.map((pkg, i) => (
                    <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        /* Reduced Height to 450px for a more compact, professional look */
                        className="min-w-[300px] md:min-w-[380px] h-[450px] group relative rounded-[35px] overflow-hidden shadow-xl border border-gray-100 flex-shrink-0 cursor-pointer"
                    >
                        {/* Background Image */}
                        <img
                            src={pkg.img}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            alt={pkg.name}
                        />

                        {/* Darkened Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-300"></div>

                        {/* Card Content Container */}
                        <div className="absolute inset-x-0 bottom-0 p-8 text-white flex flex-col justify-end">

                            {/* Package Name - Changed to font-bold */}
                            <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2 group-hover:text-[#ffc000] transition-colors">
                                {pkg.name}
                            </h3>

                            {/* Price and Label */}
                            <div className="flex items-center gap-3 mb-4">
                                <p className="text-[#ffc000] font-bold text-xl">₹{pkg.price.toLocaleString()}</p>
                                {/* <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Fixed Price</span> */}
                            </div>

                            {/* Suitable For - Reduced font-bold */}
                            <p className="text-[11px] text-gray-300 font-bold uppercase tracking-wider mb-6 leading-relaxed">
                                {pkg.suitable}
                            </p>

                            {/* Action Button - Simplified to 'Book' */}
                            <div className="max-h-0 opacity-0 group-hover:max-h-[100px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                                <button
                                    onClick={() => navigate(`/singleservice/${pkg.id}`)}
                                    className="w-full cursor-pointer bg-[#ffc000] text-[#1a1a1a] py-3.5 rounded-xl font-bold uppercase text-[11px] tracking-[2px] hover:bg-white transition-all duration-300"
                                >
                                    Book
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PackagesSection;



