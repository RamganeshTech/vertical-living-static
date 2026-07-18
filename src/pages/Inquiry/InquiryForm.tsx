import InquiryFormNew from './InquiryFormNew'
import img from "../../assets/images/formBgImg4.webp"

const InquiryForm = () => {
  return (

    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        {/* LIGHTHOUSE TIP: 
          If you are using Next.js, replace this <img> with the <Image /> component 
          and add the `priority` prop. Ensure your image is a .webp or .avif file.
        */}
        <img
          src={img} /* <-- PASTE YOUR IMAGE PATH HERE */
          alt="Premium Interior Design Living Room"
          // className="w-full h-full object-cover object-center"
          // className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-1000"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* PREMIUM OVERLAY: 
          A soft gradient that transitions from a solid dark ash to slightly transparent. 
          This ensures the background isn't noisy, keeping the UI clean and professional 
          while guaranteeing standard Lighthouse contrast ratios.
        */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/50 to-[#1a1a1a]/10 backdrop-blur-[2px]"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent"></div>
      </div>

      {/* 2. FORM CONTENT LAYER */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 py-12 md:py-24 flex justify-center lg:justify-start">
        
        {/* CHILD OVERRIDE WRAPPER:
          This removes the solid #fcfcfc background and extra padding from the 
          InquiryFormNew's root <section> so the background image can shine through.
        */}
        <div className="w-full max-w-[700px] [&>section]:!bg-transparent [&>section]:!py-0 drop-shadow-2xl">
          <InquiryFormNew showCalculatorLink={true} fromPage={true} />
        </div>
        
      </div>
    </main>
  )
}

export default InquiryForm


