'use client';
import Image from 'next/image';
import { testimonials } from '@/constants';

const Testimonials = () => {

  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl dark:text-white">
            Feedback and <span className="text-purple-400">Testimonials</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-500 dark:text-gray-400">
            Discover what our clients say about their experience working with us and how we've helped them achieve their cloud
            infrastructure goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 border bg-white/5 dark:bg-gray-800/5 backdrop-blur-sm rounded-2xl border-gray-200/0 dark:border-gray-700/0 hover:border-purple-500/30 dark:hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-purple-400/5"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">{testimonial.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="leading-relaxed text-gray-400 dark:text-gray-300">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
