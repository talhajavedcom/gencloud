'use client';
const ScaleAcross = () => {
  return (
    <section className="px-4 py-20" data-aos="zoom-in-up">
      <div className="max-w-[1000px] mx-auto">
        <div className="bg-gradient-to-r from-[#3B0764] to-[#3B0764] rounded-3xl shadow-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="mb-6 text-2xl font-semibold text-transparent md:text-3xl bg-gradient-to-r from-[#ff6a00] to-[#ff6a00] bg-clip-text">
              Scale across Build new apps.
            </h3>
            <p className="mb-10 text-base text-gray-200 md:text-lg">
              Accelerate your innovation with scalable cloud infrastructure and cutting-edge development tools.
            </p>
            <div className="flex justify-center gap-6">
              <button className="md:block bg-[#ff6a00]  text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                Get Started
              </button>
              <button className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                Our Solution
              </button>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 right-0 rounded-full w-72 h-72 bg-purple-500/10 blur-3xl"></div>
            <div className="absolute top-0 left-0 rounded-full w-72 h-72 bg-purple-500/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleAcross;
