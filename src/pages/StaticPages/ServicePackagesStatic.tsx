import React from 'react';
import PackagesSection from '../services/PackagesSection';

const ServicePackagesStatic: React.FC = () => {
    return (
        <div className="">
            {/* <header className="text-center mb-12">
                <h1 className="text-3xl font-bold uppercase tracking-wide">Service Packages</h1>
                <p className="text-gray-500 mt-2">Professional interior solutions tailored for you.</p>
            </header> */}

            <section className="content-wrapper">
                <PackagesSection />
            </section>
        </div>
    );
};

export default ServicePackagesStatic;