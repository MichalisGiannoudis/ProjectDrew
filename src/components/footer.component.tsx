import { Devider } from "./devider.component";

export default function Footer() {
  return (
    <footer className="mt-8 text-center bg-gray-900 text-white w-full h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
        {/* Social Media & Logo */}
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src="/logo-cropped.png" className="w-100 h-auto"/>
            <Devider />
          </div>
          <div className="flex gap-4 mt-2"> 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img className="w-9 h-9" src="/x-icon.png"/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img className="w-9 h-9" src="facebook-icon.png"/>
            </a>
          </div>
        </div>
        <Devider />
        {/* Contact Info */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl"> Contact Info </p>
          <p> Andreas N. Drandakis </p>
          <p> Licensed Attorney | Specializing in Corporate & Civil Law </p>
          <div className="flex flex-col items-center p-1">
            <img src="/email-icon.png" className="w-10 h-10"/>
            contact@example.com
          </div>
          <div className="flex flex-col items-center">
            <img src="/phone-icon.png" className="w-10 h-10 "/>
            +123 456 7890
          </div>
        </div>
        <Devider />
        <div>
          {/* Address & Hours */}
          <div className="flex flex-col justify-center items-center p-2">
            {/* <p className="text-2xl"> Office Address </p> */}
            <img className="w-9 h-9" src="location-icon.png"/>
            <p> Kountouriotou 23, Rethyno, Greece </p>
            <p className="text-lg"> Monday - Friday</p>
            <p> 9:00 AM - 5:00 PM </p>
            <p className="text-lg"> Sat - Sun </p>
            <p> Closed </p>
          </div>
        </div>
      </div> 
      <p>&copy; {new Date().getFullYear()} [Your Name] All rights reserved.</p>
    </footer>
  );
}
