'use client'

import { useEffect } from "react";
import { useContent } from "@/hooks/useContent";
import { useThemeStore } from "@/store/theme.store";
import { MainPageContent } from "@/types/content.interface";
import { Language } from "@/types/language.interface";
import { Devider } from "./devider.component";
import { TimeLine } from "./timeline.component";
import { Contact } from "./contact.component";
import { ServicesHorizontal } from "./servicesHorizontal.component";

export default function MainBody() {  
  
  const languageState = useThemeStore(state => state.language);
  const {  nameLabel, progessionLabel, bioHeaderLabel, bioBodyLabel} = useContent(languageState === Language.Greek ? 'mainPageGR' : 'mainPageEN') as MainPageContent;
  
  useEffect(() => {
    const handleScroll = () => {  
      if ((window as any).isNavigating) {
        return;
      }
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const aboutSection = document.getElementById('about-section');
      const servicesSection = document.getElementById('services-section');
      const contactSection = document.getElementById('contact-section');
      
      if (scrollY < 200) {
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname);
        }
      } else if (aboutSection && servicesSection && contactSection) {
        const aboutTop = aboutSection.offsetTop;
        const servicesTop = servicesSection.offsetTop;
        const contactTop = contactSection.offsetTop;
        
        const currentHash = window.location.hash.substring(1);
        
        if (scrollY >= contactTop - windowHeight / 2) {
          if (currentHash !== 'contact') {
            window.history.replaceState(null, '', '#contact');
          }
        } else if (scrollY >= servicesTop - windowHeight / 2) {
          if (currentHash !== 'services') {
            window.history.replaceState(null, '', '#services');
          }
        } else if (scrollY >= aboutTop - windowHeight / 2) {
          if (currentHash !== 'about') {
            window.history.replaceState(null, '', '#about');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-rows-1 bg-black relative z-0">
        <div className="relative overflow-hidden h-[90vh] md:h-[70vh]">
          <img src="/home-background.jpg" className="w-screen h-full object-cover blur-xs"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full text-white">
            <hr className="w-1/2 lg:w-1/5 border-t border-white mb-4" />
            <p className="text-xl md:text-2xl text-center">{nameLabel}</p>
            <p className="text-lg md:text-xl text-center">{progessionLabel}</p>
            <hr className="w-1/2 lg:w-1/5 border-t border-white mt-4" />
          </div>
        </div>
      </div>
      <div id="about-section" className="relative py-16 px-8 gap-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>
        <div className="relative z-10 grid grid-cols-1 items-center justify-center gap-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="text-left max-w-2xl">
              <p className="text-4xl font-bold mb-4 text-white drop-shadow-lg cursor-default">{bioHeaderLabel}</p>
              <div className="mb-6">
                <p className="text-gray-200 leading-relaxed text-lg cursor-default">{bioBodyLabel}</p>
              </div>
            </div>
          </div>
          <Devider />
          <TimeLine />
        </div>
      </div>      
      
      <div id="services-section" className="relative py-10 px-8 bg-gray-100">
        <ServicesHorizontal />
      </div>
      
      <div className="w-full flex justify-center bg-gray-100 pt-6">
        <div className="w-2/3 h-1.5 bg-gradient-to-r from-gray-100 via-slate-900 to-gray-100 rounded-full " />
      </div>
      <Contact />

    </div>
  );
}
