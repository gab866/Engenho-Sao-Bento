import { Download } from 'lucide-react';
import './Downloads.scss';

interface DownloadItem {
  id: number;
  name: string;
  description: string;
  fileName: string;
  type: string;
  brand: string;
}

const Downloads = () => {
  // Array com os 17 arquivos disponíveis para download organizados por marca
  const downloadItems: DownloadItem[] = [
    // História do Engenho
    {
      id: 1,
      name: 'História do Engenho',
      description: 'Conheça a história do Engenho São Bento',
      fileName: 'Panfleto História Engenho - 1.png',
      type: 'Imagem',
      brand: 'Engenho São Bento'
    },
    
    // Blue Vale
    {
      id: 2,
      name: 'Panfleto Blue Vale',
      description: 'Material promocional da linha Blue Vale',
      fileName: 'Panfleto Blue Vale.pdf',
      type: 'PDF',
      brand: 'Blue Vale'
    },
    {
      id: 3,
      name: 'Blue Vale Branco 1kg - Frente',
      description: 'Mockup da embalagem Blue Vale Branco (frente)',
      fileName: 'Blue Vale BRANCO_1kg_mockup_FRENTE.png',
      type: 'Imagem',
      brand: 'Blue Vale'
    },
    {
      id: 4,
      name: 'Blue Vale Branco 1kg - Traseira',
      description: 'Mockup da embalagem Blue Vale Branco (traseira)',
      fileName: 'Blue Vale BRANCO_1kg_mockup_TRASEIRA.png',
      type: 'Imagem',
      brand: 'Blue Vale'
    },
    {
      id: 5,
      name: 'Blue Vale Integral 1kg - Frente',
      description: 'Mockup da embalagem Blue Vale Integral (frente)',
      fileName: 'Blue Vale INTEGRAL_1kg_mockup_FRENTE.png',
      type: 'Imagem',
      brand: 'Blue Vale'
    },
    {
      id: 6,
      name: 'Blue Vale Integral 1kg - Traseira',
      description: 'Mockup da embalagem Blue Vale Integral (traseira)',
      fileName: 'Blue Vale INTEGRAL_1kg_mockup_TRASEIRA.png',
      type: 'Imagem',
      brand: 'Blue Vale'
    },
    {
      id: 7,
      name: 'Blue Vale Parboilizado 1kg - Frente',
      description: 'Mockup da embalagem Blue Vale Parboilizado (frente)',
      fileName: 'Blue Vale PARBOILIZADO_1kg_mockup_FRENTE.png',
      type: 'Imagem',
      brand: 'Blue Vale'
    },
    {
      id: 8,
      name: 'Blue Vale Parboilizado 1kg - Traseira',
      description: 'Mockup da embalagem Blue Vale Parboilizado (traseira)',
      fileName: 'Blue Vale PARBOILIZADO_1kg_mockup_TRASEIRA.png',
      type: 'Imagem',
      brand: 'Blue Vale'
    },
    {
      id: 9,
      name: 'Blue Vale Parboilizado',
      description: 'Imagem do produto Blue Vale Parboilizado',
      fileName: 'Mkp Blue Vale Parbo.jpeg',
      type: 'Imagem',
      brand: 'Blue Vale'
    },
    
    // Bem Caseiro
    {
      id: 10,
      name: 'Panfleto Bem Caseiro',
      description: 'Material promocional da linha Bem Caseiro',
      fileName: 'Panfleto Bem Caseiro.pdf',
      type: 'PDF',
      brand: 'Bem Caseiro'
    },
    {
      id: 11,
      name: 'Bem Caseiro Branco',
      description: 'Imagem do produto Bem Caseiro Branco',
      fileName: 'Mkp Bem Caseiro Branco.jpeg',
      type: 'Imagem',
      brand: 'Bem Caseiro'
    },
    {
      id: 12,
      name: 'Bem Caseiro Integral',
      description: 'Imagem do produto Bem Caseiro Integral',
      fileName: 'Mkp Bem Caseiro Integral.jpeg',
      type: 'Imagem',
      brand: 'Bem Caseiro'
    },
    
    // Elite
    {
      id: 13,
      name: 'Panfleto Elite',
      description: 'Material promocional da linha Elite',
      fileName: 'Panfleto Elite.pdf',
      type: 'PDF',
      brand: 'Elite'
    },
    {
      id: 14,
      name: 'Elite Parboilizado',
      description: 'Imagem do produto Elite Parboilizado',
      fileName: 'Mkp Elite Parbo.jpeg',
      type: 'Imagem',
      brand: 'Elite'
    },
    
    // Papita
    {
      id: 15,
      name: 'Papita Branco',
      description: 'Imagem do produto Papita Branco',
      fileName: 'papita branco.jpeg',
      type: 'Imagem',
      brand: 'Papita'
    },
    {
      id: 16,
      name: 'Papita Parboilizado 1kg',
      description: 'Imagem do produto Papita Parboilizado',
      fileName: 'Papita Parboilizado 1 kg.jpg.jpeg',
      type: 'Imagem',
      brand: 'Papita'
    },
    
    // Cachorroz
    {
      id: 17,
      name: 'Cachorroz 5kg',
      description: 'Imagem do produto Cachorroz 5kg',
      fileName: 'cachorroz 5 kg.png',
      type: 'Imagem',
      brand: 'Cachorroz'
    }
  ];

  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/downloads/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Agrupar por marca mantendo a ordem desejada
  const brandOrder = ['Engenho São Bento', 'Blue Vale', 'Bem Caseiro', 'Elite', 'Papita', 'Cachorroz'];
  const brands = brandOrder.filter(brand => 
    downloadItems.some(item => item.brand === brand)
  );

  return (
    <div className="downloads">
      <div className="downloads__hero">
        <div className="downloads__hero-content">
          <h1 className="downloads__title">Downloads</h1>
          <p className="downloads__subtitle">
            Baixe nossos materiais promocionais, imagens de produtos e mockups organizados por marca
          </p>
        </div>
      </div>

      <div className="downloads__container">
        {brands.map(brand => (
          <div key={brand} className="downloads__brand-section">
            <h2 className="downloads__brand-title">{brand}</h2>
            <div className="downloads__grid">
              {downloadItems
                .filter(item => item.brand === brand)
                .map(item => (
                  <div key={item.id} className="download-card">
                    <div className="download-card__icon">
                      <Download size={32} />
                    </div>
                    <div className="download-card__content">
                      <h3 className="download-card__name">{item.name}</h3>
                      <p className="download-card__description">{item.description}</p>
                      <div className="download-card__meta">
                        <span className="download-card__type">{item.type}</span>
                      </div>
                    </div>
                    <button
                      className="download-card__button"
                      onClick={() => handleDownload(item.fileName)}
                      aria-label={`Baixar ${item.name}`}
                    >
                      <Download size={20} />
                      <span>Baixar</span>
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Downloads;
