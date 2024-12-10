import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountPage: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 20, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 20);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] p-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2D1155] animate-pulse mb-8 text-center">
                Countdown to Launch
            </h1>
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-2xl md:text-3xl font-semibold text-[#2D1155]">
                <div className="flex flex-col items-center animate-bounce mx-2 md:mx-4">
                    <span>{timeLeft.days}</span>
                    <span className="text-sm md:text-base text-gray-500">Days</span>
                </div>
                <div className="flex flex-col items-center animate-bounce mx-2 md:mx-4">
                    <span>{timeLeft.hours}</span>
                    <span className="text-sm md:text-base text-gray-500">Hours</span>
                </div>
                <div className="flex flex-col items-center animate-bounce mx-2 md:mx-4">
                    <span>{timeLeft.minutes}</span>
                    <span className="text-sm md:text-base text-gray-500">Minutes</span>
                </div>
                <div className="flex flex-col items-center animate-bounce mx-2 md:mx-4">
                    <span>{timeLeft.seconds}</span>
                    <span className="text-sm md:text-base text-gray-500">Seconds</span>
                </div>
            </div>
            <Link to="/" className="mt-8 md:mt-10 bg-[#ff6934] text-white px-4 py-2 md:px-6 md:py-2 rounded-lg text-base md:text-lg">
                Go Back to Landing Page
            </Link>
        </div>
    );
};

export default CountPage;
