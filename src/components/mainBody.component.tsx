'use client'

import { useContent } from "@/hooks/useContent";
import { useThemeStore } from "@/store/theme.store";
import { MainPageContent } from "@/types/content.interface";
import { Language } from "@/types/language.interface";

export default function MainBody() {  
  
  const languageState = useThemeStore(state => state.language);
  const { upperMotoLabel, lowerMotoLabel, nameLabel, progessionLabel} = useContent(languageState === Language.Greek ? 'mainPageGR' : 'mainPageEN') as MainPageContent;
  
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

      {/* Services Section */}
      <div className="bg-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <ul className="list-disc list-inside">
          <li>Corporate Law Consultations</li>
          <li>Civil Litigation & Dispute Resolution</li>
          <li>Contract Drafting & Review</li>
          <li>Legal Compliance & Advisory</li>
          <li>Estate Planning & Probate</li>
        </ul>
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
