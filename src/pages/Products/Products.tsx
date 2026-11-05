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
