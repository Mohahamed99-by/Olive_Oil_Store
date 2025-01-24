import React, { useState } from "react";
import { CheckCircle, X } from "lucide-react";
import axios from "axios";

const CheckoutModal = ({ isOpen, onClose, cart, totalPrice }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    paymentMethod: "card",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const orderData = {
      ...formData,
      totalPrice,
      cart,
    };

    try {
      setIsLoading(true);
      // Make API call to submit order
      const response = await axios.post('http://localhost:5000/api/checkout', orderData);
      setOrderPlaced(true);
    } catch (err) {
      setError(err.response?.data?.message || "حدث خطأ أثناء إرسال الطلب");
      console.error('Order submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  if (orderPlaced) {
    return (
      <div className="fixed inset-0 bg-green-50 z-50 flex flex-col justify-center items-center text-center p-4">
        <CheckCircle className="text-green-600 w-24 h-24 mb-6" />
        <h2 className="text-3xl font-bold text-green-900 mb-4">شكراً لطلبك!</h2>
        <p className="text-green-700 mb-4">تم تسجيل طلبك بنجاح</p>
        <button
          onClick={onClose}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          العودة إلى المتجر
        </button>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" 
      dir="rtl" 
      aria-modal="true" 
      role="dialog"
    >
      <div className="bg-white rounded-lg p-6 w-96 max-h-[90vh] overflow-y-auto relative">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700"
          aria-label="إغلاق سلة التسوق"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-green-900 mb-4">إتمام الطلب</h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">الاسم الكامل</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">رقم الهاتف</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="05xxxxxxxx"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="example@email.com"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">العنوان</label>
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="أدخل عنوان التوصيل"
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">المدينة</label>
            <input
              id="city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="أدخل اسم المدينة"
            />
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">طريقة الدفع</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            >
              <option value="card">بطاقة الائتمان</option>
              <option value="cash">الدفع عند الاستلام</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            disabled={isLoading}
          >
            {isLoading ? 'جاري إرسال الطلب...' : 'إتمام الطلب'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
