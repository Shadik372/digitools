import React from 'react';

const Stats = () => {
    return (
        <section className="bg-linear-to-r from-[#7030f4] to-[#a220ff] py-12 mt-12">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                
                <div className="flex flex-col md:flex-row justify-center items-center text-white text-center gap-10 md:gap-0">
                    
                    <div className="flex-1 w-full">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight">50K+</h2>
                        <p className="text-white/80 font-medium text-lg">Active Users</p>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-white/30"></div>

                    <div className="flex-1 w-full">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight">200+</h2>
                        <p className="text-white/80 font-medium text-lg">Premium Tools</p>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-white/30"></div>

                    <div className="flex-1 w-full">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight">4.9</h2>
                        <p className="text-white/80 font-medium text-lg">Rating</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;