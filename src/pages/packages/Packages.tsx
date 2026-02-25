

//  THIRD VERSION

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import consultant from '../../assets/images/consultation.jpg';
import design from '../../assets/images/design.jpg';

const fullPlans = [
  { name: "Basic", price: "4 - 6 Lakhs", img: img1, features: ["Kitchen", "Wardrobe", "Loft"] },
  { name: "2 BHK", price: "6 - 8 Lakhs", img: img2, features: ["Full Modular Kitchen", "2 Wardrobes", "TV Unit", "False Ceiling"] },
  { name: "3 BHK", price: "8 -10 Lakhs", img: img3, features: ["Complete Interiors", "Home Automation", "Lighting Design"] }
];

const subPlans = [
  { id: "consultation", name: "Consultation", price: "4,999", img: consultant, features: ["1-on-1 with Expert", "Material Selection Guide", "Moodboard Creation"] },
  { id: "design", name: "Design Only", price: "19,999", img: design, features: ["Detailed 2D/3D Plans", "Electrical & Plumbing Layout", "Furniture Layouts"] }
];
//  NOT USED CURRENLTY
const Packages = () => {
  const [activeTab, setActiveTab] = useState<'full' | 'sub'>('full');
  const currentPlans = activeTab === 'full' ? fullPlans : subPlans;

  return (
    <section id="service" className="py-24 bg-white font-inter">
      <div className="container mx-auto px-4">

      

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
            Our <span className="text-[#ffc000]">Services</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#ffc000] mx-auto mt-6 rounded-full shadow-[0_5px_15px_rgba(255,192,0,0.3)]"></div>

          {/* Brand Statement - Presented for Maximum Readability */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 text-gray-600 text-[16px] md:text-[18px] leading-[1.8] max-w-4xl mx-auto font-medium italic"
          >
            At VERTICAL LIVING, we are passionate about creating beautiful and functional spaces
            that reflect our clients' unique personalities and lifestyles. With over 10 years of
            experience in the industry, we have developed a keen eye for design and a commitment
            to exceptional customer service.
          </motion.p> */}
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#f5f5f5] p-1 rounded-sm flex items-center shadow-inner">
            {[
              { categoryName: "Signature Living", key: "full" },
              { categoryName: "Design Modules", key: "sub" }].map((ele) => {

                return (
                  <button
                    onClick={() => setActiveTab(ele.key as "full" | "sub")}
                    className={`px-8 py-3 cursor-pointer rounded-sm text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeTab === ele.key ? 'bg-[#1a1a1a] text-white shadow-lg' : 'text-gray-500 hover:text-black'}`}
                  >
                    {ele.categoryName}
                  </button>
                )

              })}
            {/* <button
              onClick={() => setActiveTab('full')}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeTab === 'full' ? 'bg-[#1a1a1a] text-white shadow-lg' : 'text-gray-500 hover:text-black'}`}
            >
              Signature Living
            </button>
            <button
              onClick={() => setActiveTab('sub')}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeTab === 'sub' ? 'bg-[#1a1a1a] text-white shadow-lg' : 'text-gray-500 hover:text-black'}`}
            >
              Design Modules
            </button> */}
          </div>
        </div>

        {/* Dynamic Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {currentPlans.map((plan, i) => (
              <motion.div
                key={`${activeTab}-${plan.name}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -15 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative rounded-[40px] overflow-hidden shadow-2xl h-[550px] cursor-pointer border border-gray-100"
              >
                <img
                  src={plan.img}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={plan.name}
                />
                <div className="absolute inset-0 from-black/70 via-black/5 bg-gradient-to-t group-hover:from-black group-hover:via-black/40  to-transparent"></div>

                <div className="absolute inset-x-0 bottom-0 p-10 text-white flex flex-col justify-end min-h-[50%]">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-[#ffc000] transition-colors">
                    {plan.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <p className="text-[#ffc000] font-black text-2xl">₹{plan.price}</p>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">fixed price</span>
                  </div>

                  {/* Features and Action Button */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-[350px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                    <div className="w-12 h-1 bg-[#ffc000] mb-6"></div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="text-[11px] font-bold uppercase tracking-[2px] flex items-center gap-4">
                          <span className="w-1.5 h-1.5 bg-[#ffc000] rounded-full"></span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Book Now Button for Small Packages */}
                    {activeTab === 'sub' && (
                      <Link
                        to={`/booking/${(plan as any).id}`}
                        className="inline-block w-full bg-[#ffc000] text-black text-center py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all duration-300"
                      >
                        Book Now
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;