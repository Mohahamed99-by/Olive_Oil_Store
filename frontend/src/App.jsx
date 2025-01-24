import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import OliveOilStore from  "./components/OliveOilStore"
import Contact from "./pages/Contact";
import Home from "./pages/Home"; // Correctly import the Home component

function App() {
  const [products, setProducts] =useState([]);
  const [cart, setCart] = useState([]);


   // Fetch products from the API
   useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  // Add product to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Render Home component at root */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={        <OliveOilStore products={products} onAddToCart={handleAddToCart} />} /> {/* This path renders the products */}
      </Routes>
    </Router>
  );
}

export default App;
