import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Dropdown for Vertical Living Theme
// const ModernDropdown = ({ label, options, placeholder, value, onChange, error }: any) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//                 setIsOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     return (
//         <div ref={dropdownRef} className="relative w-full space-y-1.5">
//             <label className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#666] ml-2 block">{label}</label>
//             <div
//                 onClick={() => setIsOpen(!isOpen)}
//                 className={`w-full h-[50px] bg-white border-2 rounded-full px-6 flex items-center justify-between cursor-pointer transition-all duration-300 ${isOpen ? 'border-[#ffc000] shadow-[0_0_15px_rgba(255,192,0,0.1)]' : error ? 'border-red-400' : 'border-[#eee] hover:border-[#ffc000]'}`}
//             >
//                 <span className={`text-[13px] ${value ? 'text-black font-semibold' : 'text-gray-400'}`}>{value || placeholder}</span>
//                 <motion.i animate={{ rotate: isOpen ? 180 : 0 }} className="fa fa-chevron-down text-[#ffc000] text-[10px]" />
//             </div>
//             {error && <p className="text-[10px] text-red-500 ml-4 font-medium italic">{error}</p>}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 5 }} exit={{ opacity: 0, y: -10 }} className="absolute z-[999] w-full bg-white border border-[#eee] rounded-[20px] shadow-2xl py-2 max-h-60 overflow-y-auto">
//                         {options.map((opt: string) => (
//                             <div key={opt} onClick={() => { onChange(opt); setIsOpen(false); }} className="px-6 py-3 text-[13px] hover:bg-[#ffc000] hover:text-black transition-colors cursor-pointer">{opt}</div>
//                         ))}
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// Custom Radio/Selection for Vertical Living Theme
const ModernSelection = ({ label, options, active, onClick, error }: any) => (
    <div className="space-y-2 w-full">
        <label className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#666] ml-2 block">{label}</label>
        <div className="flex gap-3 flex-wrap">
            {options.map((opt: string) => (
                <button key={opt} type="button" onClick={() => onClick(opt)} className={`px-6 py-3 text-[11px] font-bold rounded-full border-2 transition-all uppercase tracking-wider ${active === opt ? "bg-[#ffc000] border-[#ffc000] text-black shadow-md" : "bg-white border-[#eee] text-gray-500 hover:border-[#ffc000]"}`}>{opt}</button>
            ))}
        </div>
        {error && <p className="text-[10px] text-red-500 ml-4 font-medium italic">{error}</p>}
    </div>
);

