'use client';
import { useState } from 'react'
import { LanguageMenu } from './languageMenu.component';
import { useContent } from '@/hooks/useContent';
import { useThemeStore } from '@/store/theme.store';
import { HeaderContent } from '@/types/content.interface';
import { Language } from '@/types/language.interface';

export default function Header() {

  const languageState = useThemeStore(state => state.language);
  const [ openMenu, setOpenMenu ] = useState<boolean>(false);
  const { bioOption, servicesOption, contactOption } = useContent(languageState === Language.Greek ? 'headerGR' : 'headerEN') as HeaderContent;

  const scrollTo = (value: string) => {
    const section = document.getElementById('bio-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


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
          <p className="text-white text-lg relative overflow-hidden">{contactOption}
            <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"/>
          </p>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-2 justify-items-center items-center gap-2">
        <img src="/phone-icon-2.png" className="w-7 h-7 justify-self-end animate-pulse"/>
        <p className="text-white text-base justify-self-start cursor-pointer">6912345678</p>
      </div>
      <div className="grid justify-items-center items-center">
        <LanguageMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      </div>
      <div className="mt-auto mb-auto flex justify-center md:hidden">
        <img src={openMenu ? "/menu-close.png" : "/menu-open.png"} className={`w-8 h-8 transition-transform duration-300 ${openMenu ? 'rotate-180' : 'rotate-0'}`} onClick={() => setOpenMenu(!openMenu)}/>
      </div>
      {openMenu && 
      <div className="absolute mt-22 mr-5 right-0 bg-gray-700 text-white w-48 p-4 rounded-md shadow-lg md:hidden">
        <div>
          <a href="/" className="block px-4 py-2 hover:bg-gray-700">{bioOption}</a>
          <a href="/" className="block px-4 py-2 hover:bg-gray-700">{servicesOption}</a>
          <a href="/" className="block px-4 py-2 hover:bg-gray-700">{contactOption}</a>
          <></>
        </div>
      </div>}
    </div>
  );
}
