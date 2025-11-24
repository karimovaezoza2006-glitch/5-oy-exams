import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Blog from "./pages/Blog/Blog";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";



export default function App() {
  return (

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
   
  );
}
