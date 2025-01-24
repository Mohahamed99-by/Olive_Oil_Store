import React, { useState, useEffect } from "react";
import OliveOilStore from "../components/OliveOilStore";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import CartModal from "../components/CartModal";
import CheckoutModal from "../components/CheckoutModal";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

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
            ? {...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Update product quantity
  const handleUpdateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Handle cart and checkout modal
  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);
  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  const handleCompleteOrder = (formData) => {
    console.log("Order placed with details:", formData);
    setCart([]);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        totalItems={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={handleOpenCart}
      />

      <HeroSection />
      <main className="container mx-auto p-6 mt-16 text-right" dir="rtl">
        <About />
        <OliveOilStore products={products} onAddToCart={handleAddToCart} />
        <Contact />
      </main>

      <CartModal
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        totalPrice={cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        )}
        onCompleteOrder={handleCompleteOrder}
      />

      <Footer />
    </div>
  );
}

export default Home;
