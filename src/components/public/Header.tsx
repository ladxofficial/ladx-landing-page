import Logo from "../../assets/logo.png";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            setHeaderHeight(header.clientHeight);
        }
    }, []);

    const handleMobileMenuToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleScrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - headerHeight,
                behavior: "smooth",
            });
        }
        setMobileOpen(false);
    };

    return (
        <header className="bg-[#1B0E40] bg-opacity-95 shadow-md w-full fixed top-0 left-0 z-50 h-16 md:h-24">
            <div className="container mx-auto flex items-center justify-between py-2.5 px-6">
                {/* Logo */}
                <div className="flex items-center justify-start flex-shrink-0">
                    <img src={Logo} alt="LADX Logo" className="h-16 w-auto md:h-20" />
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={handleMobileMenuToggle} className="text-white focus:outline-none">
                        {mobileOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-grow justify-center space-x-8">
                    <button
                        onClick={() => handleScrollToSection("hero-section")}
                        className="text-white text-lg font-normal hover:border-b-2 hover:border-[#A65C44] hover:text-white transition-all duration-200"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleScrollToSection("about-us-section")}
                        className="text-white text-lg font-normal hover:border-b-2 hover:border-[#A65C44] hover:text-white transition-all duration-200"
                    >
                        About Us
                    </button>
                    <button
                        onClick={() => handleScrollToSection("how-it-works-section")}
                        className="text-white text-lg font-normal hover:border-b-2 hover:border-[#A65C44] hover:text-white transition-all duration-200"
                    >
                        How it Works
                    </button>
                    <button
                        onClick={() => handleScrollToSection("faqs-section")}
                        className="text-white text-lg font-normal hover:border-b-2 hover:border-[#A65C44] hover:text-white transition-all duration-200"
                    >
                        FAQs
                    </button>
                </nav>

                {/* Sign In / Get Started buttons for Desktop */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        to="https://ladx-7h6y.vercel.app/"
                        className="bg-[#ff6934] text-white px-4 py-2 rounded-lg"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            {/* Full-screen overlay for mobile */}
            {mobileOpen && (
                <div className="fixed inset-0 bg-[#1B0E40] bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 py-8 px-4">
                    <button onClick={handleMobileMenuToggle} className="absolute top-4 right-4 text-white">
                        <X className="h-8 w-8" />
                    </button>

                    {/* Navigation links for mobile */}
                    <nav className="flex flex-col items-center space-y-6 text-center text-2xl font-sans text-white">
                        <button
                            onClick={() => handleScrollToSection("hero-section")}
                            className="hover:text-[#ff6934] transition duration-200 py-3 px-6"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleScrollToSection("about-us-section")}
                            className="hover:text-[#ff6934] transition duration-200 py-3 px-6"
                        >
                            About Us
                        </button>
                        <button
                            onClick={() => handleScrollToSection("how-it-works-section")}
                            className="hover:text-[#ff6934] transition duration-200 py-3 px-6"
                        >
                            How it Works
                        </button>
                        <button
                            onClick={() => handleScrollToSection("faqs-section")}
                            className="hover:text-[#ff6934] transition duration-200 py-3 px-6"
                        >
                            FAQs
                        </button>
                    </nav>

                    {/* Get Started button for mobile */}
                    <div className="flex flex-col items-center space-y-4 w-full">
                        <Link
                            to="https://ladx-7h6y.vercel.app"
                            className="bg-[#ff6934] text-white px-6 py-3 rounded-lg text-2xl"
                            onClick={handleMobileMenuToggle}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;