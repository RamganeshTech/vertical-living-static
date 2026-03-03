import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CASE_STUDIES_DATA } from '../constants/constants';
// import { CASE_STUDIES_DATA } from '../constants/caseStudies';

const CaseStudiesSingle: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const study = CASE_STUDIES_DATA.find(s => s.id === id);

    if (!study) return <div className="p-20 text-center font-bold">Case Study Not Found</div>;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Image */}
            <div className="h-[50vh] w-full relative">
                <img src={study.image} className="w-full h-full object-cover" alt={study.title} />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-5xl md:text-7xl font-bold text-center px-6">
                        {study.title}
                    </h1>
                </div>
                <button 
                    onClick={() => navigate(-1)}
                    className="absolute top-10 left-10 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-[#ffc000] transition-colors"
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
            </div>

            <article className="max-w-[900px] mx-auto px-6 py-20">
                <div className="space-y-16">
                    <section>
                        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#ffc000] pl-6 uppercase tracking-tight">Introduction</h2>
                        <p className="text-xl text-gray-600 leading-loose">{study.fullContent.introduction}</p>
                    </section>

                    <section className="bg-gray-50 p-12 rounded-[40px]">
                        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 uppercase tracking-tight">The Selection Process</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">{study.fullContent.selectionProcess}</p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 uppercase tracking-tight">Material & Durability</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">{study.fullContent.materialScience}</p>
                    </section>

                    <section className="border-t border-gray-100 pt-16">
                        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 uppercase tracking-tight">Technical Execution</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">{study.fullContent.technicalInsights}</p>
                    </section>
                </div>
            </article>

            {/* Footer Contact CTA */}
            <section className="bg-[#1a1a1a] py-20 text-center text-white mt-20">
                <h3 className="text-3xl font-bold mb-6">Inspired by this project?</h3>
                <button 
                    onClick={() => navigate('/calculator')}
                    className="bg-[#ffc000] text-[#1a1a1a] px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                    Get Your Estimate
                </button>
            </section>
        </div>
    );
};

export default CaseStudiesSingle;