import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CASE_STUDIES_DATA } from '../constants/constants';
// import { CASE_STUDIES_DATA } from '../constants/caseStudies';

const CaseStudiesMain: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-[1400px] mx-auto px-6 py-24">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] tracking-tight mb-4">
                        Expert <span className="text-[#ffc000]">Case Studies</span>
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Deep dives into our design philosophy and technical execution across various interior categories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {CASE_STUDIES_DATA.map((study) => (
                        <div 
                            key={study.id} 
                            onClick={() => navigate(`/case-studies/${study.id}`)}
                            className="group cursor-pointer bg-gray-50 rounded-[40px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="h-72 overflow-hidden">
                                <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{study.title}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed line-clamp-2">
                                    {study.preview}
                                </p>
                                <button className="text-[#1a1a1a] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:text-[#ffc000] transition-colors">
                                    View Full Study <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default CaseStudiesMain;