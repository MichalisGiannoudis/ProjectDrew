'use client'

import { useContent } from "@/hooks/useContent";
import { useThemeStore } from "@/store/theme.store";
import { MainPageContent } from "@/types/content.interface";
import { Language } from "@/types/language.interface";
import { Devider } from "./devider.component";

export default function MainBody() {  
  
  const languageState = useThemeStore(state => state.language);
  const {   upperMotoLabel, lowerMotoLabel, nameLabel, progessionLabel, bioHeaderLabel, bioBodyLabel
          , exp1Label, exp2Label, exp3Label, exp4Label, exp5Label
        } = useContent(languageState === Language.Greek ? 'mainPageGR' : 'mainPageEN') as MainPageContent;
  
  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-rows-1 bg-black relative z-0">
        <div className="relative overflow-hidden h-[50vh]">
          <img
            src="/home-background.jpg"
            className="w-screen h-full object-cover blur-xs"
          />
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full text-white">
              <hr className="w-1/4 border-t border-white mb-4" />
              {languageState === Language.English && <p className="text-5xl font-semibold tracking-wide mb-2">{upperMotoLabel}</p>}
              {languageState === Language.English && <p className="text-xl font-semibold mb-4">{lowerMotoLabel}</p>}
              <p className="text-xl text-center">{nameLabel}</p>
              <p className="text-lg text-center">{progessionLabel}</p>
              <hr className="w-1/4 border-t border-white mt-4" />
            </div>
        </div>
      </div>      
      
      {/* Bio & Expertise Section */}
      <div id="bio-section" className="relative py-16 px-8 gap-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>
        <div className="relative z-10 grid grid-cols-1 items-center justify-center gap-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="w-60 h-60 rounded-full overflow-hidden flex-shrink-0  shadow-2xl">
              <img src="/profile.jpg" className="w-full h-full object-cover"/>
            </div>
            <div className="text-left max-w-2xl">
              <p className="text-6xl font-bold mb-4 text-white drop-shadow-lg">{bioHeaderLabel}</p>
              <div className="mb-6">
                <p className="text-gray-200 leading-relaxed text-lg">{bioBodyLabel}</p>
              </div>
            </div>
          </div>
          <Devider />
          <div className="w-full flex flex-col items-center">
            <div className="grid gap-6 grid-cols-2 md:grid-cols-5 overflow-x-auto py-2">
              {[exp1Label, exp2Label, exp3Label, exp4Label, exp5Label].map((expertise, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[120px]">
                <div className="w-32 h-32 rounded-full border-2 border-gray-200 flex items-center justify-center text-center text-white text-sm font-medium relative overflow-hidden bg-gray-600/80 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-base text-center leading-tight px-2">{expertise}</span>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-400">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Email: <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+123 456 7890</a></p>
        <p>Address: Kountouriotou 23, Rethymno, Greece</p>
        <p>Office Hours:</p>
        <ul className="list-inside">
          <li>Mon–Fri: 9:00 AM – 5:00 PM</li>
          <li>Sat–Sun: Closed</li>
        </ul>
      </div>

    </div>
  );
}
