import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#1A252F] text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

                    {/* Brand Column */}
                    <div>
                        <div className="flex flex-col mb-8">
                            <h2 className="text-2xl font-bold tracking-[0.2em] uppercase text-white">
                                EaseFetch
                            </h2>
                            <span className="text-[10px] tracking-[0.4em] text-[#E67E22] uppercase font-bold">Smart Lockers</span>
                        </div>
                        <p className="text-[#95A5A6] font-light leading-relaxed mb-8">
                            Engineered for reliability. EaseFetch delivers industrial-grade autonomous delivery and asset management solutions for a connected world.
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#E67E22]">Products</h3>
                        <ul className="space-y-4 text-[#BDC3C7] font-light">
                            <li><Link href="/products/standard-parcel" className="hover:text-white transition-colors">Parcel Lockers</Link></li>
                            <li><Link href="/products/fresh-food" className="hover:text-white transition-colors">Cold Chain</Link></li>
                            <li><Link href="/products/auto-robot" className="hover:text-white transition-colors">Autonomous Robots</Link></li>
                            <li><Link href="/products/cloud-core" className="hover:text-white transition-colors">Cloud Platform</Link></li>
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#E67E22]">Industries</h3>
                        <ul className="space-y-4 text-[#BDC3C7] font-light">
                            <li><Link href="/solutions#logistics" className="hover:text-white transition-colors">Logistics & Post</Link></li>
                            <li><Link href="/solutions#retail" className="hover:text-white transition-colors">Retail & E-commerce</Link></li>
                            <li><Link href="/solutions#enterprise" className="hover:text-white transition-colors">Enterprise</Link></li>
                            <li><Link href="/solutions#residential" className="hover:text-white transition-colors">Residential</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#E67E22]">Contact</h3>
                        <address className="not-italic text-[#BDC3C7] font-light space-y-4">
                            <p>Global HQ<br />Shenzhen, China</p>
                            <p>hello@easefetch.com<br />+86 755 1234 5678</p>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#34495E] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#7F8C8D] text-xs uppercase tracking-widest">
                        © 2026 EaseFetch Technology. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-[#7F8C8D] text-xs uppercase tracking-widest">
                        <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/legal/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
