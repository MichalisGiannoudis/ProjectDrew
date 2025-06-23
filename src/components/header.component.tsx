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
        <img src={openMenu ? "/menu-close.png" : "/menu-open.png"} className="w-8 h-8" onClick={() => setOpenMenu(!openMenu)}/>
      </div>
      {openMenu && 
        <div className="absolute top-16 right-0 bg-gray-800 text-white w-48 p-4 rounded shadow-lg">
        
        </div>}
    </div>
  );
}
