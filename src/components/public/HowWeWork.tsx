import React from "react";
import delivery from "../../assets/delivery-package-boxes 1.png";
import delivery2 from "../../assets/istockphoto-1310501829-612x612.png";
import globe from "../../assets/network.png";
import network from "../../assets/network-connection 1.png";

interface StepDetails {
    title: string;
    description: string;
    icon: string;
}

interface OfferDetails {
    text: string;
}

const HowItWorks: React.FC = () => {
    const steps: StepDetails[] = [
        {
            title: "Step 1: Submit Your Delivery Request",
            description: "Describe the item and choose the delivery location.",
            icon: delivery
        },
        {
            title: "Step 2: We Match You with a Traveler",
            description: "Our admin team connects you with verified travelers.",
            icon: network
        },
        {
            title: "Step 3: Track & Receive Your Items",
            description: "Monitor the delivery process, and get notified of its status.",
            icon: globe
        }
    ];

    const offers: OfferDetails[] = [
        { text: "Secure Deliveries - Verified travelers and encrypted payments." },
        { text: "Transparent Pricing - No hidden fees, clear quotes, and weight-based costs." },
        { text: "Global Coverage - Connecting you with travelers worldwide." }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2D1155]">
                        How It <span className="text-[#ff6934]">Works</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Simple steps to get your items delivered safely and securely
                    </p>
                </div>

                {/* Steps Section */}
                <div className="relative">
                    {/* Connection lines for desktop - Only visible on md and up */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 mb-20">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Icon container */}
                                <div className="mb-6 flex justify-center md:justify-start">
                                    <div className="w-16 h-16 bg-[#ff6934] rounded-2xl flex items-center justify-center shadow-lg">
                                        <img
                                            src={step.icon}
                                            alt=""
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow text-center md:text-left">
                                    <h3 className="text-xl font-semibold text-[#2D1155] mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow for desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:flex absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                                        <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-[#ff6934]"
                                            >
                                                <path
                                                    d="M5 12h14M13 5l7 7-7 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* What we Offer Section */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left side - Offers */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#2D1155] mb-8">
                                What we <span className="text-[#ff6934]">Offer</span>
                            </h2>
                            <div className="space-y-6">
                                {offers.map((offer, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-[#ff69341a] rounded-xl flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-[#ff6934]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-gray-600 flex-1">{offer.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right side - Image */}
                        <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2D1155]/10 to-[#ff6934]/10 transform -skew-x-12" />
                            <img
                                src={delivery2}
                                alt="Happy customer"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;