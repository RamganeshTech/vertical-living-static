import React from 'react';
import { motion } from 'framer-motion';
import { phoneNumber } from '../components/FloatingContact';

const ConnectSection: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-[#fafafa] font-inter relative overflow-hidden">

            {/* Decorative Architectural Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="grid grid-cols-12 h-full border-l border-black">
                    {[...Array(11)].map((_, i) => (
                        <div key={i} className="border-r border-black h-full"></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}  
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-4xl font-[500] uppercase tracking-tighter text-[#1a1a1a]">
                            Connect <span className="text-[#ffc000]">With Us</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-[#ffc000] mx-auto mt-3 rounded-full shadow-[0_5px_15px_rgba(255,192,0,0.3)]"></div>
                        <p className="text-gray-500 text-[12px] md:text-base mt-4 max-w-xl mx-auto leading-relaxed font-medium uppercase tracking-wide">
                            Reach out via WhatsApp or give us a call for the best home design experience.
                            Our experts are ready to bring your vision to life.
                        </p>
                    </motion.div>

                    {/* Action Buttons Container */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">

                        {/* Call Now Button */}
                        <motion.a
                            //   href="tel:${phoneNumber}" // Replace with actual number
                            href={`tel:${phoneNumber}`}

                            whileHover={{ y: -5, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#1a1a1a] text-white px-10 py-5 rounded-full font-black uppercase tracking-[2px] text-sm shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:bg-[#ffc000] hover:text-black transition-all duration-300"
                        >
                            <i className="fa fa-phone text-lg"></i>
                            Call Now
                        </motion.a>

                        {/* WhatsApp Button */}
                        <motion.a
                            href={`https://wa.me/${phoneNumber}`} // Replace with actual number
                            whileHover={{ y: -5, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border-2 border-[#eee] text-[#1a1a1a] px-10 py-5 rounded-full font-black uppercase tracking-[2px] text-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300"
                        >
                            <i className="fab fa-whatsapp text-xl text-[#25D366]"></i>
                            WhatsApp
                        </motion.a>
                    </div>

                    {/* Business Email Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12"
                    >
                        {/* <a 
              href="mailto:admin@ramstechcircleopcpvtltd.com" 
              className="text-[#1a1a1a] font-bold text-xs uppercase tracking-[3px] hover:text-[#ffc000] transition-colors border-b-2 border-[#ffc000] pb-1"
            >
              admin@ramstechcircleopcpvtltd.com
            </a> */}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ConnectSection;