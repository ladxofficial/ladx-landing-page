import Apple from "../assests/apple.png";
import Facebook from "../assests/facebook.png";
import Google from "../assests/google.png";

export const SOCIAL_LOGINS = [
    { provider: 'google', icon: Google, alt: 'Google' },
    { provider: 'apple', icon: Apple, alt: 'Apple' },
    { provider: 'facebook', icon: Facebook, alt: 'Facebook' }
] as const;

export const INITIAL_SIGNIN_FORM_DATA = {
    email: "",
    password: ""
};
