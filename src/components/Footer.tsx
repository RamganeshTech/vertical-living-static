import React from 'react';
import logo from '../assets/images/logo.png'; // Import the image file
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    icon: 'facebook',
    link: 'https://www.facebook.com/photo/?fbid=122102241110267512&set=a.122102237984267512'
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/living.vertical/'
  },
  {
    icon: 'youtube',
    link: 'https://youtube.com/@Verticalliving-Lifestyle?si=YAXRXVs5H6EuZOmg'
  },
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/company/theverticalliving' // Added LinkedIn placeholder as requested
  },
  {
    icon: 'envelope',
    link: 'mailto:info@theverticalliving.com'
  }
];



const navLinks = [
  { id: 'home', label: 'Home', link: "/#home" },
  { id: 'about', label: 'About Us', link: "/#about" },
  { id: 'portfolio', label: 'Our Portfolio', link: "/#portfolio" },
  { id: 'contact', label: 'Contact Us', link: "/#contact" },
  // { id: 'form', label: 'Form', link: "/form" },
];

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white py-20 font-inter">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Social */}
          <div className="flex flex-col justify-between h-64">
            <img src={logo} alt="Logo" className="w-48 mb-6" />
            <div>
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social) => (
                  <Link
                    key={social.icon}
                    to={social.link}
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#ffc000] hover:text-black duration-300 transition-all"
                  >
                    <i className={`fa fa-${social.icon}`}></i>
                  </Link>
                ))}
              </div>
              <p className="text-sm">© {new Date().getFullYear()} VERTICAL LIVING.</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-luxe font-bold uppercase mb-6">Useful Links</h4>
            <ul className="space-y-4 uppercase text-sm">
              {/* <li><a href="#home" className="hover:text-[#ffc000] hover:pl-2 duration-300 transition-all">Home</a></li>
              <li><a href="#about" className="hover:text-[#ffc000] hover:pl-2 duration-300 transition-all">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-[#ffc000] hover:pl-2 duration-300 transition-all">Our Portfolio</a></li>
              <li><a href="#contact" className="hover:text-[#ffc000] hover:pl-2 duration-300 transition-all">Contact Us</a></li> */}

              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="hover:text-[#ffc000] hover:pl-2 duration-300 transition-all block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-luxe font-bold uppercase mb-6">Contact Us With Working hours</h4>
            <ul className="space-y-4 text-sm uppercase">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                <li key={day} className="flex gap-3">
                  <span className="font-bold">{day}</span> 09:00 am – 05:00 pm
                </li>
              ))}
              <li className="flex gap-3">
                <span className="font-bold">Sat</span> Closed
              </li>
              <li className="flex gap-3">
                <span className="font-bold">Sun</span> Closed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;