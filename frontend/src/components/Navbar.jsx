import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Menu, X, Heart } from 'lucide-react';
import Button from './Button';
import NotificationDropdown from './NotificationDropdown';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navLinks = user ? (
        <>
            <Link
                to={user.role === 'admin' ? '/admin-dashboard' : `/${user.role}`}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium"
            >
                Dashboard
            </Link>
            <div className="mx-2">
                <NotificationDropdown />
            </div>
            <Button variant="outline" onClick={handleLogout} className="ml-2">Logout</Button>
        </>
    ) : (
        <>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium">Login</Link>
            <Link to="/register-owner">
                <Button variant="primary" className="ml-4">Find a Caregiver</Button>
            </Link>
            <Link to="/register-caregiver">
                <Button variant="secondary" className="ml-2">Become a Caregiver</Button>
            </Link>
        </>
    );

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <Heart className="h-8 w-8 text-blue-600" />
                            <span className="ml-2 text-xl font-bold text-gray-900">PetCare Connect</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center">
                        {navLinks}
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                            {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        {user ? (
                            <>
                                <Link
                                    to={user.role === 'admin' ? '/admin-dashboard' : `/${user.role}`}
                                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Dashboard
                                </Link>
                                <button onClick={handleLogout} className="text-left text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                                <Link to="/register-owner" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Find a Caregiver</Link>
                                <Link to="/register-caregiver" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Become a Caregiver</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
