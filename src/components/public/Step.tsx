import React from "react";

interface StepProps {
    title: string;
    description: string;
    icon: string;
}

const Step: React.FC<StepProps> = ({ title, description, icon }) => {
    return (
        <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute -top-6 left-6">
                <div className="w-12 h-12 bg-[#ff6934] rounded-xl flex items-center justify-center shadow-lg">
                    <img src={icon} alt="" className="w-6 h-6 object-contain" />
                </div>
            </div>
            <div className="pt-8">
                <h3 className="text-lg font-semibold text-[#2D1155] mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Step;