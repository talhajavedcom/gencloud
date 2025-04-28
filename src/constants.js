// focus industies
import retail from './assets/retail.svg';
import finance from './assets/finance.svg';
import hardware from './assets/hardware.webp';
//testimonial
import mike from './assets/mike.webp';
import paul from './assets/paul.webp';
import user from './assets/user.png';

export const features = [
  {
    title: 'Frictionless Development',
    description: 'Minimize developer toil with self-service access to fast, secure workflows and GitHub-style actions running on Tekton.',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Faster and Safer',
    description: 'Deliver software faster with built-in security and compliance checks at every stage of development and deployment.',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      </svg>
    ),
  },
  {
    title: 'Continuously Improved',
    description:
      'Be your best with constant feedback loops across the entire software delivery value stream — no more intelligence gaps and localized insight.',
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
      </svg>
    ),
  },
];

 export const testimonials = [
    {
      name: 'Mike Anderson',
      image: mike,
      rating: 5,
      text: 'GenCloud team was very professional and knowledgeable about their services. They helped our team improve our infrastructure in a very short period of time. We enjoyed working with them and would absolutely recommend them.',
    },
    {
      name: 'Paul Smith',
      image: paul,
      rating: 5,
      text: "I've never worked with a team who was so responsive and so efficient and so professional! GenCloud have done the job so quickly and efficiently, they were amazing.",
    },
    {
      name: 'John Cooper',
      image: user,
      rating: 5,
      text: 'GenCloud team was very skilled using AWS Admin. They helped us migrate to AWS. They were very impressive with how fast and diligent they worked. Extremely happy with GenCloud services.',
    },
  ];
export const stats = [
  {
    number: 'ISO',
    label: 'ISO-27001 enterprise-grade security compliant',
  },
  {
    number: '#1',
    label: 'Visual Collaboration Platform on G2',
  },
  {
    number: '99%',
    label: 'Success rate or effectiveness',
  },
  {
    number: '1,000+',
    label: 'Community- and expert templates',
  },
  {
    number: '45M+',
    label: 'Users around the world',
  },
  {
    number: '100+',
    label: 'Integrations with partners',
  },
];

export const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    title: 'AWS Cloud Management',
    description: 'Enhance performance, security, and cost-efficiency with our expert AWS Cloud Management service.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'AWS Migration',
    description:
      'Seamlessly migrate your infrastructure to AWS with our expert migration services, ensuring minimal downtime and maximum efficiency.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    title: 'AWS Modernization',
    description: 'Transform and future-proof your applications with our AWS Modernization service, enhancing scalability and performance.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Data Analytics',
    description: 'Unlock insights and drive decision-making with our advanced Data Analytics services on AWS.',
  },
];

export const industries = [
  {
    title: 'Retail',
    description: 'Tech-driven retail is transforming the way consumers engage with brands and shop both online and offline.',
    image: retail,
  },
  {
    title: 'Fintech',
    description: 'Fintech innovations simplify transactions, enhance security, and empower smarter financial decisions.',
    image: finance,
  },
  {
    title: 'Hardware',
    description: 'Cutting-edge hardware solutions ensure robust infrastructure, speed, and seamless digital experiences.',
    image: hardware,
  },
];