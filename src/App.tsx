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
import BookingPage from './pages/Payment/BookingPage'
import ServiceSectionSingle from './pages/services/ServiceSectionSingle'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AccountDeletion from './pages/AccountDeletion'
import PackageSectionSingle from './pages/packages/PackageSectionSingle'
import CostCalculatorMain from './pages/calculator/CostCalculatorMain'
import CalculatorFloatingButton from './components/CalculatorFloatingButton'
import CostCalculatorMainPage from './pages/calculator/CostCalculatorMainPage'
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const PaymentSuccess = lazy(() => import('./pages/Payment/PaymentSuccess'))
const PaymentFailure = lazy(() => import('./pages/Payment/PaymentFailure'))
const Chatbot = lazy(() => import('./components/Chatbot'))
import { AnimatePresence, motion } from 'framer-motion';
import PortfolioStatic from './pages/StaticPages/PortfolioStatic'
import ServicePackagesStatic from './pages/StaticPages/ServicePackagesStatic'
import OurPackagesStatic from './pages/StaticPages/OurPackagesStatic'
import SOPFlowStatic from './pages/StaticPages/SOPFlowStatic'
import Disclaimer from './pages/Disclaimer'
import TestimonialStatic from './pages/StaticPages/TestiMonialsStatic'
import CaseStudiesMain from './pages/CaseStudiesMain'
import CaseStudiesSingle from './pages/CaseStudiesSingle'


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
        <Route path="/case-studies" element={<CaseStudiesMain />} />
        <Route path="/case-studies/:id" element={<CaseStudiesSingle />} />

        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailure />} />

        <Route path="/terms-and-conditions" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />

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
