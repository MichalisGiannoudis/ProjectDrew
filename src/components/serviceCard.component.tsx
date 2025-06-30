export const ServiceCard = ({ serviceLabel, serviceBody }: { serviceLabel: string, serviceBody:string }) => {
    return(
        <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
            <img src="/corporate-icon.png" className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-6 p-3"/>
            <h3 className="text-xl h-14 font-semibold text-slate-800 mb-4 cursor-default">{serviceLabel}</h3>
            <p className="text-gray-600 mb-6 cursor-default">{serviceBody}</p>
        </div>
    );
}