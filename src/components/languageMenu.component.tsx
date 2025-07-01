'use client';

import { useThemeStore } from '@/store/theme.store';
import { Language } from '@/types/language.interface';
import { useEffect, useRef } from 'react';

export const LanguageMenu = ({openMenu, setOpenMenu}: {openMenu:boolean, setOpenMenu: (value:boolean) => void}) => {

  const languageState = useThemeStore(state => state.language);
  const setStoreLanguage = useThemeStore(state => state.setLanguage);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenu, setOpenMenu]);

  const  toggleLanguage = (language: Language) => {
    setStoreLanguage(language);
    setOpenMenu(false)
  }

  return (
    <div ref={menuRef} className="relative flex items-center justify-self-center">
      <div className='hidden md:flex'>
        <button
          type="button"
          onClick={() => setOpenMenu(!openMenu)}
          className="inline-flex items-center font-medium px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >          
          <img src={languageState === Language.Greek ? '/greece-flag.png' : '/american-flag.png'} className="w-5 h-5 rounded-full me-3" alt="Greek Flag"/>
          {languageState === Language.Greek ? 'Ελληνικά (GR)' : 'English (US)'}
        </button>
        {openMenu && (
          <div className="absolute right-0 mt-16 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 z-50">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <button onClick={() => { toggleLanguage(Language.English); setOpenMenu(false); }} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                  {Language.English}
                </button>
              </li>
              <li>
                <button onClick={() => { toggleLanguage(Language.Greek); setOpenMenu(false); }}className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                  {Language.Greek}
                </button>
              </li>
            </ul>
          </div>
        )}
        </div>
        
        <div className='flex md:hidden'>
          <button
            type="button"
            onClick={() => setOpenMenu(!openMenu)}
            className="inline-flex items-center font-medium px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
          <img src={languageState === Language.Greek ? '/greece-flag.png' : '/american-flag.png'} className="w-5 h-5 rounded-full me-3" alt="Greek Flag"/>
          </button>          
          {openMenu && (
            <div className="absolute right-0 mt-16 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 z-50">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button onClick={() => toggleLanguage(Language.English)} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                    {Language.English}
                  </button>
                </li>

                <li>
                  <button onClick={() => toggleLanguage(Language.Greek)} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                    {Language.Greek}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
    </div>
  );
};