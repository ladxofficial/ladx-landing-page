import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
    name: string;
    picture: string;
    text: string;
    savedAmount?: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleNext = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    }, [isTransitioning, testimonials.length]);

    const handlePrevious = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const getVisibleTestimonials = () => {
        return isMobile
            ? [testimonials[currentIndex]]
            : [
                testimonials[currentIndex],
                testimonials[(currentIndex + 1) % testimonials.length]
            ];
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 8000);
        return () => clearInterval(interval);
    }, [handleNext]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2D1155] mb-6">
                        What Our <span className="text-[#ff6934]">Users Say</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#ff6934] mx-auto"></div>
                </div>

                {/* Testimonials Container */}
                <div className="relative">
                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <div className="absolute top-1/2 -left-12 right-auto transform -translate-y-1/2 flex justify-between w-[calc(100%+6rem)] z-10">
                            <button
                                onClick={handlePrevious}
                                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all text-[#2D1155] disabled:opacity-50"
                                disabled={isTransitioning}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all text-[#2D1155] disabled:opacity-50"
                                disabled={isTransitioning}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    )}

                    {/* Testimonials Grid */}
                    <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-6 lg:gap-8`}>
                        {getVisibleTestimonials().map((testimonial, index) => (
                            <div
                                key={`${testimonial.name}-${index}`}
                                className={`bg-white rounded-2xl shadow-lg p-6 lg:p-8 transition-all duration-500 transform ${isTransitioning ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
                                    }`}
                            >
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <Quote className="w-10 h-10 text-[#ff6934] opacity-20" />
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                    {testimonial.text}
                                </p>

                                {/* User Info */}
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-14 h-14">
                                        <img
                                            src={testimonial.picture}
                                            alt={testimonial.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#2D1155]">
                                            {testimonial.name}
                                        </h3>
                                        {testimonial.savedAmount && (
                                            <p className="text-[#ff6934] text-sm">
                                                Saved {testimonial.savedAmount}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Navigation */}
                    {isMobile && (
                        <div className="mt-6 flex justify-center space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => !isTransitioning && setCurrentIndex(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'w-6 bg-[#ff6934]'
                                        : 'w-1.5 bg-[#ff6934]/30'
                                        }`}
                                    disabled={isTransitioning}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
