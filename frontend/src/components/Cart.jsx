import { useState } from 'react'
import { useCart } from '../context/CartContext'
import Checkout from './Checkout'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart()

  return (
    <div className="relative">
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 left-4 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg 
                 hover:bg-green-700 hover:scale-110 transform transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full 
                         flex items-center justify-center transform scale-100 transition-transform 
                         duration-300 animate-bounce">
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full sm:w-96 bg-white shadow-2xl z-50 
                        transform transition-transform duration-300 overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-6 bg-green-50">
                <h2 className="text-2xl font-bold text-green-800">سلة التسوق</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-green-600 hover:text-green-800 hover:rotate-90 transform transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <p className="text-lg">السلة فارغة</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="group bg-white rounded-xl p-4 border border-gray-100 hover:border-green-200 
                                 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                            {/* Replace with actual image */}
                            <img src={item.image} alt={item.name} />

                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-green-600 font-medium">{item.price}</p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-7 h-7 flex items-center justify-center text-green-600 hover:bg-green-100 
                                         rounded transition-colors"
                              >
                                -
                              </button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center text-green-600 hover:bg-green-100 
                                         rounded transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-gray-100 p-6 bg-white">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">المجموع:</span>
                    <span className="text-2xl font-bold text-green-700">{getCartTotal().toFixed(2)} درهم</span>
                  </div>
                  {showCheckout ? (
                    <Checkout onClose={() => setShowCheckout(false)} />
                  ) : (
                    <button
                      className="w-full bg-green-600 text-white py-4 rounded-xl font-medium
                               hover:bg-green-700 transform transition-all duration-300
                               focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                               active:scale-95"
                      onClick={() => setShowCheckout(true)}
                    >
                      متابعة الدفع
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
