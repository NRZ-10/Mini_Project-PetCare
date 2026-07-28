import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Heart className="h-8 w-8 text-blue-400" />
                        <span className="ml-2 text-xl font-bold">PetCare Connect</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} PetCare Connect. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
