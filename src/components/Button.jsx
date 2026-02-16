import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-teal-600 text-white hover:bg-teal-700 shadow-teal-200",
        secondary: "bg-white text-teal-700 border-2 border-teal-600 hover:bg-teal-50",
        outline: "border-2 border-white text-white hover:bg-white/10"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
