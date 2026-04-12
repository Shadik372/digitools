import { ShoppingCart } from 'lucide-react';
import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar bg-white py-3 px-4 md:px-8 border-b border-gray-100">
      
      <div className="navbar-start">
        <a className="text-3xl font-bold bg-linear-to-r from-[#7030f4] to-[#a220ff] bg-clip-text text-transparent">
          DigiTools
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-gray-600 font-medium text-[15px]">
          <li><a className="hover:text-black hover:bg-transparent">Products</a></li>
          <li><a className="hover:text-black hover:bg-transparent">Features</a></li>
          <li><a className="hover:text-black hover:bg-transparent">Pricing</a></li>
          <li><a className="hover:text-black hover:bg-transparent">Testimonials</a></li>
          <li><a className="hover:text-black hover:bg-transparent">FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4 md:gap-6">
        
        <button className="btn btn-ghost btn-sm text-gray-700 hover:bg-gray-100">
          <ShoppingCart></ShoppingCart>
        </button>

        <a className="text-gray-600 font-medium text-[15px] hover:text-black cursor-pointer hidden sm:block">
          Login
        </a>

        <button className="btn rounded-full bg-linear-to-r from-[#7030f4] to-[#a220ff]  text-white border-none px-6 min-h-0 h-10 font-semibold shadow-sm">
          Get Started
        </button>
        
      </div>
    </div>
    );
};

export default NavBar;