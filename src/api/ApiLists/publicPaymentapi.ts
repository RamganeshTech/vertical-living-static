import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "/api/v1/public/transaction";
const DOMAIN_URL = import.meta.env.VITE_HOUSEOFRAM_URL;

// Interfaces to match your backend types
export interface CreateOrderPayload {
  amount: number;
  customerDetails: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface VerifyPaymentPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

// 1. Hook to Create Order
export const useCreatePublicOrder = () => {
  return useMutation({
    mutationFn: async (payload: CreateOrderPayload) => {
      const {data} = await axios.post(`${DOMAIN_URL}${BASE_URL}/createorder`, payload);
      console.log("data", data)
      return data;
    },
  });
};

// 2. Hook to Verify Payment
export const useVerifyPublicPayment = () => {
  return useMutation({
    mutationFn: async (payload: VerifyPaymentPayload) => {
      const {data} = await axios.post(`${DOMAIN_URL}${BASE_URL}/verify`, payload);
      return data;
    },
  });
};