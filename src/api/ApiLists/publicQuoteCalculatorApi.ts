import { useMutation } from "@tanstack/react-query";
import { api } from '../axiosInstance';
import axios from "axios";



interface IPayload {
    name:string, phone:string, location:string, config: any; carpetArea:number, homeType:string, finish:string, estimate:number

}


const DOMAIN_URL = import.meta.env.VITE_HOUSEOFRAM_URL;

/**
 * Generate Public Cost Calculator Quote
 */
export const generatePublicQuote = async (
    payload: IPayload
):Promise<any> => {
    const { data } = await api.post(
        "api/v1/calculator/generate",
        payload
    );

    if (!data.ok) {
        throw new Error(data.message || "Failed to generate quotation");
    }

    return data;
};


/**
 * Custom Hook for Public Cost Calculator
 */
export const useGeneratePublicQuote = () => {
    return useMutation({
        mutationFn: (payload: IPayload) =>
            generatePublicQuote(payload),

        onSuccess: (data) => {
            console.log("Quotation Generated:", data.url);
            // You can auto-open PDF:
            // window.open(data.url, "_blank");
        },

        onError: (error: any) => {
            console.error("Quotation API Error:", error.message);
        },
    });
};



//  CRM backend is called

export const createPublicCostCalculationForCRM = async (
    payload: IPayload
): Promise<any> => {
    console.log("domain", DOMAIN_URL)
    const { data } = await axios.post(
        `${DOMAIN_URL}/api/v1/public/costcalculation/createorder`,
        payload
    );

    if (!data.ok) {
        throw new Error(data.message || "Failed to save quotation");
    }

    return data;
};


export const useCreateCRMPublicQuote = () => {
    return useMutation({
        mutationFn: async (payload: IPayload) =>
            await createPublicCostCalculationForCRM(payload),

        onSuccess: (data) => {
            console.log("Quotation saved to Database:", data.data);
            // If the backend returns a generated PDF URL in 'quotationPdf'
            if (data.data?.quotationPdf) {
                 console.log("PDF URL:", data.data.quotationPdf);
            }
        },

        onError: (error: any) => {
            console.error("Database Save Error:", error.message);
        },
    });
};