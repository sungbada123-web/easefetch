'use client';

import { useEffect } from 'react';
import { Globe } from 'lucide-react';

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        google?: {
            translate: {
                TranslateElement: new (
                    options: { pageLanguage: string; includedLanguages: string; layout: number; autoDisplay: boolean },
                    elementId: string
                ) => void;
            };
        };
    }
}

export default function LanguageSwitcher() {
    useEffect(() => {
        // 添加 Google Translate 脚本
        const addScript = () => {
            const script = document.createElement('script');
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        };

        // 初始化翻译器
        window.googleTranslateElementInit = () => {
            if (window.google?.translate?.TranslateElement) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en', // 默认英文
                        // 支持主流语言：中文(简繁)、日韩、欧洲主要语言、阿拉伯语等
                        includedLanguages: 'en,zh-CN,zh-TW,ja,ko,fr,de,es,pt,ru,ar,it,nl,pl,tr,vi,th,id,ms,hi',
                        layout: 1, // SIMPLE layout
                        autoDisplay: false
                    },
                    'google_translate_element'
                );
            }
        };

        // 检查是否已加载
        if (!document.querySelector('script[src*="translate.google.com"]')) {
            addScript();
        }
    }, []);

    return (
        <div className="relative flex items-center gap-2">
            <Globe size={18} className="text-slate-400" />
            <div id="google_translate_element" className="[&_.goog-te-gadget]:!font-sans [&_.goog-te-combo]:!bg-transparent [&_.goog-te-combo]:!border-none [&_.goog-te-combo]:!text-sm [&_.goog-te-combo]:!text-slate-600 [&_.goog-te-combo]:cursor-pointer [&_.goog-te-gadget-simple]:!bg-transparent [&_.goog-te-gadget-simple]:!border-none" />
            <style jsx global>{`
                .goog-te-banner-frame { display: none !important; }
                body { top: 0 !important; }
                .skiptranslate { display: none !important; }
                .goog-te-gadget img { display: none !important; }
                .goog-te-gadget span { display: none !important; }
            `}</style>
        </div>
    );
}
