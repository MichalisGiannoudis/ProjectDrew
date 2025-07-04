'use client'

import { Devider } from "./devider.component";
import { useContent } from "@/hooks/useContent";
import { Language } from "@/types/language.interface";
import { useThemeStore } from "@/store/theme.store";
import { FooterContent } from "@/types/content.interface";

export default function Footer() {

  const languageState = useThemeStore(state => state.language);
  const { nameLabel, progessionLabel, contactLabel, officeLabel, officeAddress, daysLabel, hoursLabel } = useContent(languageState === Language.Greek ? 'footerGR' : 'footerEN') as FooterContent;

  return (
    <footer className="text-center bg-gray-900 text-white w-full h-auto md:h-55">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 md:h-55">
        {/* Social Media & Logo */}
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src="/logo-cropped.png" className="w-100 h-auto mb-5 p-4 md:p-0 lg:p-0"/>
            <div className="hidden md:block lg:block mb-3 mt-3">
              <Devider />
            </div>
            <p> {nameLabel} </p>
            <p> {progessionLabel} </p>
          </div>
        </div>
        <div className="block md:hidden lg:hidden mb-3 mt-3">
          <Devider />
        </div>
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-center md:mt-3 justify-center md:justify-start">
          <p className="text-2xl mb-3"> {contactLabel} </p>
          <div className="flex flex-col items-center md:items-start p-1">
            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-2 md:mb-2">
              <img className="w-8 h-8" src="/email-icon.png"/>
              <p className="flex items-center justify-center md:justify-start h-8">contact@example.com </p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-2">
              <img className="w-8 h-8" src="/phone-icon.png"/>
              <p className="flex items-center justify-center md:justify-start h-8">69 123 456 78</p>
            </div>
          </div>
        </div>
        <div className="block md:hidden mb-3 mt-3">
          <Devider />
        </div>
        {/* Address & Hours */}
        <div className="flex flex-col items-center md:items-center md:mt-3 justify-center md:justify-start">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl mb-3"> {officeLabel} </p>
            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-2 md:mb-1">
              <img className="w-8 h-8" src="location-icon.png"/>
              <p className="flex items-center justify-center md:h-9"> {officeAddress} </p>
            </div>
            <div className="grid grid-cols-1 items-start mb-1">
              <p className="font-semibold"> {daysLabel} </p>
              <p className="text-center md:text-start"> {hoursLabel} </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden mt-3 mb-3">
          <Devider />
      </div>
      <div className="flex flex-col justify-center items-center h-15 md:h-10 md:bg-gray-800">
        <p>Copyright &copy; {new Date().getFullYear()} Drandakis Law | Created by Michalis Giannoudis</p>
      </div>
    </footer>
  );
}
