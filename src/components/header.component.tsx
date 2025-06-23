'use client';

import { useState } from 'react'

export default function Header() {

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-2 text-center bg-gray-900 w-full h-auto">
      <div>
        <img src="/logo-cropped.png" className="w-50 h-auto p-5"/>
      </div>
      <div className="mt-auto mb-auto justify-self-end mr-5">
        <img
          src={openMenu ? "/menu-close.png" : "/menu-open.png"}
          className={`w-8 h-8 transition-transform duration-300 ${openMenu ? 'rotate-180' : 'rotate-0'}`}
          onClick={() => setOpenMenu(!openMenu)}
        />
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
