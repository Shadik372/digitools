import React, { useState } from 'react';
import productsData from '../data/products.json'; // Adjust path if needed


import designToolIcon from '../assets/products/design-tool.png';
import operationIcon from '../assets/products/operation.png';
import portfolioIcon from '../assets/products/portfolio.png';
import shoppingCartIcon from '../assets/products/shopping-cart.png';
import socialMediaIcon from '../assets/products/social-media.png';
import writingIcon from '../assets/products/writing_2327400 1.png';

const iconMap = {
  'design-tool.png': designToolIcon,
  'operation.png': operationIcon,
  'portfolio.png': portfolioIcon,
  'shopping-cart.png': shoppingCartIcon,
  'social-media.png': socialMediaIcon,
  'writing_2327400 1.png': writingIcon,
};

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState('products');
  
  const [cart, setCart] = useState([]);

  const addToCart = (product) => { 
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  const getBadgeStyle = (badgeType) => {
    switch(badgeType) {
      case 'Best Seller': return 'bg-yellow-100 text-yellow-700';
      case 'Popular': return 'bg-purple-100 text-purple-700';
      case 'New': return 'bg-green-100 text-green-700';
      default: return 'hidden';
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      
      <div className="text-center mb-12 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#1a1b1e] mb-3">Premium Digital Tools</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="inline-flex bg-white rounded-full p-1 border border-gray-200 shadow-sm">
          <button 
            onClick={() => setActiveTab('products')}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
              activeTab === 'products' ? 'bg-[#9b2cff] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('cart')}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
              activeTab === 'cart' ? 'bg-[#9b2cff] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {activeTab === 'products' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow relative flex flex-col">
              
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center p-2.5">
                  <img src={iconMap[product.icon]} alt={product.title} className="w-full h-full object-contain" />
                </div>
                {product.badge && (
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getBadgeStyle(product.badge)}`}>
                    {product.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed grow">
                {product.description}
              </p>

              <div className="mb-6">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                <span className="text-sm text-gray-400 font-medium">{product.billing}</span>
              </div>

              <ul className="space-y-2.5 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => addToCart(product)}
                className="w-full py-3 rounded-xl bg-[#9b2cff] hover:bg-[#8320db] text-white font-semibold transition-colors mt-auto"
              >
                {cart.some(item => item.id === product.id) ? 'Added to Cart' : 'Buy Now'}
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'cart' && (
        <div className="max-w-3xl mx-auto bg-white border-2 border-blue-400 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2 border-dashed">Your Cart</h3>
          
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Your cart is currently empty.</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 border-dashed">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-sm">
                        <img src={iconMap[item.icon]} alt={item.title} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-500">${item.price}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 text-sm font-medium transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 border-dashed pt-4 flex items-center justify-between mb-6">
                <span className="text-gray-500 font-medium">Total:</span>
                <span className="text-2xl font-bold text-gray-900">${cartTotal}</span>
              </div>
              
              <button className="w-full py-3.5 rounded-full bg-[#9b2cff] hover:bg-[#8320db] text-white font-semibold text-sm transition-colors shadow-sm">
                Proceed To Checkout
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}