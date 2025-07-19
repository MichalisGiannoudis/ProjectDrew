import { useThemeStore } from "@/store/theme.store";
import { MainPageContent } from "@/types/content.interface";
import { useContent } from "@/hooks/useContent";
import { Language } from "@/types/language.interface";
import { useState } from "react";
import { ServiceCard } from "./serviceCard.component";

interface ServiceItem {
    id: number;
    label: string;
    body: string;
    image: string;
}

export const ServicesHorizontal = () => {
    const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

    const languageState = useThemeStore(state => state.language);
    const {  servicesLabel, serviceLabel1, serviceLabel2, serviceLabel3, serviceLabel4, serviceLabel5, serviceLabel6, serviceLabel7
            , serviceBody1, serviceBody2, serviceBody3, serviceBody4, serviceBody5, serviceBody6, serviceBody7
    } = useContent(languageState === Language.Greek ? 'mainPageGR' : 'mainPageEN') as MainPageContent;

    const services: ServiceItem[] = [
        { id: 1, label: serviceLabel1, body: serviceBody1, image: '/civil-icon.png' },
        { id: 2, label: serviceLabel2, body: serviceBody2, image: '/corporate-icon.png' },
        { id: 3, label: serviceLabel3, body: serviceBody3, image: '/policy-icon.png' },
        { id: 4, label: serviceLabel4, body: serviceBody4, image: '/contract-icon.png' },
        { id: 5, label: serviceLabel5, body: serviceBody5, image: '/office-icon.png' },
        { id: 6, label: serviceLabel6, body: serviceBody6, image: '/contract-icon.png' },
        { id: 7, label: serviceLabel7, body: serviceBody7, image: '/contract-icon.png' },
    ].filter(service => service.body);

    const handleServiceClick = (serviceId: number) => {
        setExpandedMobile(expandedMobile === serviceId ? null : serviceId);
    };

    return (
        <div className="w-full mx-auto relative">
            <div className="flex flex-col items-center mb-10 lg:mb-16">
                <div className="rounded-full bg-gradient-to-r from-slate-700 to-slate-900 px-16 py-4 shadow-xl">
                    <span className="text-white text-3xl font-bold cursor-default">{servicesLabel}</span>
                </div>
            </div>

            <div className="hidden lg:block">
                <div className="grid grid-cols-3 gap-15 w-[80%] mx-auto px-4">
                    {services.slice(0, 5).map((service) => (
                        <ServiceCard key={service.id} serviceImage={service.image} serviceLabel={service.label} serviceBody={service.body}/>
                    ))}
                    {services.length > 5 && (
                        <div className="relative">
                            <div className="bg-white flex flex-col rounded-lg shadow-lg p-8 pt-12 text-center hover:shadow-2xl transition-shadow duration-300 lg:h-85">
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                    <div className="w-20 h-20 bg-slate-200 rounded-full border border-slate-500 flex items-center justify-center p-3">
                                        <img src={services[5].image} className="w-full h-full p-2 object-contain"/>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-800 cursor-default mb-3">{services[5].label}</h3>
                                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                                            {services[5].body.split(',').map((option, idx) => (
                                                <div key={idx} className="inline-block max-w-full">
                                                    <div className="bg-slate-200 text-slate-800 text-sm font-medium px-3 py-2 rounded-3xl cursor-default break-words">
                                                        {option.trim()}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <hr className="border-t border-slate-300 w-3/4 mx-auto" />
                                    {services.length > 6 && (
                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-800 cursor-default mb-3">{services[6].label}</h3>
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                {services[6].body.split(',').map((option, idx) => (
                                                    <div key={idx} className="inline-block max-w-full">
                                                        <div className="bg-slate-200 text-slate-800 text-sm font-medium px-3 py-2 rounded-3xl cursor-default break-words">
                                                            {option.trim()}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="hidden md:block lg:hidden space-y-4">
                {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                        <div onClick={() => handleServiceClick(service.id)}
                            className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors duration-200">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                    <img src={service.image} className="w-8 h-8 object-contain filter brightness-0 invert p-1" alt={service.label} />
                                </div>
                                <span className="text-lg font-semibold text-slate-800">{service.label}</span>
                            </div>
                            <div className={`transform transition-transform duration-300 ${expandedMobile === service.id ? 'rotate-180' : ''}`}>
                                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedMobile === service.id ? 'max-h-120 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="px-6 pb-6 space-y-3">
                                {service.body.split(',').map((option, idx) => (
                                    <div key={idx} className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 text-sm font-medium px-4 py-3 rounded-3xl border border-slate-300">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 self-start mt-1.5">
                                                <div className="w-2 h-2 bg-slate-700 rounded-full mr-3"></div>
                                            </div>
                                            {option.trim()}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:hidden space-y-4">
                {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                        <div onClick={() => handleServiceClick(service.id)}
                            className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors duration-200">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                    <img src={service.image} className="w-8 h-8 object-contain filter brightness-0 invert p-1" alt={service.label} />
                                </div>
                                <span className="text-lg font-semibold text-slate-800">{service.label}</span>
                            </div>
                            <div className={`transform transition-transform duration-300 ${expandedMobile === service.id ? 'rotate-180' : ''}`}>
                                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedMobile === service.id ? 'max-h-120 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="px-6 pb-6 space-y-3">
                                {service.body.split(',').map((option, idx) => (
                                    <div key={idx} className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 text-sm font-medium px-4 py-3 rounded-3xl border border-slate-300">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 self-start mt-1.5">
                                                <div className="w-2 h-2 bg-slate-700 rounded-full mr-3"></div>
                                            </div>
                                            {option.trim()}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}
