import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Reviews = () => {
    const reviews = [
        {
            name: "Sudeep Chatterjee",
            text: "Prompt and quality service, reasonable rates, friendly behaviour. Dr. Kaur is extremely professional.",
            rating: 5,
            initial: "S"
        },
        {
            name: "Priya Das",
            text: "Behaviour of Doctor & staff is A+. Very hygienic clinic and the treatment was absolutely painless.",
            rating: 5,
            initial: "P"
        },
        {
            name: "Amit Kumar",
            text: "Very humble doctor and caring atmosphere. My root canal was done in a single sitting without pain.",
            rating: 5,
            initial: "A"
        },
        {
            name: "Meera Reddy",
            text: "Best dental experience I've had. The clinic is spotless and the staff is very welcoming.",
            rating: 5,
            initial: "M"
        },
        {
            name: "Rahul Vernon",
            text: "Dr. Anupreet is very skilled. She explained the procedure clearly and made me feel comfortable.",
            rating: 5,
            initial: "R"
        }
    ];

    // Carousel State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
    }, []);

    // Responsive items per slide
    const itemsPerSlide = matches ? 3 : 1;
    const maxIndex = Math.ceil(reviews.length / itemsPerSlide) - 1;

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [maxIndex, currentIndex]); // Reset timer on index change

    const nextSlide = () => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Form State
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [rating, setRating] = useState(5);

    return (
        <section id="reviews" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-100 shadow-sm rounded-full px-4 py-1 mb-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google" className="w-5 h-5" />
                        <span className="font-bold text-gray-700">4.9/5 Rating</span>
                        <div className="flex text-yellow-400">
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        What Our Patients Say
                    </h2>
                </div>

                {/* Carousel */}
                <div className="relative max-w-6xl mx-auto mb-20 group">
                    <div className="overflow-hidden px-4 py-8">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * 100}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = offset.x; // Drag distance
                                if (swipe < -50) {
                                    nextSlide();
                                } else if (swipe > 50) {
                                    prevSlide();
                                }
                            }}
                        >
                            {Array.from({ length: Math.ceil(reviews.length / itemsPerSlide) }).map((_, pageIndex) => (
                                <div key={pageIndex} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-1 md:px-1">
                                    {reviews.slice(pageIndex * itemsPerSlide, (pageIndex + 1) * itemsPerSlide).map((review, i) => (
                                        <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 relative h-full flex flex-col select-none">
                                            <div className="text-6xl text-teal-100 absolute top-4 left-6 font-serif leading-none opacity-50">"</div>
                                            <p className="text-gray-700 relative z-10 mb-6 italic flex-grow text-base md:text-lg leading-relaxed">
                                                "{review.text}"
                                            </p>
                                            <div className="flex items-center gap-4 mt-auto">
                                                <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg">
                                                    {review.initial}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-base">{review.name}</h4>
                                                    <div className="flex text-yellow-400 mt-1">
                                                        {[...Array(review.rating)].map((_, r) => (
                                                            <Star key={r} size={14} fill="currentColor" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Mobile spacer for single item pages or desktop filler */}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 bg-white p-2 rounded-full shadow-lg text-gray-600 hover:text-teal-600 z-10 hidden group-hover:block"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 bg-white p-2 rounded-full shadow-lg text-gray-600 hover:text-teal-600 z-10 hidden group-hover:block"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-teal-600' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Review Submission Form */}
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-teal-50">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900">Share Your Experience</h3>
                        <p className="text-gray-500 text-sm">We value your feedback. Please rate your visit.</p>
                    </div>

                    {formSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8"
                        >
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Thank You!</h4>
                            <p className="text-gray-600 mb-4">
                                Your review has been submitted and will be published after approval.
                            </p>
                            <button
                                onClick={() => setFormSubmitted(false)}
                                className="text-teal-600 font-medium hover:underline text-sm"
                            >
                                Submit another review
                            </button>
                        </motion.div>
                    ) : (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                fetch("https://formsubmit.co/YOUR_EMAIL_HERE", { // USER: REPLACE WITH YOUR EMAIL
                                    method: "POST",
                                    body: formData
                                })
                                    .then(() => setFormSubmitted(true))
                                    .catch(err => console.error(err));
                            }}
                            className="space-y-4"
                        >
                            <input type="hidden" name="_subject" value="New Patient Review - Dr Anupreet Kaur" />

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                <input required name="name" type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none" placeholder="Enter your name" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            className="focus:outline-none transition-transform hover:scale-110"
                                        >
                                            <Star
                                                size={28}
                                                fill={star <= rating ? "#FACC15" : "none"}
                                                className={star <= rating ? "text-yellow-400" : "text-gray-300"}
                                            />
                                        </button>
                                    ))}
                                </div>
                                <input type="hidden" name="rating" value={rating} />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                                <textarea required name="message" rows="3" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none" placeholder="Tell us about your experience..."></textarea>
                            </div>

                            <Button variant="primary" type="submit" className="w-full justify-center">
                                Submit Review
                            </Button>
                            <p className="text-xs text-center text-gray-400 mt-2">
                                Your review will be reviewed before publishing.
                            </p>
                        </form>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Reviews;
