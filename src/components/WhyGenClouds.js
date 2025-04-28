'use client';
import { features } from '@/constants';

const WhyGenClouds = () => {
  return (
    <section className="py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 text-left md:text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff6100] ">
            Why <span className="text-primary dark:text-purple-400">GEN CLOUDS</span>?
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Discover unparalleled cloud solutions tailored to your business needs with GEN CLOUDS.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="p-8 transition-all duration-300 bg-white dark:bg-gray-800 border shadow-md group rounded-xl hover:shadow-xl border-white/20 dark:border-gray-700/20 backdrop-blur-md"
            >
              <div className="mb-6 w-14 h-14 rounded-full bg-gradient-to-r from-[#ff6a00] to-[#f4d3d3] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1E0B32] dark:text-white group-hover:text-primary dark:group-hover:text-purple-400 mb-3 transition-colors">{feature.title}</h3>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGenClouds;
