import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { MessageCircle, Calendar } from 'lucide-react';

const Hero = () => {
    // High-quality dental background image
    const bgImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop";

    return (
        <section className="relative w-full min-h-[60vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt="Dental Clinic Background"
                    className="w-full h-full object-cover opacity-60" // 40% dark overlay by reducing opacity + dark bg
                />
                <div className="absolute inset-0 bg-black/40"></div> {/* Additional overlay for readability */}
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 md:mb-8 drop-shadow-lg">
                        Healthy Smiles for <br className="hidden md:block" />
                        <span className="text-teal-400">Every Generation</span>
                    </h1>

                    <p className="text-base md:text-xl text-slate-200 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md px-2 md:px-0">
                        Experience world-class dental care with Dr. Anupreet Kaur.
                        We combine advanced technology with a gentle touch to ensure a comfortable experience.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full md:w-auto px-5 md:px-0">
                        <a href="#contact" className="w-full md:w-auto">
                            <Button
                                variant="primary"
                                className="w-full min-w-[200px] text-base md:text-lg py-3 md:py-4 bg-teal-600 hover:bg-teal-500 border-none shadow-teal-900/50 rounded-xl"
                            >
                                <Calendar size={20} className="md:w-6 md:h-6" />
                                Book Appointment
                            </Button>
                        </a>
                        <a
                            href="https://wa.me/916289204920?text=Hello%20Doctor,%20I%20would%20like%20to%20book%20an%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto"
                        >
                            <Button
                                variant="outline"
                                className="w-full min-w-[200px] text-base md:text-lg py-3 md:py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/40 rounded-xl"
                            >
                                <MessageCircle size={20} className="md:w-6 md:h-6" />
                                Chat on WhatsApp
                            </Button>
                        </a>
                    </div>

                    <div className="mt-4 md:mt-6">
                        <span className="inline-block py-1 px-3 md:px-4 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-100 text-xs md:text-sm font-semibold tracking-wider backdrop-blur-sm shadow-sm pointer-events-none">
                            KOLKATA'S TRUSTED DENTAL CLINIC
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
