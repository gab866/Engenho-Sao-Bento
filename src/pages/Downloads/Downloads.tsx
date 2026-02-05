import { Download } from 'lucide-react';
import './Downloads.scss';

interface DownloadItem {
  id: number;
  name: string;
  description: string;
  fileName: string;
  type: string;
}

const Downloads = () => {
  // Array com os 17 arquivos disponíveis para download
  const downloadItems: DownloadItem[] = [
    // Panfletos
    {
      id: 1,
      name: 'Panfleto Bem Caseiro',
      description: 'Material promocional da linha Bem Caseiro',
      fileName: 'Panfleto Bem Caseiro.pdf',
      type: 'PDF'
    },
    {
      id: 2,
      name: 'Panfleto Blue Vale',
      description: 'Material promocional da linha Blue Vale',
      fileName: 'Panfleto Blue Vale.pdf',
      type: 'PDF'
    },
    {
      id: 3,
      name: 'Panfleto Elite',
      description: 'Material promocional da linha Elite',
      fileName: 'Panfleto Elite.pdf',
      type: 'PDF'
    },
    {
      id: 4,
      name: 'História do Engenho',
      description: 'Conheça a história do Engenho São Bento',
      fileName: 'Panfleto História Engenho - 1.png',
      type: 'Imagem'
    },
    
    // Mockups Blue Vale - Frente
    {
      id: 5,
      name: 'Blue Vale Branco 1kg - Frente',
      description: 'Mockup da embalagem Blue Vale Branco (frente)',
      fileName: 'Blue Vale BRANCO_1kg_mockup_FRENTE.png',
      type: 'Imagem'
    },
    {
      id: 6,
      name: 'Blue Vale Integral 1kg - Frente',
      description: 'Mockup da embalagem Blue Vale Integral (frente)',
      fileName: 'Blue Vale INTEGRAL_1kg_mockup_FRENTE.png',
      type: 'Imagem'
    },
    {
      id: 7,
      name: 'Blue Vale Parboilizado 1kg - Frente',
      description: 'Mockup da embalagem Blue Vale Parboilizado (frente)',
      fileName: 'Blue Vale PARBOILIZADO_1kg_mockup_FRENTE.png',
      type: 'Imagem'
    },
    
    // Mockups Blue Vale - Traseira
    {
      id: 8,
      name: 'Blue Vale Branco 1kg - Traseira',
      description: 'Mockup da embalagem Blue Vale Branco (traseira)',
      fileName: 'Blue Vale BRANCO_1kg_mockup_TRASEIRA.png',
      type: 'Imagem'
    },
    {
      id: 9,
      name: 'Blue Vale Integral 1kg - Traseira',
      description: 'Mockup da embalagem Blue Vale Integral (traseira)',
      fileName: 'Blue Vale INTEGRAL_1kg_mockup_TRASEIRA.png',
      type: 'Imagem'
    },
    {
      id: 10,
      name: 'Blue Vale Parboilizado 1kg - Traseira',
      description: 'Mockup da embalagem Blue Vale Parboilizado (traseira)',
      fileName: 'Blue Vale PARBOILIZADO_1kg_mockup_TRASEIRA.png',
      type: 'Imagem'
    },
    
    // Mockups de Produtos
    {
      id: 11,
      name: 'Bem Caseiro Branco',
      description: 'Imagem do produto Bem Caseiro Branco',
      fileName: 'Mkp Bem Caseiro Branco.jpeg',
      type: 'Imagem'
    },
    {
      id: 12,
      name: 'Bem Caseiro Integral',
      description: 'Imagem do produto Bem Caseiro Integral',
      fileName: 'Mkp Bem Caseiro Integral.jpeg',
      type: 'Imagem'
    },
    {
      id: 13,
      name: 'Blue Vale Parboilizado',
      description: 'Imagem do produto Blue Vale Parboilizado',
      fileName: 'Mkp Blue Vale Parbo.jpeg',
      type: 'Imagem'
    },
    {
      id: 14,
      name: 'Elite Parboilizado',
      description: 'Imagem do produto Elite Parboilizado',
      fileName: 'Mkp Elite Parbo.jpeg',
      type: 'Imagem'
    },
    {
      id: 15,
      name: 'Papita Branco',
      description: 'Imagem do produto Papita Branco',
      fileName: 'papita branco.jpeg',
      type: 'Imagem'
    },
    {
      id: 16,
      name: 'Papita Parboilizado 1kg',
      description: 'Imagem do produto Papita Parboilizado',
      fileName: 'Papita Parboilizado 1 kg.jpg.jpeg',
      type: 'Imagem'
    },
    {
      id: 17,
      name: 'Cachorroz 5kg',
      description: 'Imagem do produto Cachorroz 5kg',
      fileName: 'cachorroz 5 kg.png',
      type: 'Imagem'
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

  return (
    <div className="downloads">
      <div className="downloads__hero">
        <div className="downloads__hero-content">
          <h1 className="downloads__title">Downloads</h1>
          <p className="downloads__subtitle">
            Baixe nossos materiais promocionais, imagens de produtos e mockups
          </p>
        </div>
      </div>

      <div className="downloads__container">
        <div className="downloads__grid">
          {downloadItems.map(item => (
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
    </div>
  );
};

export default Downloads;
