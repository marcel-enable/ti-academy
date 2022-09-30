import React from 'react';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import LogoSmall from '../Logo/LogoSmall';
import icon from '../../renderer/hamburger.svg';
import xicon from '../../renderer/xicon.svg';

export default function UserLoginNavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow z-10 snap-start min-h-[88px] lg:h-[104px]">
      <div className="justify-between px-6 lg:px-20 items-center flex h-full w-full">

        {/* Mobile Header */}
        <div className="lg:hidden h-[88px]">
          <div className="flex items-center justify-start gap-6 lg:hidden h-full">
            <div className="lg:hidden">
              <div
                className="text-ui-secondary rounded-md outline-none focus:border-200-default focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <button
                    type="submit"
                    className="block lg:hidden"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {/* open */}
                    <img src={xicon} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="block lg:hidden"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {/* closed */}
                    <img src={icon} />
                  </button>
                )}
              </div>
            </div>
            
            <div className="">
              <LogoSmall size="" />
            </div>
          </div>
        </div>

        {/* Laptop Header */}
        <div className="hidden lg:block h-full">
          <div className="flex items-center justify-start gap-20 h-full">
            <div className="">
              <Logo size="" />
            </div>

            <ul className="flex items-center gap-2 mx-auto h-full">
              <li className="lg:hover:bg-white hover:bg-slate-100 text-xl font-bold transition-all text-brand-primary-light hover:border-b-4 hover:border-brand-primary-light py-1.5 font-primary w-[180px] h-full flex justify-center items-center">
                <a href="/">Academy</a>
              </li>
              <li className="lg:hover:bg-white hover:bg-slate-100 py-2 font-primary transition-all hover:border-b-4 hover:border-brand-primary-light hover:text-brand-primary-light w-[180px] h-full flex justify-center items-center">
                <a href="https://support.thoughtindustries.com/hc/en-us">Help</a>
              </li>
              <li className="lg:hover:bg-white hover:bg-slate-10 py-2 font-primary transition-all hover:border-b-4 hover:border-brand-primary-light hover:text-brand-primary-light w-[180px] h-full flex justify-center items-center">
                <a href="https://api.thoughtindustries.com/#thought-industries-api">API</a>
              </li>
            </ul>
          </div>
        </div>
        

        <div className="">
          <a href={"https://academy.thoughtindustries.com/pages/sign-in"} className="my-auto items-center bg-brand-primary-light hover:bg-brand-primary text-white font-primary font-semibold py-3.5 px-6 rounded-full">
            Sign in
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`shadow z-50 flex my-auto space-x-6 mx-auto px-6 lg:hidden ${navbar ? 'block' : 'hidden'}`}>
          <ul className="z-50 items-center justify-between space-y-3 py-4 lg:pt-0 lg:space-y-0 lg:flex lg:space-x-6 w-full">
            <li className="lg:hover:bg-white hover:bg-slate-100 rounded pl-2 py-1.5 font-primary text-xl font-bold text-brand-primary-light ">
              <a href="/">Academy</a>
            </li>
            <li className="lg:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2 font-primary">
              <a href="https://support.thoughtindustries.com/hc/en-us">Help</a>
            </li>
            <li className="lg:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2 font-primary">
              <a href="https://api.thoughtindustries.com/#thought-industries-api">API</a>
            </li>
            <hr></hr>
            <a href={"https://academy.thoughtindustries.com/pages/sign-in"} className="lg:hidden my-auto items-center bg-brand-primary-light hover:bg-brand-primary text-white font-primary font-semibold py-3.5 px-6 w-full rounded-full">
              Sign in
            </a>
          </ul>
      </div>
    </nav>
  );
}
