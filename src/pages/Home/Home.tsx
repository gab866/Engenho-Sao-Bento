import Hero from '../../components/Hero/Hero';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import RecipesCarousel from '../../components/RecipesCarousel/RecipesCarousel';
import CTASection from '../../components/CTASection/CTASection';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <WhyChoose />
      <RecipesCarousel />
      <CTASection />
    </div>
  );
};

export default Home;