const Career = () => {
    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<any>({});

    const steps = ["Personal", "Preferences", "Professional", "Academic", "Finalize"];

    const [form, setForm] = useState<any>({
        fullName: "", phone: "", salary: "",
        workType: "", workMode: "", timings: "", location: "",
        roles: "", skills: "", tasks: "", languages: "",
        projects: "", academic: "", family: "",
        vehicle: "", address: ""
    });

    const handleChange = (key: string, value: string) => {
        setForm((prev: any) => ({ ...prev, [key]: value }));
        if (errors[key]) setErrors((prev: any) => ({ ...prev, [key]: "" }));
    };

    const validateStep = () => {
        let e: any = {};
        if (step === 0) {
            if (!form.fullName) e.fullName = "Full name is required";
            if (form.phone.length !== 10) e.phone = "Enter a valid 10-digit number";
            if (!form.salary) e.salary = "Please enter expected salary";
        } else if (step === 1) {
            if (!form.workType) e.workType = "Please select work type";
            if (!form.workMode) e.workMode = "Please select work mode";
            if (!form.timings) e.timings = "Enter the Work timings";
            if (!form.location) e.location = "Enter the Prefered locations";
        } else if (step === 2) {
            if (!form.roles) e.roles = "Please enter roles you have performed";
            if (!form.skills) e.skills = "Please list your skills";
            if (!form.tasks) e.tasks = "Please mention the tasks you can perform";
            if (!form.languages) e.languages = "Languages are required";
        } else if (step === 3) {
            if (!form.projects) e.projects = "Please mention the projects you have worked on";
            if (!form.academic) e.academic = "Please provide academic details";
            if (!form.family) e.family = "Please tell us about your family";
        } else if (step === 4) {
            if (!form.vehicle) e.vehicle = "Please select the option";
            if (!form.address) e.address = "Address is required";
        }
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleNext = () => { if(validateStep()) setStep(prev => prev + 1); };
    const handlePrev = () => setStep(prev => prev - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!validateStep()) return;
        setIsSubmitting(true);

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwdxsrJSHmx9zbCiFn6qsP5wIE1d-E4HAYGqzJBsSKRC94mlvComzetANyfY5SW9SBj/exec";

        try {
            await fetch(SCRIPT_URL, { method: "POST", body: JSON.stringify(form), mode: 'no-cors' });
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setStep(0);
                setForm({
                    fullName: "", phone: "", salary: "",
                    workType: "", workMode: "", timings: "", location: "",
                    roles: "", skills: "", tasks: "", languages: "",
                    projects: "", academic: "", family: "",
                    vehicle: "", address: ""
                });
            }, 5000);
        } catch (err) {
            setErrors({ submit: "Submission failed. Check your connection." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='career' className="w-full bg-[#fcfcfc] py-12 md:py-24 font-poppins">
            <div className="container mx-auto px-4">
                <div className="max-w-[750px] mx-auto bg-white rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-50 p-6 md:p-14 relative overflow-visible">

                    {/* Top Right Corner Accent */}
                    <div className="absolute top-0 right-0 w-15 h-15 md:w-20 md:h-20 bg-[#ffc000]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

                    {/* Header */}
                    <div className="mb-10 text-left border-b border-gray-50 pb-6">
                        <h1 className="text-[18px] md:text-[24px] font-bold uppercase tracking-tight text-[#1a1a1a]">Join Our Creative Team</h1>
                        <div className="w-12 h-1.5 bg-[#ffc000] rounded-full mt-2"></div>
                        <p className="text-gray-400 text-[14px] mt-4 font-medium">Step {step + 1} of {steps.length}: {steps[step]}</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-[4px] bg-gray-50 rounded-full mb-10 overflow-hidden">
                        <motion.div className="h-full bg-[#ffc000]" animate={{ width: `${((step + 1) / steps.length) * 100}%` }} />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <AnimatePresence mode="wait">
                            <motion.div key={step} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-5">

                                {step === 0 && (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">Full Name *</label>
                                            <input type="text" value={form.fullName} onChange={(e) => handleChange("fullName", e.target.value)} placeholder="Ex: Arun Kumar" className={inputStyle(errors.fullName)} />
                                            {errors.fullName && <p className="text-[10px] text-red-500 ml-4 italic">{errors.fullName}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">Phone Number *</label>
                                            <input type="tel" maxLength={10} value={form.phone} onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, ""))} placeholder="10-digit number" className={inputStyle(errors.phone)} />
                                            {errors.phone && <p className="text-[10px] text-red-500 ml-4 italic">{errors.phone}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">Expected Monthly Salary (INR) *</label>
                                            <input type="text" value={form.salary} onChange={(e) => handleChange("salary", e.target.value.replace(/\D/g, ""))} placeholder="Ex: 30000" className={inputStyle(errors.salary)} />
                                            {errors.salary && <p className="text-[10px] text-red-500 ml-4 italic">{errors.salary}</p>}
                                        </div>
                                    </>
                                )}

                                {step === 1 && (
                                    <>
                                        <ModernSelection label="Preferred Work Type *" options={["Full-Time", "Part-Time"]} active={form.workType} onClick={(v: any) => handleChange("workType", v)} error={errors.workType} />
                                        <ModernSelection label="Preferred Work Mode *" options={["Onsite", "Work From Home"]} active={form.workMode} onClick={(v: any) => handleChange("workMode", v)} error={errors.workMode} />
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">Preferred Timings *</label>
                                            <input type="text" value={form.timings} onChange={(e) => handleChange("timings", e.target.value)} placeholder="Ex: 9 AM - 6 PM" className={inputStyle(errors.timings)} />
                                            {errors.timings && <p className="text-[10px] text-red-500 ml-4 italic">{errors.timings}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">Preferred Locations *</label>
                                            <input type="text" value={form.location} onChange={(e) => handleChange("location", e.target.value)} placeholder="Ex: Chennai, Madurai" className={inputStyle(errors.location)} />
                                            {errors.location && <p className="text-[10px] text-red-500 ml-4 italic">{errors.location}</p>}
                                        </div>
                                    </>
                                )}

                                {step === 2 && (
                                    <>
                                        <TextArea label="Roles Performed (Detail) *" value={form.roles} onChange={(e: any) => handleChange("roles", e.target.value)} error={errors.roles} />
                                        <TextArea label="Key Skills & Strengths *" value={form.skills} onChange={(e: any) => handleChange("skills", e.target.value)} error={errors.skills} />
                                        <TextArea label="Tasks You Can Perform *" value={form.tasks} onChange={(e: any) => handleChange("tasks", e.target.value)} error={errors.tasks} />
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[2px] text-[#555] ml-2 block">Languages Known *</label>
                                            <input type="text" value={form.languages} onChange={(e) => handleChange("languages", e.target.value)} placeholder="English, Tamil..." className={inputStyle(errors.languages)} />
                                            {errors.languages && <p className="text-[10px] text-red-500 ml-4 italic">{errors.languages}</p>}
                                        </div>
                                    </>
                                )}

                                {step === 3 && (
                                    <>
                                        <TextArea label="Projects Worked On *" value={form.projects} onChange={(e: any) => handleChange("projects", e.target.value)} error={errors.projects} />
                                        <TextArea label="About yourselves, your academic performance , marks scored in 10th,12th , UG and PG *" value={form.academic} onChange={(e: any) => handleChange("academic", e.target.value)} error={errors.academic} placeholder="Provide score/CGPA for all levels" />
                                        <TextArea label="Family Details *" value={form.family} onChange={(e: any) => handleChange("family", e.target.value)} error={errors.family} placeholder="Tell us about your parents and siblings" />
                                    </>
                                )}

                                {step === 4 && (
                                    <>
                                        <ModernSelection label="Driving License & Vehicle? *" options={["Yes, I have both", "No"]} active={form.vehicle} onClick={(v: any) => handleChange("vehicle", v)} error={errors.vehicle} />
                                        <TextArea label="Residential Address *" value={form.address} onChange={(e: any) => handleChange("address", e.target.value)} error={errors.address} />
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 pt-6">
                            {step > 0 && (
                                <button type="button" onClick={handlePrev} className="flex-1 cursor-pointer h-[55px] border-2 border-[#eee] rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">Back</button>
                            )}
                            {step < steps.length - 1 ? (
                                <button type="button" onClick={(e) => {
                                    e.preventDefault(); // Extra safety for mobile
                                    handleNext();
                                }}
                                 className="flex-1 h-[55px] bg-[#ffc000] cursor-pointer text-black rounded-full text-[12px] font-bold uppercase tracking-widest shadow-lg hover:scale-[1.02] transition-all">Next Step</button>
                            ) : (
                                <button type="submit" disabled={isSubmitting} className="flex-1 cursor-pointer h-[55px] bg-[#1a1a1a] text-white rounded-full text-[12px] font-bold uppercase tracking-widest shadow-lg hover:bg-[#ffc000] hover:text-black transition-all">
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            )}
                        </div>

                        {isSuccess && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-50 text-[#28a745] font-bold text-center text-[11px] uppercase p-4 rounded-2xl border-l-4 border-[#28a745] mt-4">
                                Application received! Our HR team will contact you soon.
                            </motion.div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

// Internal Helper Components
const inputStyle = (hasError: any) => `w-full h-[50px] bg-white border-2 ${hasError ? 'border-red-400' : 'border-[#eee]'} rounded-full px-6 text-[13px] outline-none transition-all focus:border-[#ffc000]`;

const TextArea = ({ label, value, onChange, error, placeholder }: any) => (
    <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[1px] text-[#555] ml-2 block">{label}</label>
        <textarea value={value} onChange={onChange} placeholder={placeholder || "Your answer"} className={`w-full min-h-[120px] py-4 bg-white border-2 ${error ? 'border-red-400' : 'border-[#eee]'} rounded-[30px] px-6 text-[13px] outline-none transition-all focus:border-[#ffc000]`} />
        {error && <p className="text-[10px] text-red-500 ml-4 italic">{error}</p>}
    </div>
);

export default Career;