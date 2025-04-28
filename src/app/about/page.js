'use client';

const About = () => {
  return (
    <section className="px-6 py-20 text-gray-800 pt-50">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-16 text-center">
          <p className="max-w-2xl mx-auto text-gray-600">
            At GenCloud, we empower companies to transform their operations through cloud-native technology. Our mission is to simplify the
            complex and deliver innovative, scalable solutions.
          </p>
        </div>

        <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Who We Are</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              We’re a passionate team of cloud engineers, designers, and consultants driven by the power of digital transformation. With
              years of experience in AWS cloud management, modernization, and infrastructure, we deliver high-impact solutions for companies
              of all sizes.
            </p>
            <p className="leading-relaxed text-gray-700">
              Whether you're just getting started or looking to optimize your cloud operations, GenCloud is here to guide and support your
              journey every step of the way.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="mb-4 text-3xl font-semibold">Why Choose GenCloud?</h2>
          <p className="max-w-3xl mx-auto mb-10 text-gray-600">
            We deliver more than just services — we deliver results. From AWS optimization to data analytics and cloud migration, we make
            sure your business scales securely and efficiently in the cloud.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="max-w-xs p-6 border border-purple-200 rounded-lg bg-purple-50">
              <h3 className="font-semibold text-lg text-[#ff6a00] mb-2">Cloud-Native Expertise</h3>
              <p className="text-sm text-gray-600">
                Specialized in AWS services, DevOps, and cloud security to accelerate your innovation.
              </p>
            </div>
            <div className="max-w-xs p-6 border border-purple-200 rounded-lg bg-purple-50">
              <h3 className="font-semibold text-lg text-[#ff6a00] mb-2">Proven Track Record</h3>
              <p className="text-sm text-gray-600">Trusted by startups and enterprises for consistent delivery and reliability.</p>
            </div>
            <div className="max-w-xs p-6 border border-purple-200 rounded-lg bg-purple-50">
              <h3 className="font-semibold text-lg text-[#ff6a00] mb-2">Customer-Centric</h3>
              <p className="text-sm text-gray-600">We work as an extension of your team, aligned with your mission and goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
