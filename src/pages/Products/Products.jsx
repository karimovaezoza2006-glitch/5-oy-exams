import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// DummyJSON categories we need:
// smartphones, mens-watches, womens-watches

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const urls = [
          "https://dummyjson.com/products/category/smartphones",
          "https://dummyjson.com/products/category/mens-watches",
          "https://dummyjson.com/products/category/womens-watches",
        ];

        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const data = await Promise.all(responses.map((res) => res.json()));

        // Har bir kategordagi mahsulotlarni birlashtiramiz
        const all = [...data[0].products, ...data[1].products, ...data[2].products];
        setProducts(all);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Tech Products (Phones & Watches)</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer bg-white"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.category}</p>
              <p className="mt-2 font-bold text-[#0c0c0c]">${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}