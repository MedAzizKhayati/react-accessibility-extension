import React from 'react';
import icon from '../../assets/img/A.png';
import { RxGear } from 'react-icons/rx';

export default function Header() {
  return (
    <header className="h-32 relative flex gap-3 items-center text-white p-5 bg-primary">
      <img className="w-7 aspect-square" src={icon} alt="extension icon" />
      <div>
        <h1 className=" text-xl">Assistini</h1>
        <p>Your All-in-One Accessibility Companion</p>
      </div>
      {/* Settings Icon */}
      <div className="absolute right-2 top-2">
        <RxGear className='text-xl' />
      </div>

    </header>
  );
}
