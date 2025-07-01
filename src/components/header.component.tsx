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

    console.log(`Scrolling to section: ${value}`);

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

  const animateFromAbove = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const span = e.currentTarget.querySelector('span');
    if (span) {
      span.classList.remove('from-center-vert');
      span.classList.add('from-above-vert');
      setTimeout(() => {
        span.classList.remove('from-above-vert');
        span.classList.add('from-center-vert');
      }, 1000);
    }
  }

  return (
    <div className="relative w-full flex justify-center z-30" style={{ pointerEvents: 'none' }}>
      <div
      className="grid grid-cols-[72%_13%_15%] md:grid-cols-[20%_50%_20%_10%] lg:grid-cols-[34%_30%_21%_15%] text-center pointer-events-auto bg-gray-900/60 md:bg-gray-900/40 w-[95%] h-auto rounded-2xl md:rounded-4xl shadow-lg backdrop-blur-md drop-shadow-xl mt-5 absolute">
      <div className="relative flex items-center justify-start ml-3 md:ml-2">
        <div className="absolute bg-slate-900/30 md:rounded-3xl md:w-34 lg:w-48 md:h-16 z-10 "/>
        <img src="/logo-cropped.png" className="relative w-30 h-16 md:w-50 md:h-20 z-20 object-contain"/>
      </div>
      <div className="hidden md:grid grid-cols-3 justify-items-center items-center gap-2">
        <div className="cursor-pointer group">
        <p onMouseEnter={animateFromAbove} onClick={() => scrollTo('bio-section')} className="text-white text-lg relative overflow-hidden flex justify-center text-center items-center cursor-pointer">
          <span className="inline-block from-center-vert transition-transform duration-1000 ease-in-out" style={{ willChange: 'transform' }}>
            {bioOption}
          </span>
        </p>
        </div>
        <div className="cursor-pointer group">
        <p onMouseEnter={animateFromAbove} onClick={() => scrollTo('services-section')} className="text-white text-lg relative overflow-hidden flex justify-center items-center cursor-pointer">
          <span className="inline-block from-center-vert transition-transform duration-1000 ease-in-out" style={{ willChange: 'transform' }}>
            {servicesOption}
          </span>
        </p>
        </div>
        <div className="cursor-pointer group">
        <p onMouseEnter={animateFromAbove} onClick={() => scrollTo('contact-section')} className="text-white text-lg relative overflow-hidden flex justify-center items-center cursor-pointer">
          <span className="inline-block from-center-vert transition-transform duration-1000 ease-in-out" style={{ willChange: 'transform' }}>
            {contactOption}
          </span>
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
      <div className="mt-auto mb-auto flex justify-center md:hidden">
        <img src={openMobileMenu ? "/menu-close.png" : "/menu-open.png"} className={`w-8 h-8 transition-transform duration-300 ${openMobileMenu ? 'rotate-180' : 'rotate-0'}`} onClick={() => setOpenMobileMenu(!openMobileMenu)}/>
      </div>
      {openMobileMenu &&
      <div className="absolute mt-18 right-0 bg-gray-700/90 text-white w-48 p-4 rounded-xl shadow-lg md:hidden z-20" ref={mobileMenuRef}>
        <div>
          <button onClick={() => { scrollTo('bio-section'); setOpenMobileMenu(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-700 cursor-pointer">{bioOption}</button>
          <button onClick={() => { scrollTo('services-section'); setOpenMobileMenu(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-700 cursor-pointer">{servicesOption}</button>
          <button onClick={() => { scrollTo('contact-section'); setOpenMobileMenu(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-700 cursor-pointer">{contactOption}</button>
        </div>
      </div>}
      </div>
    </div>
  );
}
