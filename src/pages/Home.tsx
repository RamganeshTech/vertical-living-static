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
import { Link, useLocation } from 'react-router-dom';
import ConnectSection from './ConnectSection';
// import Packages from './Packages';
import StickySideContact from '../components/StickySideContact';
import PackagesSection from './services/PackagesSection';
import PackagesNew from './packages/PakagesNew';
import { Testimonials } from './Testimonials';
// import CaseStudies from './CaseStudies';
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
    <div className="min-h-screen w-full  max-w-full overflow-x-hidden bg-white">

      <section className="relative  min-h-[900px] flex items-center justify-center overflow-hidden bg-white py-20 font-poppins">
        {/* LEFT SIDE: High-Visibility Architectural Line & Diamond Textures */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-[25%] pointer-events-none hidden xl:block">

          {/* 1. Solid Black Horizontal Technical Lines - High Opacity */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 w-32">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: i % 2 === 0 ? "100%" : "60%", opacity: 0.4 }} // Increased to 0.4
                transition={{ delay: i * 0.1, duration: 1 }}
                className="h-[3px] bg-[#1a1a1a]" // Thicker line
              />
            ))}
          </div>

          {/* 2. Bold Gold Diamond Structural Frames - High Visibility */}
          <div className="absolute -left-10 top-1/4 flex flex-col gap-4">
            <motion.div
              animate={{ rotate: [45, 50, 45] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-40 h-40 border-[3px] border-[#ffc000] opacity-50 rotate-45 shadow-[0_0_15px_rgba(255,192,0,0.2)]" // Thicker border + higher opacity
            />
            <motion.div
              animate={{ rotate: [45, 40, 45] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 border-[2px] border-[#ffc000] opacity-40 rotate-45 ml-20 -mt-10"
            />
          </div>

          {/* 3. Solid Black Vertical Accent - Clearly Visible */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="absolute left-0 top-1/3 bottom-1/3 w-2 bg-[#1a1a1a] rounded-r-3xl" // Increased width and opacity
          />

          {/* 4. Bold Architectural Angle (Black) */}

        </div>
        </div>


        {/* RIGHT SIDE: Brand Gold Grid & Technical Shapes */}
        <div className="absolute right-0 top-0 bottom-0 w-[25%] pointer-events-none hidden xl:block">
          {/* Solid Gold Dot Matrix Grid - Very visible */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 grid grid-cols-5 gap-6">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.02 }}
                className="w-2 h-2 bg-[#ffc000] rounded-full shadow-[0_0_10px_rgba(255,192,0,0.3)]"
              />
            ))}
          </div>

          {/* Gold Technical Circle Segment */}
          <div className="absolute -right-20 top-1/4 w-80 h-80 border-[2px] border-[#ffc000] rounded-full opacity-20" />

          {/* Solid Black accent at the very edge */}
          <div className="absolute right-0 top-1/3 bottom-1/3 w-2 bg-[#1a1a1a] rounded-l-full" />
        </div>

        {/* MAIN FORM CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-7xl px-4 flex justify-center"
        >
          <div className="relative">
            {/* A strong Gold shadow under the form to ground it */}
            <div className="absolute -inset-4 bg-[#ffc000]/10 blur-[60px] rounded-[40px] -z-10" />
            <InquiryFormNew />
          </div>
        </motion.div>

      </section>


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
            <Link
              to="#service"
              className="bg-[#ffc000] hover:bg-white text-black px-[40px] py-[18px] uppercase font-bold tracking-[1px] transition-all duration-500 inline-block shadow-lg"
            >
              Explore More
            </Link>
          </motion.div>
        </div>
      </section>

  

      <section className="bg-[#ffc000]  py-[60px] relative z-20">
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

              <i className="fas fa-handshake"></i>
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
      <section className="pt-[100px] pb-[20px]">
        <div className="mx-auto">
          {/* <motion.div
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
          </motion.div> */}

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

<div className='w-full h-full px-4 md:px-10'>

          <PackagesSection showLink={true} />
</div>


          {/* <Packages /> */}
          <PackagesNew showLink={true} />

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


          <WorkCarousel showLink={true} />
        </div>
      </section>


      <Portfolio />

      <SOPFlow showLink={true} />

      {/* <Packages />

      <WorkCarousel /> */}

      <Testimonials showLink={true} />
      {/* <CaseStudies  /> */}


      <div id="about" className="container mx-auto px-4 py-20">
        <motion.div
          className="mb-[80px] max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          {/* Heading Style: Matching your other sections */}
          <div className="mb-10">
            <h2 className="font-poppins text-[25px] md:text-[35px] font-light uppercase leading-[1.2] text-[#1a1a1a]">
              About <br />
              <span className="text-[#ffc000] font-semibold text-[25px] md:text-[45px]">Vertical Living</span>
            </h2>
          </div>

          {/* Content: Using your new Residential & Commercial focus */}
          <div className="font-poppins text-[14px] md:text-[22px] leading-[1.6] text-gray-800 font-medium font-poppins">
            Vertical Living provides <span className="text-[#1a1a1a] font-bold">bespoke interior design solutions</span> for residential and commercial projects.
            We are dedicated to transforming your vision into reality with precision and architectural excellence.
          </div>

          {/* Call to Action line inside the About section */}
          <div classNamee="mt-4 md:mt-8 pt-4 md:pt-8 border-t border-gray-100">
            <p className="font-poppins text-[14px] uppercase md:tracking-widest font-semibold text-gray-400">
              Get an instant valuation and technical quote for your dream project today.
            </p>
          </div>
        </motion.div>
      </div>



      <InstagramFeed />


      <ConnectSection />




      {/* MULTI-ACTION FLOATING BUTTON */}
      <StickySideContact />

    </div>
  );
};

export default Home;