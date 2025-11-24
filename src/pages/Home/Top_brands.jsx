import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Rasmlar
import line from "../../img/line.png";
import apple from "../../img/apple.png";
import sony from "../../img/sony.png";
import samsung from "../../img/samsung1.png";
import canon from "../../img/canon.png";
import lenova from "../../img/lenova.png";
import yaproq from "../../img/yaproq.png";

const Top_brands = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <section className="max-w-[1400px] mx-auto py-10 px-4">
        <h3 
          className="font-medium text-[28px] md:text-[32px] text-[#0c0c0c]"
          data-aos="fade-up"
        >
          Top Brands
        </h3>

        <img 
          src={line}
          alt="line"
          className="w-full mt-1 mb-6"
          data-aos="zoom-in"
        />

        <div 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-center"
          data-aos="fade-up"
        >
          <img src={apple} alt="apple" />
          <img src={sony} alt="sony"  />
          <img src={samsung} alt="samsung"  />
          <img src={canon} alt="canon" />
          <img src={yaproq} alt="yaproq" />
          <img src={lenova} alt="lenova"  />
        </div>
      </section>
    </div>
  );
};

export default Top_brands;
