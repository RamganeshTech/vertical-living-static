import React from 'react';
import { motion } from 'framer-motion';

// Using your provided business number
export const phoneNumber = "919363993814";

const StickySideContact: React.FC = () => {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex flex-col gap-2 pointer-events-none">

            {/* WhatsApp Button - Middle Right Style */}
            <motion.a
                href={`https://wa.me/${phoneNumber}?text=Hi! I am interested in an interior design consultation with Vertical Living.`}
                target="_blank"
                rel="noreferrer"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ x: -10 }}
                className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-l-2xl shadow-xl flex items-center justify-center cursor-pointer hover:bg-[#128C7E] transition-all duration-300 group"
                title="WhatsApp Us"
            >
                {/* <i className="fas fa-whatsapp text-3xl"></i> */}
                <svg
                    viewBox="0 0 448 512"
                    className="w-8 h-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.7-25.7l-6.7-4-69.6 18.3L72 359l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.5 2.4-11.2 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                {/* Hover Label */}
                <span className="absolute right-full mr-4 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest whitespace-nowrap">
                    WhatsApp
                </span>
            </motion.a>

            {/* Call Button - Red Theme as requested */}
            <motion.a
                href={`tel:+${phoneNumber}`}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: -10 }}
                className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 bg-[#ff4d4d] text-white rounded-l-2xl shadow-xl flex items-center justify-center cursor-pointer hover:bg-[#e60000] transition-all duration-300 group"
                title="Call Us"
            >
                <i className="fa fa-phone text-2xl"></i>
                {/* Hover Label */}
                <span className="absolute right-full mr-4 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest whitespace-nowrap">
                    Call Now
                </span>
            </motion.a>

        </div>
    );
};

export default StickySideContact;