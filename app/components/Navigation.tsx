'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { products } from '../data/products';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSeries, setActiveSeries] = useState<string | null>(null);
    const pathname = usePathname();

    // Group products by series for Mega Menu
    const seriesGroups = {
        'Urban Logistics': products.filter(p => p.series === 'logistics'),
        'Cold Chain': products.filter(p => p.series === 'cold-chain'),
        'Lifestyle': products.filter(p => p.series === 'lifestyle'),
        'Enterprise': products.filter(p => p.series === 'enterprise'),
        'Specialty': products.filter(p => p.series === 'specialty'),
        'Retail': products.filter(p => p.series === 'retail'),
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0] py-4' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Brand */}
                    <Link href="/" className="relative z-50">
                        <div className="flex flex-col">
                            <h1 className={`text-2xl font-bold tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-[#2C3E50]' : 'text-[#2C3E50]'}`}>
                                EaseFetch
                            </h1>
                            <span className="text-[10px] tracking-[0.4em] text-[#E67E22] uppercase font-bold">Smart Lockers</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-12">

                        {/* Mega Menu Trigger */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setActiveSeries('Logistics')}
                            onMouseLeave={() => setActiveSeries(null)}
                        >
                            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#2C3E50] hover:text-[#E67E22] py-4">
                                Products
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Mega Menu Dropdown */}
                            <AnimatePresence>
                                {activeSeries && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full -left-40 w-[900px] bg-white border border-[#E2E8F0] shadow-2xl p-8 grid grid-cols-3 gap-8"
                                    >
                                        {Object.entries(seriesGroups).map(([name, items]) => (
                                            <div key={name} className="space-y-4">
                                                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#95A5A6] border-b border-[#ECF0F1] pb-2">
                                                    {name}
                                                </h3>
                                                <ul className="space-y-2">
                                                    {items.map(item => (
                                                        <li key={item.id}>
                                                            <Link
                                                                href={item.href}
                                                                className="block text-sm text-[#2C3E50] hover:text-[#E67E22] font-medium transition-colors"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/solutions" className="text-sm font-bold uppercase tracking-widest text-[#2C3E50] hover:text-[#E67E22] transition-colors">
                            Solutions
                        </Link>
                        <Link href="/about" className="text-sm font-bold uppercase tracking-widest text-[#2C3E50] hover:text-[#E67E22] transition-colors">
                            Company
                        </Link>

                        <div className="h-6 w-[1px] bg-[#E2E8F0]"></div>

                        <Link href="/contact" className="bg-[#2C3E50] text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#E67E22] transition-colors">
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden relative z-50 text-[#2C3E50]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 lg:hidden overflow-y-auto"
                    >
                        <div className="space-y-8">
                            {Object.entries(seriesGroups).map(([name, items]) => (
                                <div key={name}>
                                    <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#95A5A6] mb-4">
                                        {name}
                                    </h3>
                                    <div className="space-y-3 pl-4 border-l-2 border-[#E67E22]">
                                        {items.map(item => (
                                            <Link
                                                key={item.id}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block text-lg font-bold text-[#2C3E50]"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
