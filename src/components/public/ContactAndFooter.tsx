import Home from "../../assets/Home.png";
import Processing from "../../assets/Processing.png";
import React, { useEffect, useState } from "react";
import Upload from "../../assets/UploadTravelDetails.png";
import { ChevronRight, Facebook, Globe, Instagram, Linkedin, MapPin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

interface Country {
    name: string;
    abr: string;
}

const TikTokIcon = ({ className = "w-5 h-5" }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
    >
        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
);

const countries: Country[] = [
    { name: "Lagos, Nigeria", abr: "LGS - NGN" },
    { name: "Accra, Ghana", abr: "ACC - GHS" },
    { name: "Abidjan, Côte d'Ivoire", abr: "ABJ - XOF" },
    { name: "Monrovia, Liberia", abr: "MLW - LRD" },
    { name: "Freetown, Sierra Leone", abr: "FNA - SLL" },
    { name: "Dakar, Senegal", abr: "DKR - XOF" },
    { name: "Banjul, The Gambia", abr: "BJL - GMD" },
    { name: "Bissau, Guinea-Bissau", abr: "OXB - XOF" },
    { name: "Conakry, Guinea", abr: "CKY - GNF" },
    { name: "Kigali, Rwanda", abr: "KGL - RWF" }
];

const ContactAndFooter: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = countries.find((country) => country.name === event.target.value);
        if (selected) setSelectedCountry(selected);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="relative">
            {/* CTA Section */}
            <div className="relative bg-[#2D1155] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff6934] to-transparent"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-20"></div>
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Send Your Items or Earn While Traveling?
                        </h2>
                        <Link
                            to="/signup"
                            className="inline-flex items-center px-8 py-4 bg-[#ff6934] text-white rounded-xl font-semibold hover:bg-[#ff6934]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get Started
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    {/* Desktop Preview */}
                    <div className="hidden md:flex justify-center items-center gap-8 transform translate-y-24">
                        <img
                            src={Home}
                            alt="Dashboard Preview"
                            className="w-[300px] h-[288px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src={Upload}
                            alt="Upload Interface"
                            className="w-[280px] h-[240px] object-cover rounded-2xl shadow-2xl -translate-y-12 z-10 transform hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src={Processing}
                            alt="Processing Status"
                            className="w-[300px] h-[288px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Mobile Preview */}
                    <div className="md:hidden">
                        <div className="relative overflow-hidden rounded-2xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {[Processing, Upload, Home].map((image, index) => (
                                    <div key={index} className="min-w-full px-4">
                                        <img
                                            src={image}
                                            alt={`Preview ${index + 1}`}
                                            className="w-full rounded-2xl shadow-lg"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {[0, 1, 2].map((index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-white pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* About Section */}
                        <div>
                            <h3 className="text-lg font-bold text-[#2D1155] mb-6">About LADX</h3>
                            <ul className="space-y-3">
                                {[
                                    { text: 'About Us', path: '/about' },
                                    { text: 'Resources & Policies', path: '/resources' },
                                    { text: 'Careers', path: '/careers' },
                                    { text: 'Content Integrity', path: '/content-integrity' },
                                    { text: 'Terms of Use', path: '/terms' },
                                    { text: 'Privacy & Cookies', path: '/privacy' }
                                ].map((item) => (
                                    <li key={item.text}>
                                        <Link
                                            to={item.path}
                                            className="text-gray-600 hover:text-[#ff6934] transition-colors duration-200"
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Explore Section */}
                        <div>
                            <h3 className="text-lg font-bold text-[#2D1155] mb-6">Explore</h3>
                            <ul className="space-y-3">
                                {[
                                    { text: 'Write a review', path: '/write-review' },
                                    { text: 'Join Our Community', path: '/community' },
                                    { text: 'Help Center', path: '/help' }
                                ].map((item) => (
                                    <li key={item.text}>
                                        <Link
                                            to={item.path}
                                            className="text-gray-600 hover:text-[#ff6934] transition-colors duration-200"
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Location Selector */}
                        <div className="md:col-span-2">
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <MapPin className="text-[#ff6934] w-5 h-5" />
                                        <select
                                            className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff6934]"
                                            value={selectedCountry.name}
                                            onChange={handleCountryChange}
                                        >
                                            {countries.map((country) => (
                                                <option key={country.name} value={country.name}>
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Globe className="text-[#ff6934] w-5 h-5" />
                                        <select
                                            className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff6934]"
                                        >
                                            <option>{selectedCountry.abr}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex items-center gap-4">
                        {[
                            { Icon: Facebook, url: '#', name: 'Facebook' },
                            { Icon: Instagram, url: 'https://www.instagram.com/ladx.official/', name: 'Instagram' },
                            { Icon: TikTokIcon, url: 'https://www.tiktok.com/@ladx.official', name: 'TikTok' },
                            { Icon: Linkedin, url: 'https://www.linkedin.com/company/ladx/posts/?feedView=all', name: 'LinkedIn' },
                            { Icon: Youtube, url: '#', name: 'YouTube' }
                        ].map(({ Icon, url, name }) => (
                            <button
                                key={name}
                                onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
                                className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-[#ff6934] hover:text-white transition-all duration-300"
                                aria-label={`Visit our ${name} page`}
                                type="button"
                            >
                                <Icon className="w-5 h-5" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactAndFooter;