import './App.css'
import { lazy, useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
const Home = lazy(() => import('./pages/Home'))
const InquiryForm = lazy(() => import('./pages/Inquiry/InquiryForm'))
const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle'; // This includes all effects like coverflow

import 'swiper/swiper-bundle.css';
import { AnimatePresence, motion } from 'framer-motion';

const BookingPage = lazy(()=> import('./pages/Payment/BookingPage')) 
const ServiceSectionSingle = lazy(()=> import('./pages/services/ServiceSectionSingle')) 
const PrivacyPolicy = lazy(()=> import('./pages/PrivacyPolicy')) 
const AccountDeletion = lazy(()=> import('./pages/AccountDeletion')) 
const PackageSectionSingle = lazy(()=> import('./pages/packages/PackageSectionSingle')) 
const CostCalculatorMain = lazy(()=> import('./pages/calculator/CostCalculatorMain')) 
import CalculatorFloatingButton from './components/CalculatorFloatingButton'
import CostCalculatorMainPage from './pages/calculator/CostCalculatorMainPage'
const HouseTypeMain  = lazy(()=> import('./pages/HouseType_Pages/HouseTypeMain'));
const HouseTypeSingle  = lazy(()=> import('./pages/HouseType_Pages/HouseTypeSingle'));
const ThankYouPage = lazy(()=> import('./pages/Thankyou_Page/ThankyouMain'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const PaymentSuccess = lazy(() => import('./pages/Payment/PaymentSuccess'))
const PaymentFailure = lazy(() => import('./pages/Payment/PaymentFailure'))
const Chatbot = lazy(() => import('./components/Chatbot'))
const  PortfolioStatic = lazy(()=> import('./pages/StaticPages/PortfolioStatic')) 
const  ServicePackagesStatic = lazy(()=> import('./pages/StaticPages/ServicePackagesStatic')) 
const  OurPackagesStatic = lazy(()=> import('./pages/StaticPages/OurPackagesStatic')) 
const  SOPFlowStatic = lazy(()=> import('./pages/StaticPages/SOPFlowStatic')) 
const  Disclaimer = lazy(()=> import('./pages/Disclaimer')) 
const  TestimonialStatic = lazy(()=> import('./pages/StaticPages/TestiMonialsStatic')) 
const  CaseStudiesMain = lazy(()=> import('./pages/CaseStudiesMain')) 
const  CaseStudiesSingle = lazy(()=> import('./pages/CaseStudiesSingle')) 
const  Career = lazy(()=> import('./pages/Carrer/Carrer')) 


function App() {

  const [isCalcOpen, setIsCalcOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const location = useLocation()


  // Automatic Scroll Trigger (Only active on Home page)
  useEffect(() => {
    const handleScroll = () => {
      // Only trigger if we are on the home path
      if (window.location.pathname !== '/') return;

      const contactSection = document.getElementById('contact');
      if (contactSection && !hasTriggered) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.bottom < 0) {
          setIsCalcOpen(true);
          setHasTriggered(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered]);

  return (
    <>
      <Header />
      <Routes>


        {/* Main Landing Page */}
        <Route path="/" element={<Home />} />

        {/* The new form point you wanted to create */}
        <Route path="/form" element={<InquiryForm />} />
        <Route path="/cost-calculation" element={<CostCalculatorMainPage />} />

        <Route path="/singleservice/:planId" element={<ServiceSectionSingle />} />
        <Route path="/singlepackage/:planId" element={<PackageSectionSingle />} />

        <Route path="/booking/:planId" element={<BookingPage />} />
        
        <Route path="/packages" element={<OurPackagesStatic />} />
        <Route path="/service-packages" element={<ServicePackagesStatic />} />
        <Route path="/portfolio" element={<PortfolioStatic />} />
        <Route path="/process" element={<SOPFlowStatic />} />
        <Route path="/testimonials" element={<TestimonialStatic />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/blogs" element={<CaseStudiesMain />} />
        <Route path="/blogs/:id" element={<CaseStudiesSingle />} />
        <Route path="/career" element={<Career />} />

        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailure />} />

        <Route path="/terms-and-conditions" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/residential-spaces" element={<HouseTypeMain />} />
        <Route path="/residential-spaces/:id" element={<HouseTypeSingle />} />

        {/* Future Backend/Dashboard routes can be added here */}
        <Route path="*" element={<NotFound />} />

      </Routes>


      {/* <CalculatorFloatingButton onClick={() => setIsCalcOpen(true)} /> */}

      {(!isCalcOpen && !location.pathname.includes("cost-calculation")) && (
        <CalculatorFloatingButton onClick={() => setIsCalcOpen(true)} />
      )}


      <AnimatePresence>
        {isCalcOpen && (
          <div onClick={() => {
          
            setIsCalcOpen(false)
          }} className="fixed  inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white w-full max-w-[1200px]  max-h-[90vh] overflow-hidden rounded-[40px] shadow-2xl relative z-[9999] flex flex-col"
            >
              <CostCalculatorMain
                showCloseButton={true}
                handleClose={()=> setIsCalcOpen(false)}
                
              
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {!isCalcOpen && (
        <Chatbot />
      )}
      <Footer />

    </>
  )
}

export default App
