import React, { useState } from 'react'
import { useRazorpay } from '../../hooks/useRazorpay';

const Booking = ({ planId, PLANS }: { planId: string, PLANS: any[] }) => {
    // const navigate = useNavigate();
    const { initiatePayment, isLoading } = useRazorpay();

    const selectedPlan = PLANS.find(p => p.id === planId);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    if (!selectedPlan) {
        return <div className="py-20 text-center font-inter">Plan not found.</div>;
    }

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name) newErrors.name = "Full name is required";
        if (!formData.email.includes('@')) newErrors.email = "Valid email is required";
        if (formData.phone.length !== 10) newErrors.phone = "10-digit phone number is required";
        if (!acceptedTerms) newErrors.terms = "You must accept Terms & Conditions";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePayNow = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Trigger the Razorpay hook
            await initiatePayment(selectedPlan.price, {
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            });
        }
    };

    return (
        <section className="min-h-screen bg-[#fcfcfc] py-20 font-inter">
            <div className="container mx-auto px-4">
                <div className="max-w-[550px] mx-auto bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 relative overflow-visible">

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#ffc000]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

                    <div className="mb-10 text-center">
                        <h1 className="text-[22px] md:text-[28px] font-black uppercase tracking-tight text-[#1a1a1a]">Confirm Booking</h1>
                        <div className="w-10 h-1 bg-[#ffc000] rounded-full mt-2 mx-auto"></div>
                        <p className="text-gray-400 text-xs mt-4 font-bold uppercase tracking-widest">
                            {selectedPlan.name} — <span className="text-[#1a1a1a]">₹{selectedPlan.price}</span>
                        </p>
                    </div>

                    <form onSubmit={handlePayNow} className="space-y-6">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#666] ml-2 block">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className={`w-full h-[50px] bg-white border-2 ${errors.name ? 'border-red-400' : 'border-[#eee]'} rounded-full px-6 text-[13px] outline-none transition-all focus:border-[#ffc000]`}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            {errors.name && <p className="text-[10px] text-red-500 ml-4 italic">{errors.name}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#666] ml-2 block">Email Address</label>
                            <input
                                type="email"
                                placeholder="example@mail.com"
                                className={`w-full h-[50px] bg-white border-2 ${errors.email ? 'border-red-400' : 'border-[#eee]'} rounded-full px-6 text-[13px] outline-none transition-all focus:border-[#ffc000]`}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            {errors.email && <p className="text-[10px] text-red-500 ml-4 italic">{errors.email}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#666] ml-2 block">Mobile Number</label>
                            <input
                                type="tel"
                                maxLength={10}
                                placeholder="10-digit number"
                                className={`w-full h-[50px] bg-white border-2 ${errors.phone ? 'border-red-400' : 'border-[#eee]'} rounded-full px-6 text-[13px] outline-none transition-all focus:border-[#ffc000]`}
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') })}
                            />
                            {errors.phone && <p className="text-[10px] text-red-500 ml-4 italic">{errors.phone}</p>}
                        </div>

                        {/* Terms & Conditions */}
                        <div className="flex items-start gap-3 pt-2">
                            <input
                                type="checkbox"
                                id='terms'
                                checked={acceptedTerms}
                                onChange={(e) => setAcceptedTerms(e.target.checked)}
                                className="mt-1 w-4 h-4 accent-[#ffc000] cursor-pointer"
                            />
                            <label htmlFor="terms" className="text-[11px] cursor-pointer text-gray-500 leading-relaxed">
                                I have read and agree to the{' '}
                                <span className="text-[#1a1a1a] font-semibold underline cursor-pointer">
                                    Terms & Conditions
                                </span>
                            </label>
                        </div>

                        {errors.terms && (
                            <p className="text-[10px] text-red-500 ml-6 italic">
                                {errors.terms}
                            </p>
                        )}

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-[60px] bg-[#1a1a1a] text-white rounded-full text-[12px] font-bold uppercase tracking-[3px] shadow-xl hover:bg-[#ffc000] hover:text-black transition-all duration-300 disabled:opacity-50"
                            >
                                {isLoading ? "Processing..." : `Secure Payment — ₹${selectedPlan.price}`}
                            </button>
                        </div>

                        <p className="text-center text-[9px] text-gray-400 font-medium uppercase tracking-wider">
                            Payments secured by Razorpay
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Booking