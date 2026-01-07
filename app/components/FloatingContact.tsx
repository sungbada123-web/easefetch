'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Phone as WhatsApp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingContact() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! I am EaseFetch AI. How can I help you with our smart locker solutions today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = { role: 'user', content: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulated AI Response
        setTimeout(() => {
            let aiContent = "I'd be happy to help. Are you interested in our Urban Logistics series or Cold Chain solutions?";
            if (inputValue.toLowerCase().includes('price') || inputValue.toLowerCase().includes('cost')) {
                aiContent = "For pricing details, I can connect you with our sales team. Would you like to leave your contact info or call us directly?";
            } else if (inputValue.toLowerCase().includes('where') || inputValue.toLowerCase().includes('location')) {
                aiContent = "EaseFetch systems are deployed globally. We have major hubs in Singapore, London, and New York.";
            }

            setMessages(prev => [...prev, { role: 'assistant', content: aiContent }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">

            {/* AI Chat Window */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-white w-[350px] h-[500px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden mb-4"
                    >
                        {/* Header */}
                        <div className="bg-[#2C3E50] p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#E67E22] rounded-full flex items-center justify-center">
                                    <MessageCircle size={18} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold">EaseFetch AI</h4>
                                    <p className="text-[10px] opacity-70">Always Online</p>
                                </div>
                            </div>
                            <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                            ? 'bg-[#E67E22] text-white rounded-tr-none'
                                            : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 italic text-slate-400 text-xs">
                                        AI is typing...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-[#E67E22] transition-all"
                            />
                            <button type="submit" className="bg-[#E67E22] text-white p-2 rounded-full hover:bg-[#D35400] transition-colors">
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-col gap-3">
                {/* WhatsApp Button */}
                <motion.a
                    href="https://wa.me/861234567890"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:shadow-[#25D366]/40 transition-shadow cursor-pointer"
                    title="Chat on WhatsApp"
                >
                    <WhatsApp size={28} />
                </motion.a>

                {/* AI Toggle Button */}
                <motion.button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${isChatOpen ? 'bg-slate-200 text-slate-600' : 'bg-[#2C3E50] text-white'} w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:shadow-slate-400/40 transition-all`}
                >
                    {isChatOpen ? <X size={28} /> : <MessageCircle size={28} />}
                </motion.button>
            </div>
        </div>
    );
}
