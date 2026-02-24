import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {

    return (
        <div className="min-h-screen bg-white font-sans text-[#444] leading-relaxed">
            {/* Navigation Header */}
            {/* <header className="border-b border-gray-100 py-6 px-4 md:px-12 flex justify-between items-center bg-white sticky top-0 z-50 shadow-sm">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                    <img src="/logo.png" alt="Vertical living" className="h-8 w-auto" />
                    <span className="text-[22px] font-bold tracking-tighter text-[#1a1a1a]">Vertical living</span>
                </div>
                <button 
                    onClick={() => navigate('/')}
                    className="text-[#ffc000] font-bold text-sm hover:underline tracking-tight"
                >
                    Back to Home
                </button>
            </header> */}

            {/* Main Content Container */}
            <main className="max-w-[1300px] mx-auto px-6 py-16 md:py-24">
                
                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-black text-[#1a1a1a] mb-12 tracking-tighter">
                    Privacy Policy
                </h1>

                {/* Introduction Text */}
                <div className="space-y-6 text-[17px] md:text-[19px] mb-16">
                    <p>
                        <strong className="text-[#1a1a1a]">Vertical living</strong> ("we", "our", "us") is an interior design and construction services company operating in India. We are committed to protecting the privacy and personal data of our clients, website visitors, app users, and leads generated through advertising platforms including Meta (Facebook & Instagram).
                    </p>
                    <p>
                        This Privacy Policy explains how we collect, use, disclose, store, and protect personal information in compliance with applicable Indian laws, including the <strong className="text-[#1a1a1a]">Information Technology Act, 2000</strong>, <strong className="text-[#1a1a1a]">IT Rules, 2011</strong>, and the <strong className="text-[#1a1a1a]">Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, and aligns with standard global privacy practices.
                    </p>
                    <p className="font-bold text-[#1a1a1a]">
                        published by RAMS TECH CIRCLE OPC PVT LTD
                    </p>
                    <p>
                        This Privacy Policy applies to the <strong className="text-[#1a1a1a]">Vertical living</strong> mobile application, our website <Link to={'/'} className="text-[#ffc000] font-bold">theverticalliving.com</Link>
                    </p>
                </div>

                {/* Policy Points */}
                <div className="space-y-16">
                    
                    {/* 1. Scope */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">1. Scope of This Policy</h2>
                        <p className="mb-4">This Privacy Policy applies to:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                            <li>Our website</li>
                            <li>Our mobile application (if applicable)</li>
                            <li>Lead forms, including Meta Ads lead forms</li>
                            <li>Customer communications (calls, WhatsApp, email, SMS)</li>
                            <li>Offline data collected during site visits or consultations</li>
                        </ul>
                        <p className="mt-4">By accessing or using our services, you consent to the terms of this Privacy Policy.</p>
                    </section>

                    {/* 2. Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">2. Information We Collect</h2>
                        <p className="mb-6">We may collect the following categories of personal data:</p>
                        
                        <div className="space-y-8 pl-4 border-l-2 border-gray-100">
                            <div>
                                <h3 className="font-bold text-[#1a1a1a] mb-3 uppercase tracking-wider text-sm">a) Personal Identification Information</h3>
                                <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                                    <li>Name</li>
                                    <li>Phone number</li>
                                    <li>Email address</li>
                                    <li>City / location</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1a1a1a] mb-3 uppercase tracking-wider text-sm">b) Service-Related Information</h3>
                                <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                                    <li>Property details shared for design or construction purposes</li>
                                    <li>Budget preferences</li>
                                    <li>Design requirements</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1a1a1a] mb-3 uppercase tracking-wider text-sm">c) Technical & Usage Information</h3>
                                <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                                    <li>IP address</li>
                                    <li>Device information</li>
                                    <li>Browser type</li>
                                    <li>Cookies and tracking pixels (including Meta Pixel)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1a1a1a] mb-3 uppercase tracking-wider text-sm">d) Marketing & Lead Information</h3>
                                <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                                    <li>Information submitted via Meta Ads, Google Ads, website forms, or app forms</li>
                                    <li>Communication preferences</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-8 italic text-gray-500">We do not knowingly collect sensitive personal data such as biometric data, financial passwords, or government-issued IDs unless legally required.</p>
                    </section>

                    {/* 3. Purpose */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">3. Purpose of Data Collection</h2>
                        <p className="mb-4">We collect and process personal data for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                            <li>To contact you regarding interior design and related services</li>
                            <li>To provide quotations, designs, and consultations</li>
                            <li>To manage customer relationships and service delivery</li>
                            <li>To improve our website, app, and services</li>
                            <li>To run and optimize advertising campaigns</li>
                            <li>To comply with legal and regulatory obligations</li>
                        </ul>
                    </section>

                    {/* 4. Legal Basis */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">4. Legal Basis for Processing</h2>
                        <p className="mb-4">We process personal data based on:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                            <li>Your consent (explicit or implied)</li>
                            <li>Performance of a contract or service request</li>
                            <li>Legitimate business interests</li>
                            <li>Legal compliance under applicable laws</li>
                        </ul>
                    </section>

                    {/* 5. Data Sharing */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">5. Data Sharing & Disclosure</h2>
                        <p className="mb-4">We do not sell personal data. We may share information only with:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                            <li>Advertising platforms (e.g., Meta, Google) for lead generation and analytics</li>
                            <li>Service providers (CRM tools, cloud storage, marketing agencies)</li>
                            <li>Legal or regulatory authorities if required by law</li>
                        </ul>
                        <p className="mt-4 font-medium">All third parties are contractually obligated to maintain data confidentiality and security.</p>
                    </section>

                    {/* 6. Cookies */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">6. Cookies & Tracking Technologies</h2>
                        <p className="mb-4">We use cookies, pixels, and similar technologies to:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                            <li>Analyze website traffic</li>
                            <li>Measure ad performance</li>
                            <li>Improve user experience</li>
                        </ul>
                        <p className="mt-4">You may control cookies through your browser settings.</p>
                    </section>

                    {/* 7. Data Retention */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">7. Data Retention</h2>
                        <p className="mb-4">We retain personal data only for as long as necessary to:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                            <li>Fulfill the purpose for which it was collected</li>
                            <li>Comply with legal, accounting, or regulatory requirements</li>
                        </ul>
                        <p className="mt-4">When data is no longer required, it is securely deleted or anonymized.</p>
                    </section>

                    {/* 8. Data Security */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">8. Data Security</h2>
                        <p className="mb-4">We implement reasonable administrative, technical, and physical safeguards to protect personal data against:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                            <li>Unauthorized access</li>
                            <li>Loss</li>
                            <li>Misuse</li>
                            <li>Alteration or disclosure</li>
                        </ul>
                        <p className="mt-4">However, no method of transmission over the internet is 100% secure.</p>
                    </section>

                    {/* 9. User Rights */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">9. User Rights (DPDP Act, 2023)</h2>
                        <p className="mb-4 font-bold">You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                            <li>Access your personal data</li>
                            <li>Request correction or updating of data</li>
                            <li>Withdraw consent</li>
                            <li>Request deletion of data (subject to legal requirements)</li>
                            <li>Raise grievances regarding data processing</li>
                        </ul>
                        <p className="mt-4">Requests can be made using the contact details below.</p>
                    </section>

                    {/* 10. Children’s Privacy */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">10. Children’s Privacy</h2>
                        <p>Our services are not directed at individuals under 18 years of age. We do not knowingly collect personal data from minors.</p>
                    </section>

                    {/* 11. Third-Party Links */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">11. Third-Party Links</h2>
                        <p>Our website or app may contain links to third-party websites. We are not responsible for their privacy practices.</p>
                    </section>

                    {/* 12. Updates */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">12. Updates to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.</p>
                    </section>

                    {/* 13. Account Deletion */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">13. Account & Data Deletion</h2>
                        <div className="space-y-4">
                            <p>Users have the right to request deletion of their account and associated personal data from the Vertical living platform.</p>
                            <p>Account deletion requests are reviewed and processed by an administrator to prevent unauthorized or accidental deletion.</p>
                            <p className="font-bold">To request account deletion, users must send an email from their registered email address to:</p>
                            <a href="mailto:ramstechcircle@gmail.com" className="text-[#ffc000] font-bold hover:underline">ramstechcircle@gmail.com</a>
                            <p>Please include your registered name, email address, and phone number in the request for verification purposes.</p>
                            <p>Upon successful verification, personal data including account information, will be permanently deleted within <strong className="text-[#1a1a1a]">7 working days</strong>.</p>
                            <p className="text-sm">For more details, users may visit our Account Deletion page.</p>
                        </div>
                    </section>

                    {/* 14. Contact Info */}
                    <section className="bg-gray-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">14. Contact Information</h2>
                        <div className="space-y-2 not-italic">
                            <p className="font-black text-[#1a1a1a] text-xl">Vertical living</p>
                            <p>13th, Main Road, Anna Nagar West, Anna Nagar (chennai),</p>
                            <p>Chennai, Egmore Nungambakkam, Tamil Nadu, India, 600040.</p>
                            <p className="pt-4">
                                <span className="font-bold">Email:</span> <a href="mailto:ramstechcircle@gmail.com" className="text-[#ffc000] hover:underline">ramstechcircle@gmail.com</a>
                            </p>
                            <p>
                                <span className="font-bold">Phone:</span> <a href="tel:+919363993814" className="text-[#ffc000] hover:underline">+91 93639 93814</a>
                            </p>
                        </div>
                        <p className="mt-8 text-sm text-gray-500 italic">For privacy-related concerns or data requests, please contact us at the above details.</p>
                    </section>

                </div>
            </main>

            {/* Footer space */}
            {/* <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-xs">
                © {new Date().getFullYear()} Vertical living by RAMS TECH CIRCLE OPC PVT LTD. All rights reserved.
            </footer> */}
        </div>
    );
};

export default PrivacyPolicy;