import React from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    
    // Extract the 'source' query parameter from the URL
    const source = searchParams.get('source') || 'general';

    // Dynamically adjust content based on which form they filled out
    const getPageContent = () => {
        switch (source) {
            case 'calculator':
                return {
                    title: "Estimate Requested Successfully",
                    subtitle: "Our design experts are reviewing your details.",
                    description: "Thank you for using our instant cost calculator. We have received your project specifications, and our team will contact you shortly to discuss your custom interior solutions in detail."
                };
            case 'inquiry':
                return {
                    title: "Inquiry Received Successfully",
                    subtitle: "You're one step closer to bringing your vision to life.",
                    description: "Thank you for sharing your project details. We have received your information, and our team will call you soon to confirm your requirements."
                };
            default:
                return {
                    title: "Submission Successful",
                    subtitle: "Thank you for reaching out.",
                    description: "We have received your information and will be in touch shortly."
                };
        }
    };

    const content = getPageContent();

    return (
        <section className="w-full min-h-[80vh] bg-[#fcfcfc] py-8 md:py-24 font-inter flex items-center justify-center">
            <div className="container mx-auto px-2 md:px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-[650px] mx-auto bg-white rounded-[35px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-16 relative text-center overflow-hidden"
                >
                    {/* Decorative Top Right Corner to match the form */}
                    <div 
                        className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-[#ffc000]" 
                        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                    ></div>

                    {/* Success Icon */}
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                        className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-100"
                    >
                        <i className="fa-solid fa-check text-3xl text-[#28a745]"></i>
                    </motion.div>

                    {/* Dynamic Content */}
                    <h1 className="text-[20px] md:text-[28px] font-bold uppercase tracking-tight text-[#1a1a1a] mb-2">
                        {content.title}
                    </h1>
                    <div className="w-12 h-1.5 bg-[#ffc000] rounded-full mx-auto mb-6"></div>
                    
                    <h2 className="text-[14px] md:text-[16px] font-semibold text-gray-800 mb-4">
                        {content.subtitle}
                    </h2>
                    
                    <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed mb-10 max-w-[450px] mx-auto">
                        {content.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button 
                            onClick={() => navigate('/')}
                            className="w-full sm:w-auto px-8 h-[50px] bg-[#1a1a1a] text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-md hover:bg-[#ffc000] hover:text-black transition-all"
                        >
                            Back to Home
                        </button>
                        
                        {/* Optional: Give calculator users a secondary action if needed */}
                        {source === 'inquiry' && (
                            <button 
                                onClick={() => navigate('/cost-calculation')}
                                className="w-full sm:w-auto px-8 h-[50px] border border-gray-300 text-[#333] rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-gray-50 transition-all"
                            >
                                Try Cost Calculator
                            </button>
                        )}

                        {source === 'calculator' && (
                            <button 
                                onClick={() => navigate('/form')}
                                className="w-full sm:w-auto px-8 h-[50px] border border-gray-300 text-[#333] rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-gray-50 transition-all"
                            >
                                Request Custom Proposal
                            </button>
                        )}
                    </div>  
                </motion.div>
            </div>
        </section>
    );
};

export default ThankYouPage;