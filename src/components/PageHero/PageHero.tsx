import './PageHero.scss';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="page-hero__overlay"></div>
      <div className="page-hero__content">
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHero;
