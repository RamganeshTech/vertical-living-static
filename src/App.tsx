import './App.css'
import { Route, Routes } from 'react-router-dom'
const Home  = lazy(()=> import('./pages/Home'))
const InquiryForm = lazy(()=> import('./pages/Inquiry/InquiryForm'))
const Header = lazy(()=> import('./components/Header'))
const Footer = lazy(()=> import('./components/Footer'))
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle'; // This includes all effects like coverflow

import 'swiper/swiper-bundle.css';
import { lazy } from 'react'
const NotFound = lazy(()=> import('./pages/NotFound/NotFound')) 
const PaymentSuccess = lazy(()=> import('./pages/Payment/PaymentSuccess')) 
const PaymentFailure = lazy(()=> import('./pages/Payment/PaymentFailure')) 
const Chatbot = lazy(()=> import('./components/Chatbot')) 


function App() {


  return (
    <>
      <Header />
      <Routes>


        {/* Main Landing Page */}
        <Route path="/" element={<Home />} />

        {/* The new form point you wanted to create */}
        <Route path="/form" element={<InquiryForm />} />

        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailure />} />

        {/* Future Backend/Dashboard routes can be added here */}
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Chatbot />
      <Footer />

    </>
  )
}

export default App
