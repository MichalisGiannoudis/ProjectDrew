export const ServiceCard = ({ serviceImage, serviceLabel, serviceBody }: { serviceImage:string,serviceLabel: string, serviceBody:string }) => {
    return(
        <div className="relative">
            <div className="bg-white flex flex-col rounded-lg shadow-lg p-8 pt-12 text-center hover:shadow-2xl transition-shadow duration-300 h-auto md:h-130 lg:h-130">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-20 bg-slate-200 rounded-full border border-slate-500 flex items-center justify-center p-3">
                        <img src={serviceImage} className="w-full h-full p-2 object-contain"/>
                    </div>
                </div>
                <h3 className="text-xl h-5 font-semibold text-slate-800 cursor-default mb-14 mt-3">{serviceLabel}</h3>
                <div className="flex flex-col gap-4 text-left items-start">
                    {serviceBody.split(',').map((option, idx) => (
                        <div key={idx} className="w-full">
                            <div className="bg-slate-200 text-slate-800 text-sm font-medium px-3 py-2 rounded-3xl w-full">
                                {option.trim()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}