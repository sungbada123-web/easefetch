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
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 1. 设置 Google Translate 初始化函数
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
            }
        };

        // 2. 加载 Google Translate 脚本 (使用 translate.googleapis.com 提高稳定性)
        const addScript = () => {
            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        };

        if (!document.querySelector('script[src*="translate.google.com"]')) {
            addScript();
        }

        // 从 Cookie 中恢复当前语言状态
        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
        };

        const googtrans = getCookie('googtrans');
        if (googtrans) {
            const lang = googtrans.split('/').pop();
            if (lang) setCurrentLang(lang);
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

        // 核心：设置 Google Translate 所需的 Cookie
        // 格式通常为 /en/langCode
        const cookieValue = `/en/${langCode}`;
        document.cookie = `googtrans=${cookieValue}; path=/`;
        document.cookie = `googtrans=${cookieValue}; domain=.easefetch.com; path=/`;

        // 触发翻译
        const attemptTranslate = (attempts = 0) => {
            const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (selectElement) {
                selectElement.value = langCode;
                // 模拟原生事件以静默触发翻译
                selectElement.dispatchEvent(new Event('change', { bubbles: true }));
            } else if (attempts < 15) {
                setTimeout(() => attemptTranslate(attempts + 1), 300);
            } else {
                // 如果实在找不到 combo (可能被墙或加载极慢)，则刷新页面
                // 此时因为我们设置了 Cookie，页面刷新后 Google Translate 会自动翻译
                window.location.reload();
            }
        };

        attemptTranslate();
    };

    const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

    return (
        <div className="relative notranslate" ref={dropdownRef}>
            {/* 隐藏的 Google Translate 原生 UI 容器 */}
            <div id="google_translate_element_hidden" className="hidden" aria-hidden="true" />

            {/* 自定义语言切换按钮 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Select Language"
            >
                <Globe size={18} className="text-slate-600" />
                <span className="text-sm font-semibold text-slate-600">{currentLanguage.flag}</span>
            </button>

            {/* 语言下拉菜单 */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 top-full mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden z-[100]"
                    >
                        <div className="max-h-96 overflow-y-auto py-1">
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
                                        <Check size={16} className="text-[#E67E22] stroke-[3]" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 注入全局样式以彻底隐藏 Google Translate 原生界面 */}
            <style jsx global>{`
                /* 隐藏顶部翻译条 */
                .goog-te-banner-frame, 
                .goog-te-banner,
                .goog-te-menu-value span:nth-child(2),
                .goog-te-menu-value img,
                .goog-te-gadget-icon,
                .skiptranslate {
                    display: none !important;
                }
                
                /* 修复页面偏移 */
                body {
                    top: 0 !important;
                    position: static !important;
                }
                
                /* 隐藏 Google Spinner */
                .goog-te-spinner-pos {
                    display: none !important;
                }

                /* 隐藏悬停动词提示 */
                goog-te-balloon-frame {
                    display: none !important;
                }

                /* 隐藏原本的翻译小部件 */
                #google_translate_element_hidden {
                    display: none !important;
                }
            `}</style>
        </div>
    );
}
