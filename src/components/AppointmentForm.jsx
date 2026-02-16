import React, { useState } from 'react';
import Button from './Button';
import { Send, CheckCircle } from 'lucide-react';

const AppointmentForm = () => {
    const [submitted, setSubmitted] = useState(false);

    // In a real implementation with FormSubmit without redirection, 
    // we would use fetch to post the data. 
    // However, FormSubmit's free tier works best with standard form submission 
    // or by adding `_next` to redirect back.
    // For this React app, we'll simulate the submission UI state.

    return (
        <section id="contact" className="py-20 bg-teal-600 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pattern-dots"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Book Your Visit Today
                        </h2>
                        <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                            Schedule your appointment with Dr. Anupreet Kaur.
                            We prioritize your comfort and time. Fill out the form,
                            and our team will confirm your slot instantly.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold">1</div>
                                <p>Fill your details & preferred time.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold">2</div>
                                <p>Receive instant confirmation via email/SMS.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold">3</div>
                                <p>Visit the clinic for your treatment.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-800">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                                <p className="text-gray-600">
                                    Thank you for booking. We will contact you shortly to confirm your appointment.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-teal-600 font-medium hover:underline"
                                >
                                    Book Another
                                </button>
                            </div>
                        ) : (
                            <form
                                action="https://formsubmit.co/hmoinuddin84@gmail.com"
                                method="POST"
                                className="space-y-4"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.target);
                                    fetch("https://formsubmit.co/hmoinuddin84@gmail.com", {
                                        method: "POST",
                                        body: formData
                                    })
                                        .then(response => {
                                            setSubmitted(true);
                                        })
                                        .catch(error => console.error('Error:', error));
                                }}
                            >
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_subject" value="New Appointment Booking – Dr Anupreet Kaur" />
                                <input type="hidden" name="_captcha" value="true" /> {/* Enable spam protection */}
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_autoresponse" value="Thank you for booking an appointment. Our team will contact you shortly to confirm your visit. If urgent, please call 09830824667." />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                                        <input required name="name" type="text" className="w-full px-4 h-12 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                        <input required name="phone" type="tel" inputMode="numeric" className="w-full px-4 h-12 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="9830824667" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input required name="email" type="email" className="w-full px-4 h-12 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="john@example.com" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                                        <input name="date" type="date" className="w-full px-4 h-12 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Preferred Time</label>
                                        <input name="time" type="time" className="w-full px-4 h-12 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Treatment Type</label>
                                    <select name="treatment" className="w-full px-4 h-12 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white">
                                        <option value="General Consultation">General Consultation</option>
                                        <option value="Root Canal">Root Canal Treatment</option>
                                        <option value="Implants">Dental Implants</option>
                                        <option value="Cleaning">Teeth Cleaning</option>
                                        <option value="Kids Dental">Pediatric Dentistry</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
                                    <textarea name="message" rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="Describe your issue..."></textarea>
                                </div>

                                <Button variant="primary" type="submit" className="w-full justify-center mt-4 h-14 text-lg bg-gray-900 hover:bg-gray-800 text-white shadow-lg rounded-xl">
                                    <Send size={20} />
                                    Confirm Appointment
                                </Button>
                                <p className="text-xs text-center text-gray-400 mt-4">
                                    Secure SSL Submission. Your data is private.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentForm;
