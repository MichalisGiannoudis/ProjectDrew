'use client'

import { useContent } from "@/hooks/useContent";
import { useThemeStore } from "@/store/theme.store";
import { MainPageContent } from "@/types/content.interface";
import { Language } from "@/types/language.interface";
import { Devider } from "./devider.component";
import { TimeLine } from "./timeline.component";
import { ServiceCard } from "./serviceCard.component";
import { Contact } from "./contact.component";

export default function MainBody() {  
  
  const languageState = useThemeStore(state => state.language);
  const {  nameLabel, progessionLabel, bioHeaderLabel, bioBodyLabel, servicesLabel
          , serviceLabel1, serviceLabel2, serviceLabel3, serviceLabel4, serviceLabel5, serviceLabel6, serviceLabel7
          , serviceBody1, serviceBody2, serviceBody3, serviceBody4, serviceBody5, serviceBody6, serviceBody7
        } = useContent(languageState === Language.Greek ? 'mainPageGR' : 'mainPageEN') as MainPageContent;
  
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
      
      {/* Bio Section */}
      <div id="bio-section" className="relative py-16 px-8 gap-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>
        <div className="relative z-10 grid grid-cols-1 items-center justify-center gap-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="text-left max-w-2xl">
              <p className="text-4xl font-bold mb-4 text-white drop-shadow-lg">{bioHeaderLabel}</p>
              <div className="mb-6">
                <p className="text-gray-200 leading-relaxed text-lg">{bioBodyLabel}</p>
              </div>
            </div>
          </div>
          <Devider />
          <TimeLine />
        </div>
      </div>      
      
      {/* Services Section */}
      <div id="services-section" className="relative py-10 px-8 bg-gray-100">
        <div className="w-[95%] md:w-[95%] mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="rounded-full bg-slate-800 px-12 py-3 shadow-lg">
              <span className="text-white text-2xl font-semibold cursor-default">{servicesLabel}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:gap-8">
            {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
              <ServiceCard key={ idx }
              serviceImage = { idx ===0 ? '/corporate-icon.png' : idx === 1 ? '/civil-icon.png' : idx === 2 ? '/policy-icon.png' : '/contract-icon.png' }
              serviceLabel = { idx === 0 ? serviceLabel1 : idx === 1 ? serviceLabel2 : idx === 2 ? serviceLabel3 : idx === 3 ? serviceLabel4 : idx === 4 ? serviceLabel5 : idx === 5 ? serviceLabel6 : serviceLabel7 }
              serviceBody = { idx === 0 ? serviceBody1 : idx === 1 ? serviceBody2 : idx === 2 ? serviceBody3 :  idx === 3 ? serviceBody4 : idx === 4 ? serviceBody5 : idx === 5 ? serviceBody6 : serviceBody7 }
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center bg-gray-100 pt-6">
        <div className="w-2/3 h-1.5 bg-gradient-to-r from-gray-100 via-slate-900 to-gray-100 rounded-full " />
      </div>
      <Contact />

    </div>
  );
}
