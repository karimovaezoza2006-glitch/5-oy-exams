import React, { useState } from "react";

const faqData = [
  {
    question: "Mahsulotni qanday xarid qilaman?",
    answer: "Siz mahsulotni savatga qo‘shib, ro‘yxatdan o‘tganingizdan so‘ng to‘lov sahifasiga o‘tasiz. To‘lovni onlayn yoki naqd shaklda amalga oshirishingiz mumkin."
  },
  {
    question: "Yetkazib berish qancha vaqt oladi?",
    answer: "Shahar ichida 1-3 ish kuni, viloyatlarga esa 3-7 ish kuni davom etadi. Yetkazib berish manzilingizga bog‘liq bo‘lishi mumkin."
  },
  {
    question: "Mahsulotni qaytarish siyosati qanday?",
    answer: "Mahsulotni 14 kun ichida hech qanday sabab ko‘rsatilmasdan qaytarishingiz mumkin. Mahsulot asl holatda bo‘lishi va qadoqlari buzilmagan bo‘lishi kerak."
  },
  {
    question: "Kafolat muddati qancha?",
    answer: "Barcha mahsulotlar sotib olingan kundan boshlab 1 yil kafolat bilan ta'minlanadi. Kafolat ichida texnik nosozliklar bo‘lsa, bepul ta'mirlash yoki almashtirish amalga oshiriladi."
  },
  {
    question: "Savol va shikoyatlar bilan qayerga murojaat qilaman?",
    answer: "Savol yoki shikoyatingiz bo‘lsa, bizning Contact bo‘limidan yoki info@yourshop.com elektron pochtamiz orqali murojaat qilishingiz mumkin."
  },
  {
    question: "Buyurtmani bekor qilish mumkinmi?",
    answer: "Ha, buyurtma yetkazib berilishidan oldin bekor qilishingiz mumkin. Buning uchun mijozlarga xizmat ko‘rsatish bilan bog‘laning."
  },
  {
    question: "Onlayn to‘lov xavfsizmi?",
    answer: "Ha, saytimiz SSL sertifikati bilan himoyalangan va barcha to‘lovlar xavfsiz tizimlar orqali amalga oshiriladi."
  },
  {
    question: "Maxsus chegirmalar yoki aksiyalar bormi?",
    answer: "Ha, saytimizda va ijtimoiy tarmoqlarda muntazam ravishda aksiyalar va chegirmalar e'lon qilinadi. Yangiliklardan xabardor bo‘lish uchun newsletterga obuna bo‘ling."
  },
  {
    question: "Mahsulotlar haqiqiy brendga tegishlimi?",
    answer: "Ha, biz faqat original va ishonchli brendlarning mahsulotlarini taklif qilamiz. Har bir mahsulot sertifikatlangan va kafolatlangan."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Ko‘p so‘raladigan savollar</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              className="w-full text-left px-5 py-4 bg-gray-100 hover:bg-gray-200 rounded-t-lg flex justify-between items-center transition-colors"
              onClick={() => toggleIndex(index)}
            >
              <span className="font-medium text-lg">{item.question}</span>
              <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-5 py-4 text-gray-700 bg-white">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
