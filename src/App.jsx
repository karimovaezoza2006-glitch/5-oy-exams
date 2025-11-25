import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Blog from "./pages/Blog/Blog";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import BlogDetail from "./pages/Blog/BlogDetail";
import ProductDetail from "./pages/Home/Cards/ProductDetail";
import ProductDetail1 from "./pages/Home/Best/ProductDetail1";

export default function App() {
  return (
    <Layout>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Product detail (Cards) */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Product detail (Best Sellers) */}
        <Route path="/best/:id" element={<ProductDetail1 />} />

        {/* Products Page */}
        <Route path="/products" element={<Products />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

        {/* Others */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Layout>
  );
}
