import React from 'react';

const CallToAction = () => {
    return (
        <section className="bg-linear-to-r from-[#7030f4] to-[#a220ff] py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    <br className="hidden md:block" /> Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
                    <button className="btn rounded-full w-full sm:w-auto bg-white hover:bg-gray-50 text-[#9b2cff] border-none px-8 min-h-0 h-12 font-bold shadow-lg text-base  hover:-translate-y-0.5">
                        Explore Products
                    </button>

                    <button className="btn rounded-full w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-2 border-white hover:border-white px-8 min-h-0 h-12 font-bold shadow-sm text-base  hover:-translate-y-0.5">
                        View Pricing
                    </button>
                </div>

                <p className="text-white/70 text-sm font-medium">
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </section>
    );
};

export default CallToAction;