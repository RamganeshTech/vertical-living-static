import { useMutation } from "@tanstack/react-query";
import { api } from "../axiosInstance";



/**
 * Generate Public Cost Calculator otp
 */
export const generateCostCalculatorOtp = async (
    payload: { name: string, phone: string }
): Promise<any> => {
    // const { data } = await api.post(


    //     "api/v1/otp/generate",
    //     payload
    // );

    // if (!data.ok) {
    //     throw new Error(data.message || "Failed to generate otp");
    // }

    // return data;

    try {
        const { data } = await api.post("api/v1/otp/generate", payload);
        console.log("data from the generatin te cost caluclator " , data)
        return data;
    } catch (error: any) {
        // Extract the exact error from your backend (e.g., rate limit, invalid number)
        const backendMessage = error.response?.data?.message || "Failed to send code.";
        throw new Error(backendMessage);
    }
};


/**
 * Custom Hook for Public Cost Calculator otp generatig
 */
export const useGenerateCostCalculatorOtp = () => {
    return useMutation({
        mutationFn: async (payload: { name: string, phone: string }) =>
            await generateCostCalculatorOtp(payload),

        // onSuccess: (data) => {
        //     // console.log("Quotation Generated:", data.url);
        //     // You can auto-open PDF:
        //     // window.open(data.url, "_blank");
        // },

        // onError: (error: any) => {
        //     console.error("Quotation API Error:", error.message);
        // },
    });
};






/**
 * Generate Public Cost Calculator otp
 */
export const verifyCostCalculatorOtp = async (
    payload: { otp: string, phone: string }
): Promise<any> => {
    try {
        const { data } = await api.post("api/v1/otp/verify", payload);

        console.log("data on vericiation try catch data", data)
        return data;
    } catch (error: any) {
        // Axios stores the backend error response inside error.response.data
        const backendMessage = error.response?.data?.message || "Failed to verify access key";
        console.error("Axios caught an error:", backendMessage);

        // Throw it so React Query / mutateAsync can catch it
        throw new Error(backendMessage);
    }
};


/**
 * Custom Hook for Public Cost Calculator otp generatig
 */
export const useVerifyCostCalculatorOtp = () => {
    return useMutation({
        mutationFn: async (payload: { otp: string, phone: string }) =>
            await verifyCostCalculatorOtp(payload),

        // onSuccess: (data) => {
        //     // console.log("Quotation Generated:", data.url);
        //     // You can auto-open PDF:
        //     // window.open(data.url, "_blank");
        // },

        // onError: (error: any) => {
        //     console.error("Quotation API Error:", error.message);
        // },
    });
};

