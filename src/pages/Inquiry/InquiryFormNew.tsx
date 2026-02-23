// import React, { useEffect, useRef, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import heroImage from '../../assets/images/vertical_living_hero_img.png';

// // Reusable Elegant Custom Select Component for a modern, neat look
// const ModernDropdown = ({ label, name, options, placeholder }: { label: string, name: string, options: string[], placeholder: string }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selected, setSelected] = useState("");


//     // 1. Create a reference to the dropdown container
//     const dropdownRef = useRef<HTMLDivElement>(null);

//     // 2. Add the click-outside listener
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//                 setIsOpen(false);
//             }
//         };

//         // Attach the listener to the document
//         document.addEventListener("mousedown", handleClickOutside);

//         // Clean up the listener when the component unmounts
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);


//     return (
//         <div ref={dropdownRef} className="relative w-full space-y-2">
//             <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">
//                 {label}
//             </label>
//             <input type="hidden" name={name} value={selected} required />

//             <div
//                 onClick={() => setIsOpen(!isOpen)}
//                 className={`w-full h-[50px] bg-white border-2 rounded-full px-5 flex items-center justify-between cursor-pointer transition-all duration-300 ${isOpen ? 'border-[#ffc000] shadow-[0_0_15px_rgba(255,192,0,0.2)]' : 'border-[#eee] hover:border-[#ffc000]'
//                     }`}
//             >
//                 <span className={`text-[13px] ${selected ? 'text-black font-semibold' : 'text-gray-400'}`}>
//                     {selected || placeholder}
//                 </span>
//                 <motion.i
//                     animate={{ rotate: isOpen ? 180 : 0 }}
//                     className="fa fa-chevron-down text-[#ffc000] text-xs"
//                 />
//             </div>

//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 5 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="absolute z-[100] w-full bg-white border border-[#eee] rounded-[20px] shadow-2xl overflow-hidden py-2"
//                     >
//                         {options.map((opt) => (
//                             <div
//                                 key={opt}
//                                 onClick={() => { setSelected(opt); setIsOpen(false); }}
//                                 className="px-5 py-3 text-[13px] hover:bg-[#ffc000] hover:text-black transition-colors cursor-pointer"
//                             >
//                                 {opt}
//                             </div>
//                         ))}
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// const InquiryFormNew: React.FC = () => {
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showSuccess, setShowSuccess] = useState(false);

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         const formData = new FormData(e.currentTarget);
//         const actionUrl = "https://script.google.com/macros/s/AKfycbzHOjt3OivmNOJq0pUYQ9MzM2XENCubYpDVwiR4qKBh_2x63YNkqD0KuEoIoa2WJ5Q/exec";

//         try {
//             await fetch(actionUrl, { method: 'POST', body: formData });
//             setShowSuccess(true);
//             (e.target as HTMLFormElement).reset();
//             setTimeout(() => setShowSuccess(false), 4000);
//         } catch (error) {
//             alert("Submission failed. Please check your connection.");
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     // bg-[#f9f9f9]
//     return (
//         <section id="contact" className="w-full bg-white py-16 md:py-24 font-inter">
//             <div className="container mx-auto px-4">
//                 {/* <div className="max-w-[1200px] mx-auto bg-white rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row border border-gray-50"> */}
//                 <div className="max-w-[1200px]  mx-auto bg-white rounded-[40px] overflow-visible shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row border border-gray-50">

//                     {/* IMAGE SIDE */}
//                     {/* <div className="hidden md:block md:w-1/2 relative group">
//             <img src={heroImage} className="absolute inset-0 w-full h-full object-cover" alt="Interior" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//             <div className="absolute bottom-12 left-12 text-white border-l-4 border-[#ffc000] pl-6">
//               <h3 className="text-4xl font-black uppercase tracking-widest leading-none">
//                 Crafting<br /><span className="text-[#ffc000]">Excellence</span>
//               </h3>
//             </div>
//           </div> */}

//                     {/* IMAGE SIDE - Added rounding and height fixes */}
//                     <div className="hidden md:block md:w-1/2 relative group rounded-l-[40px] overflow-hidden min-h-[600px] md:min-h-[850px]">
//                         <img
//                             src={heroImage}
//                             className="absolute inset-0 w-full h-full object-cover rounded-l-[40px]"
//                             alt="Interior"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                         <div className="absolute bottom-12 left-12 text-white border-l-4 border-[#ffc000] pl-6">
//                             <h3 className="text-4xl font-black uppercase tracking-widest leading-none">
//                                 Crafting<br /><span className="text-[#ffc000]">Excellence</span>
//                             </h3>
//                         </div>
//                     </div>

