import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
    // Determine if we have videos to show. 
    // If not, we can return null as per requirements ("Hide section if no video available")
    // For demo purposes, we will show a placeholder.
    const videos = [
        {
            id: 1,
            thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
            title: "Patient Success Story",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
        }
    ];

    if (videos.length === 0) return null;

    return (
        <section className="py-20 bg-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Stories</h2>
                    <p className="text-gray-600">Real experiences from our happy patients.</p>
                </div>

                <div className="flex justify-center">
                    {/* Single featured video for now */}
                    <div className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video relative group cursor-pointer">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/c2WKDuBSlQM"
                            title="Patient Testimonials"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
