import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../img/logo.svg";
import heart from "../img/heart.svg";
import bascet from "../img/basket.svg";
import profile from "../img/profile.svg"

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <header
      className="w-full bg-white shadow-sm py-4 px-4 sticky top-0 z-50"
      data-aos="fade-down"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">

        {/* LOGO */}
        <img src={logo} alt="logo"  />

        {/* NAV — DESKTOP */}
        <nav className="hidden lg:flex items-center gap-11 text-[21px] font-medium text-gray-700">

             <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : ""
            }
          >
            Home
          </NavLink>

         
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : ""
            }
          >
            Products
          </NavLink>


        

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : ""
            }
          >
            Blog
          </NavLink>
         

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : ""
            }
          >
            FAQ
          </NavLink>


          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : ""
            }
          >
            Contact us
          </NavLink>
        </nav>

        {/* RIGHT — DESKTOP */}
        <div className="hidden lg:flex items-center gap-4">

         
          {/* HEART */}
          <img src={heart} className="w-6 cursor-pointer" />
        <img src={bascet} />
        <img src={profile} alt="" />
         
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden" onClick={() => setOpen(true)}>
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 lg:hidden">
          <div className="w-3/4 h-full bg-white p-6 relative">

            {/* CLOSE BTN */}
            <button
              className="absolute top-5 right-5"
              onClick={() => setOpen(false)}
            >
              <svg
                className="w-8 h-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>

            {/* MOBILE NAV */}
            <nav className="flex flex-col gap-6 mt-12 text-gray-800 text-lg font-medium">

              <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
              <NavLink to="/faq" onClick={() => setOpen(false)}>FAQ</NavLink>
              <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

            </nav>

            {/* ICONS */}
            <div className="flex gap-4 mt-10">
           
              <img src={heart} className="w-6" />
                  <img src={bascet} />
        <img src={profile} alt="" />
            </div>

           

          </div>
        </div>
      )}
    </header>
  );
}
