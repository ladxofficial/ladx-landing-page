import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: (
                <>
                    <span className="text-[#ff6934]">Send</span> Items Worldwide
                    <br />
                    <span className="block">via Trusted Travelers</span>
                </>
            ),
            description: "A simple, secure way to get your items delivered fast. Connect with travelers heading to your destination and save up to 80% on shipping costs.",
            features: [
                "Safe & Secure Delivery",
                "Real-time Package Tracking",
                "Verified Travelers",
                "Cost-Effective Shipping"
            ],
            buttonText: "Start Sending",
            buttonLink: "/signup",
        },
        {
            title: (
                <>
                    <span className="text-[#ff6934]">Travel</span> and Help People
                    <br />
                    <span className="block">Send Items Worldwide</span>
                </>
            ),
            description: "Turn your travel into opportunity. Earn extra income by delivering packages along your route. Join our community of trusted travelers.",
            features: [
                "Earn While Traveling",
                "Flexible Deliveries",
                "Trusted Platform",
                "Global Community"
            ],
            buttonText: "Become a Traveler",
            buttonLink: "/signup",
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className="bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12 py-2 lg:py-8">
                    {/* Left Content */}
                    <div className="w-full lg:w-5/12 z-10">
                        {/* Branded Tag */}
                        <div className="inline-flex items-center bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100 mb-6">
                            <span className="flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#ff6934] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6934]"></span>
                            </span>
                            <span className="text-sm font-medium text-[#ff6934]">Simple • Secure • Swift</span>
                        </div>

                        {/* Main Content - Same as before but with reduced spacing */}
                        <div className="space-y-5">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D1155] leading-tight">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {slides[currentSlide].description}
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {slides[currentSlide].features.map((feature, index) => (
                                    <div key={index}
                                        className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                                    >
                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#ff69341a]">
                                            <svg className="w-4 h-4 text-[#ff6934]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Section */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={slides[currentSlide].buttonLink}
                                    className="group flex items-center justify-center bg-[#2D1155] text-white px-8 py-4 rounded-2xl hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-base font-semibold"
                                >
                                    {slides[currentSlide].buttonText}
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <div className="flex items-center gap-2">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-[#2D1155]' : 'w-2 bg-gray-200'
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Video Content */}
                    <div className="w-full lg:w-7/12 relative h-[calc(100vh-8rem)] lg:h-[calc(100vh-6rem)] -mt-20 mb-10 lg:mt-0 order-first lg:order-last">
                        {/* Background decoration - only show on desktop */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#2D1155] to-[#ff6934] rounded-3xl transform rotate-2 opacity-10 hidden lg:block"></div>

                        <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 bg-transparent">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-contain"
                            >
                                <source src={process.env.PUBLIC_URL + '/video/video.mp4'} type="video/mp4" />
                            </video>
                            {/* Overlay - only show on desktop */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-black/5 to-transparent hidden lg:block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;