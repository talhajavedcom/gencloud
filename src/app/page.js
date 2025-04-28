import HeroSection from '../components/HeroSection';
import FocusIndustries from '../components/FocusIndustries';
import WhyGenClouds from '../components/WhyGenClouds';
import WhyCompanies from '../components/WhyCompanies';
import ScaleAcross from '../components/ScaleAcross';
import Services from '../components/Services';
import Tools from '../components/Tools';
import Testimonials from '../components/Testimonials';
import AwsPartner from '../components/AwsPartner'

const Home = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AwsPartner/>
      <FocusIndustries />
      <WhyGenClouds />
      <WhyCompanies />
      <ScaleAcross />
      <Services />
      <Tools />
      <Testimonials />
    </main>
  );
};

export default Home;
