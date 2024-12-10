export interface User {
    id: string;
    fullname: string;
    email: string;
    country: string;
    state: string;
    phone: number;
    isVerified: boolean;
    role: 'user' | 'admin';
    created_at: string;
}


// {
//     "version": 2,
//     "routes": [
//         {
//             "src": "/signin",
//             "status": 308,
//             "headers": {
//                 "Location": "https://dashboard.ladx.africa"
//             }
//         },
//         {
//             "src": "/(.*)",
//             "dest": "/"
//         }
//     ]
// }