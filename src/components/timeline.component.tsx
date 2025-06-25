import { useContent } from '@/hooks/useContent';
import { useThemeStore } from '@/store/theme.store';
import { MilestoneContent } from '@/types/content.interface';
import { Language } from '@/types/language.interface';
import React from 'react';

export const TimeLine = () => {
  
    const languageState = useThemeStore(state => state.language);
    const { milestones } = useContent(languageState === Language.Greek ? 'milestonesGR' : 'milestonesEN') as unknown as MilestoneContent;    
    
    return (    
    
    <div className="relative mx-auto py-16 px-4 w-[75%]">
      <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full transform -translate-y-1/2 z-10 animate-pulse"></div>
      <div className="relative flex z-20 h-96">
        {milestones.map((milestone, index) => (
          <div key={milestone.yearLabel} className="relative flex-1 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
            <div className={
             `absolute left-1/2 transform -translate-x-1/2 w-[80%]
              ${index % 2 === 0 ? 'bottom-1/2 mb-6' : 'top-1/2 mt-6'}
              p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/20
              text-center transition-all duration-300 
              ${index % 2 === 0 ? 'hover:-translate-y-2' : 'hover:translate-y-2'} hover:shadow-2xl
            `}>
              <div className={`absolute left-1/2 transform -translate-x-1/2
                ${index % 2 === 0 
                  ? 'top-full border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white' 
                  : 'bottom-full border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white'
                }
              `}></div>
              <div className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                {milestone.titleLabel}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed opacity-90">
                {milestone.descriptionLabel}
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-gray-800 rounded-full border-4 border-white shadow-lg transform transition-all duration-300 hover:scale-125 hover:shadow-xl hover:shadow-blue-500/30 cursor-pointer z-30">
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/80 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-blue-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
            </div>
            <div className={`
              absolute left-1/2 transform -translate-x-1/2
              ${index % 2 === 0 ? 'top-1/2 mt-8' : 'top-1/2 -mt-12'}
              text-2xl font-bold text-gray-200 bg-clip-text tracking-wide
            `}>
              {milestone.yearLabel}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};