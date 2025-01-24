import React from 'react';

const ProductCard = ({ product, onAddToCart }) => (
  <div
    className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl overflow-hidden transform hover:translate-y-[-5px] transition-all duration-300 text-right"
    dir="rtl"
  >
    {/* Product Image Container */}
    <div className="relative h-64 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
      />
      {product.isNew && (
        <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-medium py-1 px-4 rounded-full shadow-lg">
          جديد
        </div>
      )}
    </div>

    {/* Content Container */}
    <div className="p-5">
      {/* Product Name and Price */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold text-green-600">{product.price}</span>
          <span className="text-sm text-gray-500">ر.س</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
        {product.description}
      </p>

      {/* Features Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {product.features.map((feature, index) => (
          <span
            key={index}
            className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-xs font-medium border border-green-100"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => onAddToCart(product)}
        className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-6 rounded-xl font-medium 
        hover:from-green-700 hover:to-green-600 transform transition-all duration-300 
        focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 
        flex items-center justify-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
        أضف إلى السلة
      </button>
    </div>
  </div>
);

export default ProductCard;