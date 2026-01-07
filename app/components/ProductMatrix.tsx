'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ProductMatrix() {
    const [filter, setFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'All Systems' },
        { id: 'logistics', label: 'Logistics' },
        { id: 'cold-chain', label: 'Cold Chain' },
        { id: 'enterprise', label: 'Enterprise' },
        { id: 'software', label: 'Software' }
    ];

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.series === filter);

    return (
        <section className="py-32 bg-[#F8FAFB]">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-4xl font-light text-[#2C3E50] mb-4">Complete Ecosystem</h2>
                        <div className="h-1 w-24 bg-[#E67E22]"></div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-all border ${filter === cat.id
                                    ? 'bg-[#2C3E50] text-white border-[#2C3E50]'
                                    : 'bg-white text-[#95A5A6] border-transparent hover:border-[#CBD5E0]'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={product.href} className="group block bg-white h-full border border-transparent hover:border-[#E67E22] transition-colors relative">
                                    {/* Badge */}
                                    {product.badge && (
                                        <div className="absolute top-4 right-4 z-10 bg-[#E67E22] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                            {product.badge}
                                        </div>
                                    )}

                                    {/* Image Area */}
                                    <div className="relative h-[300px] w-full bg-[#f1f3f5] overflow-hidden flex items-center justify-center p-8">
                                        <div className="absolute inset-0 bg-white/50"></div>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-contain relative z-10 drop-shadow-xl hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-[2px]" style={{ backgroundColor: product.color }}></div>
                                            <span className="text-xs font-bold text-[#95A5A6] uppercase tracking-widest">{product.seriesName}</span>
                                        </div>

                                        <h3 className="text-2xl font-light text-[#2C3E50] mb-2 group-hover:text-[#E67E22] transition-colors">
                                            {product.name}
                                        </h3>

                                        <p className="text-sm text-[#7F8C8D] leading-relaxed mb-8 line-clamp-3">
                                            {product.description}
                                        </p>

                                        <div className="flex items-center text-[#2C3E50] text-xs font-bold uppercase tracking-[0.15em] group-hover:translate-x-2 transition-transform">
                                            View Specs <ArrowRight className="w-4 h-4 ml-2 text-[#E67E22]" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
