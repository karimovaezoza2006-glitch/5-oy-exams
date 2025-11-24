import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";


import mouse from "../../img/mouse.png";
import keyboard from "../../img/keyboard.png";
import watch from "../../img/watch.png";
import macbook from "../../img/macbook.png";
import samsung from "../../img/samsung.png";

export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const products = [
    {
      discount: "-50%",
      title: "Logitech G502 Gaming Mouse",
      oldPrice: "$38.00",
      newPrice: "$19.00",
      img: mouse,
    },
    {
      discount: "-30%",
      title: "NPET K10 Wired Gaming Keyboard",
      oldPrice: "$49.00",
      newPrice: "$34.30",
      img: keyboard,
    },
    {
      discount: "-20%",
      title: "Apple Watch Series 7 (GPS, 41MM)",
      oldPrice: "$289.00",
      newPrice: "$231.20",
      img: watch,
    },
    {
      discount: "-25%",
      title: "Apple 2022 MacBook Air M2",
      oldPrice: "$950.22",
      newPrice: "$712.66",
      img: macbook,
    },
    {
      discount: "-17%",
      title: "Samsung Titan smart watch",
      oldPrice: "$120.00",
      newPrice: "$99.60",
      img: samsung,
    },
  ];

  return (
    <div className="w-full bg-blue-900 py-10 px-4 md:px-12 rounded-xl">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4.2 },
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              data-aos="fade-up"
              className="bg-white rounded-xl p-4 shadow-md"
            >
              <span className="text-xs bg-orange-200 text-orange-600 px-2 py-1 rounded-md font-semibold">
                {item.discount}
              </span>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain my-3"
              />
              <p className="text-sm font-semibold text-gray-700 mb-1">
                {item.title}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="line-through text-gray-400">{item.oldPrice}</span>
                <span className="font-bold text-gray-800">{item.newPrice}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

