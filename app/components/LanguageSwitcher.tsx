'use client';

import { useState, useEffect, useRef } from 'react';
import { Globe, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 语言列表配置
const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
    { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
];

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        google?: any;
    }
}

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('en');
    const [isLoaded, setIsLoaded] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 加载 Google Translate 脚本
        const addScript = () => {
            const script = document.createElement('script');
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        };

        window.googleTranslateElementInit = () => {
            if (window.google?.translate?.TranslateElement) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: languages.map(l => l.code).join(','),
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false
                    },
                    'google_translate_element_hidden'
                );

                // 标记为已加载
                setTimeout(() => setIsLoaded(true), 1000);
            }
        };

        if (!document.querySelector('script[src*="translate.google.com"]')) {
            addScript();
        }

        // 点击外部关闭下拉菜单
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (langCode: string) => {
        setCurrentLang(langCode);
        setIsOpen(false);

        // 等待 Google Translate 加载完成
        const attemptTranslate = (attempts = 0) => {
            const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;

            if (selectElement) {
                selectElement.value = langCode;
                selectElement.dispatchEvent(new Event('change', { bubbles: true }));
            } else if (attempts < 20) {
                // 如果还没加载完，继续尝试
                setTimeout(() => attemptTranslate(attempts + 1), 200);
            }
        };

        attemptTranslate();
    };

    const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            {/* 隐藏的 Google Translate 元素 */}
            <div id="google_translate_element_hidden" className="hidden" />

            {/* 自定义语言切换按钮 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                title={`Current: ${currentLanguage.name}`}
            >
                <Globe size={18} className="text-slate-600" />
                <span className="text-sm font-medium text-slate-600">{currentLanguage.flag}</span>
            </button>

            {/* 语言下拉菜单 */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-full mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden z-50"
                    >
                        <div className="max-h-96 overflow-y-auto">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={`w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors ${currentLang === lang.code ? 'bg-slate-50' : ''
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{lang.flag}</span>
                                        <span className="text-sm font-medium text-slate-700">{lang.name}</span>
                                    </div>
                                    {currentLang === lang.code && (
                                        <Check size={16} className="text-[#E67E22]" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 隐藏 Google Translate 默认 UI */}
            <style jsx global>{`
                .goog-te-banner-frame { display: none !important; }
                body { top: 0 !important; }
                .skiptranslate { display: none !important; }
                #google_translate_element_hidden { display: none !important; }
                .goog-te-spinner-pos { display: none !important; }
            `}</style>
        </div>
    );
}
