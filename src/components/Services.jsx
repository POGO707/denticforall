import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Smile, Syringe, PenTool, Sparkles, User, ShieldCheck } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Stethoscope size={32} />,
            title: "Root Canal Treatment",
            desc: "Painless RCT using advanced rotary instruments to save your natural tooth."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Dental Implants",
            desc: "Permanent, natural-looking solution for replacing missing teeth."
        },
        {
            icon: <Sparkles size={32} />,
            title: "Teeth Cleaning",
            desc: "Professional scaling and polishing to remove plaque and prevent gum disease."
        },
        {
            icon: <Smile size={32} />,
            title: "Smile Designing",
            desc: "Digital smile makeovers with veneers and crowns for a perfect look."
        },
        {
            icon: <PenTool size={32} />,
            title: "Cosmetic Dentistry",
            desc: "Teeth whitening and aesthetic corrections for a brighter smile."
        },
        {
            icon: <User size={32} />,
            title: "Pediatric Dentistry",
            desc: "Gentle and fun dental care tailored specifically for children."
        },
        {
            icon: <Syringe size={32} />,
            title: "Painless Extraction",
            desc: "Safe removal of damaged teeth with minimal discomfort."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="services" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase block mb-2">
                        Our Treatments
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Comprehensive Dental Care
                    </h2>
                    <p className="text-gray-600">
                        From routine checkups to complex surgeries, we provide a full range of dental services under one roof.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
