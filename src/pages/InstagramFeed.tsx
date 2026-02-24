import React, { useEffect, useRef } from 'react';

const InstagramFeed: React.FC = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Dynamically load the Elfsight script for React
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    // return () => {
    //   document.body.removeChild(script);
    // };


    // 2. The "Cleaner" function to remove the #yummy header
    const cleanWidget = () => {
      // Look for the header container Elfsight creates
      const widgetHeader = document.querySelector('[class*="Header__Container"]');
      const widgetTitle = document.querySelector('[class*="WidgetTitle__WidgetTitleComponent"]');

      if (widgetHeader) (widgetHeader as HTMLElement).style.display = 'none';
      if (widgetTitle) (widgetTitle as HTMLElement).style.display = 'none';
    };

    // 3. Set an interval to keep checking (since Elfsight loads late)
    const interval = setInterval(cleanWidget, 1000);

    return () => {
      document.body.removeChild(script);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className=" bg-white">
      <div className="container mx-auto">
        {/* This is your new professional header */}
        {/* <h2 className="text-center text-2xl md:text-3xl font-black uppercase tracking-[4px] text-[#1a1a1a] mb-2">
          #interiors
        </h2> */}

        <div className="mb-0 text-center">
          <a
            href="https://www.instagram.com/living.vertical/"
            
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group cursor-pointer"
          >
            <h2 className="text-lg  font-bold text-[#1a1a1a]">
              #interiors
            </h2>
            <div className="w-12 h-1 bg-[#ffc000] mx-auto mt-2"></div>
          </a>
        </div>

        {/* The Widget Container */}
        <div ref={containerRef} className="relative">
          <div
            className="elfsight-app-d9368053-282f-44b6-9714-2744372e2067"
            data-elfsight-app-lazy
          ></div>

          {/* Optional: Visual "Patch" - if the JS fix fails, this covers the #yummy area with white */}
          <div className="absolute top-0 left-0 w-full h-[80px] bg-white z-[5] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;