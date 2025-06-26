'use client'

import { useContent } from "@/hooks/useContent";
import { useThemeStore } from "@/store/theme.store";
import { MainPageContent } from "@/types/content.interface";
import { Language } from "@/types/language.interface";
import { Devider } from "./devider.component";
import { TimeLine } from "./timeline.component";

export default function MainBody() {  
  
  const languageState = useThemeStore(state => state.language);
  const {  nameLabel, progessionLabel, bioHeaderLabel, bioBodyLabel
          , servicesLabel, service1Label, service2Label, service3Label, service4Label,
          service1Body, service2Body, service3Body, service4Body
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
              <hr className="w-1/2 md:w-1/6 border-t border-white mb-4" />
              <p className="text-xl text-center">{nameLabel}</p>
              <p className="text-lg text-center">{progessionLabel}</p>
              <hr className="w-1/2 md:w-1/6 border-t border-white mt-4" />
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
          <TimeLine />
        </div>
      </div>      
      
      {/* Services Section */}
      <div id="services-section" className="relative py-10 px-8 bg-gray-100">
        <div className="w-[95%] md:w-[90%] mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-10 cursor-default">{servicesLabel}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
              <img src="/corporate-icon.png" className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-6 p-3"/>
              <h3 className="text-xl h-14 font-semibold text-slate-800 mb-4 cursor-default">{service1Label}</h3>
              <p className="text-gray-600 mb-6 cursor-default">{service1Body}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
              <img src="/civil-icon.png" className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-6 p-3"/>
              <h3 className="text-xl h-14 font-semibold text-slate-800 mb-4 cursor-default">{service2Label}</h3>
              <p className="text-gray-600 mb-6 cursor-default">{service2Body}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
              <img src="/policy-icon.png" className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-6 p-3"/>
              <h3 className="text-xl h-14 font-semibold text-slate-800 mb-4 cursor-default">{service3Label}</h3>
              <p className="text-gray-600 mb-6 cursor-default">{service3Body}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
              <img src="/contract-icon.png" className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-6 p-3"/>
              <h3 className="text-xl h-14 font-semibold text-slate-800 mb-4 cursor-default">{service4Label}</h3>
              <p className="text-gray-600 mb-6 cursor-default">{service4Body}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
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
