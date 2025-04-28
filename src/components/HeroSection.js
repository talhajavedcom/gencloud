'use client';
import { Cloud, CloudUpload, CloudDownload, Shield, Server, Users, Globe } from 'lucide-react';

const Home = () => {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen pt-10 overflow-hidden">
      <div className="mt-10 vpc-bg" />
      <div className="container relative z-10 flex flex-col items-center px-4 py-12 mx-auto md:px-16 md:py-28 md:flex-row gap-14">
        <div className="flex flex-col w-full gap-8 md:w-1/2">
          <p className="inline-flex items-center gap-2 text-xs uppercase font-semibold text-white bg-[#FF5722] dark:bg-[#FF5722]  px-4 py-1 rounded-full shadow animate-fade-in">
            <Cloud size={20} className="text-white" />
            Unleash the Power of Cloud Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-xl bg-clip-text bg-gradient-to-r from-[#FF5722] to-[#FF5722] text-transparent animate-fade-in">
            Empower Your Cloud Native
            <br />
            Transformation with Us
          </h1>
          <p className="max-w-xl text-base font-medium text-gray-700 dark:text-gray-300 md:text-xl animate-fade-in">
            Deliver better, more secure and compliant cloud native software faster than ever.
          </p>
          <div className="flex items-center gap-4 animate-fade-in">
            <button className="px-8 py-3 text-lg bg-[#FF5722] hover:bg-[#E91E63] transition text-white font-bold rounded-full shadow-xl dark:shadow-[#FF5722]/30 flex items-center gap-2 hover:scale-105">
              Talk to an Expert
              <CloudUpload size={22} />
              
            </button>
            <div className="hidden gap-2 ml-2 md:flex">
              <CloudDownload size={32} className="p-1 text-[#FF5722] bg-white dark:bg-[#0B0B0F] rounded-full shadow dark:shadow-[#FF5722]/20" />
              <Server size={32} className="text-[#E91E63] bg-white dark:bg-[#0B0B0F] rounded-full shadow dark:shadow-[#E91E63]/20 p-1" />
              <Shield size={32} className="p-1 text-[#FF5722] bg-white dark:bg-[#0B0B0F] rounded-full shadow dark:shadow-[#9C27B0]/20" />
              <Users size={32} className="p-1 text-[#FF5722] bg-white dark:bg-[#0B0B0F] rounded-full shadow dark:shadow-[#FF5722]/20" />
              <Globe size={32} className="p-1 bg-white dark:bg-[#0B0B0F] rounded-full shadow dark:shadow-[#E91E63]/20 text-[#E91E63]" />
            </div>
          </div>
        </div>
        <div className="relative flex justify-center w-full md:w-1/2 animate-fade-in">
        </div>
      </div>
    </section>
  );
};

export default Home;
