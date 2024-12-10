import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const FAQ = () => {
    // Change to store section and question indices
    const [openFAQ, setOpenFAQ] = useState<string | null>(null);

    const toggleFAQ = (sectionIndex: number, questionIndex: number) => {
        const faqId = `${sectionIndex}-${questionIndex}`;
        setOpenFAQ(openFAQ === faqId ? null : faqId);
    };

    const faqs = [
        {
            category: "General",
            items: [
                {
                    question: "What is LADX?",
                    answer: "LADX is a platform that connects travelers with people who want to send packages across various destinations."
                },
                {
                    question: "How can I send a package?",
                    answer: "To send a package, simply sign up as a sender, fill in the necessary details, and choose a traveler heading to your destination."
                },
                {
                    question: "What happens if my package gets lost?",
                    answer: "LADX ensures that all travelers are verified, and we have policies in place to address any issues related to lost packages."
                }
            ]
        },
        {
            category: "For Travelers",
            items: [
                {
                    question: "How do I earn while traveling?",
                    answer: "You can sign up as a traveler, and people will pay you to carry their packages while you're traveling to your destination."
                },
                {
                    question: "How do I become a verified traveler?",
                    answer: "To become a verified traveler, sign up on the platform and go through our verification process, which includes identity checks and travel history."
                }
            ]
        },
        {
            category: "Safety & Security",
            items: [
                {
                    question: "Is my package safe with the traveler?",
                    answer: "Yes, LADX verifies all travelers and provides safety guidelines to ensure that your package is handled with care and reaches its destination securely."
                },
                {
                    question: "What destinations can I send packages to?",
                    answer: "You can send packages to any destination where we have verified travelers. Check the platform for the latest list of available routes."
                }
            ]
        },
        {
            category: "Pricing & Payments",
            items: [
                {
                    question: "How much does it cost to send a package?",
                    answer: "The cost depends on the size of your package, destination, and the traveler. You'll get an estimated cost when creating your package delivery request."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept major credit/debit cards and popular online payment methods. You can also use digital wallets where available."
                },
                {
                    question: "Are there size or weight restrictions for packages?",
                    answer: "Yes, the size and weight of your package must comply with airline regulations and traveler preferences. You'll see these details when selecting a traveler."
                }
            ]
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2D1155] mb-6">
                        Frequently Asked <span className="text-[#ff6934]">Questions</span>
                    </h2>
                    <p className="text-gray-600">
                        Find answers to common questions about LADX's services and features
                    </p>
                    <div className="w-20 h-1 bg-[#ff6934] mx-auto mt-6"></div>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqs.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg font-semibold text-[#2D1155] mb-6 flex items-center">
                                <MessageCircle className="w-5 h-5 text-[#ff6934] mr-2" />
                                {section.category}
                            </h3>
                            <div className="space-y-4">
                                {section.items.map((faq, questionIndex) => {
                                    const faqId = `${sectionIndex}-${questionIndex}`;
                                    const isOpen = openFAQ === faqId;

                                    return (
                                        <div
                                            key={questionIndex}
                                            className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                                        >
                                            <button
                                                className="w-full flex justify-between items-start text-left group"
                                                onClick={() => toggleFAQ(sectionIndex, questionIndex)}
                                            >
                                                <span className={`font-medium pr-8 transition-colors duration-200 ${isOpen ? 'text-[#ff6934]' : 'text-gray-800 group-hover:text-[#ff6934]'
                                                    }`}>
                                                    {faq.question}
                                                </span>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-[#ff6934] transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>

                                            <div
                                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still Have Questions */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">
                        Still have questions? We're here to help.
                    </p>
                    <button className="inline-flex items-center px-6 py-3 bg-[#2D1155] text-white rounded-xl hover:bg-[#2D1155]/90 transition-colors duration-200">
                        Contact Support
                        <MessageCircle className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;