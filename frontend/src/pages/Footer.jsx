import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-700 text-white py-12" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <FaLeaf className="text-3xl text-green-300 ml-2" />
              <h2 className="text-2xl font-bold">متجر زيت الزيتون</h2>
            </div>
            <p className="text-sm text-center md:text-right leading-relaxed mb-4">
              نحن نقدم أفضل زيت زيتون طبيعي مع التزامنا بالجودة العالية والخدمة المتميزة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">روابط مهمة</h3>
            <ul className="space-y-3 text-center">
              <li>
                <a href="#products" className="flex justify-center items-center space-x-2 rtl:space-x-reverse hover:text-green-300 transition">
                  <FaEnvelope />
                  <span>منتجاتنا</span>
                </a>
              </li>
              <li>
                <a href="#about" className="flex justify-center items-center space-x-2 rtl:space-x-reverse hover:text-green-300 transition">
                  <FaPhone />
                  <span>معلومات عنا</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex justify-center items-center space-x-2 rtl:space-x-reverse hover:text-green-300 transition">
                  <FaEnvelope />
                  <span>اتصل بنا</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">تواصل معنا</h3>
            <div className="flex space-x-4 rtl:space-x-reverse mb-4">
              <a
                href="https://facebook.com"
                className="bg-green-600 p-3 rounded-full hover:bg-green-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://twitter.com"
                className="bg-green-600 p-3 rounded-full hover:bg-green-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="https://instagram.com"
                className="bg-green-600 p-3 rounded-full hover:bg-green-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
            <p className="text-sm text-center">
              تابعنا للحصول على أحدث العروض والمنتجات
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm border-t border-green-600 pt-4">
          <p>© 2024 متجر زيت الزيتون. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;