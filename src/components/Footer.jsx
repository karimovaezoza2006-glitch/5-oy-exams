import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ICONS (React import style)
import location from "../img/location.svg";
import phone from "../img/phone.svg";
import mail from "../img/mail.svg";
import facebook from "../img//facebook.svg";
import twitter from "../img/twitter.svg";
import instagram from "../img/instagram.svg";
import youtube from "../img/youtube.svg";
import paypal from "../img/paypal.svg";
import amex from "../img/amex.svg";
import visa from "../img/visa.svg";
import mastercard from "../img/mastercard.svg";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <footer className="w-full bg-[#061A38] text-white pt-12 pb-6 px-6 lg:px-24">
      {/* Top Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 max-w-[1400px] mx-auto"
        data-aos="fade-up"
      >
        {/* Company */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>about us</li>
            <li>blog</li>
            <li>returns</li>
            <li>order status</li>
          </ul>
        </div>

        {/* Info */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h3 className="text-lg font-semibold mb-4">Info</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>How it works?</li>
            <li>our promises</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-semibold mb-4">Contact us</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <img src={location} className="w-4" />
              123 Main Street, Anytown,USA
            </li>
            <li className="flex items-center gap-2">
              <img src={phone} className="w-4" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <img src={mail} className="w-4" />
              TechHeimSupport@gmail.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div data-aos="fade-up" data-aos-delay="250">
          <h3 className="text-lg font-semibold mb-4">Sign up for News and updates</h3>
          <div className="flex items-center bg-white text-black rounded-lg overflow-hidden mb-6">
            <input
              type="text"
              placeholder="E-mail Address"
              className="w-full px-4 py-2 focus:outline-none text-sm"
            />
            <button className="px-4 text-lg">➤</button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xl">
            <img src={facebook} className="w-6" />
            <img src={twitter} className="w-6" />
            <img src={instagram} className="w-6" />
            <img src={youtube} className="w-6" />
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="border-t border-white/20 pt-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs opacity-70 max-w-[1400px] mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="flex items-center gap-3">
          <img src={paypal} className="h-6" />
          <img src={amex} className="h-6" />
          <img src={visa} className="h-6" />
          <img src={mastercard} className="h-6" />
        </div>

        <p>© 2023 Tech Heim.</p>

        <div className="flex items-center gap-6">
          <span>cookie settings</span>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
          <span>Imprint</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

