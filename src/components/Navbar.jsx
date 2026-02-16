import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Button from './Button';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 z-50 relative">
                        <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                            D
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-bold text-lg leading-none ${scrolled || isOpen ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>Dr. Anupreet Kaur</span>
                            <span className={`text-[10px] font-medium tracking-wider ${scrolled || isOpen ? 'text-teal-600' : 'text-teal-200'}`}>DENTAL CLINIC</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-teal-400 ${scrolled ? 'text-gray-600' : 'text-white/90'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact">
                            <Button variant="primary" className="px-5 py-2 text-sm shadow-none">
                                <Calendar size={16} />
                                Book Now
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden z-50 p-2 rounded-lg transition-colors ${isOpen ? 'text-gray-900 bg-gray-100' : (scrolled ? 'text-gray-900' : 'text-white')}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden"
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-800 text-xl font-medium py-4 border-b border-gray-100 last:border-none hover:text-teal-600 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            <div className="mt-8 space-y-4">
                                <a href="#contact" onClick={() => setIsOpen(false)}>
                                    <Button variant="primary" className="w-full justify-center py-4 text-lg">
                                        <Calendar size={20} />
                                        Book Appointment
                                    </Button>
                                </a>
                                <div className="flex justify-center gap-6 mt-6 text-gray-400">
                                    {/* Social placeholders */}
                                    <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                                    <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                                    <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
