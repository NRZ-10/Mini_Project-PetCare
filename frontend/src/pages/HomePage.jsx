import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Shield, Clock, HeartHandshake, CheckCircle } from 'lucide-react';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Trusted Pet Care in Your Neighborhood
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100">
                        Connect with reliable pet sitters, dog walkers, and caregivers who love your pets as much as you do.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/register-owner">
                            <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-3 rounded-full">
                                Find a Caregiver
                            </Button>
                        </Link>
                        <Link to="/register-caregiver">
                            <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-3 rounded-full bg-transparent border-white text-white hover:bg-white hover:text-blue-800">
                                Become a Caregiver
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <HeartHandshake className="h-10 w-10 text-blue-500" />, title: 'Pet Sitting', desc: 'In-home care for your pets while you are away.' },
                            { icon: <Clock className="h-10 w-10 text-blue-500" />, title: 'Dog Walking', desc: 'Daily walks to keep your dog healthy and happy.' },
                            { icon: <Shield className="h-10 w-10 text-blue-500" />, title: 'Drop-in Visits', desc: 'Quick visits for feeding, potty breaks, and playtime.' },
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="flex justify-center mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-blue-600">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Search</h3>
                            <p className="text-gray-600">Find trusted caregivers near you.</p>
                        </div>
                        <div>
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-blue-600">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Connect</h3>
                            <p className="text-gray-600">Schedule a meet and greet.</p>
                        </div>
                        <div>
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-blue-600">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Relax</h3>
                            <p className="text-gray-600">Enjoy peace of mind while your pet is cared for.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
