import { useMutation } from '@tanstack/react-query';
import { api } from '../axiosInstance';
// import { chatApi } from './axiosInstance';

// Gemini compatible message structure
export interface ChatPart {
    text: string;
}

export interface ChatMessage {
    role: 'user' | 'model';
    parts: ChatPart[];
}

export interface ChatResponse {
    reply: string;
    ok: boolean;
}

export interface ChatPayload {
    message: string;
    history: ChatMessage[];
}

/**
 * API Function to call the Gemini Backend
 */
export const askChatbot = async (payload: ChatPayload): Promise<ChatResponse> => {
    const { data } = await api.post<any>('api/v1/chat/ask', payload);

    if (!data.ok) {
        return data.reply || new Error("Please try after sometime")
        throw new Error('Failed to get response from AI');
    }
  
    return data;
};

/**
 * Custom Hook for Chatbot Mutation
 */
export const useAskChatbot = () => {
    return useMutation({
        mutationFn: (payload: ChatPayload) => askChatbot(payload),
        // onSuccess: (data) => {
        //     // Optional: You could log successful interactions or update global state here
        //     console.log('AI Response:', data.reply);
        // },
        onError: (error: any) => {
            console.error('Chatbot API Error:', error.message);
        }
    });
};