'use client';
import Image from 'next/image';
import caseStudy from '../../assets/casestudies.jpeg';

const CaseStudiesPage = () => {
  return (
    <section className="px-4 py-16 pt-30 md:px-8">
      <div className="mx-auto text-center max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">Our Case Studies</h1>
        <p className="mb-16 text-xl text-gray-600">
          Discover how we’ve transformed businesses and helped them achieve remarkable results through tailored solutions.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
            <Image src={caseStudy} alt="Case Study 1" className="object-cover w-full h-48" width={300} height={300} />
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Case Study 1: E-Commerce Optimization</h2>
              <p className="mb-4 text-lg text-gray-600">
                We helped an e-commerce brand increase sales by 40% through targeted marketing strategies and platform optimizations.
              </p>
              <a href="#" className="font-semibold text-blue-600 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
            <Image src={caseStudy} alt="Case Study 2" className="object-cover w-full h-48" width={300} height={300} />
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Case Study 2: Digital Transformation for Enterprises</h2>
              <p className="mb-4 text-lg text-gray-600">
                Our team helped a traditional enterprise implement a digital-first strategy, improving operational efficiency by 30%.
              </p>
              <a href="#" className="font-semibold text-blue-600 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
            <Image src={caseStudy} alt="Case Study 3" className="object-cover w-full h-48" width={300} height={300} />
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Case Study 3: Customer Experience Enhancement</h2>
              <p className="mb-4 text-lg text-gray-600">
                We helped improve the customer experience for a retail brand, resulting in a 50% increase in customer retention.
              </p>
              <a href="#" className="font-semibold text-blue-600 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
            <Image src={caseStudy} alt="Case Study 4" className="object-cover w-full h-48" width={300} height={300} />
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Case Study 4: Marketing Strategy Revamp</h2>
              <p className="mb-4 text-lg text-gray-600">
                Our targeted marketing campaigns increased conversions by 20% for a major retail client within 3 months.
              </p>
              <a href="#" className="font-semibold text-blue-600 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
              <Image src={caseStudy} alt="Case Study 5" className="object-cover w-full h-48" width={300} height={300} />
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Case Study 5: Cloud Migration and Optimization</h2>
              <p className="mb-4 text-lg text-gray-600">
                We migrated a large enterprise to the cloud, improving scalability and reducing operational costs by 25%.
              </p>
              <a href="#" className="font-semibold text-blue-600 hover:underline">
                Read more
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
            <Image src={caseStudy} alt="Case Study 6" className="object-cover w-full h-48" width={300} height={300} />
            <div className="p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Case Study 6: Data-Driven Insights for Growth</h2>
              <p className="mb-4 text-lg text-gray-600">
                Using data analytics, we helped a startup uncover key insights to accelerate their growth by 50%.
              </p>
              <a href="#" className="font-semibold text-blue-600 hover:underline">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPage;
