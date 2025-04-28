'use client';
import { stats } from '../constants';

const WhyCompanies = () => {
  return (
    <section className="py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#ff6a00] dark:text-white mb-6">
              Why companies trust <span className="text-primary dark:text-purple-400">GEN CLOUDS</span>
            </h2>
            <p className="max-w-md text-lg text-gray-600 dark:text-gray-300">
              Discover why top brands rely on our platform for scalable, secure, and intuitive cloud solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 lg:col-span-2 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="relative p-6 transition-all duration-300 border shadow-md group sm:p-8 rounded-2xl border-white/30 dark:border-gray-700/30 backdrop-blur-md bg-white/60 dark:bg-gray-800/60 hover:shadow-xl"
              >
                <h3 className="text-4xl font-extrabold text-[#ff6a00] dark:text-white group-hover:text-primary dark:group-hover:text-purple-400 transition duration-300 mb-2">
                  {stat.number}
                </h3>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCompanies;
