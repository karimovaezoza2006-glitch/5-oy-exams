// src/pages/Home/Cards/ProductsDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductsDetail() {
  const { id } = useParams();
  const API = `https://69035efbd0f10a340b23ed3d.mockapi.io/api/products/${id}`;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setProduct(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-10 text-gray-400">Yuklanmoqda...</div>;
  if (!product) return <div className="text-center py-10 text-red-500">Mahsulot topilmadi.</div>;

  // Rasm va ma’lumotlarni olish
  const image = product?.image || product?.product?.image || "https://dummyimage.com/300x300/ccc/000&text=No+Image";
  const title = product?.name || product?.product?.name || product?.title || "No Title";
  const price = product?.price || product?.product?.price || "No Price";
  const description = product?.description || product?.product?.description || "Mahsulot haqida ma'lumot mavjud emas.";
  const category = product?.category || product?.product?.category || null;
  const brand = product?.brand || product?.product?.brand || null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Link to="/" className="text-blue-500 mb-6 inline-block hover:underline">⬅ Ortga</Link>
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-8">
        {/* Mahsulot rasmi */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="w-full md:w-80 h-80 object-contain rounded-xl shadow"
            onError={(e) => { 
              e.currentTarget.src = "https://dummyimage.com/300x300/ccc/000&text=No+Image"; 
            }}
          />
        </div>

        {/* Mahsulot ma’lumotlari */}
        <div className="flex-1 flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-700 font-semibold mb-4">Narxi: {price}</p>
          <p className="text-gray-600 mb-6">{description}</p>

          {category && <p className="text-gray-500 mb-2">Kategoriya: {category}</p>}
          {brand && <p className="text-gray-500 mb-2">Brand: {brand}</p>}

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-xl transition-all">
            Buyurtma berish
          </button>
        </div>
      </div>
    </div>
  );
}
