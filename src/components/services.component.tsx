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
        if (window.innerWidth < 768) {
            setExpandedMobile(expandedMobile === serviceId ? null : serviceId);
        } else {
            setActiveService(activeService === serviceId ? null : serviceId);
        }
    };

    const handleCloseSidebar = () => {
        setActiveService(null);
    };

    return (
        <div className="w-[95%] md:w-[95%] mx-auto relative">
            <div className="flex flex-col items-center mb-16">
                <div className="rounded-full bg-slate-800 px-12 py-3 shadow-lg">
                    <span className="text-white text-2xl font-semibold cursor-default">{servicesLabel}</span>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex md:justify-center lg:justify-center">
                <div className="relative w-[80%] h-auto">
                    {/* Horizontal Bubbles Container */}
                    <div className="relative flex items-center justify-center py-4">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-40 z-0"></div>
                        
                        {/* Service Bubbles */}
                        <div className="flex items-center space-x-20 relative z-10 overflow-visible" style={{ minHeight: '160px' }}>
                            {services.map((service, index) => {
                                const isActive = activeService === service.id;
                                
                                return (
                                    <div key={service.id} onClick={() => handleServiceClick(service.id)}
                                        className="transition-all duration-700 ease-in-out cursor-pointer flex-shrink-0 flex items-center justify-center"
                                        style={{
                                            width: isActive ? '160px' : '150px',
                                            height: isActive ? '160px' : '150px',
                                            opacity: activeService && !isActive ? 0.6 : 1,
                                            position: 'relative'
                                        }}>
                                        <div className={`
                                            w-full h-full rounded-full shadow-lg transition-all duration-500
                                            ${isActive 
                                                ? 'bg-white shadow-2xl border-2 border-slate-400' 
                                                : 'bg-white hover:bg-slate-50 shadow-md hover:shadow-xl border-2 border-slate-200'
                                            }
                                            flex items-center justify-center
                                        `}>
                                            <div className={`
                                                ${isActive ? 'w-24 h-24' : 'w-20 h-20'} 
                                                rounded-full flex flex-col items-center justify-center transition-all duration-300
                                                ${isActive ? 'bg-white' : 'bg-slate-100'}
                                            `}>
                                                <img src={service.image} className={`${isActive ? 'w-12 h-12' : 'w-10 h-10'} object-contain mb-1 transition-all duration-300`}/>
                                                <span className={`
                                                    ${isActive ? 'text-base' : 'text-sm'} font-semibold text-center leading-tight transition-all duration-300
                                                    ${isActive ? 'text-slate-800' : 'text-slate-600'}
                                                `}>
                                                    {service.label}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Expanded Content Container */}
                    <div className={`
                        relative overflow-hidden transition-all duration-700 ease-in-out
                        ${activeService ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'}
                    `}>
                        {activeService && (
                            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-8 mx-8 animate-fadeIn">
                                {/* Close Button */}
                                <button onClick={handleCloseSidebar} className="absolute top-4 right-4 w-8 h-8 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors duration-200 z-20">
                                    <span className="text-slate-600 text-lg">×</span>
                                </button>

                                {/* Service Details */}
                                {(() => {
                                    const service = services.find(s => s.id === activeService);
                                    if (!service) return null;
                                    
                                    return (
                                        <div>
                                            <div className="flex items-center mb-8">
                                                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mr-6">
                                                    <img src={service.image} className="w-10 h-10 object-contain" alt={service.label} />
                                                </div>
                                                <div>
                                                    <h3 className="text-3xl font-bold text-slate-800 mb-2">{service.label}</h3>
                                                    <p className="text-slate-600">Specialized legal services</p>
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {service.body.split(',').map((option, idx) => (
                                                    <div 
                                                        key={idx} 
                                                        className="bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 text-sm font-medium px-4 py-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow duration-200"
                                                        style={{ animationDelay: `${idx * 100}ms` }}
                                                    >
                                                        <div className="flex items-center">
                                                            <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                                                            {option.trim()}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-4">
                {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-lg shadow-lg border border-slate-200">
                        {/* Service Header */}
                        <div
                            onClick={() => handleServiceClick(service.id)}
                            className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors duration-200"
                        >
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4">
                                    <img src={service.image} className="w-8 h-8 object-contain" alt={service.label} />
                                </div>
                                <span className="text-lg font-semibold text-slate-800">{service.label}</span>
                            </div>
                            <div className={`transform transition-transform duration-300 ${expandedMobile === service.id ? 'rotate-180' : ''}`}>
                                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Expandable Content */}
                        <div className={`
                            overflow-hidden transition-all duration-500 ease-in-out
                            ${expandedMobile === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                        `}>
                            <div className="px-6 pb-6 space-y-3">
                                {service.body.split(',').map((option, idx) => (
                                    <div key={idx} className="bg-slate-100 text-slate-800 text-sm font-medium px-4 py-3 rounded-lg">
                                        {option.trim()}
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