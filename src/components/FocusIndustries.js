'use client';
import { industries } from '@/constants';
import Image from 'next/image';

const FocusIndustries = () => {


  return (
    <section className="py-24">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-[#1E0B32] dark:text-white leading-tight">Industries We Empower</h2>
          <p className="max-w-lg text-lg text-gray-600 dark:text-gray-300">
            At the intersection of technology and innovation, we focus on industries that are shaping the future. From intelligent retail to
            revolutionary fintech and robust hardware — we help you lead with confidence.
          </p>
          <div className="w-24 h-1 mt-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        <div className="space-y-10">
          {industries.map((industry, index) => (
            <div
              data-aos="fade-left"
              key={index}
              className="flex items-center gap-6 p-6 m-1 transition-all duration-300 border shadow-lg group rounded-2xl bg-white/60 dark:bg-gray-800/60 border-white/30 dark:border-gray-700/30 backdrop-blur-lg hover:shadow-2xl"
            >
              <div className="relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                <Image src={industry.image} alt={industry.title} fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1E0B32] dark:text-white mb-1">{industry.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 md:text-base">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusIndustries;
