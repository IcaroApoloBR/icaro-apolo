import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [navColor, setNavColor] = useState("transparent")

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("bg-primary shadow-md shadow-black duration-700") : setNavColor("transparent");
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    }
  }, [])

  return (
    <nav className={`${styles.paddingX, navColor} w-full flex items-center justify-center py-5 fixed top-0 z-20`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-5">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          {/* <img src={logo} alt="Logo Portfolio" className="w-9 h-9 object-contain" /> */}
          <p className="text-white text-[18px] font-bold cursor-pointer flex flex-wrap">Ícaro Apolo &nbsp;
            <span className="sm:block hidden">| Desenvolvedor Web</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white transition-colors text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* <img src={toggle ? close : menu} alt="Menu icon" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} /> */}
          <button className="hover:animate-pulse" onClick={() => setToggle(!toggle)}>
            {toggle ?
              <Icon icon="line-md:menu-to-close-alt-transition" width="28" height="28" />
              :
              <Icon icon="line-md:close-to-menu-alt-transition" width="28" height="28" />
            }
          </button>

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-primary border border-[#434343] absolute top-14 right-0 mx-4 my-2 min-w-[140px] flex justify-center z-10 rounded-xl`}>
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => { setToggle(!toggle); setActive(link.title) }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar