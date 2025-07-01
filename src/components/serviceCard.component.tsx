export const ServiceCard = ({ serviceImage, serviceLabel, serviceBody }: { serviceImage:string,serviceLabel: string, serviceBody:string }) => {
    return(
        <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
            <img src={serviceImage} className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-6 p-3"/>
            <h3 className="text-xl h-14 font-semibold text-slate-800 mb-4 cursor-default">{serviceLabel}</h3>
            <div className="flex flex-col gap-2 mb-6 text-left items-start">
                {serviceBody.split(',').map((option, idx) => (
                    <div key={idx} className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium shadow hover:bg-slate-200 transition-colors cursor-default">
                        { option.trim() }
                    </div>
                ))}
            </div>
        </div>
    );
}