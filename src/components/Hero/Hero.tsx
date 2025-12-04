import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.scss';
import heroImage1 from '../../assets/images/hero-1.png';
import heroImage2 from '../../assets/images/hero-2.png';
import heroImage3 from '../../assets/images/hero-3.png';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: heroImage1,
    title: 'A Tradição do Campo à Sua Mesa',
    subtitle: 'Produtos de qualidade superior, cultivados com dedicação e respeito à natureza',
    ctaText: 'Conheça Nossos Produtos',
    ctaLink: '#produtos',
  },
  {
    id: 2,
    image: heroImage2,
    title: 'Tecnologia e Qualidade',
    subtitle: 'Processos modernos que garantem a excelência em cada grão',
    ctaText: 'Nossa História',
    ctaLink: '#sobre',
  },
  {
    id: 3,
    image: heroImage3,
    title: 'Grãos Selecionados',
    subtitle: 'Seleção rigorosa para levar o melhor da natureza até você',
    ctaText: 'Ver Receitas',
    ctaLink: '#receitas',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero__slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero__overlay"></div>
          <div className="hero__content">
            <h1 className="hero__title">{slide.title}</h1>
            <p className="hero__subtitle">{slide.subtitle}</p>
            <a href={slide.ctaLink} className="hero__cta btn btn-primary">
              {slide.ctaText}
            </a>
          </div>
        </div>
      ))}

      <button
        className="hero__arrow hero__arrow--left"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        className="hero__arrow hero__arrow--right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      <div className="hero__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero__dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
