import './App.css'
import { lazy, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
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
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const PaymentSuccess = lazy(() => import('./pages/Payment/PaymentSuccess'))
const PaymentFailure = lazy(() => import('./pages/Payment/PaymentFailure'))
const Chatbot = lazy(() => import('./components/Chatbot'))


function App() {

  const [isCalcOpen, setIsCalcOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

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

        <Route path="/singleservice/:planId" element={<ServiceSectionSingle />} />
        <Route path="/singlepackage/:planId" element={<PackageSectionSingle />} />

        <Route path="/booking/:planId" element={<BookingPage />} />

        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailure />} />

        <Route path="/terms-and-conditions" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />

        {/* Future Backend/Dashboard routes can be added here */}
        <Route path="*" element={<NotFound />} />

      </Routes>


      {/* <CalculatorFloatingButton onClick={() => setIsCalcOpen(true)} /> */}

      {!isCalcOpen && (
        <CalculatorFloatingButton onClick={() => setIsCalcOpen(true)} />
      )}


      {/* GLOBAL COMPONENTS */}
      <CostCalculatorMain
        isOpen={isCalcOpen}
        onClose={() => setIsCalcOpen(false)}
      />

      {!isCalcOpen && (
        <Chatbot />
      )}
      <Footer />

    </>
  )
}

export default App
