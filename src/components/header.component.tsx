'use client';

import { useState } from 'react'

export default function Header() {

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-[80%_20%] md:grid-cols-[55%_25%_20%] text-center bg-gray-900 w-full h-auto">
      <div>
        <img src="/logo-cropped.png" className="w-50 h-auto p-5"/>
      </div>
      <div className="hidden md:grid grid-cols-3 justify-items-center items-center gap-2">
        <div className="cursor-pointer group">
          <p className="text-white text-lg relative overflow-hidden">Home
            <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"/>
          </p>
        </div>
        <div className="cursor-pointer group">
          <p className="text-white text-lg relative overflow-hidden">Servises
            <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"/>
          </p>
        </div>
        <div className="cursor-pointer group">
          <p className="text-white text-lg relative overflow-hidden">Contact
            <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"/>
          </p>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-2 justify-items-center items-center gap-2">
        <img src="/phone-icon-2.png" className="w-7 h-7 justify-self-end animate-pulse"/>
        <p className="text-white text-base justify-self-start cursor-pointer">6912345678</p>
      </div>
      <div className="mt-auto mb-auto flex justify-center md:hidden">
        <img src={openMenu ? "/menu-close.png" : "/menu-open.png"} className={`w-8 h-8 transition-transform duration-300 ${openMenu ? 'rotate-180' : 'rotate-0'}`} onClick={() => setOpenMenu(!openMenu)}/>
      </div>
      {openMenu && 
      <div className="absolute top-16 right-0 bg-gray-800 text-white w-48 p-4 rounded shadow-lg">
        <div>
          <a href="/" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="/about" className="block px-4 py-2 hover:bg-gray-700">About</a>
          <a href="/services" className="block px-4 py-2 hover:bg-gray-700">Services</a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
        </div>
      </div>}
    </div>
  );
}
