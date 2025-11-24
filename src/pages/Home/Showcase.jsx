import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Showcase1 from "../../img/showcase.png";

const Showcase = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-10 py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* LEFT TEXT */}
        <div
          className="text-center lg:text-left"
          data-aos="fade-right"
        >
          <h3 className="font-semibold text-[42px] sm:text-[56px] lg:text-[64px] text-[#042352] leading-tight">
            Tech Heim
          </h3>

          <h2 className="font-medium text-[22px] sm:text-[28px] lg:text-[32px] text-[#042352]  leading-snug py-[50px]">
            "Join the <span className="text-[#f45e0c]">digital revolution</span>"
          </h2>

          <button className="w-[230px] sm:w-[260px] lg:w-72 h-12 sm:h-14 font-normal text-base text-white rounded-lg bg-[#f45e0c] hover:bg-[#d94f05] transition-all">
            Explore More
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div data-aos="fade-left">
          <img
            src={Showcase1}
            alt="showcase"
            className=" mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Showcase;
