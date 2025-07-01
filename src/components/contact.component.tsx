import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useContent } from "@/hooks/useContent";
import { useThemeStore } from "@/store/theme.store";
import { Language } from "@/types/language.interface";
import { FooterContent, MainPageContent } from "@/types/content.interface";
import Image from "next/image";

export const Contact = () => {
    
    const [isSubmitting, setIsSubmitting] = useState(false);
      const languageState = useThemeStore(state => state.language);
      const {   contactMeLabel, contactNameLabel, contactNamePlaceholder, contactEmailLabel, contactEmailPlaceholder, contactLabel,
                contactMessageLabel, contactMessagePlaceholder, contactSurnNameLabel, contactSurnNamePlaceholder, contactSendLabel,
                contactSendingLabel
            } = useContent(languageState === Language.Greek ? 'mainPageGR' : 'mainPageEN') as MainPageContent;
    
      const { officeAddress, daysLabel, hoursLabel } = useContent(languageState === Language.Greek ? 'footerGR' : 'footerEN') as FooterContent;

    const onEmailSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const name = `${firstName} ${lastName}`;

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
  }
    
    return (
    <div id="contact-section" className="bg-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-4xl font-bold mb-6 text-gray-800">{contactLabel}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Contact Information Card */}
            <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl p-8 text-slate-800 overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-1/2 right-0 w-32 h-32 bg-slate-300 rounded-full transform translate-x-8"></div>
              <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-slate-500 rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-slate-400 rounded-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 text-white">{contactMeLabel}</h2>
                
                <div className="space-y-6 -ml-1.5">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Image src="/phone-icon.png" alt="phone-icon" width={32} height={32} className="w-8 h-8 filter brightness-0 invert"/>
                    </div>
                    <span className="text-white text-lg">+0123 4567 8910</span>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Image src="/email-icon.png" alt="email-icon" width={32} height={32} className="w-8 h-8 filter brightness-0 invert"/>
                    </div>
                    <span className="text-white text-lg">hello@flowbase.com</span>
                  </div>
                  
                  {/* Address */}
                  <div className="grid grid-cols-1 items-center ml-1.5 md:ml-0 gap-4">
                    <div className="flex items-center gap-5 md:gap-4">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <Image src="/location-icon.png" alt="location-icon" width={32} height={32} className="w-8 h-8 filter brightness-0 invert"/>
                        </div>
                        <span className="text-white text-lg">{officeAddress}</span>
                    </div>

                   {/* OFfice Hours */}
                    <div className="flex items-center ml-[18%] md:ml-[10%]">
                        <span className="text-white text-lg">
                        {daysLabel}<br/>
                        {hoursLabel}
                        </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <form onSubmit={onEmailSend} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-bold text-gray-700 mb-2">{contactNameLabel}</label>
                    <input 
                      type="text" 
                      name="firstName" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition"
                      placeholder={contactNamePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-base font-bold text-gray-700 mb-2">{contactSurnNameLabel}</label>
                    <input 
                      type="text" 
                      name="lastName" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition"
                      placeholder={contactSurnNamePlaceholder}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-base font-bold text-gray-700 mb-2">{contactEmailLabel}</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition"
                      placeholder={contactEmailPlaceholder}
                    />
                  </div>

                </div>
                
                <div>
                  <label className="block text-base font-bold text-gray-700 mb-2">{contactMessageLabel}</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900  focus:border-transparent outline-none transition resize-none"
                    placeholder={contactMessagePlaceholder}
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? contactSendingLabel : contactSendLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}