'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="pt-[80px]">
            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

                {/* Contact Info Side */}
                <div className="bg-[#2C3E50] text-white p-12 lg:p-24 flex flex-col justify-center">
                    <span className="text-[#E67E22] font-bold uppercase tracking-[0.2em] text-sm mb-6">Get in Touch</span>
                    <h1 className="text-5xl font-bold mb-12">Start Your Deployment</h1>

                    <div className="space-y-12">
                        <div>
                            <h3 className="flex items-center gap-3 text-lg font-bold uppercase tracking-widest mb-4">
                                <Mail className="text-[#E67E22]" /> Sales & Inquiries
                            </h3>
                            <p className="text-[#BDC3C7] text-xl font-light">info@easefetch.com</p>
                        </div>



                        <div>
                            <h3 className="flex items-center gap-3 text-lg font-bold uppercase tracking-widest mb-4">
                                <MapPin className="text-[#E67E22]" /> Global HQ
                            </h3>
                            <p className="text-[#BDC3C7] text-xl font-light leading-relaxed">
                                EaseFetch Technology Park<br />
                                Hangzhou, China
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="bg-white p-12 lg:p-24 flex flex-col justify-center">
                    <form className="max-w-lg w-full mx-auto space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#2C3E50]">First Name</label>
                                <input type="text" className="w-full bg-[#F1F3F5] border border-transparent focus:border-[#E67E22] px-4 py-3 outline-none transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#2C3E50]">Last Name</label>
                                <input type="text" className="w-full bg-[#F1F3F5] border border-transparent focus:border-[#E67E22] px-4 py-3 outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#2C3E50]">Work Email</label>
                            <input type="email" className="w-full bg-[#F1F3F5] border border-transparent focus:border-[#E67E22] px-4 py-3 outline-none transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#2C3E50]">Interested In</label>
                            <select className="w-full bg-[#F1F3F5] border border-transparent focus:border-[#E67E22] px-4 py-3 outline-none transition-colors text-[#2C3E50]">
                                <option>Logistics Lockers</option>
                                <option>Cold Chain Solutions</option>
                                <option>Enterprise Asset Management</option>
                                <option>Software API Integration</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#2C3E50]">Project Details</label>
                            <textarea rows={4} className="w-full bg-[#F1F3F5] border border-transparent focus:border-[#E67E22] px-4 py-3 outline-none transition-colors"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-[#E67E22] text-white py-4 font-bold uppercase tracking-[0.2em] hover:bg-[#D35400] transition-colors">
                            Send Request
                        </button>
                    </form>
                </div>

            </div>
        </main>
    );
}
