
import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGeneratePublicQuote } from '../../api/ApiLists/publicQuoteCalculatorApi';
import { downloadImage } from '../../api/ApiLists/downloadFile';

const ESTIMATION_CONFIG = {
    STANDARD_SQFT: {
        '1 BHK': 600,  // Mid-range of 500-700
        '2 BHK': 1000, // Mid-range of 800-1200
        '3 BHK': 1500, // Mid-range of 1200-1800
        'Villa': 2200  // Standard for 1800+
    },
    // LABOUR_DAILY_SALARY: 1500,
    LABOUR_RATE_PER_SQFT: 100, // This is your new "Source of Truth"
    PROFIT_MARGIN: 1.30,
    // LABOUR_DAYS_PER_SQFT: 0.125,
    MATERIAL_BASE_RATES: { 'Standard': 950, 'Premium': 1400, 'Luxury': 2100 },
    COMPLEXITY_MULTIPLIERS: { '1 BHK': 1.0, '2 BHK': 1.05, '3 BHK': 1.15, 'Villa': 1.25 }
};

const CostCalculatorMain: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ carpetArea: 0, homeType: '2 BHK', finish: 'Premium' });
    const [clientInfo, setClientInfo] = useState({ name: '', phone: '', location: '' });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSaving, setIsSaving] = useState(false);
    // const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    const modalRef = useRef<HTMLDivElement>(null);


    const handleClear = () => {
        setFormData({ carpetArea: 0, homeType: '2 BHK', finish: 'Premium' })
        setClientInfo({ name: '', phone: '', location: '' })
    }

    const { mutate: generateQuote, isPending } = useGeneratePublicQuote();

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (clientInfo.name.trim().length < 3) newErrors.name = "Full name required";
        if (!/^\d{10}$/.test(clientInfo.phone)) newErrors.phone = "Valid 10-digit number required";
        if (clientInfo.location.trim().length < 2) newErrors.location = "Location required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // const estimate = useMemo(() => {
    //     const area = Number(formData.carpetArea) || 0;
    //     const materialBase = ESTIMATION_CONFIG.MATERIAL_BASE_RATES[formData.finish as keyof typeof ESTIMATION_CONFIG.MATERIAL_BASE_RATES];
    //     const totalLabourCost = area * ESTIMATION_CONFIG.LABOUR_DAYS_PER_SQFT * ESTIMATION_CONFIG.LABOUR_DAILY_SALARY;
    //     const configMult = ESTIMATION_CONFIG.COMPLEXITY_MULTIPLIERS[formData.homeType as keyof typeof ESTIMATION_CONFIG.COMPLEXITY_MULTIPLIERS];
    //     return Math.round((area * materialBase + totalLabourCost) * configMult * ESTIMATION_CONFIG.PROFIT_MARGIN);
    // }, [formData]);

    const estimate = useMemo(() => {
        // We use the FIXED area based on the BHK type, not the user input
        const calcArea = ESTIMATION_CONFIG.STANDARD_SQFT[formData.homeType as keyof typeof ESTIMATION_CONFIG.STANDARD_SQFT];
        const matRate = ESTIMATION_CONFIG.MATERIAL_BASE_RATES[formData.finish as keyof typeof ESTIMATION_CONFIG.MATERIAL_BASE_RATES];
        const complexity = ESTIMATION_CONFIG.COMPLEXITY_MULTIPLIERS[formData.homeType as keyof typeof ESTIMATION_CONFIG.COMPLEXITY_MULTIPLIERS];

        // Simple, clean calculation:
        const materialTotal = calcArea * matRate;
        const labourTotal = calcArea * ESTIMATION_CONFIG.LABOUR_RATE_PER_SQFT;

        const total = (materialTotal + labourTotal) * complexity * ESTIMATION_CONFIG.PROFIT_MARGIN;

        return Math.round(total);
    }, [formData.homeType, formData.finish]);


    const handleNext = () => {
        if (formData.carpetArea) {
            setStep(2);
        } else {
            setErrors({ carpetArea: "Please enter a valid area (>100 sqft)" });
        }
    };

    const handleEnterKey = (
        e: React.KeyboardEvent<HTMLInputElement>,
        action: () => void
    ) => {
        if (e.key === "Enter") {
            e.preventDefault();
            action();
        }
    };

    // SAVING LOGIC INTEGRATION
    const handleSubmit = async () => {
        if (!validate()) return;

        setIsSaving(true);
        const dataToSave = {
            name: clientInfo.name,
            phone: clientInfo.phone,
            location: clientInfo.location,
            carpetArea: Number(formData.carpetArea),
            homeType: formData.homeType,
            finish: formData.finish,
            estimate: estimate // The dynamically calculated price
        };

        try {
            // Using your existing Google Apps Script URL
            // await fetch('https://script.google.com/macros/s/AKfycby1za3iClzVCPFUxBfakDkhv19fLuM_KfiKFX_ZmSzvbLJ25Ml91NNRm4lT5OXmDdyJ/exec', { // pk22...
            await fetch('https://script.google.com/macros/s/AKfycbyyPj39EazaNzcIwg2NsVbKROlqjDTJccbSHNYlgrPV827RIfsxuV9B7sl3mSh0lPUe5A/exec', { //ramstechpro....
                method: 'POST',
                mode: 'no-cors', // Mandatory for Google Apps Script
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSave),
            });


            // 2. Call the Mutation Hook
            generateQuote(dataToSave, {
                onSuccess: (data) => {
                    // Check if backend returned 'ok'
                    if (data.ok && data.url) {
                        // Trigger immediate download
                        downloadImage({ src: data.url, alt: `${clientInfo.name}_Quotation.pdf` });
                    }
                    setStep(3); // Move to success screen
                },
                onError: (error) => {
                    console.error("API Error:", error);
                    setStep(3); // Move to Step 3 even if DB fails so user sees estimate
                },
            });
            // setStep(3);
        } catch (err) {
            console.error("Sheet save failed", err);
            setStep(2); // Proceed to step 3 even if error occurs so user sees their quote
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div onClick={() => {
                    setStep(1)
                    handleClear()
                    onClose()
                }} className="fixed  inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                    <motion.div
                        ref={modalRef}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="bg-white w-full max-w-[600px] rounded-[40px] overflow-hidden shadow-2xl relative flex flex-col"
                    >
                        {/* Header & Progress Bar */}
                        <div className="p-10 pb-0">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-bold uppercase  text-[#1a1a1a]">Cost <span className="text-[#ffc000]">Calculator</span></h2>
                                <button onClick={() => {
                                    setStep(1)
                                    handleClear()

                                    onClose()

                                }}

                                    className="text-gray-800 cursor-pointer hover:text-black transition-colors p-2">
                                    <i className="fa fa-times text-2xl"></i>
                                </button>
                            </div>
                            <div className="flex gap-3">
                                {[1, 2, 3].map((s) => (
                                    <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${step >= s ? "bg-[#ffc000]" : "bg-gray-100"}`} />
                                ))}
                            </div>
                        </div>

                        <div className="p-10 md:p-12">
                            {step === 1 && (
                                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4">
                                    <div className="space-y-4">
                                        <label className="text-[14px] font-bold uppercase tracking-[1px] text-gray-800">1. Carpet Area</label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                placeholder="Enter sqft"
                                                className={`w-full bg-gray-50 rounded-2xl p-6 text-2xl font-bold outline-none border-2 transition-all ${errors.carpetArea ? 'border-red-500' : 'border-transparent focus:border-[#ffc000]'}`}
                                                value={formData.carpetArea || ""}
                                                onKeyDown={(e) => handleEnterKey(e, handleNext)}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, carpetArea: Math.max(0, Number(e.target.value)) });
                                                    setErrors({});
                                                }}
                                            />
                                            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-sm tracking-widest">SQFT</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[14px] font-bold uppercase tracking-[1px]  text-gray-800">2. Configuration</label>
                                        <div className="grid grid-cols-4 gap-3">
                                            {['1 BHK', '2 BHK', '3 BHK', 'Villa'].map(type => (
                                                <button key={type} onClick={() => setFormData({ ...formData, homeType: type })} className={`py-4 rounded-xl border-2 font-bold text-[14px] uppercase transition-all ${formData.homeType === type ? 'border-[#ffc000] bg-[#ffc000]/5 text-[#1a1a1a]' : 'border-gray-50 text-gray-800'}`}>
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-[14px] font-bold uppercase tracking-[1px] text-gray-800">3. Execution Finish</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {Object.keys(ESTIMATION_CONFIG.MATERIAL_BASE_RATES).map((finish) => (
                                                <button key={finish} onClick={() => setFormData({ ...formData, finish: finish })} className={`py-4 rounded-xl border-2 font-bold text-[14px] uppercase transition-all ${formData.finish === finish ? 'border-[#ffc000] bg-[#ffc000]/5 text-[#1a1a1a]' : 'border-gray-50 text-gray-800'}`}>
                                                    {finish}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button onClick={handleNext} className="w-full cursor-pointer bg-[#ffc000] text-[#1a1a1a] py-6 rounded-2xl font-bold uppercase text-sm shadow-xl shadow-[#ffc000]/20 active:scale-95 transition-all">
                                        Next
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-[#1a1a1a]">Client Information</h3>
                                        <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">Verify identity to unlock your quote</p>
                                    </div>

                                    <div className="space-y-5">
                                        {/* <input type="text" placeholder="Your Full Name" className={`w-full p-6 rounded-2xl bg-gray-50 border-2 outline-none font-bold ${errors.name ? 'border-red-500' : 'border-transparent focus:border-[#ffc000]'}`} onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })} /> */}

                                        <div className="space-y-1">
                                            <input
                                                type="text"
                                                placeholder="Your Full Name"
                                                className={`w-full p-6 rounded-2xl bg-gray-50 border-2 outline-none font-bold ${errors.name ? 'border-red-500' : 'border-transparent focus:border-[#ffc000]'}`}
                                                value={clientInfo.name}
                                                onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-4">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>
                                        {/* <input type="tel" placeholder="WhatsApp Number (10 digits)" className={`w-full p-6 rounded-2xl bg-gray-50 border-2 outline-none font-bold ${errors.phone ? 'border-red-500' : 'border-transparent focus:border-[#ffc000]'}`} onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})} /> */}
                                        <div className="space-y-1">
                                            <input
                                                type="tel"
                                                placeholder="WhatsApp Number (10 digits)"
                                                maxLength={10}
                                                className={`w-full p-6 rounded-2xl bg-gray-50 border-2 outline-none font-bold ${errors.phone ? 'border-red-500' : 'border-transparent focus:border-[#ffc000]'}`}
                                                value={clientInfo.phone}
                                                onChange={(e) => {
                                                    // Regex: Replace anything that is NOT a digit with an empty string
                                                    const val = e.target.value.replace(/\D/g, "");
                                                    setClientInfo({ ...clientInfo, phone: val });
                                                }}
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-4">
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>

                                        {/* <input type="text" placeholder="Project Location (City)" className={`w-full p-6 rounded-2xl bg-gray-50 border-2 outline-none font-bold ${errors.location ? 'border-red-500' : 'border-transparent focus:border-[#ffc000]'}`} onChange={(e) => setClientInfo({ ...clientInfo, location: e.target.value })} /> */}

                                        {/* Project Location Field */}
                                        <div className="space-y-1">
                                            <input
                                                type="text"
                                                placeholder="Project Location (City)"
                                                className={`w-full p-6 rounded-2xl bg-gray-50 border-2 outline-none font-bold ${errors.location ? 'border-red-500' : 'border-transparent focus:border-[#ffc000]'}`}
                                                value={clientInfo.location}
                                                onChange={(e) => setClientInfo({ ...clientInfo, location: e.target.value })}
                                                onKeyDown={(e) => handleEnterKey(e, handleSubmit)}
                                            />
                                            {errors.location && (
                                                <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-4">
                                                    {errors.location}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex gap-2 justify-between items-center">
                                        <button
                                            className="w-full cursor-pointer bg-[#1a1a1a] text-[#ffc000] py-6 rounded-2xl font-bold uppercase tracking-[4px] text-xs shadow-2xl shadow-black/20 active:scale-95 transition-all disabled:opacity-70"

                                            onClick={() => setStep(1)}>
                                            Back
                                        </button>
                                        <button
                                            onClick={handleSubmit}
                                            // onKeyDown={}
                                            disabled={isSaving}
                                            className="w-full cursor-pointer bg-[#ffc000] text-[#1a1a1a] py-6 rounded-2xl font-bold uppercase tracking-[2px] text-xs shadow-2xl shadow-black/20 active:scale-95 transition-all disabled:opacity-70"
                                        >
                                            {(isSaving || isPending) ? 'Processing Quote...' : 'Generate Final Quote'}
                                        </button>
                                        {/* <button onClick={() => setStep(1)} className="w-full text-gray-400 font-bold uppercase tracking-widest text-[9px] hover:text-black">Modify project specs</button> */}
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="text-center space-y-5 animate-in fade-in zoom-in-95">
                                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto text-4xl shadow-sm border border-green-100">
                                        <i className="fa fa-check-circle"></i>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-[8px] text-[#ffc000]">Valuation Certified</span>
                                        <div className="text-6xl md:text-5xl font-bold  text-[#1a1a1a] mt-4 leading-none">
                                            ₹{estimate.toLocaleString('en-IN')}
                                        </div>
                                        {/* <p className="text-gray-900 text-[10px] uppercase font-bold tracking-[4px] mt-3 opacity-60">Estimated for {formData.carpetArea} Sqft {formData.homeType}</p> */}
                                    </div>

                                    <div className="bg-gray-50 rounded-3xl p-8 text-left space-y-5 border border-gray-100">
                                        <div className="flex justify-between border-b border-gray-200 pb-4">
                                            <span className="text-[10px] text-gray-800 font-bold uppercase tracking-widest">Execution Type</span>
                                            <span className="text-xs text-[#1a1a1a] font-bold uppercase">{formData.homeType} | {formData.finish}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-[10px] text-gray-800 font-bold uppercase tracking-widest">Location</span>
                                            <span className="text-xs text-[#1a1a1a] font-bold uppercase">{clientInfo.location}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4">
                                        <button onClick={() => window.open(`https://wa.me/919363993814?text=Hi Vertical Living, I just generated a quote for my ${formData.homeType} in ${clientInfo.location}. Area: ${formData.carpetArea} sqft, Finish: ${formData.finish}. Estimate: ₹${estimate.toLocaleString('en-IN')}.`, '_blank')} className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 shadow-xl shadow-green-100">
                                            <i className="fa fa-whatsapp text-2xl"></i> Connect for Technical BOQ
                                        </button>
                                        <button onClick={() => {
                                            setStep(1)
                                            handleClear()

                                            onClose()

                                        }} className="w-full text-gray-800 font-bold uppercase tracking-widest text-[9px] hover:text-black cursor-pointer">Close Report</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CostCalculatorMain;



