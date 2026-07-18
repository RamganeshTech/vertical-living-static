import React from 'react';

const features = [
    {
        title: "Branded Hardware Only",
        description: "Hettich, Hafele & Blum across every package.",
        icon: "fas fa-tools"
    },
    {
        title: "Happy Customers",
        description: "Design that people love living in.",
        icon: "fas fa-heart"
    },
    {
        title: "On-Time Delivery",
        description: "Committed timelines, tracked start to finish.",
        icon: "fas fa-clock"
    },
    {
        title: "Personally Overseen",
        description: "Every project, reviewed directly by our design team.",
        icon: "fas fa-eye"
    }
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="w-full py-16 px-4 md:px-8 bg-background">
            <div className="max-w-7xl mx-auto">

                {/* --- HEADING SECTION --- */}
                <div className="flex flex-col items-center mb-8 sm:mb-16">
                    {/* <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black dark:text-white">
                        Why <span className="text-[#ffc000]">Choose Us</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-[#ffc000] rounded-full mt-5"></div> */}

                    <h2 className="text-xl sm:text-2xl md:text-4xl flex items-center justify-center  gap-2 md:gap-3 cursor-pointer  font-bold tracking-tight text-[#1a1a1a]">
                        Why <span className="text-[#ffc000]">Choose Us</span>
                        {/* {showLink && <i className="fa-solid fa-link text-xl md:text-2xl text-[#ffc000] mt-1 group-hover:scale-110 transition-transform"></i>} */}

                    </h2>
                    <div className="w-24 h-1 sm:h-1.5 bg-[#ffc000] mx-auto mt-3 sm:mt-6 rounded-full shadow-[0_5px_15px_rgba(255,192,0,0.3)]"></div>



                    <p className="mt-3 sm:mt-6 !text-center  text-gray-500 font-semibold text-[12px] md:text-[18px] tracking-widest font-poppins">
                        Delivering excellence in every detail of your interior journey.
                    </p>
                </div>

                {/* --- FEATURES ROW --- */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center w-full md:flex-1 group"
                        >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-[#ffc000]/10 mb-5 shadow-sm border border-[#ffc000]/20 transition-transform duration-300 group-hover:scale-110">
                                <i className={`${feature.icon} text-2xl text-[#ffc000]`}></i>
                            </div>

                            <h3 className="text-md sm:text-lg font-bold text-foreground mb-2">
                                {feature.title}
                            </h3>

                            <p className="text-sm text-black/80 text-[14px] font-medium leading-relaxed px-2">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;