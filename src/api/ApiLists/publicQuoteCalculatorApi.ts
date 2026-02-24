import { useMutation } from "@tanstack/react-query";
import { api } from '../axiosInstance';



interface IPayload {
    name:string, phone:string, location:string, carpetArea:number, homeType:string, finish:string, estimate:number
}
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