//                     {/* FORM SIDE */}
//                     <div className="w-full md:w-1/2 p-8 md:p-14 relative">

//                         {/* RESPONSIVE Top Right Corner Accent */}
//                         <div className="absolute top-0 right-0 
//                     w-16 h-16          /* Smaller on mobile */
//                     md:w-24 md:h-24    /* Original size on desktop */
//                     bg-[#ffc000] 
//                     transition-transform duration-500 hover:scale-110 
//                     z-0"               /* Ensures it stays behind text */
//                             style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}>
//                         </div>


//                         <div className="mb-10 text-left">
//                             <h2 className="text-[20px] md:text-[25px] lg:text-[30px] font-black uppercase tracking-tight text-[#1a1a1a]">Tell Us About Your Project</h2>
//                             <div className="w-12 h-1.5 bg-[#ffc000] rounded-full mt-2"></div>
//                             <p className="text-gray-400 text-[14px] mt-4 font-medium tracking-wide">Bring your vision to life with bespoke interior solutions.</p>
//                         </div>

//                         <form onSubmit={handleSubmit} className="space-y-5">
//                             {/* Full Name */}
//                             <div className="space-y-2">
//                                 <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">Your Full Name *</label>
//                                 <input
//                                     type="text" name="Full Name" required placeholder="Your answer"
//                                     className="w-full h-[50px] bg-white border-2 border-[#eee] rounded-full px-6 text-[13px] outline-none transition-all focus:border-[#ffc000] focus:shadow-[0_0_15px_rgba(255,192,0,0.1)]"
//                                 />
//                             </div>

//                             {/* Mobile Number */}
//                             <div className="space-y-2">
//                                 <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">Your Mobile Number * (we will call to confirm your project details)</label>
//                                 <input
//                                     type="tel" name="Mobile Number" required maxLength={10} minLength={10} placeholder="10-digit mobile number"
//                                     className="w-full h-[50px] bg-white border-2 border-[#eee] rounded-full px-6 text-[13px] outline-none transition-all focus:border-[#ffc000]"
//                                     onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''))}
//                                 />
//                             </div>

//                             {/* Project Category */}
//                             <ModernDropdown
//                                 label="Residential or Commercial project? *"
//                                 name="Project Category"
//                                 options={["Residential (Apartment / Villa)", "Commercial (Office / Cafe / Showroom)"]}
//                                 placeholder="Select an option"
//                             />

//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                                 {/* Property Type */}
//                                 <ModernDropdown
//                                     label="What type of property is this project for? *"
//                                     name="Property Type"
//                                     options={["3BHK Apartment (Residential)", "Villa / Independent House (Residential)", "Office space / Showroom / Hospital / Cafe (Commercial)"]}
//                                     placeholder="Select property type"
//                                 />
//                                 {/* Budget */}
//                                 <ModernDropdown
//                                     label="Mention Your Budget *"
//                                     name="Budget"
//                                     options={["5 Lakhs - 8 lakhs", "9 lakhs - 12 lakhs", "12 lakhs - 16 lakhs", "20 lakhs above"]}
//                                     placeholder="Select Budget Range"
//                                 />
//                             </div>

//                             {/* Location */}
//                             <ModernDropdown
//                                 label="Which area is your project located in *"
//                                 name="Location"
//                                 options={["Anna nagar", "Mogappair", "OMR", "ECR", "Adyar", "T Nagar", "Ambattur", "Other Chennai location"]}
//                                 placeholder="Select Area"
//                             />

//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                                 {/* Timeline */}
//                                 <ModernDropdown
//                                     label="When Do You Plan to Start the Project? *"
//                                     name="Timeline"
//                                     options={["Immediate (0–30 days)", "1–3 months", "Just exploring"]}
//                                     placeholder="Select Timeline"
//                                 />
//                                 {/* Service Type */}
//                                 <ModernDropdown
//                                     label="What kind of service are you looking for? *"
//                                     name="Service Type"
//                                     options={["Design + Execution (Flexible Budget)", "Design Support + Execution (Fixed Budget)", "Execution only (Designs Ready)"]}
//                                     placeholder="Select Service Type"
//                                 />
//                             </div>

