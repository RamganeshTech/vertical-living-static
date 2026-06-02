
import React, { useState, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import {
    useCreateCRMPublicQuote, useGeneratePublicQuote,
    // useWhatsappAutomationQuoteSend,
    useWhatsappAutomationQuoteSend
} from '../../api/ApiLists/publicQuoteCalculatorApi';
// import { downloadImage } from '../../api/ApiLists/downloadFile';
import { phoneNumber } from '../../components/FloatingContact';
import { useNavigate } from 'react-router-dom';
import { getLeadSource } from '../../utils/getLeadSource';
// import { phoneNumber } from '../../components/FloatingContact';





const PRODUCT_CATALOG: Record<string, any[]> = {
    "Living Room": [
        { id: "grand_tv", label: "tv unit", name: "TV Unit", h: 8, w: 6, d: 1.25 },
        { id: "wardrobe", label: "wardrobe", name: "Wardrobe", h: 7, w: 6, d: 2.5 },
        { id: "crockery", label: "crockery unit", name: "Crockery Unit", h: 7, w: 4, d: 1.25 },
        { id: "bar_unit", label: "bar unit", name: "Bar Unit", h: 7, w: 3, d: 1.5 },
        { id: "book_shelf", label: "book shelf", name: "Book Shelf", h: 7, w: 3, d: 1 },
        { id: "wallpaper", label: "wall paper", name: "Wall Paper", h: 10, w: 10, d: 0.01 },
        { id: "temple", label: "pooja unit", name: "Pooja Unit", h: 5, w: 3, d: 1.5 },
        { id: "sofa_panel", label: "sofa back wall panelling", name: "Sofa Back Wall Panelling", h: 4, w: 10, d: 0.1 },
        { id: "dining_panel", label: "dining wall panelling", name: "Dining Wall Panelling", h: 8, w: 6, d: 0.1 },
        { id: "diamond_mirror", label: "diamond mirror wall", name: "Diamond Mirror Wall", h: 8, w: 4, d: 0.5 },
    ],
    "Bedroom": [
        { id: "grand_tv", label: "tv unit", name: "TV Unit", h: 8, w: 6, d: 1.25 },
        { id: "wardrobe", label: "wardrobe", name: "Wardrobe", h: 7, w: 6, d: 2.5 },
        { id: "crockery", label: "crockery unit", name: "Crockery Unit", h: 7, w: 4, d: 1.5 },
        { id: "loft", label: "loft", name: "Loft", h: 2, w: 10, d: 2 },
        { id: "dressing", label: "dressing", name: "Dressing", h: 6, w: 2, d: 1 },
        { id: "book_shelf", label: "book shelf", name: "Book Shelf", h: 7, w: 3, d: 1 },
        { id: "bed", label: "bed", name: "Bed", h: 1.5, w: 6, d: 6 },
        { id: "bed_back_fabric", label: "bed", name: "Bed Back Rest with Fabric", h: 3, w: 6, d: 0.25 },
        { id: "wallpaper", label: "wall paper", name: "Wall Paper", h: 10, w: 10, d: 0.01 },
        { id: "sofa_panel", label: "sofa back wall panelling", name: "Sofa Back Wall Panelling", h: 4, w: 10, d: 0.1 },

        { id: "dining_panel", label: "dining wall panelling", name: "Dining Wall Panelling", h: 8, w: 6, d: 0.1 },

        { id: "side_table", label: "sideboard", name: "Side Table", h: 1.5, w: 1.5, d: 1.5 },
        { id: "work_table", label: "study table", name: "Working Table", h: 2.5, w: 4, d: 2 },
        { id: "temple", label: "pooja unit", name: "Pooja Unit", h: 5, w: 3, d: 1.5 },
        // { id: "mini_tv", label: "mini tv unit", name: "Mini TV Unit", h: 4, w: 4 },
        { id: "diamond_mirror", label: "diamond mirror wall", name: "Diamond Mirror Wall", h: 8, w: 4, d: 0.5 },

        // { id: "wallpaper_bed", label: "wall paper bed", name: "Wall Paper", h: 10, w: 10 },
        // { id: "laminate_panel", label: "bed back wall laminate panelling", name: "Bed Back Wall Laminate Panelling", h: 8, w: 10 },
    ],
    "Washroom": [
        { id: "vanity", label: "vanity unit", name: "Vanity Below Handwash Counter", h: 2, w: 3, d: 1.75 },
        { id: "mirror_shelf", label: "mirror with shelfs behind", name: "Mirror with Shelfs Behind", h: 3, w: 2, d: 0.5 },
        { id: "shower_partition", label: "shower glass partition", name: "Shower Glass Partition", h: 7, w: 3, d: 1 },
        { id: "grand_tv", label: "tv unit", name: "TV Unit", h: 8, w: 6, d: 1.25 },
        { id: "wallpaper", label: "wall paper", name: "Wall Paper", h: 10, w: 10, d: 0.01 },



        { id: "wardrobe", label: "wardrobe", name: "Wardrobe", h: 7, w: 6, d: 2.5 },
        { id: "crockery", label: "crockery unit", name: "Crockery Unit", h: 7, w: 4, d: 1.5 },
        { id: "loft", label: "loft", name: "Loft", h: 2, w: 8, d: 2 },
        { id: "dressing", label: "dressing", name: "Dressing", h: 6, w: 2, d: 1 },
        { id: "book_shelf", label: "book shelf", name: "Book Shelf", h: 7, w: 3, d: 1 },
        { id: "temple", label: "pooja unit", name: "Pooja Unit", h: 5, w: 3, d: 1.5 },
    ],
    "Kitchen": [
        // { id: "base_cabinets", label: "kitchen", name: "Base Cabinets", h: 2.5, w: 12 },
        // { id: "wall_cabinets", label: "kitchen", name: "Wall Cabinets", h: 2, w: 12 },
        // { id: "tall_unit", label: "tall unit", name: "Tall Unit", h: 7, w: 2 },

        { id: "base_cabinets", label: "kitchen base unit", name: "Base Cabinets", h: 2.5, w: 12, d: 2 },
        { id: "wall_cabinets", label: "kitchen wall unit", name: "Wall Cabinets", h: 2, w: 12, d: 1 },
        { id: "tall_cabinets", label: "kitchen tall unit", name: "Tall Cabinets", h: 7, w: 2, d: 2 },
        { id: "breakfast_counter", label: "breakfast counter", name: "Breakfast Counter", h: 3, w: 5, d: 1.75 },
        { id: "loft", label: "loft", name: "Loft", h: 2, w: 8, d: 2 },
        { id: "temple", label: "pooja unit", name: "Pooja Unit", h: 5, w: 3, d: 1.5 },
        { id: "dining_panel", label: "dining wall panelling", name: "Dining Wall Panelling", h: 8, w: 6, d: 0.1 },

        { id: "mirror_shelf", label: "mirror with shelfs behind", name: "Mirror with Shelfs Behind", h: 3, w: 2, d: 0.5 },
        { id: "shower_partition", label: "shower glass partition", name: "Shower Glass Partition", h: 7, w: 3, d: 1 },
        { id: "wardrobe", label: "wardrobe", name: "Wardrobe", h: 7, w: 6, d: 2.5 },
        { id: "wallpaper", label: "wall paper", name: "Wall Paper", h: 10, w: 10, d: 0.01 },
        { id: "grand_tv", label: "tv unit", name: "TV Unit", h: 8, w: 6, d: 1.25 },
        { id: "crockery", label: "crockery unit", name: "Crockery Unit", h: 7, w: 4, d: 1.5 },
        { id: "dressing", label: "dressing", name: "Dressing", h: 6, w: 2, d: 1 },
        { id: "book_shelf", label: "book shelf", name: "Book Shelf", h: 7, w: 3, d: 1 },
    ],
    "Foyer Area": [
        // { id: "base_cabinets", label: "kitchen", name: "Base Cabinets", h: 2.5, w: 12 },
        // { id: "wall_cabinets", label: "kitchen", name: "Wall Cabinets", h: 2, w: 12 },
        // { id: "tall_unit", label: "tall unit", name: "Tall Unit", h: 7, w: 2 },
        // { id: "breakfast_counter", label: "breakfast counter", name: "Breakfast Counter", h: 3, w: 5 , d: 1.75},
        { id: "shoe_rack", label: "shoe rack", name: "Shoe Rack", h: 3, w: 4, d: 1.25 },
        { id: "foyer_panelling", label: "foyer wall panelling", name: "Foyer Wall Panelling", h: 8, w: 4, d: 0.01 },
        { id: "temple", label: "pooja unit", name: "Pooja Unit", h: 5, w: 3, d: 1.5 },
        { id: "loft", label: "loft", name: "Loft", h: 2, w: 8, d: 2 },
        { id: "dining_panel", label: "dining wall panelling", name: "Dining Wall Panelling", h: 8, w: 6, d: 0.1 },

        { id: "mirror_shelf", label: "mirror with shelfs behind", name: "Mirror with Shelfs Behind", h: 3, w: 2, d: 0.5 },
        // { id: "shower_partition", label: "shower glass partition", name: "Shower Glass Partition", h: 7, w: 3 , d: 1,  d: 1},
        { id: "wardrobe", label: "wardrobe", name: "Wardrobe", h: 7, w: 6, d: 2.5 },
        { id: "wallpaper", label: "wall paper", name: "Wall Paper", h: 10, w: 10, d: 0.01 },
        { id: "grand_tv", label: "tv unit", name: "TV Unit", h: 8, w: 6, d: 1.25 },
        // { id: "crockery", label: "crockery unit", name: "Crockery Unit", h: 7, w: 4  ,d: 1.5 },
        // { id: "dressing", label: "dressing", name: "Dressing", h: 6, w: 2 , d: 1},
        // { id: "book_shelf", label: "book shelf", name: "Book Shelf", h: 7, w: 3 , d: 1},
    ],
    "Balcony": [
        // { id: "base_cabinets", label: "kitchen", name: "Base Cabinets", h: 2.5, w: 12 },
        // { id: "wall_cabinets", label: "kitchen", name: "Wall Cabinets", h: 2, w: 12 },
        // { id: "tall_unit", label: "tall unit", name: "Tall Unit", h: 7, w: 2 },
        { id: "storage_unit", label: "storage unit", name: "Outdoor Utility Storage", h: 7, w: 3, d: 1.25 },
        { id: "wardrobe", label: "wardrobe", name: "Wardrobe", h: 7, w: 6, d: 2.5 },
        { id: "loft", label: "loft", name: "Loft", h: 2, w: 8, d: 2 },
        { id: "temple", label: "pooja unit", name: "Pooja Unit", h: 5, w: 3, d: 1.5 },

        // { id: "base_cabinets", label: "kitchen base unit", name: "Base Cabinets", h: 2.5, w: 12 },
        // { id: "wall_cabinets", label: "kitchen wall unit", name: "Wall Cabinets", h: 2, w: 12 },

        // { id: "tall_cabinets", label: "kitchen tall unit", name: "Tall Cabinets", h: 7, w: 2 },

        // { id: "breakfast_counter", label: "breakfast counter", name: "Breakfast Counter", h: 3, w: 5 , d: 1.75},
        // { id: "loft", label: "loft", name: "Loft", h: 2, w: 8 , d: 2},
        { id: "dining_panel", label: "dining wall panelling", name: "Dining Wall Panelling", h: 8, w: 6, d: 0.1 },
        { id: "mirror_shelf", label: "mirror with shelfs behind", name: "Mirror with Shelfs Behind", h: 3, w: 2, d: 0.5 },
        { id: "shower_partition", label: "shower glass partition", name: "Shower Glass Partition", h: 7, w: 3, d: 1 },
        { id: "wallpaper", label: "wall paper", name: "Wall Paper", h: 10, w: 10, d: 0.01 },
        // { id: "grand_tv", label: "tv unit", name: "TV Unit", h: 8, w: 6 , d: 1.25 },
        // { id: "crockery", label: "crockery unit", name: "Crockery Unit", h: 7, w: 4  ,d: 1.5 },
        // { id: "dressing", label: "dressing", name: "Dressing", h: 6, w: 2 , d: 1},
        { id: "book_shelf", label: "book shelf", name: "Book Shelf", h: 7, w: 3, d: 1 },
    ],
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
        'Basic': 1100, // ₹1,100 per sqft
        'Core': 1600,  // ₹1,600 per sqft
        'Prime': 2200    // ₹2,200 per sqft
    },

    // SQFT_RATES: {
    //     'Standard': 1800, // ₹1800 per sqft  // Gurjan Plywood 16mm
    //     'Premium': 2259,  // ₹2259 per sqft  // Sharon Prima 710 16mm
    //     'Luxury': 2402    // ₹2402 per sqft  // Century Club Prime BWP 710 16mm
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

    // bg-[#ffc000]

    const theme = {
        text: fromPage ? "text-[#dc2626]" : "text-[#ffc000]",
        bg: fromPage ? "bg-[#dc2626]" : "bg-[#ffc000]",
        border: fromPage ? "border-[#dc2626]/50" : "border-[#ffc000]",
        focusBorder: fromPage ? "focus:border-[#dc2626]/50" : "focus:border-[#ffc000]",
        hoverBorder: fromPage ? "hover:border-[#dc2626]" : "hover:border-[#ffc000]",
        hoverText: fromPage ? "hover:text-[#dc2626]" : "hover:text-[#ffc000]",
        shadow: fromPage ? "shadow-[#dc2626]/30" : "shadow-[#ffc000]/30",
        shadowLg: fromPage ? "shadow-[#dc2626]/20" : "shadow-[#ffc000]/20",
        shadowSm: fromPage ? "shadow-[#dc2626]/10" : "shadow-[#ffc000]/10",
        bgLight: fromPage ? "bg-[#dc2626]/5" : "bg-[#ffc000]/5",
        buttonText: fromPage ? "text-white" : "text-[#1a1a1a]",
        activeChipText: fromPage ? "text-[#dc2626]" : "text-[#1a1a1a]",
    };

    const textWhiteContent = fromPage ? "text-white" : "text-[#1a1a1a]"

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ carpetArea: 0, homeType: '2 BHK', finish: 'Core' as any });
    const [roomCounts, setRoomCounts] = useState({});
    const [config, setConfig] = useState({});
    const [clientInfo, setClientInfo] = useState({ name: '', phone: '', location: '', consent: true });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSaving, setIsSaving] = useState(false);

    const navigate = useNavigate()

    // const [pdfUrl, setPdfUrl] = useState<string | null>(null);



    const handleClear = () => {
        setFormData({ carpetArea: 0, homeType: '2 BHK', finish: 'Core' })
        setRoomCounts({})
        setConfig({})
        setClientInfo({ name: '', phone: '', location: '', consent: true })
    }




    const { mutateAsync: generateQuote, isPending } = useGeneratePublicQuote();
    const { mutateAsync: sendToWhatsapp } = useWhatsappAutomationQuoteSend();
    const { mutateAsync: saveQuote } = useCreateCRMPublicQuote();

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (clientInfo.name.trim().length < 3) newErrors.name = "Full name required";
        if (!/^\d{10}$/.test(clientInfo.phone)) newErrors.phone = "Valid 10-digit number required";
        if (clientInfo.location.trim().length < 2) newErrors.location = "Location required";
        if (!clientInfo.consent) newErrors.consent = "Consent is required to send the quote";
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
        pIdx: number,
        selectedFinish: 'Basic' | 'Core' | 'Prime' // Pass the selected package here
    ) => {
        const roomCustomId = `${roomName}-${roomIdx}`;
        const prodCustomId = `${prod.id}-${pIdx}`;

        // 1. Ensure dimensions are numbers. Add depth (d), defaulting to 0 if not in catalog.
        const h = Number(prod.h) || 0;
        const w = Number(prod.w) || 0;
        const d = Number(prod.d) || 0; // Capture depth


        // 2. Calculate the Total Amount for this specific product
        const sqftArea = h * w;
        const ratePerSqft = ESTIMATION_CONFIG.SQFT_RATES[selectedFinish];
        const baseCost = sqftArea * ratePerSqft;
        const totalAmount = Math.round(baseCost * ESTIMATION_CONFIG.PROFIT_MARGIN);

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
                        h: h,
                        w: w,
                        d: d, // Store depth in payload
                        total: totalAmount // Store calculated total in payload
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

        const leadSource = getLeadSource();


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
            consent: clientInfo.consent,
            source: leadSource // ✅ Send it to the DB

            // timestamp: new Date().toISOString()
        };

        console.log("dataToSave", dataToSave)

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


            // return;

            // 🔥 OLD Google Conversion
            // if (typeof window.gtag === 'function') {
            //     window.gtag('event', 'conversion', {
            //         'send_to': 'AW-17955936522/DMRXCNqK0vobEIqyh_JC',
            //         'value': 1.0,
            //         'currency': 'INR',
            //         'carpet_area': formData.carpetArea,
            //         'home_type': formData.homeType,
            //         'finish_quality': formData.finish,
            //         'user_name': clientInfo.name,
            //         'location': clientInfo.location,
            //         'whatsapp_number': clientInfo.phone,
            //         'estimated_value': estimate
            //     });
            // }

            // 1. Create a unique Event ID for deduplication (Fixes the Double Counting)
            const uniqueEventId = `lead_${Date.now()}_${clientInfo.phone.replace(/\D/g, '')}`;

            // NEW: Clean the estimate value for Meta (Removes commas/symbols, ensures it is > 0)
            const cleanValue = parseFloat(String(estimate || 1.0).replace(/[^0-9.]/g, ''));
            const finalMetaValue = cleanValue > 0 ? cleanValue : 1.0;

            // New GTM DataLayer Conversion
            if (window.dataLayer) {
                // console.log("getin inside the window.dataLayer")
                // Clean the 10-digit number and add +91
                const rawCalcInput = clientInfo.phone.replace(/\D/g, '');
                const formattedCalcPhone = `+91${rawCalcInput}`;
                window.dataLayer.push({
                    'event': 'cost_calculator_VL', // This must match your GTM Trigger name exactly
                    // 'value': estimate || 1.0,
                    'value': finalMetaValue,
                    'event_id': uniqueEventId, // ✅ Pass event_id to GTM/CAPI
                    'currency': 'INR',
                    'carpet_area': formData.carpetArea,
                    'home_type': formData.homeType,
                    'finish_quality': formData.finish,
                    'user_name': clientInfo.name,
                    'location': clientInfo.location,
                    'whatsapp_number': formattedCalcPhone, // Now sends +919808080808
                    'estimated_value': estimate

                });
                // console.log("getin inside the window.dataLayer", window?.dataLayer)

            }


            // ✅ NEW: Direct Meta Pixel Code (Fixes the ad team's frontend errors)
            if (typeof window !== 'undefined' && (window as any).fbq) {
                // Using trackCustom because 'Cost Calculator' is not a standard Meta event like 'Purchase'
                (window as any).fbq('trackCustom', 'Cost Calculator', {
                    value: finalMetaValue,
                    currency: 'INR'
                },
                    {
                        eventID: uniqueEventId // ✅ Passing the EXACT SAME eventID to the Pixel
                    }

                );
            }

            console.log("res.data", res)

            try {
                // saving in the CRM
                await saveQuote({
                    ...dataToSave,
                    quotationPdf: res?.data?.quotationPdf
                })
            } catch (crmErr) {
                console.error("CRM Save specifically failed:", crmErr);
            }

            // Download PDF
            // downloadImage({
            //     src: res.url,
            //     alt: `${clientInfo.name}_Quotation.pdf`
            // });



            // // if ((res as any)?.url) { // successfully we have that url here
            // //  res.url is the pdf link it willbe https://vertical.....

            // console.log("step changed to 5");

            if (res?.ok && res?.url) {

                setStep(5);
                await sendToWhatsapp({ clientName: dataToSave.name, clientPhone: dataToSave.phone, pdfUrl: res?.url })

                // // }
                const customMessage = "thank you for submitting";

                setTimeout(() => {
                    navigate(`/thank-you?source=calculator&message=${encodeURIComponent(customMessage)}`);
                }, 3000)
                // navigate('/thank-you?source=calculator&message=thankyou');


                handleClose?.()

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

        <div className="w-full bg-white flex flex-col h-full overflow-hidden ">
            {/* Header & Progress Bar */}
            <header
                // className="p-10 pb-0"
                className={`w-full pb-0 transition-all p-5 md:p-8
                    }`}

            >
                <div className={`flex items-center mb-4 md:mb-8 ${fromPage ? "justify-center" : " justify-between"}`}>
                    <h2 className="text-xl md:text-2xl font-bold uppercase text-center text-[#1a1a1a]">Cost <span className={theme.text}>Calculator</span></h2>
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
                            className={`absolute top-1/2 left-0 h-0.5 ${theme.bg} -translate-y-1/2 transition-all duration-700 z-0`}
                            style={{ width: `${((step - 1) / (STEP_ICONS.length - 1)) * 100}%` }}
                        />

                        {STEP_ICONS.map((item) => {
                            const isActive = step >= item.id;
                            return (
                                <div key={item.id} className="relative z-10 flex flex-col items-center">
                                    <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 border-4 ${isActive
                                        ? `${theme.bg} ${theme.border} ${textWhiteContent} shadow-lg ${theme.shadowLg}`
                                        : "bg-white border-gray-100 text-gray-300"
                                        }`}>
                                        <i className={` ${item.icon} ${isActive ? "text-[14px] md:text-[18px]" : "text-[14px] md:text-[14px]"}`}></i>
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
                            <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${step >= s ? `${theme.bg}` : "bg-gray-100"}`} />
                        ))}
                    </div>
                )}


                {/* <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${step >= s ? "bg-[#ffc000]" : "bg-gray-100"}`} />
                    ))}
                </div> */}
            </header>

            <div className="p-5 md:px-10 flex-1 overflow-y-auto">
                {step === 1 && (
                    <div className="space-y-5 md:space-y-10 animate-in fade-in slide-in-from-bottom-4">
                        <div className="space-y-2">
                            <label className="text-[12px] md:text-[14px] font-bold uppercase tracking-[1px] text-gray-800">1. Carpet Area</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    placeholder="Enter sqft"
                                    autoFocus
                                    className={`w-full bg-gray-50 rounded-2xl p-3  md:p-6  text-xl md:text-2xl font-bold outline-none border-2 transition-all ${errors.carpetArea ? 'border-red-500' : `border-transparent ${theme.focusBorder}`}`}
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
                            <label className="text-[12px] md:text-[14px] font-bold uppercase tracking-[1px]  text-gray-800 mb-2 block ">2. Configuration</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {['1 BHK', '2 BHK', '3 BHK', 'Villa'].map(type => (
                                    <button key={type} onClick={() => setFormData({ ...formData, homeType: type })} className={`py-3 md:py-4 cursor-pointer rounded-xl border-2  font-bold text-[12px] md:text-[14px] uppercase transition-all ${formData.homeType === type ? `${theme.border} bg-[#ffc000]/5 text-[#1a1a1a]` : 'border-gray-100 text-gray-800'}`}>
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-[12px] md:text-[14px] font-bold uppercase tracking-[1px] text-gray-800 mb-2 block ">3. Execution Finish</label>
                            <div className="grid grid-cols-3 gap-3">
                                {Object.keys(ESTIMATION_CONFIG.SQFT_RATES).map((finish) => (
                                    <button key={finish} onClick={() => setFormData({ ...formData, finish: finish })} className={`py-3 md:py-4 cursor-pointer rounded-xl border-2 font-bold text-[12px] md:text-[14px] uppercase transition-all tracking-wider ${formData.finish === finish ? `${theme.border} bg-[#ffc000]/5 text-[#1a1a1a]` : 'border-gray-100 text-gray-800'}`}>
                                        {finish}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            {/* <div className='flex justify-center items-center sticky bottom-0 bg-white/95 backdrop-blur-sm pt-4 pb-2 mt-auto z-20'> */}
                            <button onClick={handleNext} className={`${fromPage ? "w-1/2" : "w-1/2"}  px-6 cursor-pointer
                             ${theme.bg} ${textWhiteContent} py-3 md:py-6 rounded-2xl font-bold uppercase text-sm shadow-xl 
                             ${theme.shadowLg} active:scale-95 transition-all`}>
                                Next
                            </button>

                        </div>
                    </div>
                )}


                {/* STEP 2: ROOM SELECTION (Responsive Grid) */}
                {step === 2 && (
                    <div className="space-y-5 sm:space-y-8 animate-in fade-in slide-in-from-bottom-5">
                        <div className="text-center">
                            <h3 className="text-md sm:text-xl font-bold uppercase tracking-[1px] md:tracking-widest text-[#1a1a1a]">Select Your Rooms</h3>
                            <p className="text-gray-400 text-xs mt-2">Add multiple rooms</p>
                        </div>
                        {/* <section className=''> */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full max-h-[50vh] overflow-y-auto">
                            {(Object.keys(PRODUCT_CATALOG) as Array<keyof typeof PRODUCT_CATALOG>).map(room => {
                                const count = (roomCounts as any)[room] || 0;
                                return (
                                    <div key={room} className={`bg-gray-50 py-2 md:py-6 px-3 sm:px-2  rounded-[30px] flex items-center justify-between border-2 border-transparent ${theme.hoverBorder} transition-all`}>
                                        <span className="font-bold text-[#1a1a1a] uppercase text-xs sm:text-sm">{room}</span>


                                        <div className="flex items-center gap-3 bg-white px-2 py-1.5 rounded-full shadow-inner border border-gray-100">
                                            {/* Minus Button: Subtle Red/Gray theme */}
                                            <button
                                                onClick={() => setRoomCounts((p: Record<string, number>) => ({ ...p, [room]: Math.max(0, (p[room] || 0) - 1) }))}
                                                className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex justify-center items-center transition-all outline-none cursor-pointer font-bold
            ${count > 0
                                                        ? "bg-red-50 text-red-500 hover:bg-red-500 hover:text-white shadow-sm"
                                                        : "bg-gray-50 text-gray-300 cursor-not-allowed"}`}
                                                disabled={count === 0}
                                            >
                                                <span className="text-xl mb-0.5">−</span>
                                            </button>

                                            {/* Count: Bold and centered */}
                                            <span className={`min-w-[20px] text-center font-bold transition-colors ${count > 0 ? "text-[#1a1a1a]" : "text-gray-400"}`}>
                                                {count}
                                            </span>

                                            {/* Plus Button: Brand Yellow theme */}
                                            <button
                                                onClick={() => setRoomCounts((p: Record<string, number>) => ({ ...p, [room]: (p[room] || 0) + 1 }))}
                                                className={`w-6 h-6 md:w-8 md:h-8 ${theme.bg} ${textWhiteContent} 
                                                rounded-full    flex justify-center items-center shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all outline-none cursor-pointer font-bold`}
                                            >
                                                <span className="text-xl mb-0.5">+</span>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                        {/* </section> */}

                        {/* <section className='flex gap-2'> */}
                        <section className='flex gap-2 sticky bottom-0 bg-white/95 backdrop-blur-sm pt-4 pb-2 mt-auto z-20'>
                            <button onClick={() => setStep(1)} className={`w-full bg-[#1a1a1a] py-3 md:py-5 rounded-[25px]  text-sm font-bold cursor-pointer  ${fromPage ? "text-white" : "text-[#ffc000]"} uppercase shadow-lg  ${theme.shadowLg}`}>Back</button>
                            <button onClick={() => setStep(3)} className={`w-full ${theme.bg} py-3 md:py-5 rounded-[25px]  text-sm font-bold cursor-pointer  ${fromPage ? "text-white" : "text-[#1a1a1a]"} uppercase shadow-lg ${theme.shadowLg}`}>Next<span className="hidden md:inline">: Configure Products</span></button>

                        </section>
                    </div>
                )}

                {/* STEP 3: PRODUCT SELECTION (With customId Tracking) */}
                {step === 3 && (
                    <div className="space-y-10 animate-in fade-in">
                        <section className='h-full max-h-[65vh] sm:max-h-[50vh] overflow-y-auto'>
                            {(Object.entries(roomCounts) as [string, number][]).filter(([_, count]) => count > 0).map(([roomName, count]) => (
                                <div key={roomName} className="space-y-6">
                                    {Array.from({ length: count }).map((_, rIdx) => {
                                        const roomKey = `${roomName}-${rIdx}`;

                                        // Safely access the room config
                                        const roomData = (config as ConfigState)[roomKey];
                                        const productsInRoom = roomData?.products || {};

                                        return (
                                            <div key={roomKey} className="bg-white p-2 md:p-8 rounded-[40px] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">


                                                {/* Room Header - Light Theme */}
                                                <div className="bg-gray-50/50 mb-4 px-8 py-6 border-b border-gray-100 flex justify-between rounded-2xl items-center">
                                                    <div >
                                                        <h4 className="text-[#1a1a1a] font-bold uppercase text-sm tracking-[2px]">
                                                            <span className={`${theme.text} ml-1`}>{rIdx + 1})</span>
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
                                                            <div key={prod.id} className={`px-2 py-4 rounded-2xl border-2 transition-all ${qty > 0 ? `${theme.border} bg-[#ffc000]/5 shadow-md ${theme.shadow}` : `border-2 bg-white hover:border-gray-200`}`}>
                                                                <div className="flex justify-between items-center">
                                                                    {/* <span className="text-[10px] font-bold text-[#1a1a1a] uppercase leading-tight block">{prod.name}</span> */}
                                                                    <div className="flex-1">
                                                                        <span className="text-[11px] font-bold text-[#1a1a1a] uppercase leading-tight block">
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
                                                                            onClick={() => updateProduct(roomName, rIdx, prod, qty, formData.finish)}
                                                                            className={` ${theme.bg} ${fromPage ? "text-white" : "text-[#1a1a1a]"}  w-7 h-7 rounded-full flex items-center justify-center cursor-pointer shadow-sm`}
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
                        </section>
                        {/* <section className='flex gap-2'> */}
                        <section className='flex gap-2 sticky bottom-0 bg-white/95 backdrop-blur-sm pt-4 pb-2 mt-auto z-20'>

                            {/* <button onClick={() => setStep(1)} className="w-full bg-[#1a1a1a] py-5 rounded-[25px] font-bold cursor-pointer !text-white uppercase shadow-lg shadow-[#ffc000]/20">Back</button>
                            <button onClick={() => setStep(3)} className="w-full bg-[#ffc000] py-5 rounded-[25px] font-bold cursor-pointer text-[#1a1a1a] uppercase shadow-lg shadow-[#ffc000]/20">Configure Products</button> */}


                            <button onClick={() => setStep(2)} className={`w-full bg-[#1a1a1a] py-3  md:py-5 rounded-[25px] font-bold cursor-pointer ${fromPage ? "text-white" : "text-[#ffc000]"} uppercase shadow-lg shadow-[#ffc000]/20`}>Back</button>
                            <button onClick={() => setStep(4)} className={`w-full  ${theme.bg} py-3  md:py-5 rounded-[25px] font-bold cursor-pointer ${fromPage ? "text-white" : "text-[#1a1a1a]"}  uppercase shadow-lg shadow-[#ffc000]/20`}>Next<span className="hidden md:inline">: Client Info</span></button>
                        </section>
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-5 sm:space-y-5 animate-in fade-in slide-in-from-bottom-4">
                        <div className="space-y-2">
                            <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">Client Information</h3>
                            <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">Verify identity to unlock your quote</p>
                        </div>

                        <div className="space-y-5">
                            {/* <input type="text" placeholder="Your Full Name" className={`w-full p-6 rounded-2xl bg-gray-50 border-2 outline-none font-bold ${errors.name ? 'border-red-500' : 'border-transparent focus:border-[#ffc000]'}`} onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })} /> */}

                            <div className="space-y-1">
                                <input
                                    type="text"
                                    placeholder="Your Full Name"
                                    className={`w-full p-3 md:p-6 rounded-2xl bg-gray-50 border-2 outline-none font-semibold md:font-bold ${errors.name ? 'border-red-500' : `border-transparent ${theme.focusBorder}`}`}
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
                                    className={`w-full p-3 md:p-6 rounded-2xl bg-gray-50 border-2 outline-none font-semibold md:font-bold ${errors.phone ? 'border-red-500' : `border-transparent ${theme.focusBorder}`}`}
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

                                {/* <p>Enter your whatsapp number, the pdf will be shared to the provided number</p> */}
                                <p className="text-gray-400 text-[10px] md:text-xs font-medium ml-4">
                                    * Enter your WhatsApp number. The PDF quote will be shared to your whatsapp number.
                                </p>
                            </div>

                            {/* <input type="text" placeholder="Project Location (City)" className={`w-full p-3 md:p-6 rounded-2xl bg-gray-50 border-2 outline-none font-bold ${errors.location ? 'border-red-500' : 'border-transparent focus:border-[#ffc000]'}`} onChange={(e) => setClientInfo({ ...clientInfo, location: e.target.value })} /> */}

                            {/* Project Location Field */}
                            <div className="space-y-1">
                                <input
                                    type="text"
                                    placeholder="Project Location (City)"
                                    className={`w-full p-3 md:p-6 rounded-2xl bg-gray-50 border-2 outline-none font-semibold md:font-bold ${errors.location ? 'border-red-500' : `border-transparent ${theme.focusBorder}`}`}
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


                        {/* --- NEW CONSENT CHECKBOX SECTION --- */}
                        <div className="space-y-1 mt-4">
                            <label className="flex items-start gap-3 cursor-pointer group px-2">
                                <input
                                    type="checkbox"
                                    className="mt-1 w-5 h-5 rounded border-gray-300 accent-[#ffc000] cursor-pointer"
                                    checked={clientInfo.consent}
                                    onChange={(e) => setClientInfo({ ...clientInfo, consent: e.target.checked })}
                                />
                                <span className="text-gray-500 text-xs md:text-sm font-medium leading-tight select-none group-hover:text-gray-700 transition-colors">
                                    I agree to receive my quote and project updates via WhatsApp.
                                </span>
                            </label>
                            {errors.consent && (
                                <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-4">
                                    {errors.consent}
                                </p>
                            )}
                        </div>
                        {/* -------------------------------------- */}

                        <div className="flex gap-2 justify-between items-center">
                            <button
                                className={`w-full cursor-pointer bg-[#1a1a1a] ${fromPage ? "text-white" : "text-[#ffc000]"} py-3 md:py-6 rounded-2xl font-bold uppercase tracking-[4px] text-xs shadow-2xl shadow-black/20 active:scale-95 transition-all disabled:opacity-70`}

                                onClick={() => setStep(3)}>
                                Back
                            </button>
                            <button
                                onClick={handleSubmit}
                                // onKeyDown={}
                                type="button"
                                // disabled={isSaving}
                                // disabled={isSaving || isPending || !clientInfo.consent}
                                className={`w-full cursor-pointer ${theme.bg} ${fromPage ? "text-white" : "text-[#1a1a1a]"} py-3 md:py-6 rounded-2xl font-bold uppercase tracking-[2px] text-xs shadow-2xl shadow-black/20 active:scale-95 transition-all disabled:opacity-70`}
                            >
                                {(isSaving || isPending) ? 'Processing Quote...' : <span >Get <span className="hidden md:inline">Final</span> Quote</span>}
                            </button>
                            {/* <button onClick={() => setStep(1)} className="w-full text-gray-400 font-bold uppercase tracking-widest text-[9px] hover:text-black">Modify project specs</button> */}
                        </div>
                    </div>
                )}

                {step === 5 && (

                    // <div className="text-center space-y-5 animate-in fade-in zoom-in-95">
                    //     <div className="w-15 h-15 md:w-20 md:h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto text-4xl shadow-sm border border-green-100">
                    //         <i className="fa fa-check-circle"></i>
                    //     </div>
                    //     <div>
                    //         <span className="text-[10px] font-bold uppercase  tracking-widest md:tracking-[8px] text-[#ffc000]">Valuation Certified</span>
                    //         <div className="text-3xl md:text-5xl font-bold  text-[#1a1a1a] mt-4 leading-none">
                    //             ₹{estimate.toLocaleString('en-IN')}
                    //         </div>
                    //         {/* <p className="text-gray-900 text-[10px] uppercase font-bold tracking-[4px] mt-3 opacity-60">Estimated for {formData.carpetArea} Sqft {formData.homeType}</p> */}
                    //     </div>

                    //     <div className="bg-gray-50 rounded-3xl p-8 text-left space-y-5 border border-gray-100">
                    //         <div className="flex justify-between border-b border-gray-200 pb-4">
                    //             <span className="text-[10px] text-gray-800 font-bold uppercase tracking-widest">Execution Type</span>
                    //             <span className="text-xs text-[#1a1a1a] font-bold uppercase">{formData.homeType} | {formData.finish}</span>
                    //         </div>
                    //         <div className="flex justify-between">
                    //             <span className="text-[10px] text-gray-800 font-bold uppercase tracking-widest">Location</span>
                    //             <span className="text-xs text-[#1a1a1a] font-bold uppercase">{clientInfo.location}</span>
                    //         </div>
                    //     </div>

                    //     <div className="space-y-4 pt-4">
                    //         <button onClick={() => window.open(`https://wa.me/919363993814?text=Hi Vertical Living, I just generated a quote for my ${formData.homeType} in ${clientInfo.location}. Area: ${formData.carpetArea} sqft, Finish: ${formData.finish}. Estimate: ₹${estimate.toLocaleString('en-IN')}.`, '_blank')} className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 shadow-xl shadow-green-100">
                    //             <i className="fa-brands fa-whatsapp text-2xl"></i> Connect for Technical BOQ
                    //         </button>
                    //         <button onClick={() => {
                    //             setStep(1)
                    //             handleClear()

                    //             // onClose?.()

                    //         }} className="w-full text-gray-800 font-bold uppercase tracking-widest text-[9px] hover:text-black cursor-pointer">Close Report</button>
                    //     </div>
                    // </div>


                    <div className="text-center space-y-4 animate-in fade-in zoom-in-95">
                        {/* Success Icon */}
                        <div className="w-15 h-15 md:w-20 md:h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto text-4xl shadow-sm border border-green-100">
                            <i className="fa-solid fa-paper-plane "></i>
                        </div>

                        {/* Success Text */}
                        <div className="space-y-4">
                            <span className={`text-[10px] font-bold uppercase tracking-[4px] md:tracking-[8px] ${theme.text} `}>Request Received</span>
                            <h2 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] leading-tight">
                                Quotation Sent Successfully!
                            </h2>
                            <p className="text-gray-500 text-xs md:text-sm max-w-xs mx-auto md:leading-relaxed">
                                A detailed breakdown of your <span className="font-bold text-[#1a1a1a]">{formData.homeType}</span> project cost has been sent to your WhatsApp number.
                            </p>
                        </div>

                        {/* Project Summary Card */}
                        <div className="bg-gray-50 rounded-[16px] md:rounded-[32px] p-4 md:p-8 text-left space-y-5 border border-gray-100 max-w-sm mx-auto">
                            <div className="flex justify-between items-center border-b border-gray-200 pb-2 md:pb-4">
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Client</span>
                                <span className="text-xs text-[#1a1a1a] font-bold uppercase">{clientInfo.name}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-2 md:pb-4">
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Project Site</span>
                                <span className="text-xs text-[#1a1a1a] font-bold uppercase">{clientInfo.location}</span>
                            </div>

                        </div>

                        <div className="text-center">
                            <span className="text-[10px] font-bold font-poppins uppercase tracking-wide text-gray-800">
                                Why Choose Us?
                            </span>
                        </div>
                        {/* --- NEW TRUST SIGNALS SECTION --- */}
                        <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto py-6 border-y border-gray-50 mt-2">
                            <div className="text-center space-y-1">
                                {/* Changed to fa-city for Vertical/Building context */}
                                <i className={`fa-solid fa-city ${fromPage ? "text-[#a5abaa]" : "text-[#1a1a1a]"} text-lg`}></i>
                                <p className="text-[10px] font-bold text-[#1a1a1a] uppercase leading-tight">
                                    Multiple <br />Projects
                                </p>
                            </div>
                            <div className="text-center space-y-1 border-x border-gray-100">
                                <i className={`fa-solid fa-face-smile ${fromPage ? "text-[#a5abaa]" : "text-[#1a1a1a]"} text-lg`}></i>
                                <p className="text-[10px] font-bold text-[#1a1a1a] uppercase leading-tight">98% <br />Happy Clients</p>
                            </div>
                            <div className="text-center space-y-1">
                                <i className={`fa-solid fa-user-shield ${fromPage ? "text-[#a5abaa]" : "text-[#1a1a1a]"} text-lg`}></i>
                                <p className="text-[10px] font-bold text-[#1a1a1a] uppercase leading-tight">
                                    Expert <br />Team
                                </p>
                            </div>
                        </div>
                        {/* ---------------------------------- */}

                        {/* Actions */}
                        <div className="space-y-4 pt-3 max-w-sm mx-auto">
                            <button
                                onClick={() => window.open(`https://wa.me/${phoneNumber}?`, '_blank')}
                                className="w-full bg-[#25D366] text-white cursor-pointer py-3 md:py-6 rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 shadow-xl hover:scale-105 transition-transform"
                            >
                                {/* <i className="fa-brands fa-whatsapp text-2xl"></i> Contact Us<span className="hidden md:inline-block">through whatsapp</span> */}
                                <i className="fa-brands fa-whatsapp text-2xl"></i>
                                <span>
                                    Contact Us <span className="hidden md:inline">Through WhatsApp</span>
                                </span>
                            </button>

                            <button
                                onClick={() => {
                                    setStep(1);
                                    handleClear();
                                }}
                                className={`w-full text-gray-400 font-bold uppercase tracking-widest text-[9px] ${theme.hoverText} transition-colors`}
                            >
                                Create Another Estimate
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default CostCalculatorMain;