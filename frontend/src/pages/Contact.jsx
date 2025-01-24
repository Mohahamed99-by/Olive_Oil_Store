import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import axios from 'axios'; // Make sure to install axios

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      if (response.status === 200) {
        setStatus("تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setError("حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.");
      console.error('Error submitting form:', err);
    }
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-8 sm:py-12 md:py-16" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 md:mb-12 text-center flex items-center justify-center">
            <FaPaperPlane className="ml-2 md:ml-4 text-2xl md:text-3xl text-green-700" />
            اتصل بنا
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 bg-white shadow-2xl rounded-2xl overflow-hidden">
            {/* Contact Info */}
            <div className="bg-green-800 text-white p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">معلومات التواصل</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse">
                  <FaMapMarkerAlt className="text-2xl md:text-3xl text-green-300" />
                  <div>
                    <p className="font-medium text-sm md:text-base">العنوان</p>
                    <p className="text-xs md:text-sm">شارع الزيتون، الرياض</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse">
                  <FaPhone className="text-2xl md:text-3xl text-green-300" />
                  <div>
                    <p className="font-medium text-sm md:text-base">الهاتف</p>
                    <p className="text-xs md:text-sm">+966 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse">
                  <FaEnvelope className="text-2xl md:text-3xl text-green-300" />
                  <div>
                    <p className="font-medium text-sm md:text-base">البريد الإلكتروني</p>
                    <p className="text-xs md:text-sm">info@oliveoilstore.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2"
                  >
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-green-700 px-2 md:px-3 py-1.5 md:py-2 focus:outline-none focus:border-green-900 text-sm md:text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-green-700 px-2 md:px-3 py-1.5 md:py-2 focus:outline-none focus:border-green-900 text-sm md:text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full border-b-2 border-green-700 px-2 md:px-3 py-1.5 md:py-2 focus:outline-none focus:border-green-900 text-sm md:text-base"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white font-semibold py-2 md:py-3 rounded-full hover:bg-green-800 transition flex items-center justify-center space-x-2 rtl:space-x-reverse text-sm md:text-base"
                >
                  <FaPaperPlane className="text-sm md:text-base" />
                  <span>إرسال الرسالة</span>
                </button>
                {status && (
                  <p className="text-green-700 mt-3 md:mt-4 text-center text-sm md:text-base">{status}</p>
                )}
                {error && (
                  <p className="text-red-600 mt-3 md:mt-4 text-center text-sm md:text-base">{error}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;