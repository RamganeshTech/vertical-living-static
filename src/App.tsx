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


function App() {


  return (
    <>
      <Header />
      <Routes>


      {/* Main Landing Page */}
      <Route path="/" element={<Home />} />

      {/* The new form point you wanted to create */}
      <Route path="/form" element={<InquiryForm />} />

      {/* Future Backend/Dashboard routes can be added here */}
      <Route path="*" element={<div className="p-10 text-center">Page Not Found</div>} />

      </Routes>
      <Footer />

    </>
  )
}

export default App
