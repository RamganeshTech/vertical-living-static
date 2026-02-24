import React, { useEffect } from 'react';
// import StatBox from '../components/StatBox';


// Asset Imports
import bannerBg from '../assets/images/banner-01-bg.jpg';

import { motion, type Variants } from 'framer-motion';
import Portfolio from './Portfolio';
import InstagramFeed from './InstagramFeed';
// import FloatingContact from '../components/FloatingContact';
import InquiryFormNew from './Inquiry/InquiryFormNew';
import { SOPFlow } from './SOPFlow';
import WorkCarousel from './WorkCarousel';
import { useLocation } from 'react-router-dom';
import ConnectSection from './ConnectSection';
// import Packages from './Packages';
import StickySideContact from '../components/StickySideContact';
import PackagesSection from './services/PackagesSection';
import PackagesNew from './packages/PakagesNew';
// import CostCalculatorMain from './calculator/CostCalculatorMain';



// Animation variants to mimic "wow fadeInUp"
// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// };

// Explicitly type the variants as 'Variants'
const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" // TypeScript now knows this is a valid easing value
    }
  }
};

const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};


const Home: React.FC = () => {


  const { hash } = useLocation();

  // const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  // const [hasTriggered, setHasTriggered] = useState<boolean>(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const contactSection = document.getElementById('contact'); // Ensure your Inquiry section has this ID
  //     if (contactSection && !hasTriggered) {
  //       const rect = contactSection.getBoundingClientRect();
  //       // Trigger when user scrolls past the bottom of the Inquiry section
  //       if (rect.bottom < 0) {
  //         setIsPopupOpen(true);
  //         setHasTriggered(true);
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [hasTriggered]);

  useEffect(() => {
    if (hash) {
      const id = hash?.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Short timeout to ensure the DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);


  return (
    <div className="min-h-screen bg-white">


      <InquiryFormNew />

      {/* <CostCalculatorMain
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      /> */}


      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[800px] overflow-hidden flex items-center justify-center">
        {/* Background Image - Absolute Positioned */}
        <img
          src={bannerBg}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* DARK OVERLAY - This makes the white text readable */}
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>

        {/* CONTENT - Placed above the overlay */}
        <div className="relative z-10 w-full max-w-[870px] px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h1 className="font-luxe text-white text-[50px] md:text-[80px] font-[700] leading-[1]">
              <span className="text-[#ffc000]">Design,</span> Build, Deliver
            </h1>
            <p className="text-white text-[20px] md:text-[25px] pt-[37px] pb-[40px] leading-[1.2] font-semibold">
              End-to-end interior design for homes & offices.
            </p>

            {/* <p className="text-white text-[20px] md:text-[25px] pt-[37px] pb-[40px] leading-[1.2] font-medium">
              From 3D design to execution with clear pricing & timeline.
            </p> */}

            {/* Supporting Detail - Smaller and more refined */}
            <div className="flex justify-center items-center gap-3  pb-[40px]">
              {/* <div className="w-8 h-[1px] bg-[#ffc000]"></div> Small accent line */}
              <p className="text-gray-300 text-[14px] md:text-[16px] uppercase tracking-[2px] font-medium ">
                From 3D design to execution with <span className="text-white">clear pricing & timeline.</span>
              </p>
            </div>
            <a
              href="#service"
              className="bg-[#ffc000] hover:bg-white text-black px-[40px] py-[18px] uppercase font-bold tracking-[1px] transition-all duration-500 inline-block shadow-lg"
            >
              Explore More
            </a>
          </motion.div>
        </div>
      </section>

      {/* STATIC/METRICS SECTION - Exact Padding from CSS */}
      {/* <section className="bg-[#ffc000] py-[50px] relative z-20">
        <div className="container mx-auto px-4  grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <StatBox icon="08+" text={<>We have over <span className="underline font-bold">10+ expert and experienced designers</span>.</>} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            transition={{ delay: 0.2 }}
          >
            <StatBox icon="100%" text="Successful projects we have done so far." />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            transition={{ delay: 0.4 }}
          >
            <StatBox icon="4.5%" text={<>Average client ratings is <span className="underline font-bold">4.5 out 5 from 100+ reviews</span>.</>} />
          </motion.div>
        </div>
      </section> */}

      <section className="bg-[#ffc000] py-[60px] relative z-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Feature 1: Dedicated Design Team */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="flex items-start gap-5 group"
          >
            {/* Icon sized to match the text block height */}
            {/* <div className="text-4xl md:text-5xl text-black pt-1 flex-shrink-0"> */}
            {/* <div className="text-xl rounded-full text-center w-10 h-10 bg-[#ffda6a] text-black flex-shrink-0">
        <i className="fa fa-pencil "></i>
      </div> */}

            {/* Icon Container: Ensure internal centering */}
            <div className="text-xl rounded-full w-12 h-12 bg-[#ffda6a] text-black flex items-center justify-center flex-shrink-0 shadow-sm">
              <i className="fa fa-pencil"></i>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[18px] md:text-[20px] font-bold uppercase tracking-tight text-black leading-tight mb-1">
                Dedicated Design Team
              </h3>
              <p className="text-black/80 text-[14px] md:text-[15px] font-medium leading-snug">
                From planning to final handover.
              </p>
            </div>
          </motion.div>

          {/* Feature 2: Single-Window Execution */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-5 group"
          >
            {/* <div className="text-4xl md:text-5xl text-black pt-1 flex-shrink-0"> */}
            {/* <div className="text-xl rounded-full bg-[#ffda6a] md:text-xl text-black p-3 flex-shrink-0"> */}
            <div className="text-xl rounded-full w-12 h-12 bg-[#ffda6a] text-black flex items-center justify-center flex-shrink-0 shadow-sm">


              <i className="fa fa-user"></i>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[18px] md:text-[20px] font-bold uppercase tracking-tight text-black leading-tight mb-1">
                Single-Window Execution
              </h3>
              <p className="text-black/80 text-[14px] md:text-[15px] font-medium leading-snug">
                No multiple vendors. One accountable team.
              </p>
            </div>
          </motion.div>

          {/* Feature 3: Trusted by Clients */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-3 group"
          >
            {/* <div className="text-xl rounded-full bg-[#ffda6a] md:text-xl text-black p-3 flex-shrink-0"> */}
            <div className="text-xl rounded-full w-12 h-12 bg-[#ffda6a] text-black flex items-center justify-center flex-shrink-0 shadow-sm">

              <i className="fa fa-handshake-o"></i>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[18px] md:text-[20px] font-bold uppercase tracking-tight text-black leading-tight mb-1">
                Trusted by Clients
              </h3>
              <p className="text-black/80 text-[14px] md:text-[15px] font-medium leading-snug">
                Homes & offices delivered with care.
              </p>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ABOUT SECTION: Exact padding and headings */}
      <section id="about" className="pt-[100px] pb-[20px]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-[80px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <h2 className="font-luxe text-[40px] md:text-[70px] font-semibold mb-[25px] uppercase leading-[1]">
              <span className="block text-[30px] md:text-[40px] font-light mb-[13px] text-black">About</span>
              Vertical Living
            </h2>
            <div className="text-[18px] leading-[33px] text-black max-w-full font-normal">
              At VERTICAL LIVING, we are passionate about creating beautiful and functional spaces that reflect our clients' unique personalities and lifestyles. With over 10 years of experience in the industry, we have developed a keen eye for design and a commitment to exceptional customer service.
            </div>
          </motion.div>

          {/* Feature Row 1: Services */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-[40px] items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft} className="max-w-[570px]">
              <img src={feature01} alt="Services" className="w-full h-auto" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight} className="md:pl-[70px]">
              <h3 className="font-luxe text-[40px] font-bold mb-[25px] leading-[1]">Our Services</h3>
              <p className="text-[18px] leading-[33px] text-black">
                At VERTICAL LIVING, we are passionate about creating beautiful and functional spaces that reflect our clients' unique personalities and lifestyles. With over 10 years of experience in the industry, we have developed a keen eye for design and a commitment to exceptional customer service.
              </p>
            </motion.div>
          </div> */}


          <PackagesSection />


          {/* <Packages /> */}
          <PackagesNew />

          {/* Feature Row 2: Portfolio */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-[40px] items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft} className="md:pr-[70px] order-2 md:order-1">
              <h3 className="font-luxe text-[40px] font-bold mb-[25px] leading-[1]">Our Portfolio</h3>
              <p className="text-[18px] leading-[33px] text-black">
                Take a peek at some of our recent projects and see how we have transformed spaces into stunning, functional works of art. From cozy living rooms to sleek kitchens and everything in between, our portfolio showcases our versatility and attention to detail.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight} className="max-w-[570px] order-1 md:order-2">
              <img src={feature02} alt="Portfolio" className="w-full h-auto" />
            </motion.div>
          </div> */}


          <WorkCarousel />
        </div>
      </section>


      <Portfolio />

      <SOPFlow />

      {/* <Packages />

      <WorkCarousel /> */}

      <InstagramFeed />


      <ConnectSection />



      {/* Floating WhatsApp */}
      {/* <div className="fixed left-[30px] bottom-[30px] z-[99]">
        <a href="https://wa.me/+919363993814" target="_blank" rel="noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
        </a>
      </div> */}

      {/* MULTI-ACTION FLOATING BUTTON */}
      {/* <FloatingContact /> */}
      <StickySideContact />

    </div>
  );
};

export default Home;