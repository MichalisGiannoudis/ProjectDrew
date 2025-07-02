export const ServiceCard = ({ serviceImage, serviceLabel, serviceBody }: { serviceImage:string,serviceLabel: string, serviceBody:string }) => {
    return(
        <div className="bg-white flex flex-col rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
            <img src={serviceImage} className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center mx-auto p-3 mb-4"/>
            <h3 className="text-xl h-5 font-semibold text-slate-800 cursor-default mb-14 mt-3">{serviceLabel}</h3>
            <div className="flex flex-col gap-4 text-left items-start">
                {serviceBody.split(',').map((option, idx) => (
                    <div key={idx} className="flex items-start text-slate-800 text-sm font-medium">
                        <span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-5 inline-block mt-1.5 flex-shrink-0" />
                        <span>{option.trim()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}