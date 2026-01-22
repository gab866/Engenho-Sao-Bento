import PageHero from '../../components/PageHero/PageHero';
import History from '../../components/History/History';
import MissionVisionValues from '../../components/MissionVisionValues/MissionVisionValues';
import Processes from '../../components/Processes/Processes';
import CTASection from '../../components/CTASection/CTASection';
import './About.scss';
import factoryImg from '../../assets/images/engenho.JPEG';

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
      <Processes />
      <CTASection />
    </div>
  );
};

export default About;
