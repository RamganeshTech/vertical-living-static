import React, { useEffect } from 'react';

const InstagramFeed: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Elfsight script for React
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount to prevent multiple loads
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className=" bg-white">
      <div className="container mx-auto">
        {/* <h2 className="font-luxe text-center text-3xl md:text-5xl font-bold mb-10 uppercase tracking-wider">
          Follow Us On Instagram
        </h2> */}
        {/* The specific Elfsight widget container from your HTML */}
        <div 
          className="elfsight-app-d9368053-282f-44b6-9714-2744372e2067" 
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default InstagramFeed;