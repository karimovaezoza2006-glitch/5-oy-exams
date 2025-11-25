import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BestSellerDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data bilan ishlash
    const mockData = [
      {
        id: "1",
        title: "Mahsulot 1",
        price: "1 000 000 сум",
        description: "Mahsulot 1 tavsifi: bu juda foydali va yuqori sifatli mahsulot. Unda quyidagi xususiyatlar mavjud: 1) yuqori sifatli materiallar, 2) uzoq muddat xizmat, 3) zamonaviy dizayn.",
        features: ["Yuqori sifatli materiallar", "Uzoq muddat xizmat", "Zamonaviy dizayn", "Kafolat 12 oy"],
        image: "https://via.placeholder.com/500x500?text=Product+1"
      },
      {
        id: "2",
        title: "Mahsulot 2",
        price: "2 000 000 сум",
        description: "Mahsulot 2 tavsifi: bu mahsulot yuqori texnologiyaga ega, qulay va zamonaviy ko‘rinishga ega.",
        features: ["Quvvatli motor", "Ergonomik dizayn", "Tezkor yetkazib berish"],
        image: "https://via.placeholder.com/500x500?text=Product+2"
      },
      {
        id: "3",
        title: "Mahsulot 3",
        price: "3 000 000 сум",
        description: "Mahsulot 3 tavsifi: ajoyib ishlash xususiyatlari bilan, professional foydalanuvchilar uchun ideal.",
        features: ["Professional foydalanish", "Uzoq xizmat muddati", "Oson parvarish"],
        image: "https://via.placeholder.com/500x500?text=Product+3"
      }
    ];

    const found = mockData.find(item => item.id === id);
    setProduct(found || null);
    setLoading(false);
  }, [id]);

  if (loading) return <div className="text-center py-20 text-lg font-semibold">Yuklanmoqda...</div>;
  if (!product) return <div className="text-center py-20 text-red-500 font-semibold">Mahsulot topilmadi</div>;

  return (
    <div className="container mx-auto max-w-[1400px] py-10 px-4">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">&larr; Bosh sahifaga qaytish</Link>
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Mahsulot rasmi */}
        <div className=" w-full max-w-md">
          <img src={product.image} alt={product.title} className="w-full rounded-xl shadow-lg object-cover" />
        </div>

        {/* Mahsulot ma’lumotlari */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-extrabold">{product.title}</h1>
          <p className="text-3xl font-bold text-green-600">{product.price}</p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          {/* Qo‘shimcha xususiyatlar */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Xususiyatlar:</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Sotib olish tugmasi */}
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
            Sotib olish
          </button>
        </div>
      </div>
    </div>
  );
}
