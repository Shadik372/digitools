import React from 'react';
import heroImg from '../assets/banner.png';
import playImg from '../assets/Play.png';

const Banner = () => {
    return (
        <>
            <section className="bg-white py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    <div className="flex-1 max-w-2xl space-y-6">

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E1E7FF] border-purple-200">
                            <div className="w-2 h-2 rounded-full bg-[#9b2cff]"></div>
                            <span className="bg-linear-to-r from-[#7030f4] to-[#a220ff] bg-clip-text text-transparent text-sm font-medium">
                                New: AI-Powered Tools Available
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-[64px] font-extrabold text-[#212529] leading-[1.1] tracking-tight">
                            Supercharge Your <br className="hidden md:block" /> Digital Workflow
                        </h1>

                        <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
                            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <button className="btn rounded-full bg-[#9b2cff] hover:bg-[#8320db] text-white border-none px-8 min-h-0 h-12 font-semibold shadow-md text-base">
                                Explore Products
                            </button>

                            <button className="btn rounded-full bg-transparent hover:bg-purple-50 text-[#9b2cff] border border-[#9b2cff] hover:border-[#8320db] px-8 min-h-0 h-12 font-semibold shadow-sm text-base flex items-center gap-2">
                                <img src={playImg} alt="Play Demo" className="w-5 h-5 object-contain" />
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="w-full max-w-lg lg:max-w-xl rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={heroImg}
                                alt="AI Workflow Interface"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Banner;