import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Katta blog rasmlari (PNG)
import meta from "../../img/meta.png";
import headphones from "../../img/headphones.png";
import bitcoin from "../../img/bitcoin.png";

// Kichik ikonlar (SVG)
import calendar from "../../img/calendar.svg";
import clock from "../../img/clock.svg";
import bookmark from "../../img/bookmark.svg";
import line from "../../img/line.png"

const OurBlogs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="max-w-[1400px] mx-auto py-10 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4" data-aos="fade-up">
        <h2 className="text-[30px] font-semibold">Our Blogs</h2>
        <button className="text-gray-500 text-[16px] hover:text-black flex items-center gap-1">
          View all <span>›</span>
        </button>
      </div>

      <img src={line} alt="" className="py-3" />

      {/* Blog Container */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* LEFT BIG CARD */}
        <div
          className="bg-white shadow-md rounded-xl overflow-hidden"
          data-aos="fade-right"
        >
          <img src={meta} alt="Meta" className="w-full h-[250px] object-cover" />

          <div className="p-4">
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-1">
              <span className="flex items-center gap-1">
                <img src={calendar} alt="" className="w-4" />
                August , 8 , 2023
              </span>
              <span className="flex items-center gap-1">
                <img src={clock} alt="" className="w-4" />
                3 min read
              </span>
            </div>

            <h3 className="text-[18px] font-semibold mb-1">
              Meta Platforms plans to release free AI system...
            </h3>

            <p className="text-gray-600 text-[14px] leading-5">
              The parent company of Facebook, Meta Platforms, is introducing software 
              to help deve...
            </p>
          </div>
        </div>

        {/* RIGHT 2 SMALL CARDS */}
        <div className="flex flex-col gap-6">

          {/* CARD 1 */}
          <div
            className="bg-white shadow-md rounded-xl p-4 flex gap-4"
            data-aos="fade-left"
          >
            <img
              src={headphones}
              alt="Headphones"
              className="w-[150px] h-[120px] object-cover rounded-lg"
            />

            <div className="flex flex-col justify-between w-full">
              <div>
                <h3 className="text-[18px] font-semibold mb-1">
                  8 Things You Probably Didn’t Know About Headphones
                </h3>

                <p className="text-gray-600 text-[14px] leading-5 line-clamp-2">
                  Owning a headphone could mean a different thing for different people...
                </p>
              </div>

              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <img src={calendar} alt="" className="w-4" />
                  March , 28 , 2023
                </span>

                <img src={bookmark} alt="" className="w-5 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="bg-white shadow-md rounded-xl p-4 flex gap-4"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <img
              src={bitcoin}
              alt="Bitcoin"
              className="w-[150px] h-[120px] object-cover rounded-lg"
            />

            <div className="flex flex-col justify-between w-full">
              <div>
                <h3 className="text-[18px] font-semibold mb-1">
                  Analyzing the August 17th Bitcoin Price Drop
                </h3>

                <p className="text-gray-600 text-[14px] leading-5 line-clamp-2">
                  On August 17th at 9:30PM UTC, Bitcoin’s price dropped more than 8%...
                </p>
              </div>

              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <img src={calendar} alt="" className="w-4" />
                  August , 17 , 2023
                </span>

                <img src={bookmark} alt="" className="w-5 cursor-pointer" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
