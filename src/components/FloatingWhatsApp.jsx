import React from 'react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
    const phoneNumber = "919830824667"; // Added country code 91 for India
    const message = encodeURIComponent("Hello Doctor, I would like to book an appointment.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
        >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
            <span className="font-semibold hidden group-hover:block transition-all duration-300">Chat with us</span>
        </motion.a>
    );
};

export default FloatingWhatsApp;
