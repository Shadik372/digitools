import React from 'react';
import instagramImg from '../assets/instagram.png'; 
import facebookImg from '../assets/facebook.png';
import twitterImg from '../assets/twitter.png';

const Footer = () => {
    return (
        <footer className="bg-[#0b1121] pt-16 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
                    
                    <div className="lg:col-span-2">
                        <a className="text-3xl font-bold text-white block mb-4">
                            DigiTools
                        </a>
                        <p className="text-gray-400 text-sm  max-w-xs">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 text-base">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Templates</a></li>
                            <li><a href="#" className="hover:text-white">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 text-base">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 text-base">Resources</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">Documentation</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Community</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 text-base">Social Links</h4>
                        <div className="flex items-center gap-3">
                            
                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
                                <img src={instagramImg} alt="Instagram" className="w-5 h-5 object-contain" />
                            </a>

                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
                                <img src={facebookImg} alt="Facebook" className="w-5 h-5 object-contain" />
                            </a>

                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
                                <img src={twitterImg} alt="Twitter" className="w-5 h-5 object-contain" />
                            </a>
                            
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 Digitools. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;