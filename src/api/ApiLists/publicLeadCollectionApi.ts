import { useMutation } from "@tanstack/react-query";
// import api from "../api"; // Your base axios instance
import axios from "axios";


export interface IPublicLeadPayload {
    // organizationId: string;
    fullName: string;
    mobileNumber: string;
    projectCategory?: string;
    propertyType?: string;
    budget?: string;
    location?: string;
    timeline?: string;
    serviceType?: string;
}

const DOMAIN_URL = import.meta.env.VITE_HOUSEOFRAM_URL;


/**
 * API Service for creating a lead
 */
export const createPublicLeadInquiry = async (
    payload: IPublicLeadPayload
): Promise<any> => {
    const { data } = await axios.post(
        `${DOMAIN_URL}/api/v1/public/leadcollection/submit`,
        payload
    );

    if (!data.ok) {
        throw new Error(data.message || "Failed to submit inquiry");
    }

    return data;
};

/**
 * Custom Hook for Public Lead Submission
 */
export const useCreatePublicLead = () => {
    return useMutation({
        mutationFn: async (payload:any) =>
           await createPublicLeadInquiry(payload),

        onSuccess: (data) => {
            console.log("Lead successfully captured:", data.data?.leadNumber);
        },

        onError: (error: any) => {
            console.error("Lead Submission Error:", error.message);
        },
    });
};