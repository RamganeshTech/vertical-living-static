

//  SECOND VERSION
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCreatePublicLead } from '../../api/ApiLists/publicLeadCollectionApi';
import { useNavigate } from 'react-router-dom';
import { getLeadSource } from '../../utils/getLeadSource';
import { useGenerateCostCalculatorOtp, useVerifyCostCalculatorOtp } from '../../api/ApiLists/otpApi';

// Constant for the Google Script
const actionUrl = "https://script.google.com/macros/s/AKfycbzHOjt3OivmNOJq0pUYQ9MzM2XENCubYpDVwiR4qKBh_2x63YNkqD0KuEoIoa2WJ5Q/exec";

interface InquiryFormProps {
    showCalculatorLink?: boolean; // Prop to control the extra button
    fromPage?: boolean
}

// Reusable Elegant Custom Select Component
const ModernDropdown = ({
    label,
    // name,
    options,
    placeholder,
    value,
    onChange,
    error, fromPage
}: {
    label: string,
    // name: string,
    options: string[],
    placeholder: string,
    value: string,
    onChange: (val: string) => void,
    error?: string
    fromPage?: boolean
}) => {

    const theme = {
        activeBorder: fromPage ? "border-[#dc2626]" : "border-[#ffc000]",
        hoverBorder: fromPage ? "hover:border-[#dc2626]" : "hover:border-[#ffc000]",
        shadow: fromPage ? "shadow-[0_0_10px_rgba(220,38,38,0.1)]" : "shadow-[0_0_10px_rgba(255,192,0,0.1)]",
        iconText: fromPage ? "text-[#dc2626]" : "text-[#ffc000]",
        hoverBg: fromPage ? "hover:bg-[#dc2626]" : "hover:bg-[#ffc000]",
        hoverText: fromPage ? "hover:text-white" : "hover:text-black",
    };


    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
        <div ref={dropdownRef} className="relative  w-full space-y-1.5">
            <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#666] ml-2 block">
                {label}
            </label>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full h-[40px] md:h-[50px]  bg-white border-2 rounded-full px-5 flex items-center justify-between cursor-pointer transition-all duration-300
                     ${isOpen ? `${theme.activeBorder} ${theme.shadow}` : error ? 'border-red-400' : `border-[#eee] ${theme.hoverBorder}`
                    }`}
            >
                <span className={`text-[13px] ${value ? 'text-black font-medium' : 'text-gray-400'}`}>
                    {value || placeholder}
                </span>
                <motion.i
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className={`fa fa-chevron-down ${theme.iconText} text-[10px]`}
                />
            </div>
            {error && <p className="text-[10px] text-red-500 ml-4 font-medium italic">{error}</p>}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 5 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-[999] w-full bg-white border border-[#eee] rounded-[20px] shadow-2xl py-0.5 md:py-1"
                    >
                        {options.map((opt) => (
                            <div
                                key={opt}
                                onClick={() => { onChange(opt); setIsOpen(false); }}
                                // className="px-5 py-3 text-[13px] hover:bg-[#ffc000] hover:text-black transition-colors cursor-pointer"
                                className={`px-5 py-3 text-[13px] ${theme.hoverBg} ${theme.hoverText} transition-colors cursor-pointer`}
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



const InquiryFormNew: React.FC<InquiryFormProps> = ({ showCalculatorLink = false, fromPage }) => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const [otpInput, setOtpInput] = useState("");
    const [otpError, setOtpError] = useState("");
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    // const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
    const [resendCooldown, setResendCooldown] = useState(0);

    const { mutateAsync: createMutate } = useCreatePublicLead()
    const { mutateAsync: generateOtp, } = useGenerateCostCalculatorOtp();
    const { mutateAsync: verifyOtp, isPending: isVerifyingOtp } = useVerifyCostCalculatorOtp();

    const navigate = useNavigate()

    // --- DYNAMIC THEME CONFIGURATION ---
    const theme = {
        text: fromPage ? "text-[#dc2626]" : "text-[#ffc000]",
        bg: fromPage ? "bg-[#dc2626]" : "bg-[#ffc000]",
        focusBorder: fromPage ? "focus:border-[#dc2626]" : "focus:border-[#ffc000]",
        buttonText: fromPage ? "text-white" : "text-black",
        hoverBg: fromPage ? "hover:bg-[#dc2626]" : "hover:bg-[#ffc000]",
        hoverText: fromPage ? "hover:text-white" : "hover:text-black",
    };

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


    useEffect(() => {
        if (resendCooldown <= 0) return;
        const timer = setInterval(() => {
            setResendCooldown((prev) => (prev <= 1 ? 0 : prev - 1));
        }, 1000);
        return () => clearInterval(timer);
    }, [resendCooldown]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;


        if (name === "Location") {
            const onlyAlphabets = value.replace(/[^a-zA-Z\s]/g, "");

            setFormData(prev => ({
                ...prev,
                [name]: onlyAlphabets
            }));

            return;
        }

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
            // if (formData["Mobile Number"].length !== 10) newErrors.mobileNumber = "10-digit number required";

            const mobileNumber = formData["Mobile Number"].trim();

            if (!mobileNumber) {
                newErrors.mobileNumber = "Mobile number is required";
            }
            else if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
                newErrors.mobileNumber = "Enter a valid 10-digit Indian mobile number";
            }

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

    const handleSubmit = async () => {
        // e.preventDefault();
        // if (!validateStep()) return;

        setIsSubmitting(true);

        const leadSource = getLeadSource();

        const finalData = new FormData();
        Object.entries(formData).forEach(([key, value]) => finalData.append(key, value));

        finalData.append("Source", leadSource);

        console.log("formData Location", formData["Location"])
        // return;

        
        try {
            const uniqueEventId = `inquiry_${Date.now()}_${formData["Mobile Number"].replace(/\D/g, '')}`;
            await fetch(actionUrl, {
                method: 'POST', body: finalData, mode: 'no-cors',
                // important
            });


            const res = await createMutate({
                fullName: formData["Full Name"],
                mobileNumber: formData["Mobile Number"],
                projectCategory: formData["Project Category"],
                propertyType: formData["Property Type"],
                budget: formData["Budget"],
                location: formData["Location"],
                timeline: formData["Timeline"],
                serviceType: formData["Service Type"],
                source: leadSource // ✅ Send it to the DB
            })


            //  New GTM DataLayer Conversion: Inquiry Form
            if (window.dataLayer) {
                // console.log("getin inside the window.dataLayer")
                // Clean the 10-digit number and add +91
                const rawInput = formData["Mobile Number"].replace(/\D/g, ''); // Removes any accidental spaces/dashes
                const formattedPhone = `+91${rawInput}`;
                window.dataLayer.push({
                    'event': 'inquiry_form_VL', // Must match GTM Trigger Name exactly
                    'value': 1.0,
                    'currency': 'INR',
                    'user_name': formData["Full Name"],
                    'location': formData["Location"],
                    // 'phone_number': formData["Mobile Number"],
                    'event_id': uniqueEventId, // ✅ Pass event_id to GTM/CAPI

                    'phone_number': formattedPhone,
                    'project_category': formData["Project Category"],
                    'property_type': formData["Property Type"],
                    'budget': formData["Budget"],
                    'timeline': formData["Timeline"],
                    'service_type': formData["Service Type"]
                });
                // console.log("getin inside the window.dataLayer", window?.dataLayer)
            }



            if (res.ok === true) {

                setShowSuccess(true);



                const customMessage = "thank you for submitting";
                // navigate('/thank-you?source=calculator&message=thankyou');
                navigate(`/thank-you?source=inquiry&message=${encodeURIComponent(customMessage)}`);


            }


            // old one 
            // TRIGGER CONVERSION: Lead Form Submitted
            // if (typeof window.gtag === 'function') {
            //     window.gtag('event', 'conversion', {
            //         'send_to': 'AW-17955936522/DMRXCNqK0vobEIqyh_JC',
            //         'value': 1.0,
            //         'currency': 'INR',
            //         'user_name': formData["Full Name"],
            //         'location': formData["Location"],
            //         "phone_number": formData["Mobile Number"],
            //         'project_category': formData["Project Category"],
            //         'property_type': formData["Property Type"],
            //         'budget': formData["Budget"],
            //         'timeline': formData["Timeline"],
            //         'service_type': formData["Service Type"]
            //     });
            // }




            // setFormData({ fullName: "", mobileNumber: "", projectCategory: "", propertyType: "", budget: "", location: "", timeline: "", serviceType: "" });
            setFormData({ "Full Name": "", "Mobile Number": "", "Project Category": "", "Property Type": "", "Budget": "", "Location": "", "Timeline": "", "Service Type": "" });
            setErrors({});

            // setStep(1);
            if (showCalculatorLink) {
                // setStep(4);
                setStep(5);
            }
            else {
                setStep(1);

            }
            setTimeout(() => {
                setShowSuccess(false)
            }, 5000);
        } catch (_error) {
            // alert("Submission failed. Check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };


    // NEW — replaces the step-3 submit button's old behavior
    const handleRequestOtp = async () => {
        if (!validateStep()) return; // validates step 3 fields as before

        setIsSendingOtp(true);
        setOtpError("");
        try {
            const res = await generateOtp({
                name: formData["Full Name"],
                phone: formData["Mobile Number"],
                formSource: "inquiry_form"
            });

            if (res?.ok) {
                setStep(4);
                setResendCooldown(30);
            } else {
                setOtpError(res?.message || "Failed to send OTP");
            }
        } catch (err: any) {
            const msg = err?.message || "Failed to send OTP";
            setOtpError(msg);
            // if (err?.response?.data?.retryAfterMs) {
            //     setResendCooldown(Math.ceil(err.response.data.retryAfterMs / 1000));
            // }
        } finally {
            setIsSendingOtp(false);
        }
    };

    const handleResendOtp = async () => {
        if (resendCooldown > 0) return;
        setIsSendingOtp(true);
        setOtpError("");
        try {
            const res = await generateOtp({
                name: formData["Full Name"],
                phone: formData["Mobile Number"],
                formSource: "inquiry_form"
            });
            if (res?.ok) {
                setResendCooldown(30);
            } else {
                setOtpError(res?.message || "Failed to resend OTP");
            }
        } catch (err: any) {
            setOtpError(err?.message || "Failed to resend OTP");
            // if (err?.response?.data?.retryAfterMs) {
            //     setResendCooldown(Math.ceil(err.response.data.retryAfterMs / 1000));
            // }
        } finally {
            setIsSendingOtp(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (otpInput.length !== 6) {
            setOtpError("Enter the 6-digit OTP");
            return;
        }
        // setIsVerifyingOtp(true);
        setOtpError("");
        try {
            const res = await verifyOtp({
                phone: formData["Mobile Number"],
                otp: otpInput,
                formSource: "inquiry_form"
            });

            if (res?.ok) {
                await handleSubmit(); // fires the real save+tracking, then moves to success step
            } else {
                setOtpError(res?.message || "Incorrect OTP");
            }
        } catch (err: any) {
            setOtpError(err?.message || "Verification failed");
        } finally {
            // setIsVerifyingOtp(false);
        }
    };

    const stepTitles = ["Basic Details", "Property Info", "Final Details"];

    return (
        <section id="contact" className="w-full bg-[#fcfcfc] py-8 md:py-24 font-inter flex items-center">
            <div className="container mx-auto px-2 md:px-4">
                {/* Fixed: Removed overflow-hidden to allow dropdown to visible outside */}
                <div className="max-w-[650px] mx-auto bg-white rounded-[35px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-4 md:p-12 relative">

                    <div className="mb-10 text-left border-b border-gray-50 pb-6">
                        <h1 className="text-[16px] md:text-[24px] font-bold uppercase tracking-tight text-[#1a1a1a]">
                            Tell Us About Your Project
                        </h1>
                        {/* <div className="w-12 h-1.5 bg-[#ffc000] rounded-full mt-2"></div> */}
                        <div className={`w-12 h-1.5 ${theme.bg} rounded-full mt-2`}></div>
                        <p className="text-gray-400 text-[13px] mt-3 font-medium tracking-wide">
                            Bring your vision to life with bespoke interior solutions.
                        </p>
                    </div>


                    {/* <div className="absolute top-0 right-0 w-10 h-10 md:w-20 md:h-20 bg-[#ffc000]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div> */}
                    <div className={`absolute top-0 right-0 w-10 h-10 md:w-20 md:h-20 ${theme.bg}`} style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

                    <div className="mb-10">
                        <div className="flex justify-between mb-3 px-2">
                            {stepTitles.map((title, i) => (
                                // <span key={i} className={`text-[9px] font-bold uppercase tracking-[1px] ${step >= i + 1 ? 'text-[#ffc000]' : 'text-gray-800'}`}>
                                <span key={i} className={`text-[9px] font-bold uppercase tracking-[1px] ${step >= i + 1 ? theme.text : 'text-gray-800'}`}>
                                    {title}
                                </span>
                            ))}
                        </div>
                        <div className="w-full h-[3px] bg-gray-50 rounded-full flex">
                            <motion.div className={`h-full ${theme.bg} rounded-full`} animate={{ width: `${(step / 3) * 100}%` }} transition={{ duration: 0.4 }} />
                        </div>
                    </div>

                    <div className={`${step === 4 ? "" : "mb-8"} text-center`}>
                        <h2 className="text-[22px] md:text-[26px] font-bold tracking-tight text-[#1a1a1a]">
                            {stepTitles[step - 1]}
                        </h2>
                        {/* {step !== 4 && <div className="w-10 h-1 bg-[#ffc000] rounded-full mt-2 mx-auto"></div>} */}
                        {step !== 4 && <div className={`w-10 h-1 ${theme.bg} rounded-full mt-2 mx-auto`}></div>}
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div key="step1" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#666] ml-2 block">Your Full Name *</label>
                                        <input type="text" name="Full Name" value={formData["Full Name"]} onChange={handleInputChange} placeholder="Ex: Arun" className={`w-full h-[40px] md:h-[50px] px-6 text-[13px] bg-white border-2 ${errors.fullName ? 'border-red-400' : 'border-[#eee]'} rounded-full  outline-none transition-all ${theme.focusBorder}`} />
                                        {errors.fullName && <p className="text-[10px] text-red-500 ml-4 italic">{errors.fullName}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#666] ml-2 block">Your Mobile Number * (we will call to confirm your project details)</label>
                                        <input type="tel" name="Mobile Number" value={formData["Mobile Number"]} onChange={handleInputChange} maxLength={10} minLength={10} placeholder="10-digit number" className={`w-full h-[40px] md:h-[50px]  bg-white border-2 ${errors.mobileNumber ? 'border-red-400' : 'border-[#eee]'} rounded-full px-6 text-[13px] outline-none transition-all ${theme.focusBorder}`} onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''))} />
                                        {errors.mobileNumber && <p className="text-[10px] text-red-500 ml-4 italic">{errors.mobileNumber}</p>}
                                    </div>
                                    <ModernDropdown fromPage={fromPage} label="Residential or Commercial project? *"
                                        //  name="Project Category" 
                                        value={formData["Project Category"]} onChange={(val) => handleDropdownChange("Project Category", val)}
                                        // options={["Residential", "Commercial"]} 
                                        options={["Residential (Apartment / Villa)", "Commercial (Office / Cafe / Showroom)"]}


                                        placeholder="Select Category" error={errors.projectCategory} />
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div key="step2" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-4">
                                    <ModernDropdown fromPage={fromPage} label="What type of property is this project for? *"
                                        //  name="Property Type"
                                        value={formData["Property Type"]} onChange={(val) => handleDropdownChange("Property Type", val)}

                                        // options={["3BHK Apartment", "Villa / House", "Office / Cafe"]}
                                        options={["3BHK Apartment (Residential)", "Villa / Independent House (Residential)", "Office space / Showroom / Hospital / Cafe (Commercial)"]}

                                        placeholder="Select Type" error={errors.propertyType} />

                                    <ModernDropdown fromPage={fromPage} label="Mention Your Budget *"
                                        // name="Budget"
                                        value={formData["Budget"]} onChange={(val) => handleDropdownChange("Budget", val)}

                                        // options={["5L - 8L", "9L - 12L", "12L - 16L", "20L+"]}
                                        options={["5 Lakhs - 8 lakhs", "9 lakhs - 12 lakhs", "12 lakhs - 16 lakhs", "20 lakhs above"]}

                                        placeholder="Select Budget" error={errors.budget} />

                                    {/* <ModernDropdown fromPage={fromPage} label="Which area is your project located in *" 
                                    // name="Location"
                                     value={formData["Location"]} onChange={(val) => handleDropdownChange("Location", val)}

                                        // options={["Anna nagar", "OMR", "ECR", "Adyar", "Other"]}
                                        options={["Anna nagar", "Mogappair", "OMR", "ECR", "Adyar", "T Nagar", "Ambattur", "Other Chennai location"]}



                                        placeholder="Select Area" error={errors.location} /> */}

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#666] ml-2 block">Which area is your project located in *</label>
                                        <input type="text" name="Location" value={formData["Location"]}
                                            onChange={handleInputChange} placeholder="Ex: Anna nagar"
                                            className={`w-full h-[40px] md:h-[50px] px-6 text-[13px] bg-white border-2 ${errors.Location ? 'border-red-400' : 'border-[#eee]'} rounded-full  outline-none transition-all ${theme.focusBorder}`} />
                                        {errors.Location && <p className="text-[10px] text-red-500 ml-4 italic">{errors.Location}</p>}
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div key="step3" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-4">
                                    <ModernDropdown fromPage={fromPage} label="When Do You Plan to Start the Project? *"
                                        //  name="Timeline"
                                        value={formData["Timeline"]} onChange={(val) => handleDropdownChange("Timeline", val)}
                                        // options={["Immediate", "1–3 months", "Just exploring"]}
                                        options={["Immediate (0–30 days)", "1–3 months", "Just exploring"]}


                                        placeholder="Select Timeline" error={errors.timeline} />

                                    <ModernDropdown fromPage={fromPage} label="What kind of service are you looking for? *"
                                        // name="Service Type"
                                        value={formData["Service Type"]} onChange={(val) => handleDropdownChange("Service Type", val)}
                                        //  options={["Design + Execution", "Design Support", "Execution Only"]} 
                                        options={["Design + Execution (Flexible Budget)", "Design Support + Execution (Fixed Budget)", "Execution only (Designs Ready)"]}


                                        placeholder="Select Service" error={errors.serviceType} />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {step !== 4 && <div className="flex gap-4 pt-4">
                            {step > 1 && (
                                <button type="button" onClick={prevStep} className="flex-1 cursor-pointer h-[50px] border border-gray-300 text-[#333] rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-gray-50 transition-all">
                                    Back
                                </button>
                            )}

                            {step < 3 ? (
                                // <button type="button" onClick={nextStep} className="flex-1 cursor-pointer h-[50px] bg-[#ffc000] text-black rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all">
                                <button type="button" onClick={nextStep} className={`flex-1 cursor-pointer h-[50px] ${theme.bg} ${theme.buttonText} rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all`}>
                                    Next Step
                                </button>
                            ) : (
                                // <button type="submit" disabled={isSubmitting}
                                //     className={`flex-1 cursor-pointer h-[50px] ${theme.bg} ${theme.buttonText} rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all`}>
                                //     {isSubmitting ? "Sending..." : "Submit"}
                                // </button>

                                <button
                                    type="button"
                                    onClick={handleRequestOtp}
                                    disabled={isSendingOtp}
                                    className={`flex-1 cursor-pointer h-[50px] ${theme.bg} ${theme.buttonText} rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all disabled:opacity-50`}
                                >
                                    {isSendingOtp ? "Sending OTP..." : "Get OTP"}
                                </button>
                            )}
                        </div>}



                        {step === 4 && (
                            <motion.div key="step4-otp" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-4">
                                <div className="text-center space-y-1 mb-2">
                                    <p className="text-[12px] text-gray-500">
                                        We've sent a 6-digit OTP to WhatsApp <span className="font-bold text-[#1a1a1a]">+91{formData["Mobile Number"]}</span>
                                    </p>
                                </div>

                                <div className="space-y-1.5">
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={6}
                                        value={otpInput}
                                        onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, ""))}
                                        placeholder="Enter 6-digit OTP"
                                        className={`w-full h-[40px] md:h-[50px] px-6 text-center tracking-[8px] text-[15px] font-bold bg-white border-2 ${otpError ? 'border-red-400' : 'border-[#eee]'} rounded-full outline-none transition-all ${theme.focusBorder}`}
                                    />
                                    {otpError && <p className="text-[10px] text-red-500 ml-4 italic text-center">{otpError}</p>}
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        onClick={handleResendOtp}
                                        disabled={resendCooldown > 0 || isSendingOtp}
                                        className="text-[10px] font-bold uppercase tracking-widest text-gray-400 disabled:opacity-60 hover:text-[#1a1a1a] transition-colors"
                                    >
                                        {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : (isSendingOtp ? "Sending..." : "Resend OTP")}
                                    </button>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button type="button" onClick={() => { setStep(3); setOtpInput(""); setOtpError(""); }} className="flex-1 cursor-pointer h-[50px] border border-gray-300 text-[#333] rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-gray-50 transition-all">
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleVerifyOtp}
                                        disabled={isVerifyingOtp || isSubmitting}
                                        className={`flex-1 cursor-pointer h-[50px] ${theme.bg} ${theme.buttonText} rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all disabled:opacity-50`}
                                    >
                                        {isVerifyingOtp ? "Verifying..." : isSubmitting ? "Submitting..." : "Verify & Submit"}
                                    </button>
                                </div>
                            </motion.div>
                        )}


                        {(showSuccess && !showCalculatorLink) && (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 text-[#28a745] font-semibold text-center text-[10px] uppercase p-3 rounded-xl border border-green-100 mt-4">
                                {" "} Thank you. We have received your information. Our team will call you soon.
                            </motion.div>
                        )}

                        {(showCalculatorLink && step === 5) && (
                            /* UPDATED SUCCESS VIEW WITH CALCULATOR CTA */
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-6 space-y-6"
                            >
                                <div className="bg-green-50 text-[#28a745] font-semibold text-[10px] md:text-[14px] uppercase p-3 md:p-6 rounded-3xl border border-green-100">
                                    {/* <i className="fa-solid fa-circle-check text-2xl mb-2 mr-2 block"></i> */}
                                    Thank you! We have received your information.<br />Our team will contact you soon.
                                </div>

                                {showCalculatorLink && (
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="bg-gray-50 p-6 rounded-[30px] border border-dashed border-gray-200"
                                    >
                                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">
                                            Want an instant estimate?
                                        </p>
                                        <h3 className="text-lg font-bold text-[#1a1a1a] mb-6">
                                            Try our Instant <br />Cost Calculator
                                        </h3>
                                        <button
                                            onClick={() => navigate('/cost-calculation')}
                                            // className="w-full bg-[#ffc000] cursor-pointer text-black h-[55px] rounded-full font-bold uppercase tracking-widest text-[12px] shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-3"
                                            className={`w-full ${theme.bg} ${theme.buttonText} cursor-pointer h-[55px] rounded-full font-bold uppercase tracking-widest text-[12px] shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-3`}
                                        >
                                            Calculate Project Cost <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </motion.div>
                                )}

                                {/* <button
                                    onClick={() => { setShowSuccess(false); setStep(1); }}
                                    className="text-gray-400 text-[10px] uppercase font-bold tracking-widest hover:text-[#ffc000]"
                                >
                                    Edit Information
                                </button> */}
                            </motion.div>
                        )

                        }
                    </form>
                </div>
            </div>
        </section>
    );
};

export default InquiryFormNew;