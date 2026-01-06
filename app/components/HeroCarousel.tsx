'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: '/images/hero-01.png',
        tagline: 'Intelligent Last-Mile Infrastructure',
        title: 'AUTONOMOUS LOGISTICS',
        desc: 'EaseFetch deploys the world\'s most advanced smart locker networks. From autonomous robots to high-density towers.',
        cta: 'Explore Hardware',
        link: '/products/standard-parcel'
    },
    {
        id: 2,
        image: '/images/hero-02.png',
        tagline: 'Sustainable Community Tech',
        title: 'GREENER COL_D CHAIN',
        desc: 'Solar-powered fresh food lockers powering the next generation of sustainable residential communities.',
        cta: 'View Cold Chain',
        link: '/products/fresh-food'
    },
    {
        id: 3,
        image: '/images/hero-03.png',
        tagline: 'Smart City Integration',
        title: 'FUTURE CONNECTED',
        desc: 'Seamlessly integrating into the urban fabric with IoT-enabled hubs for a smarter, safer city.',
        cta: 'See Solutions',
        link: '/solutions'
    }
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="h-[90vh] relative bg-[#1A252F] overflow-hidden group">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    >
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1A252F]/90 via-[#1A252F]/50 to-transparent"></div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
                <div className="max-w-4xl">
                    <motion.div
                        key={`content-${current}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <div className="inline-block px-3 py-1 mb-6 border border-[#E67E22] text-[#E67E22] text-[10px] font-bold uppercase tracking-[0.3em] bg-[#1A252F]/80 backdrop-blur-sm">
                            {slides[current].tagline}
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-xl"
                            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(' ', ' <br/>') }}>
                        </h1>

                        <p className="text-xl text-[#ECF0F1] font-light max-w-2xl mb-12 leading-relaxed drop-shadow-md">
                            {slides[current].desc}
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Link href={slides[current].link} className="bg-[#E67E22] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D35400] transition-colors shadow-lg">
                                {slides[current].cta}
                            </Link>
                            <Link href="/contact" className="border border-white text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#2C3E50] transition-colors backdrop-blur-sm">
                                Get Quote
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-12 right-12 z-20 flex gap-4">
                <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-[#E67E22] hover:border-[#E67E22] transition-all">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-[#E67E22] hover:border-[#E67E22] transition-all">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1 transition-all ${current === idx ? 'w-12 bg-[#E67E22]' : 'w-6 bg-white/30 hover:bg-white/60'}`}
                    />
                ))}
            </div>
        </section>
    );
}
