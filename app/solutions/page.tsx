'use client';

import Link from 'next/link';
import { Truck, ShoppingBag, Building2, Home } from 'lucide-react';

export default function SolutionsPage() {
    const industries = [
        {
            id: 'logistics',
            icon: <Truck className="w-12 h-12 text-[#E67E22]" />,
            title: 'Logistics & Post',
            headline: 'Slash Last-Mile Costs by 40%',
            description: 'The "Last Mile" accounts for 53% of total shipping costs. EaseFetch autonomous towers and lockers eliminate failed deliveries and route inefficiencies.',
            points: ['Reduce courier dwell time', '24/7 Consolidated drop-off points', 'Lower carbon footprint', 'Verify chain of custody'],
            products: ['outdoor-tower', 'standard-parcel', 'auto-robot']
        },
        {
            id: 'retail',
            icon: <ShoppingBag className="w-12 h-12 text-[#E67E22]" />,
            title: 'Retail & E-commerce',
            headline: 'The BOPIS Revolution',
            description: 'Buy Online, Pick Up In-Store (BOPIS) is mandated by modern consumers. Our automated hubs turn your storefront into a 24/7 fulfillment center.',
            points: ['Instant collection (no queues)', 'Drive foot traffic to store', 'Handle returns automatically', 'Sell after-hours with Vending'],
            products: ['click-collect', 'vending-locker', 'fresh-food']
        },
        {
            id: 'enterprise',
            icon: <Building2 className="w-12 h-12 text-[#E67E22]" />,
            title: 'Corporate Enterprise',
            headline: 'Automate Internal Asset Flow',
            description: 'IT departments waste hundreds of hours manually swapping laptops and badges. EaseFetch Asset Managers automate this workflow completely.',
            points: ['Self-service IT helpdesk', 'Secure document handover', 'Employee mail distribution', 'Track high-value tools'],
            products: ['it-asset', 'doc-exchange', 'heated-meal']
        },
        {
            id: 'residential',
            icon: <Home className="w-12 h-12 text-[#E67E22]" />,
            title: 'Residential Communities',
            headline: 'Premium Amenity for Tenants',
            description: 'Package theft is the #1 tenant complaint. Secure lockers provide peace of mind and luxury convenience for modern apartment complexes.',
            points: ['Stop package theft & piracy', 'Handle grocery deliveries', 'Dry-cleaning concierge', 'Contactless operation'],
            products: ['standard-parcel', 'laundry-service', 'fresh-food']
        }
    ];

    return (
        <main className="pt-[80px]">
            {/* Header */}
            <section className="bg-[#1A252F] text-white py-24">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold uppercase tracking-widest mb-6">Industry Solutions</h1>
                    <p className="text-xl text-[#BDC3C7] font-light max-w-2xl">
                        Tailored infrastructure for high-demand sectors. We solve specific workflow bottlenecks with precision hardware.
                    </p>
                </div>
            </section>

            {/* Industries Loop */}
            <div className="bg-white">
                {industries.map((industry, index) => (
                    <section key={industry.id} id={industry.id} className={`py-24 border-b border-[#ECF0F1] ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFB]'}`}>
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col lg:flex-row gap-16">

                                {/* Visual/Icon Area */}
                                <div className="lg:w-1/3">
                                    <div className="bg-[#2C3E50] p-8 inline-block mb-8">
                                        {industry.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold text-[#2C3E50] mb-2">{industry.title}</h2>
                                    <div className="h-1 w-12 bg-[#E67E22] mb-6"></div>
                                    <ul className="space-y-3">
                                        {industry.points.map((point, i) => (
                                            <li key={i} className="flex items-center text-[#7F8C8D]">
                                                <span className="w-1.5 h-1.5 bg-[#E67E22] mr-3"></span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Content Area */}
                                <div className="lg:w-2/3">
                                    <h3 className="text-4xl font-light text-[#2C3E50] mb-6 leading-tight">{industry.headline}</h3>
                                    <p className="text-lg text-[#7F8C8D] leading-relaxed mb-10">
                                        {industry.description}
                                    </p>

                                    <div className="bg-white border border-[#E2E8F0] p-8">
                                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#95A5A6] mb-6">Recommended Hardware</h4>
                                        <div className="flex flex-wrap gap-4">
                                            {industry.products.map(pid => (
                                                <Link key={pid} href={`/products/${pid}`} className="bg-[#F1F3F5] hover:bg-[#E67E22] hover:text-white px-4 py-2 text-xs font-bold uppercase transition-colors text-[#2C3E50]">
                                                    {pid.replace('-', ' ')}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* CTA */}
            <section className="py-24 bg-[#E67E22]">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">Need a Custom Solution?</h2>
                    <Link href="/contact" className="inline-block bg-[#2C3E50] text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#2C3E50] transition-colors">
                        Consult Engineers
                    </Link>
                </div>
            </section>
        </main>
    );
}
