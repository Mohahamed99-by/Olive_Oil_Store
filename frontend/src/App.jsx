import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './components/Cart'
import WhatsAppButton from './components/WhatsAppButton'
import LoadingSpinner from './components/LoadingSpinner'
import { CartProvider } from './context/CartContext'
import { LoadingProvider, useLoading } from './context/LoadingContext'

const AppContent = () => {
  const { isLoading } = useLoading();

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Cart />
        <WhatsAppButton />
        {isLoading && <LoadingSpinner />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:categoryId" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

function App() {
  return (
    <LoadingProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LoadingProvider>
  );
}

export default App
