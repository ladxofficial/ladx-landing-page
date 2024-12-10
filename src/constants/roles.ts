// constants/roles.ts
export type Role = 'traveler' | 'sender';

export interface RoleOption {
    type: Role;
    title: string;
    description: string;
    icon: string;
    benefits: readonly string[]; // Change this to accept readonly array
}

export const DASHBOARD_URL = 'https://ladxx-dashboard-u6ck.vercel.app';

export const ROLE_OPTIONS: RoleOption[] = [
    {
        type: 'traveler',
        title: 'Traveler',
        description: 'Earn while you travel by delivering packages',
        icon: '✈️',
        benefits: [
            'Earn extra income during your travels',
            'Choose your delivery routes',
            'Flexible scheduling',
            'Meet new people'
        ]
    },
    {
        type: 'sender',
        title: 'Sender',
        description: 'Send packages worldwide through our network',
        icon: '📦',
        benefits: [
            'Affordable shipping rates',
            'Reliable delivery network',
            'Real-time tracking',
            'Secure shipping'
        ]
    }
];

