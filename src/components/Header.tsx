import React, { useState } from 'react';
import logo from '../assets/images/logo.png'; // Import the image file
import { Link } from 'react-router-dom';

const navLinks = [
    { id: 'home', label: 'Home', link: "/#home" },
    { id: 'about', label: 'About Us', link: "/#about" },
    { id: 'portfolio', label: 'Our Portfolio', link: "/#portfolio" },
    { id: 'contact', label: 'Contact Us', link: "/#contact" },
    { id: 'form', label: 'Form', link: "/form" },
];
const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);




    return (
        <header className="sticky top-0 z-50 w-full bg-white py-4 shadow-sm font-inter">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between flex-wrap">
                    {/* Logo */}
                    <Link to="/" className="shrink-0">
                        <img src={logo} alt="Logo" className="h-12 w-auto" />
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-black focus:outline-none"
                    >
                        <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>

                    {/* Nav Links */}
                    <div className={`
            w-full overflow-hidden transition-all duration-500 ease-in-out
            lg:flex lg:w-auto lg:items-center lg:max-h-full lg:opacity-100
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:opacity-100'}
          `}>
                        <ul className="flex flex-col lg:flex-row list-none ml-auto text-sm font-medium uppercase tracking-wider py-4 lg:py-0">
                            {/* {navLinks.map((item) => (
                                <li key={item.id} className="nav-item">
                                    <a
                                        href={`#${item.id}`}
                                        className="block py-2 px-5 text-gray-700 hover:text-black hover:bg-gray-50 lg:hover:bg-transparent transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))} */}

                            {navLinks.map((item) => (
                                <li key={item.id} className="nav-item">
                                    <Link
                                        to={item.link}
                                        className="block py-2 px-5 text-gray-700 hover:text-[#ffc000] transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* <ul className="flex flex-col lg:flex-row list-none ml-auto text-sm font-medium uppercase tracking-wider py-4 lg:py-0">
                            {navLinks.map((item) => (
                                <li key={item.id} className="nav-item">
                                    {item.id === 'form' ? (
                                        <Link
                                            to={item.link}
                                            className="block py-2 px-5 text-gray-700 hover:text-black transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={`#${item.id}`}
                                            className="block py-2 px-5 text-gray-700 hover:text-black transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul> */}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;