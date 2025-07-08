import { useThemeStore } from "@/store/theme.store";
import { MainPageContent } from "@/types/content.interface";
import { useContent } from "@/hooks/useContent";
import { Language } from "@/types/language.interface";
import { useState } from "react";

interface ServiceItem {
    id: number;
    label: string;
    body: string;
    image: string;
}

export const ServicesHorizontal = () => {
    const [activeService, setActiveService] = useState<number | null>(null);
    const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

    const languageState = useThemeStore(state => state.language);
    const {  servicesLabel, serviceLabel1, serviceLabel2, serviceLabel3, serviceLabel4, serviceLabel5, serviceLabel6, serviceLabel7
            , serviceBody1, serviceBody2, serviceBody3, serviceBody4, serviceBody5, serviceBody6, serviceBody7, servicesDetailsLabel
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
        if (window.innerWidth < 768) {
            setExpandedMobile(expandedMobile === serviceId ? null : serviceId);
        } else {
            setActiveService(activeService === serviceId ? null : serviceId);
        }
    };

    return (
        <div className="w-full mx-auto relative">
            <div className="flex flex-col items-center mb-16">
                <div className="rounded-full bg-gradient-to-r from-slate-700 to-slate-900 px-16 py-4 shadow-xl">
                    <span className="text-white text-3xl font-bold cursor-default">{servicesLabel}</span>
                </div>
            </div>

            <div className="hidden md:block">
                {/* Horizontal Service Bubbles */}
                <div className="relative flex justify-center items-center px-4">
                    <div className="w-[63%] h-[190px] absolute bottom-4 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-900 rounded-full  overflow-hidden transition-all duration-300 z-0"></div>
                    <div className="flexjustify-center items-center gap-8 relative z-10 w-full">
                        <div className="flex justify-center items-center gap-8 mb-8 px-4">
                            {services.map((service, index) => {
                                const isActive = activeService === service.id;
                                return (
                                    <div
                                        key={service.id}
                                        onClick={() => handleServiceClick(service.id)}
                                        className="cursor-pointer"
                                        style={{
                                            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                    >
                                        <div 
                                            className={`
                                                w-40 h-40 rounded-full flex flex-col items-center justify-center
                                                transition-all duration-500 ease-in-out
                                                ${isActive 
                                                    ? 'bg-gradient-to-br from-slate-500 to-slate-800 shadow-2xl border-4 border-white scale-110' 
                                                    : 'bg-white hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-200 shadow-lg hover:shadow-xl border border-slate-300'
                                                }
                                                hover:scale-105 group`}>
                                            <div className="flex flex-col items-center space-y-2">
                                                <img src={service.image} className={`w-8 h-8 object-contain transition-all duration-300 ${isActive ? 'filter brightness-0 invert' : ''}`}/>
                                                <span className={`text-default font-semibold text-center leading-tight transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-700'}`}>
                                                    {service.label}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                
                {/* Expandable Details Container */}
                <div className={`w-[85%] justify-self-center overflow-hidden transition-all duration-700 ease-in-out ${activeService ? 'max-h-96 opacity-100 mt-10' : 'max-h-0 opacity-0 mb-0'}`}>
                    {activeService && (
                        <div className="bg-white rounded-2xl  border border-slate-200 p-8 mx-4 lg:mx-16">
                            <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6">
                                {(() => {
                                    const service = services.find(s => s.id === activeService);
                                    if (!service) return null;
                                    
                                    return (
                                        <div className="space-y-4">
                                            {/* Service Title */}
                                            <div className="flex items-center justify-center mb-12">
                                                {/* <img src={service.image} className="w-12 h-12 object-contain mr-4" alt={service.label} /> */}
                                                <h3 className="text-2xl font-bold text-slate-800">{service.label}</h3>
                                            </div>
                                            
                                            {/* Service Details Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {service.body.split(',').map((option, idx) => (
                                                    <div 
                                                        key={idx} 
                                                        className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 text-sm font-medium px-6 py-3 rounded-full border border-slate-300 transition-all duration-300 hover:shadow-md hover:scale-105 transform"
                                                        style={{ 
                                                            animationDelay: `${idx * 100}ms`,
                                                            opacity: 0,
                                                            animation: `fadeInUp 0.6s ease-out ${idx * 100}ms forwards`
                                                        }}
                                                    >
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 self-center">
                                                                <div className="w-2 h-2 bg-slate-700 rounded-full mr-3"></div>
                                                            </div>
                                                            <span className="leading-relaxed">{option.trim()}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-4">
                {services.map((service, index) => (
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

                        {/* Expandable Content */}
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
