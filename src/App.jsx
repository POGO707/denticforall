import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import Reviews from './components/Reviews';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <AppointmentForm />
                <Reviews />
                <VideoSection />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}

export default App;
