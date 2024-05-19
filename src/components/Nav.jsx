import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { navLinks } from "../constants";
import { socialLinks } from "../constants";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="py-2 sm:py-8 w-full">
      <nav className="flex justify-between text-white flex-wrap gap-4">
        <a className="text-xl font-montserrat font-semibold hover:cursor-pointer">
          Kaleo
        </a>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="flex justify-center items-center gap-8"
            >
              <a
                href={item.href}
                className="text-slate-400 hover:cursor-pointer hover:text-slate-200 transition font-montserrat"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="list-none flex max-sm:hidden justify-center items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              className="text-white transition-[0.3] p-[6px] rounded-full hover:bg-slate-800 hover:scale-125 hover:cursor-pointer"
            >
              {social.icon}
            </a>
          ))}
        </ul>
        <div className="relative hidden max-lg:flex">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="flex justify-end items-end flex-col text-end bg-slate-600 p-8 absolute right-0 max-md:top-[20px] top-[40px] mt-4 min-w-[210px] rounded-[5px] shadow-md scale-up-center">
              <ul>
                {navLinks.map((item) => (
                  <li key={item.label} className="my-4 mx-0">
                    <a href={item.href} className="text-lg text-slate-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
