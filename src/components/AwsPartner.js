import Image from 'next/image';
// import awsPartner from '../assets/AWS-Partner.png';/
import awsPartnerSelect from '../assets/aws-ps.png';
import awsAIPractitioner from '../assets/aws-p.png';
import awsDeveloper from '../assets/aws-da.png';
import awsSolutionsArchitect from '../assets/aws-sa.png';
import upworkBadge from '../assets/upwork.png';
import {Cloud} from 'lucide-react';

const AwsPartner = () => {
  const certifications = [
    {
      image: awsPartnerSelect,
      alt: "AWS Partner Select Tier Services",
      title: "Partner Select Tier",
      description: "Official AWS Partner with proven expertise"
    },
    {
      image: awsAIPractitioner,
      alt: "AWS AI Practitioner",
      title: "AI Practitioner Foundational",
      description: "Certified in AI & Machine Learning"
    },
    {
      image: awsDeveloper,
      alt: "AWS Developer Associate",
      title: "Developer Associate",
      description: "Expert in AWS development services"
    },
    {
      image: awsSolutionsArchitect,
      alt: "AWS Solutions Architect",
      title: "Solutions Architect Associate",
      description: "Specialized in cloud architecture"
    },
    {
      image: upworkBadge,
      alt: "Upwork Top Rated Plus",
      title: "Top Rated Plus",
      description: "Highest rated cloud service provider"
    }
  ];

  return (
    <section className="relative w-full py-20">

      <div className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

      
          <div className="space-y-6 animate-fade-in">
            <p className="inline-flex items-center gap-2 text-xs uppercase font-semibold text-white bg-[#ff6a00] bg-opacity-80 px-4 py-1 rounded-full shadow">
              <Cloud size={20} className="text-blue-100" />
              AWS Certified Partner
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-xl bg-clip-text bg-gradient-to-r from-[#ff6a00] to-purple-400 text-transparent">
              Certified Excellence in
              <br />
              Cloud Solutions
            </h2>
            <p className="text-base font-medium text-gray-700 dark:text-gray-300 md:text-xl">
              Our AWS certifications demonstrate our expertise in delivering secure, 
              scalable, and innovative cloud solutions for businesses worldwide.
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-4">
                {certifications.slice(1, 4).map((cert, index) => (
                  <div key={index} className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
                    <Image
                      src={cert.image}
                      alt={cert.alt}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              <span className="text-[#ff6a00] dark:text-purple-400 font-semibold">Multiple AWS Certifications</span>
            </div>
          </div>
         
        </div>
      </div>

      {/* Certifications Grid Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-[#ff6a00] to-purple-400 text-transparent">
            Our AWS Certifications & Recognition
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Each certification represents our dedication to excellence in cloud computing
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div data-aos="zoom-in-up" 
              key={index} 
              className="group flex flex-col items-center p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 animate-fade-in"
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 mb-4">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 112px, 128px"
                />
              </div>
              <h4 className="text-center font-semibold text-[#ff6a00] dark:text-purple-400 mb-2">
                {cert.title}
              </h4>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 group-hover:opacity-100 transition-opacity duration-300">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwsPartner;
