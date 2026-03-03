import React from 'react';
import WorkCarousel from '../WorkCarousel';
// import WorkCarousel from '../components/WorkCarousel';

const PortfolioStatic: React.FC = () => {
  return (
    <div className="">
      <section className="portfolio-slider-section">
        <WorkCarousel />
      </section>
    </div>
  );
};

export default PortfolioStatic;