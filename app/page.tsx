'use client';

import Link from 'next/link';
import { ArrowRight, Package, Thermometer, Briefcase, Zap } from 'lucide-react';
import ProductMatrix from './components/ProductMatrix';
import HeroCarousel from './components/HeroCarousel';

export default function Home() {
    return (
        <main className="min-h-screen pt-[80px]">

            <HeroCarousel />

            {/* QUICK ACCESS GRID */}
            <section className="bg-white py-24 border-b border-[#ECF0F1]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: <Package className="w-10 h-10" />, title: "Urban Logistics", desc: "Last-mile parcel lockers & towers", href: "/solutions#logistics" },
                            { icon: <Thermometer className="w-10 h-10" />, title: "Cold Chain", desc: "Fresh food & heated meal stations", href: "/solutions#cold-chain" },
                            { icon: <Briefcase className="w-10 h-10" />, title: "Enterprise", desc: "IT asset & document security", href: "/solutions#enterprise" },
                            { icon: <Zap className="w-10 h-10" />, title: "Automation", desc: "Robotics & AI analytics", href: "/solutions#software" },
                        ].map((item, i) => (
                            <Link key={i} href={item.href} className="group p-8 border border-[#ECF0F1] hover:border-[#E67E22] hover:shadow-lg transition-all">
                                <div className="text-[#2C3E50] mb-6 group-hover:text-[#E67E22] transition-colors">{item.icon}</div>
                                <h3 className="text-xl font-bold text-[#2C3E50] mb-2 uppercase tracking-wide">{item.title}</h3>
                                <p className="text-[#7F8C8D] text-sm leading-relaxed mb-6">{item.desc}</p>
                                <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#95A5A6] group-hover:text-[#2C3E50]">
                                    Details <ArrowRight className="w-3 h-3 ml-2" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FULL PRODUCT MATRIX */}
            <ProductMatrix />

            {/* CTA SECTION */}
            <section className="bg-[#2C3E50] py-32 text-center text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-light mb-8">Ready to deploy your network?</h2>
                    <p className="text-[#BDC3C7] mb-12 max-w-xl mx-auto">
                        Join logistics leaders and smart cities worldwide running on EaseFetch infrastructure.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-[#2C3E50] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#E67E22] hover:text-white transition-colors">
                        Contact Sales
                    </Link>
                </div>
            </section>

        </main>
    );
}
