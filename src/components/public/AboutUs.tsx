import Member1 from "../../assets/team1.jpeg";
import Member2 from "../../assets/team2.jpeg";
import Member3 from "../../assets/team3.jpeg";
import Member4 from "../../assets/team4.jpg";
import Member5 from "../../assets/team5.jpg";
import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AboutUs = () => {
    const [currentMember, setCurrentMember] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const teamMembers = [
        {
            name: "Paul Dominion Ladi",
            position: "CEO & Founder",
            image: Member1,
        },
        {
            name: "UKEKA Ifeanyichukwu",
            position: "Chief of Operations",
            image: Member2,
        },
        {
            name: "Omosebi Yetunde",
            position: "Social Media Marketer",
            image: Member3,
        },
        {
            name: "Joshua Alana",
            position: "CTO LadX",
            image: Member4,
        },
        {
            name: "Idowu Oluwasanmi",
            position: "Social Media Marketer",
            image: Member5,
        },
    ];

    const handleNext = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentMember((prev) => (prev + 1) % teamMembers.length);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    }, [isTransitioning, teamMembers.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(interval);
    }, [handleNext]); // Now handleNext is a stable dependency

    const handlePrevious = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Us Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2D1155] mb-6">
                        About <span className="text-[#ff6934]">Us</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#ff6934] mx-auto mb-8 rounded-full"></div>
                </div>

                {/* Mission and Vision */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-12 mb-20">
                    <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold text-[#2D1155] mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            At LADX, we believe in the power of connections. Our platform bridges the gap between travelers and individuals who need to send packages across the globe. Whether you're a traveler looking to earn some extra money or someone with a package to send, LADX provides a reliable, secure, and efficient solution for all your delivery needs.
                        </p>
                    </div>
                    <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold text-[#2D1155] mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is to create a community that values trust, transparency, and convenience. By connecting people from all corners of the world, we aim to make sending packages as easy as booking a trip.
                        </p>
                    </div>
                </div>

                {/* Meet Our Team */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#2D1155] mb-4">
                        Meet Our <span className="text-[#ff6934]">Team</span>
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        The talented people behind LADX's success
                    </p>
                </div>

                {/* Team Members Desktop */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl bg-white shadow-lg"
                        >
                            <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100"></div>
                                {/* Centered Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                                    <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                                    <p className="text-sm text-gray-200 px-4 text-center">{member.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Members Mobile */}
                <div className="md:hidden">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <div className="aspect-w-3 aspect-h-4">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentMember ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                                    {/* Centered Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-16">
                                        <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                                        <p className="text-sm text-gray-200 px-4 text-center">{member.position}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Navigation Buttons */}
                            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 pointer-events-none">
                                <button
                                    onClick={handlePrevious}
                                    className="pointer-events-auto p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-colors backdrop-blur-sm"
                                    disabled={isTransitioning}
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="pointer-events-auto p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-colors backdrop-blur-sm"
                                    disabled={isTransitioning}
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Indicators */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                                {teamMembers.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => !isTransitioning && setCurrentMember(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentMember ? "w-6 bg-white" : "w-1.5 bg-white/50"
                                            }`}
                                        disabled={isTransitioning}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;