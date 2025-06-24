import { Language } from '@/types/language.interface';
import { create } from 'zustand'

interface ThemeState {
    language: Language;
    setLanguage: (language: Language) => void;
    
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    language: Language.Greek,
    setLanguage: (language: Language) => set(() => ({ language })),

    theme: 'light',
    setTheme: (theme: 'light' | 'dark') => set(() => ({ theme }))
}))
