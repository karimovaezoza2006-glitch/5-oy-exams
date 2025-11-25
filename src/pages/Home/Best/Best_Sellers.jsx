import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Best_Sellers() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6925e03482b59600d7258d08.mockapi.io/Cards")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6 container mx-auto max-w-[1400px] py-10">
      {data.map((item) => (
        <Link
          key={item.id}
          to={`/best/${item.id}`}   // ✔ TO‘G‘RI YO‘L
          className="bg-white p-4 rounded-xl shadow hover:scale-105 transition"
        >
          <img src={item.image} className="w-full h-60 object-cover rounded" />
          <h3 className="font-semibold mt-3">{item.title}</h3>
          <p className="text-blue-600 font-bold">{item.price}</p>
        </Link>
      ))}
    </div>
  );
}
