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

export const Services = () => {
    const [activeService, setActiveService] = useState<number | null>(null);
    const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

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
            if (activeService === serviceId) {
                setActiveService(null);
            } else {
                setIsAnimating(true);
                setTimeout(() => {
                    setActiveService(serviceId);
                    setIsAnimating(false);
                }, 300);
            }
        }
    };

    return (
        <div className="w-full mx-auto relative">
            <div className="flex flex-col items-center mb-20">
                <div className="rounded-full bg-gradient-to-r from-slate-700 to-slate-900 px-16 py-4 shadow-xl">
                    <span className="text-white text-3xl font-bold cursor-default">{servicesLabel}</span>
                </div>
            </div>

            <div className="hidden md:flex justify-center items-center mb-12">
                <div className="relative w-[90%] h-[65svh]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* <div className={`w-220 h-180 absolute bg-slate-800/80 rounded-full border border-slate-300 p-8 overflow-hidden transition-all duration-300`}></div> */}
                        <div className={`absolute bg-white rounded-full border border-slate-300 p-8 overflow-hidden transition-all duration-300`}
                            style={{
                                zIndex: 5,
                                width: activeService ? '350px' : '300px',
                                height: activeService ? '350px' : '300px',
                                left: activeService ? 'calc(50% - 175px)' : 'calc(50% - 150px)',
                                top: activeService ? 'calc(50% - 175px)' : 'calc(50% - 150px)'
                            }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-50 rounded-full"></div>
                            {activeService ? (
                                (() => {
                                    const service = services.find(s => s.id === activeService);
                                    if (!service) return null;
                                    
                                    return (
                                        <div className="h-full flex flex-col relative z-10 mt-8">
                                            <div className="flex-1 overflow-hidden">
                                                <div className="grid grid-cols-1 gap-2 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                                                    {service.body.split(',').map((option, idx) => (
                                                        <div key={idx} 
                                                            className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 text-sm font-medium px-8 py-2 rounded-full border border-slate-300 transition-all duration-300 hover:shadow-md hover:scale-105"
                                                            style={{ animationDelay: `${idx * 100}ms` }}>
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
                                        </div>
                                    );
                                })()
                            ) : (
                                <div className="h-full flex items-center justify-center relative z-10">
                                    <div className="text-center">
                                        <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                            {servicesDetailsLabel}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Service Bubbles */}
                        <div className="absolute inset-0" style={{ zIndex: 10 }}>
                            {services.map((service, index) => {
                                const isActive = activeService === service.id;
                                const angle = (index * 2 * Math.PI) / services.length - Math.PI / 2;
                                const activeIndex = services.findIndex(s => s.id === activeService);
                                const rotationOffset = activeService ? -(activeIndex * 2 * Math.PI) / services.length : 0;
                                const finalAngle = angle + rotationOffset;
                                const baseRadius = 250;
                                const yPosition = Math.sin(finalAngle);
                                const distanceMultiplier = activeService && !isActive ? 80 * (1 - Math.abs(yPosition) * 0.4): 0;
                                const radius = baseRadius + distanceMultiplier;
                                const x = Math.cos(finalAngle) * radius;
                                const y = Math.sin(finalAngle) * radius;
                                
                                return (
                                    <div
                                        key={service.id}
                                        onClick={() => handleServiceClick(service.id)}
                                        className="absolute cursor-pointer"
                                        style={{
                                            left: `calc(50% + ${x}px - 72px)`,
                                            top: `calc(50% + ${y}px - 72px)`,
                                            transform: `scale(${isActive ? 1.2 : 1})`,
                                            zIndex: isActive ? 20 : 10,
                                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                    >
                                        <div 
                                            className={`
                                                w-36 h-36 rounded-full flex flex-col items-center justify-center
                                                transition-all duration-500 ease-in-out
                                                ${isActive 
                                                    ? 'bg-gradient-to-br from-slate-900 to-slate-600 shadow-2xl border-4 border-white' 
                                                    : 'bg-white hover:from-slate-200/80 hover:to-slate-300/80 shadow-lg hover:shadow-xl border-1 border-slate-500'
                                                }
                                                ${!isActive && activeService ? 'opacity-50' : 'opacity-100'}
                                                hover:scale-110 group`}
                                        >
                                            <div className="flex flex-col items-center space-y-2">
                                                <img src={service.image} className={`w-10 h-10 object-contain transition-all duration-300 ${isActive ? 'filter brightness-0 invert' : ''}`}/>
                                                <span className={`text-sm font-bold text-center leading-tight transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-700'}`}>
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
        </div>
    )
}