'use client';
import { services } from "@/constants";

const Services = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl text-[#ff6a00]">Our Services</h2>
          <p className="max-w-3xl mx-auto text-secondary dark:text-gray-300">
            Your success is our success and together we help our society to become a better place to live and work.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#ff6a00]/5 to-[#ff6a00]/10
                       dark:from-[#ff6a00]/5 dark:to-[#ff6a00]/10
                       hover:from-[#ff6a00]/10 hover:to-[#ff6a00]/20
                       dark:hover:from-[#ff6a00]/10 dark:hover:to-[#  ff6a00]/20
                       border border-[#ff6a00]/20 hover:border-[#ff6a00]/40
                       dark:border-[#ff6a00]/20 dark:hover:border-[#ff6a00]/40
                       backdrop-blur-sm transition-all duration-300
                       hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.07)]
                       hover:-translate-y-1"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff6a00]/20 to-[#ff6a00]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 p-3 shadow-lg rounded-xl bg-gradient-to-br from-[#ff6a00] to-[#ff6a00]">{service.icon}</div>

                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold dark:text-white">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">{service.description}</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#ff6a00] to-[#ff6a00] transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}     
        </div>
      </div>
    </section>
  );
};

export default Services;
