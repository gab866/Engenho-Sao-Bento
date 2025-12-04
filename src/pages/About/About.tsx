import PageHero from '../../components/PageHero/PageHero';
import History from '../../components/History/History';
import MissionVisionValues from '../../components/MissionVisionValues/MissionVisionValues';
import Timeline from '../../components/Timeline/Timeline';
import Certifications from '../../components/Certifications/Certifications';
import CTASection from '../../components/CTASection/CTASection';
import './About.scss';
import factoryImg from '../../assets/images/factory-exterior.png';

const About = () => {
  return (
    <div className="about-page">
      <PageHero
        title="Nossa História"
        subtitle="Mais de 50 anos cultivando tradição e qualidade"
        backgroundImage={factoryImg}
      />
      <History />
      <MissionVisionValues />
      <Timeline />
      <Certifications />
      <CTASection />
    </div>
  );
};

export default About;
