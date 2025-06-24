'use client';
import { useState } from 'react';
import { Devider } from './devider.component';

export const LanguageMenu = () => {

  const enum Language {
    Greek = 'Ελληνικά (GR)',
    English = 'English (US)',
  }

  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(Language.Greek);

  const  toggleLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setOpen(false);
  }

  return (
    <div className="relative flex items-center justify-self-center">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center font-medium px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <img src={selectedLanguage === Language.Greek ? '/greece-flag.png' : '/american-flag.png'} className="w-5 h-5 rounded-full me-3" alt="Greek Flag"/>
        {selectedLanguage}
      </button>

      {open && (
        <div className="absolute right-0 mt-35 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <button onClick={() => toggleLanguage(Language.Greek)} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                Ελληνικά (GR)
              </button>
            </li>
            <li>
              <button onClick={() => toggleLanguage(Language.English)} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                English (US)
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};