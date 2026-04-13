import React from 'react';

const Pricing = () => {
    return (
        <section className="bg-white py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1b1e] mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                        <p className="text-gray-500 mb-6">Perfect for getting started</p>
                        <div className="mb-8">
                            <span className="text-5xl font-extrabold text-gray-900">$0</span>
                            <span className="text-gray-500 font-medium">/Month</span>
                        </div>
                        
                        <ul className="space-y-4 mb-8 flex-1">
                            {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        
                        <button className="w-full py-3.5 rounded-full bg-linear-to-r from-[#7030f4] to-[#a220ff] hover:bg-[#8320db] text-white font-semibold transition-colors mt-auto">
                            Get Started Free
                        </button>
                    </div>

                    <div className="relative bg-linear-to-r from-[#7030f4] to-[#a220ff] rounded-2xl p-8 shadow-xl md:scale-105 z-10 flex flex-col h-full">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-xs font-bold border border-yellow-200 whitespace-nowrap shadow-sm">
                            Most Popular
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                        <p className="text-purple-200 mb-6">Best for professionals</p>
                        <div className="mb-8">
                            <span className="text-5xl font-extrabold text-white">$29</span>
                            <span className="text-purple-200 font-medium">/Month</span>
                        </div>
                        
                        <ul className="space-y-4 mb-8 flex-1">
                            {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map((feature, i) => (
                                <li key={i} className="flex items-center text-white">
                                    <svg className="w-5 h-5 text-white mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        
                        <button className="w-full py-3.5 rounded-full bg-white hover:bg-gray-50 text-[#9b2cff] font-bold mt-auto shadow-sm">
                            Start Pro Trial
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                        <p className="text-gray-500 mb-6">For teams and businesses</p>
                        <div className="mb-8">
                            <span className="text-5xl font-extrabold text-gray-900">$99</span>
                            <span className="text-gray-500 font-medium">/Month</span>
                        </div>
                        
                        <ul className="space-y-4 mb-8 flex-1">
                            {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        
                        <button className="w-full py-3.5 rounded-full bg-linear-to-r from-[#7030f4] to-[#a220ff] hover:bg-[#8320db] text-white font-semibold transition-colors mt-auto">
                            Contact Sales
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Pricing;