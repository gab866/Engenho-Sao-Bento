import PageHero from '../../components/PageHero/PageHero';
import BrandShowcase from '../../components/BrandShowcase/BrandShowcase';
import CTASection from '../../components/CTASection/CTASection';
import { brands } from '../../data/brandsData';
import productsHeroImage from '../../assets/images/produtos.JPEG';
import './Products.scss';

const Products = () => {
  return (
    <div className="products-page">
      <PageHero
        title="Nossas Marcas"
        subtitle="Tradição, qualidade e inovação em cada produto"
        backgroundImage={productsHeroImage}
      />

      <div className="products-page__intro section">
        <div className="container">
          <div className="products-page__intro-content">
            <h2>Três Marcas, Uma Mesma Dedicação</h2>
            <p>
              No Engenho São Bento, desenvolvemos três marcas distintas para atender 
              diferentes necessidades e perfis de consumidores. Cada uma carrega nosso 
              compromisso com a qualidade, mas com propostas únicas que refletem 
              tradição, premium e especialidade.
            </p>
          </div>
        </div>
      </div>

      {brands.map((brand, index) => (
        <BrandShowcase
          key={brand.id}
          brand={brand}
          imagePosition={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}

      <CTASection />
    </div>
  );
};

export default Products;
