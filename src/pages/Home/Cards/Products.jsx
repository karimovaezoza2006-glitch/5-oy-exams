// src/pages/Home/Cards/Products.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";

export default function Products() {
  const API = "https://69035efbd0f10a340b23ed3d.mockapi.io/api/products";  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setData(json);
        } else {
          setData([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setData([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10 text-gray-400">Yuklanmoqda...</div>;
  if (!data.length) return <div className="text-center py-10 text-red-500">API bo‘sh yoki noto‘g‘ri.</div>;

  const repeatedData = data.length < 6 ? [...data, ...data, ...data, ...data] : data;

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-xl md:text-3xl font-semibold mb-6">Products</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        loop={repeatedData.length >= 6}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {repeatedData.map((item, index) => {
          const isProduct = !!item.product;
          const image = isProduct ? item.product.image : item.img;
          const title = isProduct ? item.product.name : item.title;
          const price = isProduct ? item.product.price : item.price;
          const id = item.id; // ID ni olamiz

          return (
            <SwiperSlide key={index}>
              <Link to={`/product/${id}`}>
                <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
                  <img
                    src={image || "https://dummyimage.com/150x150/ccc/000&text=No+Image"}
                    alt={title}
                    className="w-24 h-24 object-contain"
                    onError={(e) => { e.currentTarget.src = "https://dummyimage.com/150x150/ccc/000&text=No+Image"; }}
                  />
                  <p className="mt-3 text-gray-700 font-medium text-center">{title}</p>
                  <p className="mt-1 text-sm text-gray-500">{price}</p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
