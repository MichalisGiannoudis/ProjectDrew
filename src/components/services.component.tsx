import { useThemeStore } from "@/store/theme.store";
import { ServiceCard } from "./serviceCard.component"
import { MainPageContent } from "@/types/content.interface";
import { useContent } from "@/hooks/useContent";
import { Language } from "@/types/language.interface";

export const Services = () => {

    const languageState = useThemeStore(state => state.language);
    const {  servicesLabel, serviceLabel1, serviceLabel2, serviceLabel3, serviceLabel4, serviceLabel5, serviceLabel6, serviceLabel7
            , serviceBody1, serviceBody2, serviceBody3, serviceBody4, serviceBody5, serviceBody6, serviceBody7
    } = useContent(languageState === Language.Greek ? 'mainPageGR' : 'mainPageEN') as MainPageContent;

return (
    <div className="w-[95%] md:w-[95%] mx-auto">
        <div className="flex flex-col items-center mb-16">
        <div className="rounded-full bg-slate-800 px-12 py-3 shadow-lg">
            <span className="text-white text-2xl font-semibold cursor-default">{servicesLabel}</span>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:gap-8">
        {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
            <ServiceCard key={ idx }
            serviceImage = { idx ===0 ? '/corporate-icon.png' : idx === 1 ? '/civil-icon.png' : idx === 2 ? '/policy-icon.png' : '/contract-icon.png' }
            serviceLabel = { idx === 0 ? serviceLabel1 : idx === 1 ? serviceLabel2 : idx === 2 ? serviceLabel3 : idx === 3 ? serviceLabel4 : idx === 4 ? serviceLabel5 : idx === 5 ? serviceLabel6 : serviceLabel7 }
            serviceBody = { idx === 0 ? serviceBody1 : idx === 1 ? serviceBody2 : idx === 2 ? serviceBody3 :  idx === 3 ? serviceBody4 : idx === 4 ? serviceBody5 : idx === 5 ? serviceBody6 : serviceBody7 }
            />
        ))}
        </div>
    </div>
    )
}