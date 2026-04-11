


//  second version

import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/images/1.webp';
import img2 from '../../assets/images/2.webp';
import img3 from '../../assets/images/3.webp';
import img9 from '../../assets/images/img9.webp';
import img10 from '../../assets/images/img10.webp';

export const allPackages = [
    {
        id: "basic",
        name: "Basic Living",
        price: "5 – 6 Lakhs",
        suitable: "Short-term interiors / Rental homes",
        img: img1,
        specs: ["MDF Board Carcass", "Laminate Finish", "Standard Soft-Close Hinges"],
        nature: "Budget-friendly essentials"
    },
    {
        id: "core",
        name: "Core Living",
        price: "6 – 7 Lakhs",
        suitable: "Budget-conscious homeowners",
        img: img2,
        specs: ["Non-Branded Comm. Ply", "1mm Laminate", "Standard Branded Hinges"],
        nature: "Functional and durable"
    },
    {
        id: "prime",
        name: "Prime Living",
        price: "7.5 – 9 Lakhs",
        suitable: "Mid-segment apartment owners",
        img: img9,
        specs: ["Branded BWR Ply", "Premium Laminate", "Hettich / Hafele Hardware"],
        nature: "Balanced luxury"
    },
    {
        id: "signature",
        name: "Signature Living",
        price: "9 – 12 Lakhs",
        suitable: "Long-term homeowners",
        img: img3,
        specs: ["Branded BWR Ply", "BWP Kitchen / Marine Ply", "Tandem Box Systems"],
        nature: "⭐ Most Preferred"
    },
    {
        id: "elite",
        name: "Elite Living",
        price: "12 – 15 Lakhs+",
        suitable: "Premium apartment / villa clients",
        img: img10,
        specs: ["Full BWP / Marine Ply", "Acrylic / PU / Veneer", "Blum / Premium Systems"],
        nature: "Exquisite finishing"
    }
];


type PackagesNewtype = {
    showLink?:boolean
}


const PackagesNew:React.FC<PackagesNewtype> = ({showLink}) => {

    const navigate = useNavigate()

    return (
        <section className="py-12 md:py-24 bg-white font-inter">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="mb-12 md:mb-20 text-center">
                    <h2 onClick={() => navigate('/portfolio')} className="text-3xl flex items-center justify-center gap-3 cursor-pointer md:text-5xl font-bold tracking-tighter text-[#1a1a1a]">
                        Our <span className="text-[#ffc000]">Packages</span>
                        {showLink && <i className="fa-solid fa-link text-xl md:text-2xl text-[#ffc000] mt-1 group-hover:scale-110 transition-transform"></i>}
                    </h2>
                    <div className="w-16 md:w-24 h-1.5 md:h-2 bg-[#ffc000] mx-auto mt-4 md:mt-6 rounded-full shadow-md"></div>
                    <p className="mt-4 md:mt-8 text-gray-500 font-semibold text-[16px] md:text-[18px] font-poppins">
                        Check out our comprehensive interior solutions
                    </p>
                </div>

                {/* Unified Dynamic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {allPackages.map((plan) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl h-[350px] md:h-[500px] cursor-pointer border border-gray-100 bg-white"
                        >
                            <img
                                src={plan.img}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt={plan.name}
                            />
                            <div className="absolute inset-0 from-black/90 via-black/40 to-transparent bg-gradient-to-t group-hover:from-black/95 transition-all duration-300"></div>

                            {/* <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-white flex flex-col justify-end"> */}
                            <div
                                className="
    absolute inset-x-0 bottom-0 
    p-6 md:p-10 text-white 
    flex flex-col justify-end
    transform transition-all duration-500 ease-out
    group-hover:-translate-y-6
  "
                            >
                                <span className="text-[#ffc000] text-[9px] md:text-[10px] font-bold uppercase tracking-[2px] mb-1 md:mb-2">
                                    {plan.nature}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 group-hover:text-[#ffc000] transition-colors leading-tight">
                                    {plan.name}
                                </h3>
                                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                                    <p className="text-[#ffc000] font-bold text-xl md:text-2xl tracking-tighter">₹{plan.price}</p>
                                </div>
                                <p className="text-[10px] md:text-[11px] text-gray-300 font-bold uppercase tracking-widest italic leading-relaxed">
                                    {plan.suitable}
                                </p>

                                <Link
                                    to={`/singlepackage/${plan.id}`}
                                    className="
    w-full bg-[#ffc000] text-black text-center py-4 rounded-xl 
    font-black text-xs uppercase tracking-widest 
    hover:bg-white transition-all duration-300
    opacity-0 translate-y-4
    group-hover:opacity-100 group-hover:translate-y-0
  "
                                >
                                    Book Now
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackagesNew;