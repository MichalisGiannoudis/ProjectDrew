import { Devider } from "./devider.component";

export default function Footer() {
  return (
    <footer className="mt-8 text-center bg-gray-900 text-white w-full h-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
        {/* Social Media & Logo */}
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src="/logo-cropped.png" className="w-100 h-auto mb-5"/>
            <p> Andreas N. Drandakis </p>
            <p> Licensed Attorney | Specializing in Corporate & Civil Law </p>
            <div className="mb-3 mt-3">
              <Devider />
            </div>
          </div>
          <div className="flex gap-4"> 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img className="w-9 h-9" src="/x-icon.png"/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img className="w-9 h-9" src="facebook-icon.png"/>
            </a>
          </div>
        </div>
        <div className="block md:hidden mb-3 mt-3">
          <Devider />
        </div>
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-center md:mt-3 justify-center md:justify-start">
          <p className="text-2xl mb-3"> Contact Info </p>
          <div className="flex flex-col items-center md:items-start p-1">
            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-2">
              <img className="w-10 h-10" src="/email-icon.png"/>
              <p className="flex items-center justify-center md:justify-start h-10">contact@example.com </p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-2">
              <img className="w-10 h-10" src="/phone-icon.png"/>
              <p className="flex items-center justify-center md:justify-start h-10">+123 456 7890 </p>
            </div>
          </div>
        </div>
        <div className="block md:hidden mb-3 mt-3">
          <Devider />
        </div>
        {/* Address & Hours */}
        <div className="flex flex-col items-center md:items-center md:mt-3 justify-center md:justify-start">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl mb-3"> Office Info </p>
            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-2">
              <img className="w-9 h-9" src="location-icon.png"/>
              <p className="flex items-center justify-center h-10"> Kountouriotou 23, Rethyno, Greece </p>
            </div>
            <p className="text-lg"> Monday - Friday</p>
            <p> 9:00 AM - 5:00 PM </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p>Copyright &copy; {new Date().getFullYear()} Andrew Dranakis</p>
      </div>
    </footer>
  );
}
