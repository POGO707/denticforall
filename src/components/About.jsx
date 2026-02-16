import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                                alt="Dr. Anupreet Kaur"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold">Dr. Anupreet Kaur</h3>
                                <p className="text-teal-200 font-medium">Chief Dentist & Implantologist</p>
                            </div>
                        </div>
                        {/* Interactive decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center animate-pulse z-[-1]"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-2 block">
                            Meet Your Doctor
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            18+ Years of <span className="text-teal-600">Excellence</span> in Dental Care
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            Dr. Anupreet Kaur is a renowned dental surgeon known for her calm demeanor and ethical practice.
                            With over 18 years of clinical experience, she specializes in painless dental treatments and has a
                            passion for creating beautiful, healthy smiles.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Educational Excellence</h4>
                                    <p className="text-sm text-gray-500">BDS from BRS Dental College, Panchkula. Continuously updating skills with latest advancements.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Academic Contributions</h4>
                                    <p className="text-sm text-gray-500">Published multiple research papers and presented at national conferences.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Patient-First Approach</h4>
                                    <p className="text-sm text-gray-500">Known for her gentle, friendly behavior that puts even anxious patients at ease.</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
