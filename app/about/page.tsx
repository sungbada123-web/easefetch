'use client';

export default function AboutPage() {
    return (
        <main className="pt-[80px]">
            {/* Hero */}
            <section className="bg-[#2C3E50] text-white py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Mission</span>
                        <h1 className="text-5xl font-light leading-tight mb-8">
                            We build the infrastructure for the <br /><strong className="font-bold">Autonomous Economy.</strong>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">Precision Engineering</h2>
                            <p className="text-[#7F8C8D] leading-relaxed mb-6">
                                EaseFetch was founded on a simple principle: reliability is the most important feature. In the logistics world, a single failed locker door can disrupt an entire delivery chain.
                            </p>
                            <p className="text-[#7F8C8D] leading-relaxed mb-6">
                                We combine industrial-grade hardware design—using galvanized steel, heavy-duty latches, and weather-proof coatings—with cutting-edge software intelligence. Our systems are designed to operate unattended for years, whether in a snowy outdoor plaza or a busy hospital corridor.
                            </p>
                        </div>
                        <div className="relative h-[400px] overflow-hidden">
                            <img src="/images/about-factory.png" alt="EaseFetch Factory" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-[#2C3E50]/10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-24 bg-[#F8FAFB] border-t border-[#ECF0F1]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        {[
                            { num: '50k+', label: 'Lockers Deployed' },
                            { num: '12', label: 'Global Patents' },
                            { num: '99.9%', label: 'Uptime SLA' },
                            { num: '24/7', label: 'Support Center' },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-5xl font-bold text-[#2C3E50] mb-2">{stat.num}</div>
                                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#95A5A6]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
