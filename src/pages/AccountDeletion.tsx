import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AccountDeletion: React.FC = () => {
    // const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-sans text-[#444]">


            <main className="max-w-[1300px] mx-auto px-6 py-16 md:py-24">
                {/* Hero Section */}
                <div className="text-center mb-16 ">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tighter mb-6"
                    >
                        Account & Data {" "}
                        <span className="text-[#ffc000]">Deletion Request</span>
                    </motion.h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500 font-medium">
                        We respect your privacy. If you wish to delete your account and associated data from the Vertical living platform, please follow the instructions below.
                    </p>
                </div>

                {/* Instruction Card */}
                <section className="bg-gray-50 rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-sm mb-16">
                    <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8 flex items-center gap-4">
                        <span className="w-8 h-1 bg-[#ffc000]"></span>
                        How to Request Deletion
                    </h2>
                    <p className="mb-10 text-gray-600">
                        To process your data deletion request efficiently and securely, please send an email to our support team:
                    </p>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="flex gap-6">
                            <div className="w-10 h-10 rounded-full bg-[#ffc000] flex items-center justify-center text-[#1a1a1a] font-bold flex-shrink-0">1</div>
                            <div>
                                <h3 className="font-bold text-[#1a1a1a] mb-1">Email To</h3>
                                <p>
                                    Send an email to
                                <a href="mailto:ramstechcircle@gmail.com" className="text-[#ffc000] ml-1 font-bold hover:underline">ramstechcircle@gmail.com</a>
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-6">
                            <div className="w-10 h-10 rounded-full bg-[#ffc000] flex items-center justify-center text-[#1a1a1a] font-bold flex-shrink-0">2</div>
                            <div>
                                <h3 className="font-bold text-[#1a1a1a] mb-1">Subject Line</h3>
                                <code className=" px-4 py-2 rounded-lg  text-gray-600 font-medium">Request for Account Deletion</code>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-6">
                            <div className="w-10 h-10 rounded-full bg-[#ffc000] flex items-center justify-center text-[#1a1a1a] font-bold flex-shrink-0">3</div>
                            <div>
                                <h3 className="font-bold text-[#1a1a1a] mb-2">Include Details</h3>
                                <p className="text-sm text-gray-500 mb-3 italic">Please include the following details so we can verify your account:</p>
                                <ul className="list-disc pl-5 space-y-1 text-gray-600 font-medium">
                                    <li>Registered Phone Number</li>
                                    <li>Registered Email Address</li>
                                    <li>Full Name</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-white rounded-2xl border border-[#ffc000]/20 text-sm text-gray-500 italic">
                        <strong>Note:</strong> We may contact you to verify your identity before deleting your account to prevent accidental or unauthorized deletion.
                    </div>
                </section>

                {/* Data Details Section */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-3">What data will be deleted?</h2>
                        <p className="text-gray-600 mb-3">Upon verification, the following data will be permanently removed from our active databases:</p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 font-bold text-[#1a1a1a]">
                                <i className="fa fa-check text-[#ffc000]"></i> Personal profile information (Name, Email, Phone)
                            </li>
                            <li className="flex items-center gap-3 font-bold text-[#1a1a1a]">
                                <i className="fa fa-check text-[#ffc000]"></i> Saved addresses and design preferences
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-3">Processing Timeline?</h2>
                        <p className="text-gray-600 mb-6">Once we receive your request, our team will complete the deletion process within <span className='text-gray-900 font-bold'> 7 days.</span></p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AccountDeletion;