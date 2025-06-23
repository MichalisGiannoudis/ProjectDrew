export default function Footer() {
  return (
    <footer className="mt-8 text-center bg-gray-900 text-white w-full h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-1">
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg"> Contact Info </p>
          <p> Andreas N. Drandakis </p>
          <p> Licensed Attorney | Specializing in Corporate & Civil Law </p>
          <div className="flex flex-col items-center">
            <img src="/email-icon.png" className="w-10 h-10"/>
            contact@example.com
          </div>
          <div className="flex flex-col items-center">
            <img src="/phone-icon.png" className="w-10 h-10 "/>
            +123 456 7890
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img className="w-9 h-9" src="/x-icon.png"/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img className="w-9 h-9" src="facebook-icon.png"/>
          </a>
        </div>
      </div> 
      <p>&copy; {new Date().getFullYear()} [Your Name] All rights reserved.</p>
    </footer>
  );
}
