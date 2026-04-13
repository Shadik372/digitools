import React from 'react';
import userImg from '../assets/user.png';
import packageImg from '../assets/package.png';
import rocketImg from '../assets/rocket.png';

const Steps = () => {
    return (
        <section className="bg-slate-50 py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1b1e] mb-4">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="relative bg-white rounded-2xl p-10 text-center border border-gray-100">
                        <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#9b2cff] text-white flex items-center justify-center text-xs font-bold shadow-md">
                            01
                        </div>
                        <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <img src={userImg} alt="User Icon" className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Create Account
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    <div className="relative bg-white rounded-2xl p-10 text-center border border-gray-100">
                        <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#9b2cff] text-white flex items-center justify-center text-xs font-bold shadow-md">
                            02
                        </div>
                        <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <img src={packageImg} alt="Package Icon" className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Choose Products
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    <div className="relative bg-white rounded-2xl p-10 text-center border border-gray-100">
                        <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#9b2cff] text-white flex items-center justify-center text-xs font-bold shadow-md">
                            03
                        </div>
                        <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <img src={rocketImg} alt="Rocket Icon" className="w-12 h-12 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Start Creating
                        </h3>
                        <p className="text-gray-500 ">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Steps;