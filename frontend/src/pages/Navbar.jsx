import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Home, Package, Info, Phone } from "lucide-react";

const Navbar = ({ totalItems, onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", path: "/", icon: Home },
    { name: "المنتجات", path: "/products", icon: Package },
    { name: "من نحن", path: "/about", icon: Info },
    { name: "اتصل بنا", path: "/contact", icon: Phone },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-olive-800 flex items-center">
              <span className="text-3xl ml-2">🫒</span>
              <span className="hidden sm:block">متجر زيت الزيتون</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center space-x-reverse space-x-2 text-olive-700 hover:text-olive-900 font-medium transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 hover:bg-olive-50 rounded-full transition-colors duration-200"
              aria-label="فتح سلة التسوق"
            >
              <ShoppingCart className="text-olive-700 w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -left-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-olive-50 rounded-full transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="text-olive-700 w-6 h-6" />
              ) : (
                <Menu className="text-olive-700 w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="bg-white border-t border-olive-100 px-4 py-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center space-x-reverse space-x-3 px-4 py-3 text-olive-700 hover:bg-olive-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
