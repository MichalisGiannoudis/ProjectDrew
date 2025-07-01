'use client';
import { useEffect, useState, useRef } from 'react'
import { LanguageMenu } from './languageMenu.component';
import { useContent } from '@/hooks/useContent';
import { useThemeStore } from '@/store/theme.store';
import { HeaderContent } from '@/types/content.interface';
import { Language } from '@/types/language.interface';

export default function Header() {

  const languageState = useThemeStore(state => state.language);
  const [ openMobileMenu, setOpenMobileMenu ] = useState<boolean>(false);
  const [ openLanguageMenu, setOpenLanguageMenu ] = useState<boolean>(false);
  const { bioOption, servicesOption, contactOption } = useContent(languageState === Language.Greek ? 'headerGR' : 'headerEN') as HeaderContent;
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const scrollTo = (value: string) => {
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setOpenMobileMenu(false);
      }
    };

    if (openMobileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMobileMenu]);

  useEffect(() => {
    if (openMobileMenu && openLanguageMenu) {
      setOpenLanguageMenu(false);
    }
  }, [openMobileMenu]);

  useEffect(() => {
    if (openLanguageMenu && openMobileMenu) {
      setOpenMobileMenu(false);
    }
  }, [openLanguageMenu]);

  return (
    <div className="grid grid-cols-[72%_13%_15%] md:grid-cols-[35%_25%_15%_25%] lg:grid-cols-[50%_20%_15%_15%] text-center bg-gray-900 w-full h-auto">
      <div>
        <img src="/logo-cropped.png" className="w-50 h-auto p-5"/>
      </div>
      <div className="hidden md:grid grid-cols-3 justify-items-center items-center gap-2">
        <div className="cursor-pointer group">
          <p onClick={() => scrollTo('bio-section')} className="text-white text-lg relative overflow-hidden">{bioOption}
            <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"/>
          </p>
        </div>
        <div className="cursor-pointer group">
          <p onClick={() => scrollTo('services-section')} className="text-white text-lg relative overflow-hidden">{servicesOption}
            <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"/>
          </p>
        </div>
        <div className="cursor-pointer group">
          <p onClick={() => scrollTo('contact-section')}className="text-white text-lg relative overflow-hidden">{contactOption}
            <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"/>
          </p>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-2 justify-items-center items-center gap-2">
        <img src="/phone-icon-2.png" className="w-7 h-7 justify-self-end animate-pulse"/>
        <p className="text-white text-base justify-self-start cursor-pointer">6912345678</p>
      </div>
      <div className="grid justify-items-center items-center">
        <LanguageMenu openMenu={openLanguageMenu} setOpenMenu={setOpenLanguageMenu}/>
      </div>
      <div className="mt-auto mb-auto flex justify-center md:hidden" ref={mobileMenuRef}>
        <img src={openMobileMenu ? "/menu-close.png" : "/menu-open.png"} className={`w-8 h-8 transition-transform duration-300 ${openMobileMenu ? 'rotate-180' : 'rotate-0'}`} onClick={() => setOpenMobileMenu(!openMobileMenu)}/>
      </div>
      {openMobileMenu &&
      <div className="absolute mt-22 mr-5 right-0 bg-gray-700 text-white w-48 p-4 rounded-md shadow-lg md:hidden z-20">
        <div>
          <a onClick={() => { scrollTo('bio-section'); setOpenMobileMenu(false); }} className="block px-4 py-2 hover:bg-gray-700">{bioOption}</a>
          <a onClick={() => { scrollTo('services-section'); setOpenMobileMenu(false); }} className="block px-4 py-2 hover:bg-gray-700">{servicesOption}</a>
          <a onClick={() => { scrollTo('contact-section'); setOpenMobileMenu(false); }} className="block px-4 py-2 hover:bg-gray-700">{contactOption}</a>
          <></>
        </div>
      </div>}
    </div>
  );
}
