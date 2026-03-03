import React from 'react';
import { Link } from 'react-router-dom';

const Disclaimer: React.FC = () => {

    return (
        <div className="min-h-screen bg-white font-sans text-[#444] leading-relaxed">
            {/* Main Content Container */}
            <main className="max-w-[1300px] mx-auto px-6 py-16 md:py-24">

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12 tracking-tighter">
                    Legal Disclaimer
                </h1>

                {/* Introduction Text */}
                <div className="space-y-6 text-[17px] md:text-[19px] mb-16">
                    <p>
                        The information provided by <strong className="text-[#1a1a1a]">Vertical Living</strong> ("we", "our", "us") on our website <Link to={'/'} className="text-[#ffc000] font-bold underline">theverticalliving.com</Link>.
                    </p>
                    <p>
                        All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.
                    </p>
                    <p className="font-bold text-[#1a1a1a]">
                        Operated by RAMS TECH CIRCLE OPC PVT LTD
                    </p>
                </div>

                {/* Disclaimer Points */}
                <div className="space-y-16">
                    {/* 1. Professional Disclaimer */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">1. Professional Services Disclaimer</h2>
                        <p className="mb-4">
                            The interior design and construction information provided is for educational and illustrative purposes.
                            While our tools (including the Project Planner and Cost Calculator) provide estimates, they are
                            <strong className="text-[#1a1a1a]"> not final binding quotes</strong>.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#ffc000]">
                            <li>Actual costs may vary based on site conditions, material availability, and final measurements.</li>
                            <li>Design renderings are artistic representations and may differ from the final executed work.</li>
                            <li>Structural changes are subject to local government regulations and engineering approvals.</li>
                        </ul>
                    </section>

                    {/* 2. Estimates & Calculations */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">2. Estimates & Accuracy</h2>
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#ffc000]">
                            <p className="italic">
                                "The figures provided by our Cost Calculator are automated estimates based on current market averages.
                                Vertical Living is not liable for discrepancies between automated estimates and final physical quotations
                                provided after a site visit."
                            </p>
                        </div>
                    </section>

                    {/* 3. External Links */}
                    {/* <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">3. External Links Disclaimer</h2>
                        <p>
                            Our website may contain links to other websites or content belonging to third parties. 
                            Such external links are not investigated or checked for accuracy by us. We do not warrant, 
                            endorse, or assume responsibility for the accuracy of information offered by third-party 
                            websites linked through our platform.
                        </p>
                    </section> */}

                    {/* 4. Limitation of Liability */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">4. Limitation of Liability</h2>
                        <p>
                            In no event shall <strong className="text-[#1a1a1a]">RAMS TECH CIRCLE OPC PVT LTD</strong> or
                            <strong className="text-[#1a1a1a]"> Vertical Living</strong> be liable for any special, direct,
                            indirect, or incidental damages arising out of the use of our services or the content
                            provided herein.
                        </p>
                    </section>

                    {/* 5. Contact for Legal */}
                    <section className="bg-gray-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">5. Legal Inquiries</h2>
                        <p className="mb-6">
                            If you require more information or have any questions about our site's disclaimer, please
                            feel free to contact us.
                        </p>
                        <div className="space-y-2 not-italic">
                            <p className="font-bold text-[#1a1a1a] text-xl">Vertical Living</p>
                            <p>13th, Main Road, Anna Nagar West, Anna Nagar (chennai),</p>
                            <p>Chennai, Egmore Nungambakkam, Tamil Nadu, India, 600040.</p>
                            <p className="pt-4">
                                <span className="font-bold">Email:</span> <a href="mailto:ramstechcircle@gmail.com" className="text-[#ffc000] hover:underline font-bold">ramstechcircle@gmail.com</a>
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Disclaimer;