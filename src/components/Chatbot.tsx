import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAskChatbot, type ChatMessage } from '../api/ApiLists/chatbotApi';
// import { useAskChatbot, ChatMessage } from '../api/chatbotApi';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<ChatMessage[]>([
        { role: 'model', parts: [{ text: "Welcome to Vertical Living. How can I assist you with your interior design journey today?" }] }
    ]);

    const chatbotRef = useRef<HTMLDivElement>(null);

    const scrollRef = useRef<HTMLDivElement>(null);
    const { mutate, isPending } = useAskChatbot();

    // Auto-scroll to bottom on new messages
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, isPending]);

    // const handleSendMessage = () => {
    //     if (!input.trim() || isPending) return;

    //     const userMessage: ChatMessage = { role: 'user', parts: [{ text: input }] };
    //     const updatedHistory = [...history, userMessage];

    //     setHistory(updatedHistory);
    //     setInput('');

    //     mutate({ message: input, history: updatedHistory }, {
    //         onSuccess: (data) => {
    //             setHistory(prev => [...prev, { role: 'model', parts: [{ text: data.reply }] }]);
    //         }
    //     });
    // };


    const handleSendMessage = () => {
        if (!input.trim() || isPending) return;

        const userMessage: ChatMessage = { role: 'user', parts: [{ text: input }] };
        const updatedHistory = [...history, userMessage];

        setHistory(updatedHistory);
        setInput('');

        // SENIOR TIP: Only send the last 6 messages to the backend
        // This keeps the context fresh but prevents the request from getting too large
        const chatContext = updatedHistory.slice(-6);

        mutate({ message: input, history: chatContext }, {
            onSuccess: (data) => {
                setHistory(prev => [...prev, { role: 'model', parts: [{ text: data.reply }] }]);
            }
        });
    };

    // 2. Add the "Click Outside" logic
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // If the chat is open and the click is NOT inside the chatbotRef, close it
            if (isOpen && chatbotRef.current && !chatbotRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // Attach the listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);


    return (
        <div ref={chatbotRef} className="fixed bottom-6 right-6 z-[9999] font-inter">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="mb-4 w-[90vw] sm:w-[380px] h-[500px] bg-white rounded-[30px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#1a1a1a] p-5 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#ffc000] rounded-full animate-pulse"></div>
                                <span className="text-white text-xs font-black uppercase tracking-[2px]">Vertical AI</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-[#ffc000] transition-colors">
                                <i className="fa fa-times text-lg"></i>
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#fafafa]">
                            {history.map((msg, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-[13px] leading-relaxed font-medium shadow-sm ${msg.role === 'user'
                                        ? 'bg-[#ffc000] text-black rounded-tr-none'
                                        : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                                        }`}>
                                        {msg.parts[0].text}
                                    </div>
                                </motion.div>
                            ))}
                            {isPending && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100 flex gap-2 items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Ask about our packages..."
                                className="flex-1 bg-gray-50 border-none px-4 py-3 rounded-xl text-xs focus:ring-2 ring-[#ffc000] transition-all outline-none"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={isPending}
                                className="bg-[#1a1a1a] text-[#ffc000] w-10 h-10 rounded-xl flex items-center justify-center hover:bg-black transition-all disabled:opacity-50"
                            >
                                <i className="fa fa-paper-plane"></i>
                            </button>
                        </div>
                    </motion.div>
                )}


                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute right-20 top-3 bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-100 whitespace-nowrap hidden sm:block"
                    >
                        <p className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]">
                            Chat with <span className="text-[#ffc000]">Vertical AI</span>
                        </p>
                        {/* Small arrow pointing to the button */}
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* This wrapper ensures the button and tooltip stay right-aligned */}
            <div className="relative flex items-center justify-end">
                {/* Attention-Grabbing Tooltip */}
                <AnimatePresence>
                    {!isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="absolute right-20 bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-100 whitespace-nowrap hidden sm:block"
                        >
                            <p className="text-[11px] font-black uppercase tracking-widest text-[#1a1a1a]">
                                Chat with <span className="text-[#ffc000]">Vertical AI</span>
                            </p>
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Toggle Button - Now it will stay pinned to the right */}
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-16 cursor-pointer h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.3)] border-2 border-[#ffc000]/30 overflow-hidden"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffc000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#ffc000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#ffc000]/10 to-transparent pointer-events-none"></div>
                </motion.button>
            </div>
        </div>
    );
};

export default Chatbot;