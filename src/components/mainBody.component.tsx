'use client'

import { useContent } from "@/hooks/useContent";
import { useThemeStore } from "@/store/theme.store";
import { MainPageContent } from "@/types/content.interface";
import { Language } from "@/types/language.interface";
import { Devider } from "./devider.component";
import { TimeLine } from "./timeline.component";
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function MainBody() {  
  
  const languageState = useThemeStore(state => state.language);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {  nameLabel, progessionLabel, bioHeaderLabel, bioBodyLabel, servicesLabel
          , service1Label, service2Label, service3Label, service4Label, service1Body
          , service2Body, service3Body, service4Body, contactMeLabel, contactNameLabel
          , contactNamePlaceholder, contactEmailLabel, contactEmailPlaceholder 
          , contactMessageLabel, contactMessagePlaceholder
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
      <div id="contact-section" className="grid grid-cols-1 md:grid-cols-[60%_40%] justify-items-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        
        <div className="pt-10 pb-10 w-[80%] md:w-[60%]">
            <h2 className="text-2xl text-white font-semibold mb-6">{contactMeLabel}</h2>
            <form className="flex flex-col gap-4 bg-white/90 bg-opacity-70 p-6 rounded-lg shadow-lg"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const name = formData.get("name") as string;
                const email = formData.get("email") as string;
                const message = formData.get("message") as string;

                try {
                  const result = await emailjs.send(
                    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
                    {
                      from_name: name,
                      from_email: email,
                      message: message,
                      to_name: 'Andreas Drandakis',
                    },
                    process.env.NEXT_PUBLIC_EMAIL_KEY
                  );
                  
                  console.log('Email sent successfully:', result.text);
                  alert('Message sent successfully!');
                  form.reset();
                } catch (error) {
                  console.error('Failed to send email:', error);
                  alert('Failed to send message. Please try again.');
                } finally {
                  setIsSubmitting(false);
                }
              }}>

              <label className="text-gray-800 font-semibold">{contactNameLabel}
                <input type="text" name="name" required className="mt-1 font-medium block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 p-2" placeholder={contactNamePlaceholder}/>
              </label>
              <label className="text-gray-800 font-semibold">{contactEmailLabel}
                <input type="email" name="email" required className="mt-1 font-medium block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 p-2" placeholder={contactEmailPlaceholder}/>
              </label>
              <label className="text-gray-800 font-semibold">{contactMessageLabel}
                <textarea name="message" required rows={4} className="mt-1 font-medium block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 p-2" placeholder={contactMessagePlaceholder}/>
              </label>
              <button  type="submit" disabled={isSubmitting}
                className="mt-2 bg-gray-800 hover:bg-white/90 hover:text-gray-800 text-white/90 font-semibold py-2 px-4 rounded transition disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
        </div> 
        
        <div className="pt-10 pb-10 flex justify-center items-center">
          <div className="bg-white/90 bg-opacity-80 rounded-xl shadow-xl p-8 w-full max-w-xs md:max-w-sm text-slate-800">
            <div className="flex flex-col gap-3 text-base">
              <div className="flex items-center gap-2">
                <img src="/email-small-icon.png" className="w-5 h-5 text-slate-800"/>
                <a href="mailto:contact@example.com" className="hover:underline text-slate-800">contact@example.com</a>
              </div>
              <div className="flex items-center gap-2">
                <img src="/phone-icon-3.png" className="w-5 h-5 text-slate-800"/>
                <a href="tel:+1234567890" className="hover:underline text-slate-800">69 123 456 78</a>
              </div>
              <div>
                <div className="flex items-center w-full my-2">
                  <hr className="flex-grow border-t border-slate-800" />
                  <span className="mx-3 text-slate-800 font-base whitespace-nowrap cursor-default">or</span>
                  <hr className="flex-grow border-t border-slate-800" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src="/office-icon.png" className="w-5 h-5 text-slate-800"/>
                <span className="cursor-pointer hover:underline">Kountouriotou 23, <br/>Rethymno, Greece</span>
              </div>
              <div className="flex items-start gap-2">
                <img src="/time-icon.png" className="w-5 h-5 text-slate-800"/>
                <div>
                <div className="cursor-default">Office Hours:</div>
                <ul className="list-inside text-sm">
                  <li className="cursor-default">Mon–Fri: 9:00 AM – 5:00 PM</li>
                  <li className="cursor-default">Sat–Sun: Closed</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
