import React from "react";
import { SOCIAL_LOGINS } from "../../constants/auth";

interface SocialLoginsProps {
    isLoading: boolean;
}

export const SocialLogins: React.FC<SocialLoginsProps> = ({ isLoading }) => {
    return (
        <div className="mt-6">
            <p className="text-center text-sm text-gray-500">Or sign in with</p>
            <div className="mt-4 flex justify-center space-x-4">
                {SOCIAL_LOGINS.map(({ provider, icon, alt }) => (
                    <button
                        key={provider}
                        type="button"
                        className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition duration-300"
                        disabled={isLoading}
                    >
                        <img src={icon} alt={alt} className="w-6 h-6" />
                    </button>
                ))}
            </div>
        </div>
    );
};