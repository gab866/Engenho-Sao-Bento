import Hero from '../../components/Hero/Hero';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import RecipeOfMonth from '../../components/RecipeOfMonth/RecipeOfMonth';
import Certifications from '../../components/Certifications/Certifications';
import CTASection from '../../components/CTASection/CTASection';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <WhyChoose />
      <RecipeOfMonth />
      <Certifications />
      <CTASection />
    </div>
  );
};

export default Home;
