import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/images/logo.png'; // Import the image file
import { Link } from 'react-router-dom';

const navLinks = [
    { id: 'home', label: 'Home', link: "/#home" },
    { id: 'portfolio', label: 'Our Portfolio', link: "/portfolio" },
    // { id: 'process', label: 'Process', link: "/process" },
    // { id: 'packages', label: 'Packages', link: "/packages" },
    // { id: 'services', label: 'Services', link: "/service-packages" },
    {

        id: 'solutions',
        label: 'Our Services', // You can also use "Offerings" or "Work"
        link: "#",
        subLinks: [
            { id: 'services', label: 'Service Packages', link: "/service-packages", icon: 'fa-swatchbook' },
            { id: 'packages', label: 'Pricing Packages', link: "/packages", icon: 'fa-gem' },
            { id: 'process', label: 'Our Process', link: "/process", icon: 'fa-project-diagram' },
            { id: 'testimonials', label: 'Testimonials', link: "/testimonials", icon: 'fa-quote-left' },
            { id: 'case-studies', label: 'Case Studies', link: "/case-studies", icon: 'fa-book' },

        ]
    },
    {
        id: 'tools',
        label: 'Calculate',
        link: "#",
        subLinks: [
            { id: 'form', label: 'Project Planner', link: "/form", icon: 'fa-edit' },
            { id: 'cost', label: 'Cost Calculator', link: "/cost-calculation", icon: 'fa-calculator' },
        ]
    },
    { id: 'about', label: 'About Us', link: "/#about" },
    { id: 'contact', label: 'Contact Us', link: "/#contact-us" },
    // { id: 'form', label: 'Form', link: "/form" },
    // { id: 'costcalculator', label: 'Cost Calculation', link: "/cost-calculation" },

];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [showDropdown, setShowDropdown] = useState(false); // For mobile click
    // // 1. Create a ref for the dropdown container
    // const dropdownRef = useRef<HTMLLIElement>(null);

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const navRef = useRef<HTMLUListElement>(null); // Ref for the whole list



    // 2. Add the Click Outside Logic
    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         // If the dropdown is open and the click is NOT inside the ref element
    //         if (showDropdown && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
    //             setShowDropdown(false);
    //         }
    //     };

    //     // Bind the event listener
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         // Unbind the event listener on clean up
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [showDropdown]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="sticky  top-0 z-50 w-full !bg-white py-4 shadow-sm font-inter">
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
            w-full  transition-all duration-500 ease-in-out
            lg:flex lg:w-auto lg:items-center lg:max-h-full lg:opacity-100
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:opacity-100'}
          `}>
                        {/* <ul className="flex flex-col lg:flex-row list-none ml-auto text-sm font-medium uppercase tracking-wider py-4 lg:py-0">

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
                        </ul> */}


                        <ul ref={navRef} className="flex flex-col lg:flex-row list-none ml-auto bg-white text-sm font-medium uppercase tracking-wider py-4 lg:py-0">
                            {navLinks.map((item) => (
                                <li key={item.id}
                                    // ref={item.subLinks ? dropdownRef : null}
                                    className={`nav-item relative group ${item.subLinks ? 'cursor-pointer' : ''}`}>
                                    {!item.subLinks ? (
                                        <Link to={item.link} className="block py-2 px-2 text-gray-700 hover:text-[#ffc000] transition-colors" onClick={() => setIsOpen(false)}>
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <>
                                            {/* Main Dropdown Trigger */}
                                            <div
                                                className="flex items-center py-2 px-2 text-gray-700 group-hover:text-[#ffc000] transition-colors"
                                                // onClick={() => setShowDropdown(!showDropdown)}
                                                onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                                            >
                                                {item.label}
                                                <i className={`fa fa-chevron-down ml-2 text-[10px] transition-transform ${activeDropdown ? 'rotate-180' : ''}`}></i>
                                            </div>

                                            {/* Dropdown Menu */}
                                            {/* <div className={`
                                lg:absolute lg:top-full lg:left-0 lg:w-64 lg:bg-white lg:shadow-xl lg:rounded-xl lg:border lg:border-gray-50 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-2 lg:transition-all lg:duration-300
                                ${showDropdown ? 'block bg-gray-50 rounded-lg' : 'hidden lg:block'}
                                z-[100] py-2
                            `}> */}

                                            <div className={`
                        lg:absolute lg:top-full lg:left-0 lg:w-64 lg:bg-white lg:shadow-xl lg:rounded-xl lg:border lg:border-gray-50 
                        lg:transition-all lg:duration-300
                        
                        ${activeDropdown === item.id
                                                    ? 'block bg-gray-50 rounded-lg opacity-100 visible translate-y-0'
                                                    : 'hidden lg:group-hover:block lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 lg:opacity-0 lg:invisible'
                                                }
                        z-[100] py-2
                    `}>



                                                {item.subLinks.map((sub) => (
                                                    <Link
                                                        key={sub.id}
                                                        to={sub.link}
                                                        className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-50 group/item transition-colors"
                                                        onClick={() => { setIsOpen(false); setActiveDropdown(null); }}
                                                    >
                                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 group-hover/item:text-[#ffc000] group-hover/item:bg-[#ffc000]/10 transition-all">
                                                            <i className={`fa ${sub.icon} text-lg`}></i>
                                                        </div>
                                                        <span className="normal-case font-bold tracking-normal text-sm">{sub.label}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>


                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;