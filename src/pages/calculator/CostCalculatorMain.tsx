
import React, { useState, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import {
    useCreateCRMPublicQuote, useGeneratePublicQuote,
    // useWhatsappAutomationQuoteSend 
} from '../../api/ApiLists/publicQuoteCalculatorApi';
import { downloadImage } from '../../api/ApiLists/downloadFile';
// import { phoneNumber } from '../../components/FloatingContact';





const PRODUCT_CATALOG: Record<string, any[]> = {
    "Living Room": [
        { id: "grand_tv", label: "tv unit", name: "TV Unit", h: 8, w: 6 },
        { id: "wardrobe", label: "wardrobe", name: "Wardrobe", h: 7, w: 6 },
        { id: "crockery", label: "crockery unit", name: "Crockery Unit", h: 7, w: 4 },
        { id: "bar_unit", label: "bar unit", name: "Bar Unit", h: 7, w: 3 },
        { id: "book_shelf", label: "book shelf", name: "Book Shelf", h: 7, w: 3 },
        { id: "wallpaper", label: "wall paper", name: "Wall Paper", h: 10, w: 10 },
        { id: "temple", label: "pooja unit", name: "Pooja Unit", h: 5, w: 3 },
        { id: "sofa_panel", label: "sofa back wall panelling", name: "Sofa Back Wall Panelling", h: 4, w: 10 },
        { id: "dining_panel", label: "dining wall panelling", name: "Dining Wall Panelling", h: 8, w: 6 },
        { id: "diamond_mirror", label: "diamond mirror wall", name: "Diamond Mirror Wall", h: 8, w: 4 },
    ],
    "Master Bedroom": [
        { id: "grand_tv", label: "tv unit", name: "TV Unit", h: 8, w: 6 },
        { id: "wardrobe", label: "wardrobe", name: "Wardrobe", h: 7, w: 6 },
        { id: "crockery", label: "crockery unit", name: "Crockery Unit", h: 7, w: 4 },
        { id: "loft", label: "loft", name: "Loft", h: 2, w: 10 },
        { id: "dressing", label: "dressing", name: "Dressing", h: 6, w: 2 },
        { id: "book_shelf", label: "book shelf", name: "Book Shelf", h: 7, w: 3 },
        { id: "bed", label: "bed", name: "Bed", h: 1.5, w: 6 },
        { id: "bed_back_fabric", label: "bed", name: "Bed Back Rest with Fabric", h: 3, w: 6 },
        { id: "wallpaper", label: "wall paper", name: "Wall Paper", h: 10, w: 10 },
        { id: "sofa_panel", label: "sofa back wall panelling", name: "Sofa Back Wall Panelling", h: 4, w: 10 },

        { id: "dining_panel", label: "dining wall panelling", name: "Dining Wall Panelling", h: 8, w: 6 },

        { id: "side_table", label: "sideboard", name: "Side Table", h: 1.5, w: 1.5 },
        { id: "work_table", label: "study table", name: "Working Table", h: 2.5, w: 4 },
        { id: "temple", label: "pooja unit", name: "Pooja Unit", h: 5, w: 3 },
        // { id: "mini_tv", label: "mini tv unit", name: "Mini TV Unit", h: 4, w: 4 },
        { id: "diamond_mirror", label: "diamond mirror wall", name: "Diamond Mirror Wall", h: 8, w: 4 },

        // { id: "wallpaper_bed", label: "wall paper bed", name: "Wall Paper", h: 10, w: 10 },
        // { id: "laminate_panel", label: "bed back wall laminate panelling", name: "Bed Back Wall Laminate Panelling", h: 8, w: 10 },
    ],
    "Washroom": [
        { id: "vanity", label: "vanity unit", name: "Vanity Below Handwash Counter", h: 2, w: 3 },
        { id: "mirror_shelf", label: "mirror with shelfs behind", name: "Mirror with Shelfs Behind", h: 3, w: 2 },
        { id: "shower_partition", label: "shower glass partition", name: "Shower Glass Partition", h: 7, w: 3 },
        { id: "grand_tv", label: "tv unit", name: "TV Unit", h: 8, w: 6 },
        { id: "wallpaper", label: "wall paper", name: "Wall Paper", h: 10, w: 10 },



        { id: "wardrobe", label: "wardrobe", name: "Wardrobe", h: 7, w: 6 },
        { id: "crockery", label: "crockery unit", name: "Crockery Unit", h: 7, w: 4 },
        { id: "loft", label: "loft", name: "Loft", h: 2, w: 8 },
        { id: "dressing", label: "dressing", name: "Dressing", h: 6, w: 2 },
        { id: "book_shelf", label: "book shelf", name: "Book Shelf", h: 7, w: 3 },
        { id: "temple", label: "pooja unit", name: "Pooja Unit", h: 5, w: 3 },
    ],
    "Kitchen": [
        { id: "base_cabinets", label: "kitchen", name: "Base Cabinets", h: 2.5, w: 12 },
        { id: "wall_cabinets", label: "kitchen", name: "Wall Cabinets", h: 2, w: 12 },
        { id: "tall_unit", label: "tall unit", name: "Tall Unit", h: 7, w: 2 },
        { id: "breakfast_counter", label: "breakfast counter", name: "Breakfast Counter", h: 3, w: 5 },
        { id: "loft", label: "loft", name: "Loft", h: 2, w: 8 },
        { id: "temple", label: "pooja unit", name: "Pooja Unit", h: 5, w: 3 },
        { id: "dining_panel", label: "dining wall panelling", name: "Dining Wall Panelling", h: 8, w: 6 },

        { id: "mirror_shelf", label: "mirror with shelfs behind", name: "Mirror with Shelfs Behind", h: 3, w: 2 },
        { id: "shower_partition", label: "shower glass partition", name: "Shower Glass Partition", h: 7, w: 3 },
        { id: "wardrobe", label: "wardrobe", name: "Wardrobe", h: 7, w: 6 },
        { id: "wallpaper", label: "wall paper", name: "Wall Paper", h: 10, w: 10 },
        { id: "grand_tv", label: "tv unit", name: "TV Unit", h: 8, w: 6 },
        { id: "crockery", label: "crockery unit", name: "Crockery Unit", h: 7, w: 4 },
        { id: "dressing", label: "dressing", name: "Dressing", h: 6, w: 2 },
        { id: "book_shelf", label: "book shelf", name: "Book Shelf", h: 7, w: 3 },
    ]
};

// OLD VERSION
// const ESTIMATION_CONFIG = {
//     STANDARD_SQFT: {
//         '1 BHK': 600,  // Mid-range of 500-700
//         '2 BHK': 1000, // Mid-range of 800-1200
//         '3 BHK': 1500, // Mid-range of 1200-1800
//         'Villa': 2200  // Standard for 1800+
//     },
//     // LABOUR_DAILY_SALARY: 1500,
//     LABOUR_RATE_PER_SQFT: 100, // This is your new "Source of Truth"
//     PROFIT_MARGIN: 1.30,
//     // LABOUR_DAYS_PER_SQFT: 0.125,
//     MATERIAL_BASE_RATES: { 'Standard': 950, 'Premium': 1400, 'Luxury': 2100 },
//     COMPLEXITY_MULTIPLIERS: { '1 BHK': 1.0, '2 BHK': 1.05, '3 BHK': 1.15, 'Villa': 1.25 }
// };


const ESTIMATION_CONFIG = {
    // These are your fixed rates per square foot of product surface area
    SQFT_RATES: {
        'Standard': 1100, // ₹1,100 per sqft
        'Premium': 1600,  // ₹1,600 per sqft
        'Luxury': 2200    // ₹2,200 per sqft
    },

    // SQFT_RATES: {
    //     'Standard': 1800, // ₹1800 per sqft // Gurjan Plywood 16mm
    //     'Premium': 2259,  // ₹2259 per sqft // Sharon Prima 710 16mm
    //     'Luxury': 2402    // ₹2402 per sqft // Century Club Prime BWP 710 16mm
    // },


    PROFIT_MARGIN: 1.30, // 25% overhead/profit
};


interface ProductInstance {
    id: string;
    name: string;
    label: string;
    h: number;
    w: number;
    customId: string;
    instanceIndex: number;
}

interface RoomInstance {
    roomName: string;
    roomIndex: number;
    products: Record<string, ProductInstance>; // Key is customId
}

// Main state type
type ConfigState = Record<string, RoomInstance>; // Key is roomCustomId


type CostCalculationMainProps = {
    showCloseButton?: boolean
    fromPage?: boolean
    handleClose?: () => any
}
const STEP_ICONS = [
    { id: 1, icon: "fa fa-calculator", label: "Area" },
    { id: 2, icon: "fa fa-home", label: "Rooms" }, // fa-door-open doesn't exist in 4.7
    { id: 3, icon: "fa fa-columns", label: "Products" }, // fa-couch doesn't exist in 4.7
    { id: 4, icon: "fa fa-user", label: "Details" }, // fa-user-edit doesn't exist in 4.7
    { id: 5, icon: "fa fa-file-text", label: "Quote" },
];

const CostCalculatorMain: React.FC<CostCalculationMainProps> = ({ showCloseButton, fromPage, handleClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ carpetArea: 0, homeType: '2 BHK', finish: 'Premium' });
    const [roomCounts, setRoomCounts] = useState({});
    const [config, setConfig] = useState({});
    const [clientInfo, setClientInfo] = useState({ name: '', phone: '', location: '' });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSaving, setIsSaving] = useState(false);
    // const [pdfUrl, setPdfUrl] = useState<string | null>(null);



    const handleClear = () => {
        setFormData({ carpetArea: 0, homeType: '2 BHK', finish: 'Premium' })
        setRoomCounts({})
        setConfig({})
        setClientInfo({ name: '', phone: '', location: '' })
    }




    const { mutateAsync: generateQuote, isPending } = useGeneratePublicQuote();
    // const { mutateAsync: sendToWhatsapp } = useWhatsappAutomationQuoteSend();
    const { mutateAsync: saveQuote } = useCreateCRMPublicQuote();

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

    // const estimate = useMemo(() => {
    //     // We use the FIXED area based on the BHK type, not the user input
    //     const calcArea = ESTIMATION_CONFIG.STANDARD_SQFT[formData.homeType as keyof typeof ESTIMATION_CONFIG.STANDARD_SQFT];
    //     const matRate = ESTIMATION_CONFIG.MATERIAL_BASE_RATES[formData.finish as keyof typeof ESTIMATION_CONFIG.MATERIAL_BASE_RATES];
    //     const complexity = ESTIMATION_CONFIG.COMPLEXITY_MULTIPLIERS[formData.homeType as keyof typeof ESTIMATION_CONFIG.COMPLEXITY_MULTIPLIERS];

    //     // Simple, clean calculation:
    //     const materialTotal = calcArea * matRate;
    //     const labourTotal = calcArea * ESTIMATION_CONFIG.LABOUR_RATE_PER_SQFT;

    //     const total = (materialTotal + labourTotal) * complexity * ESTIMATION_CONFIG.PROFIT_MARGIN;

    //     return Math.round(total);
    // }, [formData.homeType, formData.finish]);



    const estimate = useMemo(() => {
        let totalSurfaceArea = 0;
        // const currentRate = ESTIMATION_CONFIG.SQFT_RATES[formData.finish] || 0;
        const currentRate = ESTIMATION_CONFIG.SQFT_RATES[formData.finish as keyof typeof ESTIMATION_CONFIG.SQFT_RATES] || 0;

        // 1. Loop through each room instance in your config
        Object.values(config as ConfigState).forEach(roomInstance => {
            // 2. Loop through each product type in that room
            if (roomInstance.products) {
                Object.values(roomInstance.products).forEach(product => {
                    // Calculation: Height * Width = Sqft
                    // Note: Ensure your PRODUCT_CATALOG values for h and w are numbers
                    const productArea = (Number(product.h) || 0) * (Number(product.w) || 0);
                    totalSurfaceArea += productArea;
                });
            }
        });

        // 3. Final Calculation: Total Area * Fixed Rate * Margin
        const rawCost = totalSurfaceArea * currentRate;
        const finalEstimate = rawCost * ESTIMATION_CONFIG.PROFIT_MARGIN;

        return Math.round(finalEstimate);
    }, [config, formData.finish]);


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


    // --- HELPER FUNCTIONS FOR IDENTIFICATION ---

    const updateProduct = (
        // roomName, roomIdx, prod, pIdx
        roomName: string,
        roomIdx: number,
        prod: any, // This comes from your PRODUCT_CATALOG
        pIdx: number
    ) => {
        const roomCustomId = `${roomName}-${roomIdx}`;
        const prodCustomId = `${prod.id}-${pIdx}`;

        setConfig((prev: ConfigState) => ({
            ...prev,
            [roomCustomId]: {
                ...prev[roomCustomId],
                roomName: roomName,
                roomIndex: roomIdx,
                products: {
                    ...prev[roomCustomId]?.products,
                    [prodCustomId]: {
                        ...prod,
                        customId: prodCustomId,
                        instanceIndex: pIdx,
                        // ...newDims // overrides h and w
                        h: Number(prod.h), // Ensure it's a number for calculation
                        w: Number(prod.w)
                    }
                }
            }
        }));
    };

    const removeProduct = (
        // roomName, roomIdx, prodId, pIdx
        roomName: string, roomIdx: number, prodId: string, pIdx: number
    ) => {
        // const roomCustomId = `${roomName}-${roomIdx}`;
        // const prodCustomId = `${prodId}-${pIdx}`;
        // const newConfig = { ...config };
        // if (newConfig[roomCustomId]?.products) {
        //     delete newConfig[roomCustomId].products[prodCustomId];
        //     setConfig(newConfig);
        // }

        const roomCustomId = `${roomName}-${roomIdx}`;
        const prodCustomId = `${prodId}-${pIdx}`;

        setConfig((prev: ConfigState) => {
            const newConfig = { ...prev };
            if (newConfig[roomCustomId]?.products) {
                // Create a copy of the products to avoid direct mutation
                const updatedProducts = { ...newConfig[roomCustomId].products };
                delete updatedProducts[prodCustomId];

                newConfig[roomCustomId] = {
                    ...newConfig[roomCustomId],
                    products: updatedProducts
                };
            }
            return newConfig;
        });
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
            estimate: estimate, // The dynamically calculated price

            // The most important part:
            // detailedConfig: JSON.stringify(config),
            config: config,
            // timestamp: new Date().toISOString()
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
            const res = await generateQuote(dataToSave)

            // {
            // onSuccess: (data) => {
            //     // Check if backend returned 'ok'
            //     if (data?.ok && data?.url) {

            //         // TRIGGER CONVERSION: Quote Generated
            //         if (typeof window.gtag === 'function') {
            //             window.gtag('event', 'conversion', {
            //                 'send_to': 'AW-17955936522/DMRXCNqK0vobEIqyh_JC',
            //                 // 'value': estimate, // Pass the calculated estimate value
            //                 // 'currency': 'INR'

            //                 'value': 1.0,      // Fixed small value to indicate a lead
            //                 'currency': 'INR', // Required when sending a value

            //                 // 2. Project Metadata (Calculator Specifics)

            //                 'carpet_area': formData.carpetArea,
            //                 'home_type': formData.homeType,
            //                 'finish_quality': formData.finish,
            //                 'user_name': clientInfo.name,
            //                 'location': clientInfo.location,
            //                 'whatsapp_number': clientInfo.phone,
            //                 'estimated_value': estimate // We send this as a custom label, not a "Transaction Value"
            //             });
            //         }


            //         // Trigger immediate download
            //         downloadImage({ src: data.url, alt: `${clientInfo.name}_Quotation.pdf` });
            //     }
            //     setStep(5); // Move to success screen
            // },
            // onError: (error) => {
            //     console.error("API Error:", error);

            //     // setStep(5); // Move to Step 3 even if DB fails so user sees estimate
            // },
            // });

            // console.log("ressulte of the cost calculator", res, "res.ok", res.ok)

            if (res?.ok && res?.url) {

                // 🔥 Google Conversion
                if (typeof window.gtag === 'function') {
                    window.gtag('event', 'conversion', {
                        'send_to': 'AW-17955936522/DMRXCNqK0vobEIqyh_JC',
                        'value': 1.0,
                        'currency': 'INR',
                        'carpet_area': formData.carpetArea,
                        'home_type': formData.homeType,
                        'finish_quality': formData.finish,
                        'user_name': clientInfo.name,
                        'location': clientInfo.location,
                        'whatsapp_number': clientInfo.phone,
                        'estimated_value': estimate
                    });
                }

                await saveQuote({
                    ...dataToSave,
                    quotationPdf: res?.data?.quotationPdf
                })

                // Download PDF
                downloadImage({
                    src: res.url,
                    alt: `${clientInfo.name}_Quotation.pdf`
                });



                // // if ((res as any)?.url) { // successfully we have that url here
                // //  res.url is the pdf link it willbe https://vertical.....

                // await sendToWhatsapp({ clientName: dataToSave.name, clientPhone: dataToSave.phone, pdfUrl: res?.url })

                // // }

                setStep(5);

            }
            // setStep(5);
        }
        catch (err) {
            console.error("Sheet save failed", err);
            // setStep(2); // Proceed to step 3 even if error occurs so user sees their quote
        } finally {
            setIsSaving(false);
        }
    };

    return (

        <div className="w-full bg-white flex flex-col h-full overflow-hidden">
            {/* Header & Progress Bar */}
            <header
                // className="p-10 pb-0"
                className={`w-full pb-0 transition-all p-10
                    }`}

            >
                <div className={`flex items-center mb-8 ${fromPage ? "justify-center" : " justify-between"}`}>
                    <h2 className="text-2xl font-bold uppercase text-center text-[#1a1a1a]">Cost <span className="text-[#ffc000]">Calculator</span></h2>
                    {showCloseButton && <button onClick={() => {
                        setStep(1)
                        handleClear()
                        handleClose?.()

                        // onClose?.()

                    }}

                        className="text-gray-800 cursor-pointer hover:text-black transition-colors p-2">
                        <i className="fa fa-times text-2xl"></i>
                    </button>}
                </div>


                {fromPage ? (
                    /* ICON STEPPER FOR STANDALONE PAGE */
                    <div className="flex items-center justify-between relative max-w-3xl mx-auto mb-12">
                        {/* Background Connector Line */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
                        {/* Active Progress Line */}
                        <div
                            className="absolute top-1/2 left-0 h-0.5 bg-[#ffc000] -translate-y-1/2 transition-all duration-700 z-0"
                            style={{ width: `${((step - 1) / (STEP_ICONS.length - 1)) * 100}%` }}
                        />

                        {STEP_ICONS.map((item) => {
                            const isActive = step >= item.id;
                            return (
                                <div key={item.id} className="relative z-10 flex flex-col items-center">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-4 ${isActive
                                        ? "bg-[#ffc000] border-[#ffc000] text-[#1a1a1a] shadow-lg shadow-[#ffc000]/30"
                                        : "bg-white border-gray-100 text-gray-300"
                                        }`}>
                                        <i className={` ${item.icon} ${isActive ? "text-lg" : "text-sm"}`}></i>
                                    </div>
                                    <span className={`absolute -bottom-7 text-[9px] font-black uppercase tracking-widest transition-colors duration-500 ${isActive ? "text-[#1a1a1a]" : "text-gray-300"
                                        }`}>
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    /* SIMPLE BAR FOR POPUP MODAL */
                    <div className="flex gap-3">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${step >= s ? "bg-[#ffc000]" : "bg-gray-100"}`} />
                        ))}
                    </div>
                )}


                {/* <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${step >= s ? "bg-[#ffc000]" : "bg-gray-100"}`} />
                    ))}
                </div> */}
            </header>

            <div className="p-10 md:p-12  flex-1 overflow-y-auto">
                {step === 1 && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4">
                        <div className="space-y-4">
                            <label className="text-[14px] font-bold uppercase tracking-[1px] text-gray-800">1. Carpet Area</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    placeholder="Enter sqft"
                                    autoFocus
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
                                    <button key={type} onClick={() => setFormData({ ...formData, homeType: type })} className={`py-4 rounded-xl border-2  font-bold text-[14px] uppercase transition-all ${formData.homeType === type ? 'border-[#ffc000] bg-[#ffc000]/5 text-[#1a1a1a]' : 'border-gray-50 text-gray-800'}`}>
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-[14px] font-bold uppercase tracking-[1px] text-gray-800">3. Execution Finish</label>
                            <div className="grid grid-cols-3 gap-3">
                                {Object.keys(ESTIMATION_CONFIG.SQFT_RATES).map((finish) => (
                                    <button key={finish} onClick={() => setFormData({ ...formData, finish: finish })} className={`py-4 rounded-xl border-2 font-bold text-[14px] uppercase transition-all ${formData.finish === finish ? 'border-[#ffc000] bg-[#ffc000]/5 text-[#1a1a1a]' : 'border-gray-50 text-gray-800'}`}>
                                        {finish}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <button onClick={handleNext} className={`${fromPage ? "w-1/2" : "w-1/2"}  px-6 cursor-pointer bg-[#ffc000] text-[#1a1a1a] py-6 rounded-2xl font-bold uppercase text-sm shadow-xl shadow-[#ffc000]/20 active:scale-95 transition-all`}>
                                Next
                            </button>

                        </div>
                    </div>
                )}


                {/* STEP 2: ROOM SELECTION (Responsive Grid) */}
                {step === 2 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5">
                        <div className="text-center">
                            <h3 className="text-xl font-bold uppercase tracking-widest text-[#1a1a1a]">Select Your Rooms</h3>
                            <p className="text-gray-400 text-xs mt-2">Add multiple instances for guest rooms or master bedrooms</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {(Object.keys(PRODUCT_CATALOG) as Array<keyof typeof PRODUCT_CATALOG>).map(room => {
                                const count = (roomCounts as any)[room] || 0;
                                return (
                                    <div key={room} className="bg-gray-50 p-6 rounded-[30px] flex items-center justify-between border-2 border-transparent hover:border-[#ffc000] transition-all">
                                        <span className="font-bold text-[#1a1a1a] uppercase text-sm">{room}</span>
                                        <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm">
                                            <button onClick={() => setRoomCounts((p: Record<string, number>) => ({ ...p, [room]: Math.max(0, (p[room] || 0) - 1) }))} className="text-[#1a1a1a] bg-white/80 shadow-md flex justify-center items-center w-5 h-5 rounded-full cursor-pointer font-bold">-</button>
                                            {/* <span className="text-[#ffc000] font-black">{roomCounts[room] || 0}</span> */}
                                            <span className="text-[#ffc000] font-black">{count}</span>
                                            <button onClick={() => setRoomCounts((p: Record<string, number>) => ({ ...p, [room]: (p[room] || 0) + 1 }))} className="text-[#1a1a1a] bg-white/80 shadow-md flex justify-center items-center w-5 h-5 rounded-full cursor-pointer font-bold">+</button>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                        <section className='flex gap-2'>
                            <button onClick={() => setStep(1)} className="w-full bg-[#1a1a1a] py-5 rounded-[25px] font-bold cursor-pointer !text-[#ffc000] uppercase shadow-lg shadow-[#ffc000]/20">Back</button>
                            <button onClick={() => setStep(3)} className="w-full bg-[#ffc000] py-5 rounded-[25px] font-bold cursor-pointer text-[#1a1a1a] uppercase shadow-lg shadow-[#ffc000]/20">Configure Products</button>

                        </section>
                    </div>
                )}

                {/* STEP 3: PRODUCT SELECTION (With customId Tracking) */}
                {step === 3 && (
                    <div className="space-y-10 animate-in fade-in">
                        {(Object.entries(roomCounts) as [string, number][]).filter(([_, count]) => count > 0).map(([roomName, count]) => (
                            <div key={roomName} className="space-y-6">
                                {Array.from({ length: count }).map((_, rIdx) => {
                                    const roomKey = `${roomName}-${rIdx}`;

                                    // Safely access the room config
                                    const roomData = (config as ConfigState)[roomKey];
                                    const productsInRoom = roomData?.products || {};

                                    return (
                                        <div key={roomKey} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
                                            {/* <h4 className="text-[#ffc000] font-black uppercase text-xs mb-6 tracking-[4px]">
                                                            {roomName} Instance #{rIdx + 1} <span className="text-gray-500 ml-2">ID: {roomKey}</span>
                                                        </h4> */}

                                            {/* Room Header - Light Theme */}
                                            <div className="bg-gray-50/50 mb-4 px-8 py-6 border-b border-gray-100 flex justify-between rounded-2xl items-center">
                                                <div >
                                                    <h4 className="text-[#1a1a1a] font-black uppercase text-sm tracking-[2px]">
                                                        <span className="text-[#ffc000] ml-1">{rIdx + 1})</span>
                                                        {/* <span className="text-[#1a1a1a] ml-1">{rIdx + 1})</span> */}
                                                        {" "}
                                                        {roomName}
                                                    </h4>
                                                    {/* <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Instance ID: {roomKey}</p> */}
                                                </div>
                                                {/* <div className="bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm">
                                                    <span className="text-[10px] font-black text-[#1a1a1a] uppercase">
                                                        {Object.keys(productsInRoom).length} Items Added
                                                    </span>
                                                </div> */}
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                {(PRODUCT_CATALOG[roomName as keyof typeof PRODUCT_CATALOG] || []).map((prod: any) => {
                                                    // const prodInstances = Object.values(config[roomKey]?.products || {}).filter(p => p.id === prod.id);
                                                    // const qty = prodInstances.length;

                                                    // Get specific instances of this product (e.g., all wardrobes in this room)
                                                    const prodInstances = Object.values(productsInRoom).filter(p => p.id === prod.id);
                                                    const qty = prodInstances.length;

                                                    return (
                                                        <div key={prod.id} className={`px-2 py-4 rounded-2xl border-2 transition-all ${qty > 0 ? 'border-[#ffc000] bg-[#ffc000]/5 shadow-md shadow-[#ffc000]/10' : 'border-2 bg-white hover:border-gray-200'}`}>
                                                            <div className="flex justify-between   items-center mb-3">
                                                                {/* <span className="text-[10px] font-bold text-[#1a1a1a] uppercase leading-tight block">{prod.name}</span> */}
                                                                <div className="flex-1">
                                                                    <span className="text-[11px] font-black text-[#1a1a1a] uppercase leading-tight block">
                                                                        {prod.name}
                                                                    </span>
                                                                    {/* <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">
                                                                        {prod.h}ft × {prod.w}ft
                                                                    </span> */}
                                                                </div>
                                                                {/* <button
                                                                    onClick={() => updateProduct(roomName, rIdx, prod, qty)}
                                                                    className="bg-[#ffc000] cursor-pointer text-[#1a1a1a] w-7 h-7 rounded-lg font-bold flex items-center justify-center"
                                                                >+</button> */}

                                                                <div className="flex items-center bg-[#f8f9fa] rounded-full p-1 border border-gray-200 shadow-sm w-fit mx-auto">
                                                                    {/* Minus Button - Compact but clear */}
                                                                    <button
                                                                        onClick={() => {
                                                                            if (qty > 0) {
                                                                                removeProduct(roomName, rIdx, prod.id, prodInstances[qty - 1].instanceIndex);
                                                                            }
                                                                        }}
                                                                        disabled={qty === 0}
                                                                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all
                                                                                
                                                                                 bg-white text-red-500 shadow-sm cursor-pointer hover:bg-red-50 border border-gray-100
                                                                            }`}
                                                                    >
                                                                        <span className="text-lg font-bold leading-none">−</span>
                                                                    </button>

                                                                    {/* Quantity Display - Balanced spacing */}
                                                                    <div className="px-3 min-w-[32px] flex justify-center items-center">
                                                                        <span className={`text-sm font-black transition-colors ${qty > 0 ? 'text-[#1a1a1a]' : 'text-gray-700'}`}>
                                                                            {qty}
                                                                        </span>
                                                                    </div>

                                                                    {/* Plus Button - Brand Yellow */}
                                                                    <button
                                                                        onClick={() => updateProduct(roomName, rIdx, prod, qty)}
                                                                        className="bg-[#ffc000] text-[#1a1a1a] w-7 h-7 rounded-full flex items-center justify-center cursor-pointer shadow-sm"
                                                                    >
                                                                        <span className="text-lg font-bold leading-none">+</span>
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            {/* {prodInstances.map((inst, pIdx) => (
                                                                            <div key={inst.customId} className="flex items-center justify-between bg-white/10 p-2 rounded-lg mt-1 text-[9px]">
                                                                                <span>{inst.customId}</span>
                                                                                <button onClick={() => removeProduct(roomName, rIdx, prod.id, inst.instanceIndex)} className="text-red-400">Remove</button>
                                                                            </div>
                                                                        ))} */}

                                                            {/* Instances List (Chips style) */}
                                                            <div className="space-y-2 max-h-[150px] overflow-y-auto no-scrollbar">
                                                                {prodInstances.map((inst, pIdx) => (
                                                                    <div
                                                                        key={inst.customId}
                                                                        className="flex items-center justify-between bg-white border border-gray-100 p-2 rounded-xl text-[9px] font-bold shadow-sm"
                                                                    >
                                                                        <span className="text-[#1a1a1a] opacity-60">{prod.name} {pIdx + 1}</span>
                                                                        {/* <button
                                                                            onClick={() => removeProduct(roomName, rIdx, prod.id, inst.instanceIndex)}
                                                                            className="text-red-500 hover:text-red-700 transition-colors uppercase text-[8px] font-black tracking-tighter"
                                                                        >
                                                                            Remove
                                                                        </button> */}
                                                                    </div>
                                                                ))}
                                                            </div>

                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                        <section className='flex gap-2'>
                            {/* <button onClick={() => setStep(1)} className="w-full bg-[#1a1a1a] py-5 rounded-[25px] font-bold cursor-pointer !text-white uppercase shadow-lg shadow-[#ffc000]/20">Back</button>
                            <button onClick={() => setStep(3)} className="w-full bg-[#ffc000] py-5 rounded-[25px] font-bold cursor-pointer text-[#1a1a1a] uppercase shadow-lg shadow-[#ffc000]/20">Configure Products</button> */}

                            <button onClick={() => setStep(2)} className="w-full bg-[#1a1a1a] py-5 rounded-[25px] font-bold cursor-pointer text-[#ffc000] uppercase shadow-lg shadow-[#ffc000]/20">Back</button>

                            <button onClick={() => setStep(4)} className="w-full bg-[#ffc000] py-5 rounded-[25px] font-bold cursor-pointer text-[#1a1a1a] uppercase shadow-lg shadow-[#ffc000]/20">Next: Client Details</button>
                        </section>
                    </div>
                )}

                {step === 4 && (
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

                                onClick={() => setStep(3)}>
                                Back
                            </button>
                            <button
                                onClick={handleSubmit}
                                // onKeyDown={}
                                disabled={isSaving}
                                className="w-full cursor-pointer bg-[#ffc000] text-[#1a1a1a] py-6 rounded-2xl font-bold uppercase tracking-[2px] text-xs shadow-2xl shadow-black/20 active:scale-95 transition-all disabled:opacity-70"
                            >
                                {(isSaving || isPending) ? 'Processing Quote...' : 'Get Final Quote'}
                            </button>
                            {/* <button onClick={() => setStep(1)} className="w-full text-gray-400 font-bold uppercase tracking-widest text-[9px] hover:text-black">Modify project specs</button> */}
                        </div>
                    </div>
                )}

                {step === 5 && (
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

                                // onClose?.()

                            }} className="w-full text-gray-800 font-bold uppercase tracking-widest text-[9px] hover:text-black cursor-pointer">Close Report</button>
                        </div>
                    </div>


                    // <div className="text-center space-y-8 animate-in fade-in zoom-in-95 py-10">
                    //     {/* Success Icon */}
                    //     <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto text-5xl shadow-sm border border-green-100">
                    //         <i className="fa-solid fa-paper-plane "></i>
                    //     </div>

                    //     {/* Success Text */}
                    //     <div className="space-y-4">
                    //         <span className="text-[10px] font-bold uppercase tracking-[8px] text-[#ffc000]">Request Received</span>
                    //         <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight">
                    //             Quotation Sent <br /> Successfully!
                    //         </h2>
                    //         <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">
                    //             A detailed breakdown of your <span className="font-bold text-[#1a1a1a]">{formData.homeType}</span> project has been forwarded to your WhatsApp number.
                    //         </p>
                    //     </div>

                    //     {/* Project Summary Card */}
                    //     <div className="bg-gray-50 rounded-[32px] p-8 text-left space-y-5 border border-gray-100 max-w-sm mx-auto">
                    //         <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                    //             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Client</span>
                    //             <span className="text-xs text-[#1a1a1a] font-bold uppercase">{clientInfo.name}</span>
                    //         </div>
                    //         <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                    //             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Project Site</span>
                    //             <span className="text-xs text-[#1a1a1a] font-bold uppercase">{clientInfo.location}</span>
                    //         </div>
                            
                    //     </div>

                    //     {/* Actions */}
                    //     <div className="space-y-4 pt-6 max-w-sm mx-auto">
                    //         <button
                    //             onClick={() => window.open(`https://wa.me/${phoneNumber}?`, '_blank')}
                    //             className="w-full bg-[#25D366] text-white py-6 rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 shadow-xl hover:scale-105 transition-transform"
                    //         >
                    //             <i className="fa-brands fa-whatsapp text-2xl"></i> Check WhatsApp Now
                    //         </button>

                    //         <button
                    //             onClick={() => {
                    //                 setStep(1);
                    //                 handleClear();
                    //             }}
                    //             className="w-full text-gray-400 font-bold uppercase tracking-widest text-[9px] hover:text-[#ffc000] transition-colors"
                    //         >
                    //             Create Another Estimate
                    //         </button>
                    //     </div>
                    // </div>
                )}
            </div>
        </div>

    );
};

export default CostCalculatorMain;