import React from "react";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";

const CartModal = ({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onProceedToCheckout }) => {
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  console.log(totalPrice);
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" dir="rtl" aria-modal="true" role="dialog">
      <div className="bg-white rounded-lg w-96 p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-green-900">سلة التسوق</h2>
          <button 
            onClick={onClose} 
            className="text-red-500 hover:text-red-700" 
            aria-label="إغلاق سلة التسوق"
          >
            إغلاق
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">سلة التسوق فارغة</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-2">
                <div className="flex items-center space-x-reverse space-x-4">
                  <img 
                    src={item.image} 
                    alt={`صورة ${item.name}`} 
                    className="w-16 h-16 object-cover rounded" 
                  />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-green-700">{item.price} ر.س</p>
                  </div>
                </div>
                <div className="flex items-center space-x-reverse space-x-2">
                  {/* Decrease Quantity */}
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} 
                    className="bg-green-100 p-1 rounded-full" 
                    aria-label={`تقليل الكمية من ${item.name}`}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="w-4 h-4 text-green-600" />
                  </button>
                  {/* Quantity */}
                  <span className="font-bold">{item.quantity}</span>
                  {/* Increase Quantity */}
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} 
                    className="bg-green-100 p-1 rounded-full" 
                    aria-label={`زيادة الكمية من ${item.name}`}
                  >
                    <Plus className="w-4 h-4 text-green-600" />
                  </button>
                  {/* Remove Item */}
                  <button 
                    onClick={() => onRemoveItem(item.id)} 
                    className="bg-red-100 p-1 rounded-full" 
                    aria-label={`حذف ${item.name} من السلة`}
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            ))}

            {/* Total Price */}
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-lg">المجموع الكلي</span>
              <span className="font-bold text-green-700 text-lg">{totalPrice.toFixed(2)} ر.س</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onProceedToCheckout}
              className="w-full bg-green-600 text-white py-3 rounded-lg mt-6 hover:bg-green-700 transition flex justify-center items-center"
              aria-label="متابعة إلى الدفع"
            >
              <ShoppingCart className="ml-2" />
              متابعة إلى الدفع
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
