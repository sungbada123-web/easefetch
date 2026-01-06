import { products } from '../../data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowRight, Download, Share2 } from 'lucide-react';
import Image from 'next/image';

// Correctly typing params for Next.js 15+ 
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find(p => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <main className="pt-[80px]">
            {/* HERO PRODUCT */}
            <section className="bg-[#F8FAFB] py-20 border-b border-[#ECF0F1]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">

                        {/* Content */}
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white`} style={{ backgroundColor: product.color }}>
                                    {product.seriesName}
                                </span>
                                {product.badge && (
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E67E22]">
                                        // {product.badge}
                                    </span>
                                )}
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-[#2C3E50] mb-6 tracking-tight leading-none">
                                {product.name}
                            </h1>
                            <p className="text-xl text-[#E67E22] font-medium mb-8 tracking-wide">
                                {product.tagline}
                            </p>
                            <p className="text-lg text-[#7F8C8D] leading-relaxed mb-10 max-w-xl">
                                {product.description}
                            </p>

                            {/* Key Specs Grid */}
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12 bg-white p-6 border border-[#ECF0F1]">
                                {product.specs.map((spec, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] uppercase font-bold text-[#95A5A6] tracking-widest mb-1">{spec.label}</div>
                                        <div className="text-sm font-bold text-[#2C3E50]">{spec.value}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <Link href="/contact" className="bg-[#2C3E50] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#E67E22] transition-colors">
                                    Request Spec Sheet
                                </Link>
                                <button className="flex items-center justify-center w-14 border border-[#CBD5E0] text-[#7F8C8D] hover:text-[#2C3E50] hover:border-[#2C3E50] transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Image/Visual */}
                        <div className="lg:w-1/2 relative bg-white aspect-square flex items-center justify-center p-12 border border-[#E2E8F0] shadow-sm">
                            {/* Mock Visual */}
                            <div className="w-full h-full relative">
                                <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at center, ${product.color}, transparent)` }}></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-9xl font-bold text-[#F1F3F5] select-none tracking-tighter">
                                        {product.id.substring(0, 2).toUpperCase()}
                                    </span>
                                </div>
                                {/* Actual Product Image */}
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <Image 
                                        src={product.image} 
                                        alt={product.name} 
                                        width={600} 
                                        height={600}
                                        className="object-contain w-full h-full drop-shadow-xl"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <h2 className="text-3xl font-light text-[#2C3E50] mb-6">Technical Highlights</h2>
                            <div className="h-1 w-20 bg-[#E67E22] mb-8"></div>
                            <p className="text-[#7F8C8D]">
                                Engineered to meet rigorous industrial standards. Every component is tested for durability, security, and performance.
                            </p>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {product.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-8 h-8 flex items-center justify-center bg-[#ECF0F1] text-[#2C3E50]">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#2C3E50] mb-1">{feature}</h3>
                                        <p className="text-xs text-[#95A5A6] leading-relaxed">Advanced capability integration.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* INTEGRATION CTA */}
            <section className="py-20 bg-[#2C3E50] border-t border-[#34495E]">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-[#E67E22] font-bold uppercase tracking-widest text-xs mb-4">Seamless Ecosystem</p>
                    <h2 className="text-3xl font-light text-white mb-8">Powered by EaseFetch Cloud</h2>
                    <Link href="/products/cloud-core" className="inline-flex items-center text-white font-bold hover:text-[#E67E22] transition-colors border-b border-white hover:border-[#E67E22] pb-1">
                        Explore Compatibility <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

// Generate static params for all products
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}