//                             <motion.button
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 disabled={isSubmitting}
//                                 className="w-full bg-[#1a1a1a] cursor-pointer text-white py-4 rounded-full font-extrabold uppercase tracking-[3px] text-sm mt-4 shadow-xl hover:bg-[#ffc000] hover:text-black transition-all duration-300 disabled:opacity-50"
//                             >
//                                 {isSubmitting ? "Processing..." : "Submit Inquiry"}
//                             </motion.button>

//                             {showSuccess && (
//                                 <motion.div
//                                     initial={{ opacity: 0, x: -10 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     className="bg-green-50 text-[#28a745] font-bold text-center text-xs uppercase p-4 rounded-2xl border-l-4 border-[#28a745]"
//                                 >
//                                     Information submitted! We will contact you soon.
//                                 </motion.div>
//                             )}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default InquiryFormNew;



//  SECOND VERSION
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Constant for the Google Script
const actionUrl = "https://script.google.com/macros/s/AKfycbzHOjt3OivmNOJq0pUYQ9MzM2XENCubYpDVwiR4qKBh_2x63YNkqD0KuEoIoa2WJ5Q/exec";

// Reusable Elegant Custom Select Component
const ModernDropdown = ({
    label,
    name,
    options,
    placeholder,
    value,
    onChange,
    error
}: {
    label: string,
    name: string,
    options: string[],
    placeholder: string,
    value: string,
    onChange: (val: string) => void,
    error?: string
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    console.log(name)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative w-full space-y-1.5">
            <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#666] ml-2 block">
                {label}
            </label>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full h-[50px] bg-white border-2 rounded-full px-5 flex items-center justify-between cursor-pointer transition-all duration-300 ${isOpen ? 'border-[#ffc000] shadow-[0_0_10px_rgba(255,192,0,0.1)]' : error ? 'border-red-400' : 'border-[#eee] hover:border-[#ffc000]'
                    }`}
            >
                <span className={`text-[13px] ${value ? 'text-black font-medium' : 'text-gray-400'}`}>
                    {value || placeholder}
                </span>
                <motion.i
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="fa fa-chevron-down text-[#ffc000] text-[10px]"
                />
            </div>
            {error && <p className="text-[10px] text-red-500 ml-4 font-medium italic">{error}</p>}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 5 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-[999] w-full bg-white border border-[#eee] rounded-[20px] shadow-2xl py-1"
                    >
                        {options.map((opt) => (
                            <div
                                key={opt}
                                onClick={() => { onChange(opt); setIsOpen(false); }}
                                className="px-5 py-3 text-[13px] hover:bg-[#ffc000] hover:text-black transition-colors cursor-pointer"
                            >
                                {opt}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const InquiryFormNew: React.FC = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // const [formData, setFormData] = useState({
    //     fullName: "",
    //     mobileNumber: "",
    //     projectCategory: "",
    //     propertyType: "",
    //     budget: "",
    //     location: "",
    //     timeline: "",
    //     serviceType: ""
    // });

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData(prev => ({ ...prev, [name]: value }));
    //     if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    // };

    // const handleDropdownChange = (name: string, value: string) => {
    //     setFormData(prev => ({ ...prev, [name]: value }));
    //     if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    // };

    // const validateStep = () => {
    //     const newErrors: Record<string, string> = {};
    //     if (step === 1) {
    //         if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    //         if (formData.mobileNumber.length !== 10) newErrors.mobileNumber = "Valid 10-digit number required";
    //         if (!formData.projectCategory) newErrors.projectCategory = "Please select a category";
    //     } else if (step === 2) {
    //         if (!formData.propertyType) newErrors.propertyType = "Select a property type";
    //         if (!formData.budget) newErrors.budget = "Budget range is required";
    //         if (!formData.location) newErrors.location = "Please select your location";
    //     } else if (step === 3) {
    //         if (!formData.timeline) newErrors.timeline = "Select your timeline";
    //         if (!formData.serviceType) newErrors.serviceType = "Select service type";
    //     }
    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };

    // UPDATED: Keys now match your Google Sheets doPost logic exactly
    const [formData, setFormData] = useState({
        "Full Name": "",
        "Mobile Number": "",
        "Project Category": "",
        "Property Type": "",
        "Budget": "",
        "Location": "",
        "Timeline": "",
        "Service Type": ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => {
            const newErrs = { ...prev };
            delete newErrs[name];
            return newErrs;
        });
    };

    const handleDropdownChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => {
            const newErrs = { ...prev };
            delete newErrs[name];
            return newErrs;
        });
    };

    const validateStep = () => {
        const newErrors: Record<string, string> = {};
        if (step === 1) {
            if (!formData["Full Name"].trim()) newErrors.fullName = "Full name is required";
            if (formData["Mobile Number"].length !== 10) newErrors.mobileNumber = "10-digit number required";
            if (!formData["Project Category"]) newErrors.projectCategory = "Select a category";
        } else if (step === 2) {
            if (!formData["Property Type"]) newErrors.propertyType = "Select property type";
            if (!formData["Budget"]) newErrors.budget = "Budget is required";
            if (!formData["Location"]) newErrors.location = "Select location";
        } else if (step === 3) {
            if (!formData["Timeline"]) newErrors.timeline = "Select timeline";
            if (!formData["Service Type"]) newErrors.serviceType = "Select service type";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const nextStep = () => {
        if (validateStep()) {
            setStep(prev => prev + 1);
            setErrors({}); // Clear errors when moving to new step
        }
    };

    const prevStep = () => {
        setStep(prev => prev - 1);
        setErrors({}); // Clear errors when going back
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep()) return;

        setIsSubmitting(true);

        const finalData = new FormData();
        Object.entries(formData).forEach(([key, value]) => finalData.append(key, value));

        try {
            await fetch(actionUrl, { method: 'POST', body: finalData });
            setShowSuccess(true);
            // setFormData({ fullName: "", mobileNumber: "", projectCategory: "", propertyType: "", budget: "", location: "", timeline: "", serviceType: "" });
            setFormData({ "Full Name": "", "Mobile Number": "", "Project Category": "", "Property Type": "", "Budget": "", "Location": "", "Timeline": "", "Service Type": "" });
            // setStep(1);
            setErrors({});
            setTimeout(() => setShowSuccess(false), 4000);
        } catch (error) {
            alert("Submission failed. Check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const stepTitles = ["Basic Details", "Property Info", "Final Details"];

    return (
        <section id="contact" className="w-full bg-[#fcfcfc] py-16 md:py-24 font-inter flex items-center">
            <div className="container mx-auto px-4">
                {/* Fixed: Removed overflow-hidden to allow dropdown to visible outside */}
                <div className="max-w-[650px] mx-auto bg-white rounded-[35px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 relative">

                    <div className="mb-10 text-left border-b border-gray-50 pb-6">
                        <h1 className="text-[20px] md:text-[24px] font-black uppercase tracking-tight text-[#1a1a1a]">
                            Tell Us About Your Project
                        </h1>
                        <div className="w-12 h-1.5 bg-[#ffc000] rounded-full mt-2"></div>
                        <p className="text-gray-400 text-[13px] mt-3 font-medium tracking-wide">
                            Bring your vision to life with bespoke interior solutions.
                        </p>
                    </div>


                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#ffc000]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

                    <div className="mb-10">
                        <div className="flex justify-between mb-3 px-2">
                            {stepTitles.map((title, i) => (
                                <span key={i} className={`text-[9px] font-bold uppercase tracking-[1px] ${step >= i + 1 ? 'text-[#ffc000]' : 'text-gray-800'}`}>
                                    {title}
                                </span>
                            ))}
                        </div>
                        <div className="w-full h-[3px] bg-gray-50 rounded-full flex">
                            <motion.div className="h-full bg-[#ffc000] rounded-full" animate={{ width: `${(step / 3) * 100}%` }} transition={{ duration: 0.4 }} />
                        </div>
                    </div>

                    <div className="mb-8 text-center">
                        <h2 className="text-[22px] md:text-[26px] font-bold tracking-tight text-[#1a1a1a]">
                            {stepTitles[step - 1]}
                        </h2>
                        <div className="w-10 h-1 bg-[#ffc000] rounded-full mt-2 mx-auto"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div key="step1" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#666] ml-2 block">Your Full Name *</label>
                                        <input type="text" name="Full Name" value={formData["Full Name"]} onChange={handleInputChange} placeholder="Ex: Arun" className={`w-full h-[50px] bg-white border-2 ${errors.fullName ? 'border-red-400' : 'border-[#eee]'} rounded-full px-6 text-[13px] outline-none transition-all focus:border-[#ffc000]`} />
                                        {errors.fullName && <p className="text-[10px] text-red-500 ml-4 italic">{errors.fullName}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#666] ml-2 block">Your Mobile Number * (we will call to confirm your project details)</label>
                                        <input type="tel" name="Mobile Number" value={formData["Mobile Number"]} onChange={handleInputChange} maxLength={10} minLength={10} placeholder="10-digit number" className={`w-full h-[50px] bg-white border-2 ${errors.mobileNumber ? 'border-red-400' : 'border-[#eee]'} rounded-full px-6 text-[13px] outline-none transition-all focus:border-[#ffc000]`} onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''))} />
                                        {errors.mobileNumber && <p className="text-[10px] text-red-500 ml-4 italic">{errors.mobileNumber}</p>}
                                    </div>
                                    <ModernDropdown label="Residential or Commercial project? *" name="Project Category" value={formData["Project Category"]} onChange={(val) => handleDropdownChange("Project Category", val)}
                                        // options={["Residential", "Commercial"]} 
                                        options={["Residential (Apartment / Villa)", "Commercial (Office / Cafe / Showroom)"]}


                                        placeholder="Select Category" error={errors.projectCategory} />
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div key="step2" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-4">
                                    <ModernDropdown label="What type of property is this project for? *" name="Property Type" value={formData["Property Type"]} onChange={(val) => handleDropdownChange("Property Type", val)}

                                        // options={["3BHK Apartment", "Villa / House", "Office / Cafe"]}
                                        options={["3BHK Apartment (Residential)", "Villa / Independent House (Residential)", "Office space / Showroom / Hospital / Cafe (Commercial)"]}

                                        placeholder="Select Type" error={errors.propertyType} />

                                    <ModernDropdown label="Mention Your Budget *" name="Budget" value={formData["Budget"]} onChange={(val) => handleDropdownChange("Budget", val)}

                                        // options={["5L - 8L", "9L - 12L", "12L - 16L", "20L+"]}
                                        options={["5 Lakhs - 8 lakhs", "9 lakhs - 12 lakhs", "12 lakhs - 16 lakhs", "20 lakhs above"]}

                                        placeholder="Select Budget" error={errors.budget} />
                                    <ModernDropdown label="Which area is your project located in *" name="Location" value={formData["Location"]} onChange={(val) => handleDropdownChange("Location", val)}

                                        // options={["Anna nagar", "OMR", "ECR", "Adyar", "Other"]}
                                        options={["Anna nagar", "Mogappair", "OMR", "ECR", "Adyar", "T Nagar", "Ambattur", "Other Chennai location"]}



                                        placeholder="Select Area" error={errors.location} />
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div key="step3" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-4">
                                    <ModernDropdown label="When Do You Plan to Start the Project? *" name="Timeline" value={formData["Timeline"]} onChange={(val) => handleDropdownChange("Timeline", val)}
                                        // options={["Immediate", "1–3 months", "Just exploring"]}
                                        options={["Immediate (0–30 days)", "1–3 months", "Just exploring"]}


                                        placeholder="Select Timeline" error={errors.timeline} />

                                    <ModernDropdown label="What kind of service are you looking for? *" name="Service Type" value={formData["Service Type"]} onChange={(val) => handleDropdownChange("Service Type", val)}
                                        //  options={["Design + Execution", "Design Support", "Execution Only"]} 
                                        options={["Design + Execution (Flexible Budget)", "Design Support + Execution (Fixed Budget)", "Execution only (Designs Ready)"]}


                                        placeholder="Select Service" error={errors.serviceType} />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex gap-4 pt-4">
                            {step > 1 && (
                                <button type="button" onClick={prevStep} className="flex-1 h-[50px] border border-gray-300 text-[#333] rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-gray-50 transition-all">
                                    Back
                                </button>
                            )}

                            {step < 3 ? (
                                <button type="button" onClick={nextStep} className="flex-1 h-[50px] bg-[#ffc000] text-black rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all">
                                    Next Step
                                </button>
                            ) : (
                                <button type="submit" disabled={isSubmitting} className="flex-1 h-[50px] bg-[#1a1a1a] text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-md hover:bg-[#ffc000] hover:text-black transition-all disabled:opacity-50">
                                    {isSubmitting ? "Sending..." : "Submit"}
                                </button>
                            )}
                        </div>

                        {showSuccess && (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 text-[#28a745] font-semibold text-center text-[10px] uppercase p-3 rounded-xl border border-green-100 mt-4">
                                Information Received! We will call you soon.
                            </motion.div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default InquiryFormNew;