import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Clinic Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6 text-white">
                            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center font-bold text-lg">
                                D
                            </div>
                            <span className="font-bold text-xl">Dr. Anupreet Kaur</span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Dedicated to providing quality dental care with a gentle touch.
                            Your smile is our priority.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                                <Youtube size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-teal-400 transition-colors">About Dr. Kaur</a></li>
                            <li><a href="#services" className="hover:text-teal-400 transition-colors">Treatments</a></li>
                            <li><a href="#reviews" className="hover:text-teal-400 transition-colors">Patient Reviews</a></li>
                            <li><a href="#contact" className="hover:text-teal-400 transition-colors">Book Appointment</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-teal-500 shrink-0 mt-1" size={20} />
                                <span>
                                    Green Valley Apartments, AG-264,
                                    Talbagan, Sardar Para, Majher Para,
                                    Krishnapur, Kolkata, West Bengal 700102
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-teal-500 shrink-0" size={20} />
                                <a href="tel:+919830824667" className="hover:text-white transition-colors">098308 24667</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-teal-500 shrink-0" size={20} />
                                <a href="mailto:contact@clinic.com" className="hover:text-white transition-colors">contact@clinic.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="text-teal-500 shrink-0" size={20} />
                                <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="h-64 rounded-xl overflow-hidden bg-slate-800">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4764836691!2d88.43577731495966!3d22.597653985169904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a5e5555555%3A0x1c1c1c1c1c1c1c1c!2sGreen%20Valley%20Apartments!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center bg-slate-900">
                    <p className="text-sm text-slate-500 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Dr. Anupreet Kaur. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-600">
                        Designed with care.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
