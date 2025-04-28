'use client';
import Image from 'next/image';
import blog from '../../assets/blog.jpg';

const BlogPage = () => {
  return (
    <section className="px-4 py-16 pt-30 md:px-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
      <div className="mx-auto text-center max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 drop-shadow-lg">Our Blog</h1>
        <p className="max-w-2xl mx-auto mb-16 text-lg text-gray-700">
          Explore insights, trends, and strategies shaping the future of business and technology.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 transition-transform bg-white rounded-lg shadow-md bg-opacity-40 backdrop-blur-sm hover:scale-105">
            <Image src={blog} alt="Blog Post 1" className="object-cover w-full mb-4 rounded-lg h-36" width={300} height={300} />
            <h2 className="mb-2 text-lg font-semibold text-gray-800">Blog Post 1: E-Commerce Trends in 2025</h2>
            <p className="mb-4 text-sm text-gray-600">
              Discover the latest e-commerce trends and strategies shaping the online retail landscape in 2025.
            </p>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
              Read more
            </a>
          </div>

          <div className="p-4 transition-transform bg-white rounded-lg shadow-md bg-opacity-40 backdrop-blur-sm hover:scale-105">
            <Image src={blog} alt="Blog Post 2" className="object-cover w-full mb-4 rounded-lg h-36" width={300} height={300} />
            <h2 className="mb-2 text-lg font-semibold text-gray-800">Blog Post 2: Digital Transformation for Enterprises</h2>
            <p className="mb-4 text-sm text-gray-600">
              Learn how digital transformation is enhancing enterprise operations and strategies.
            </p>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
              Read more
            </a>
          </div>

          <div className="p-4 transition-transform bg-white rounded-lg shadow-md bg-opacity-40 backdrop-blur-sm hover:scale-105">
            <Image src={blog} alt="Blog Post 3" className="object-cover w-full mb-4 rounded-lg h-36" width={300} height={300} />
            <h2 className="mb-2 text-lg font-semibold text-gray-800">Blog Post 3: Enhancing Customer Experience with AI</h2>
            <p className="mb-4 text-sm text-gray-600">Explore how AI can help brands optimize customer service and improve satisfaction.</p>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
              Read more
            </a>
          </div>

          <div className="p-4 transition-transform bg-white rounded-lg shadow-md bg-opacity-40 backdrop-blur-sm hover:scale-105">
            <Image src={blog} alt="Blog Post 4" className="object-cover w-full mb-4 rounded-lg h-36" width={300} height={300} />
            <h2 className="mb-2 text-lg font-semibold text-gray-800">Blog Post 4: Social Media Marketing Best Practices</h2>
            <p className="mb-4 text-sm text-gray-600">Learn the most effective social media strategies to increase engagement and reach.</p>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
              Read more
            </a>
          </div>

          <div className="p-4 transition-transform bg-white rounded-lg shadow-md bg-opacity-40 backdrop-blur-sm hover:scale-105">
            <Image src={blog} alt="Blog Post 5" className="object-cover w-full mb-4 rounded-lg h-36" width={300} height={300} />
            <h2 className="mb-2 text-lg font-semibold text-gray-800">Blog Post 5: Cloud Migration Strategies</h2>
            <p className="mb-4 text-sm text-gray-600">
              Discover key strategies for successful cloud migration and infrastructure optimization.
            </p>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
              Read more
            </a>
          </div>

          <div className="p-4 transition-transform bg-white rounded-lg shadow-md bg-opacity-40 backdrop-blur-sm hover:scale-105">
            <Image src={blog} alt="Blog Post 6" className="object-cover w-full mb-4 rounded-lg h-36" width={300} height={300} />
            <h2 className="mb-2 text-lg font-semibold text-gray-800">Blog Post 6: Leveraging Data Analytics for Growth</h2>
            <p className="mb-4 text-sm text-gray-600">Learn how data analytics can help unlock growth and guide data-driven decisions.</p>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
