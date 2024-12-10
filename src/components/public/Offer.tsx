import React from "react";
import { CheckCircle } from "lucide-react";

interface OfferProps {
    text: string;
}

const Offer: React.FC<OfferProps> = ({ text }) => {
    return (
        <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
            <span>{text}</span>
        </li>
    );
};

export default Offer;