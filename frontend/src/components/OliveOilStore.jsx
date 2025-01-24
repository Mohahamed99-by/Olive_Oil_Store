import React from 'react';
import ProductCard from './ProductCard';

const OliveOilStore = ({ products, onAddToCart }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-green-900 mb-6 border-b-2 border-green-700 inline-block pb-1">
        المنتجات
      </h2>
      {/* Container for product cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Check if products are available */}
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart} // Pass onAddToCart handler to each ProductCard
            />
          ))
        ) : (
          <p>Loading products...</p> // Display loading text if no products
        )}
      </div>
    </div>
  );
};

export default OliveOilStore;
