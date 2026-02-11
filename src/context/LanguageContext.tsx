"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations } from "@/src/data/translations";

type Language = "es" | "en";

interface LanguageContextProps {
    language: Language;
    toggleLanguage: () => void;
    t: typeof translations.es;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("es");

    useEffect(() => {
        const saved = localStorage.getItem("language") as Language;
        if (saved && (saved === "es" || saved === "en")) {
            setLanguage(saved);
        }
    }, []);

    const toggleLanguage = () => {
        const nextLang = language === "es" ? "en" : "es";
        setLanguage(nextLang);
        localStorage.setItem("language", nextLang);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
