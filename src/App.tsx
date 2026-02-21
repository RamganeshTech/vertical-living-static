import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import InquiryForm from './pages/Inquiry/InquiryForm'
import Header from './components/Header'
import Footer from './components/Footer'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle'; // This includes all effects like coverflow

import 'swiper/swiper-bundle.css';
import NotFound from './pages/NotFound/NotFound'
import PaymentSuccess from './pages/Payment/PaymentSuccess'
import PaymentFailure from './pages/Payment/PaymentFailure'
import Chatbot from './components/Chatbot'


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
