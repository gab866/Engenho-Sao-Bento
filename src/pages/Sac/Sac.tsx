import { useState } from 'react';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import './Sac.scss';

const faqs = [
  {
    question: 'Como posso rastrear meu pedido?',
    answer: 'Atualmente, as informações de rastreio são enviadas diretamente para o seu e-mail logo após a confirmação do despacho pelos nossos parceiros logísticos.',
  },
  {
    question: 'Quais são os canais de atendimento disponíveis?',
    answer: 'Você pode entrar em contato conosco através do telefone +55 (53) 3025-3500 ou pelo e-mail contato@engenhosaobento.com.br.',
  },
  {
    question: 'Onde encontro os produtos do Engenho São Bento?',
    answer: 'Nossos produtos estão disponíveis nas principais redes de supermercados em todo o Brasil. Você também pode consultar a aba Produtos para mais detalhes.',
  },
  {
    question: 'Qual é a política de trocas e devoluções?',
    answer: 'Caso algum de nossos produtos apresente avaria, entre em contato imediatamente com o nosso SAC portando o lote e a data de validade do produto para realizarmos a substituição.',
  },
];

const Sac = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  return (
    <div className="sac">
      {/* Hero Section */}
      <section className="sac__hero">
        <div className="sac__hero-content">
          <h1 className="sac__hero-title">Serviço de Atendimento ao Consumidor</h1>
          <p className="sac__hero-subtitle">
            Estamos aqui para ouvir você. Tire suas dúvidas, envie sugestões ou reclamações.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="sac__content">
        <div className="sac__container">
          
          <div className="sac__info">
            <h2 className="sac__section-title">Fale Conosco</h2>
            
            <div className="sac__contact-details">
              <div className="sac__contact-item">
                <Phone className="sac__contact-icon" size={24} />
                <div>
                  <h4 className="sac__contact-label">Telefone</h4>
                  <p className="sac__contact-value">+55 (53) 3025-3500</p>
                </div>
              </div>
              
              <div className="sac__contact-item">
                <Mail className="sac__contact-icon" size={24} />
                <div>
                  <h4 className="sac__contact-label">E-mail</h4>
                  <p className="sac__contact-value">contato@engenhosaobento.com.br</p>
                </div>
              </div>
              
              <div className="sac__contact-item">
                <MapPin className="sac__contact-icon" size={24} />
                <div>
                  <h4 className="sac__contact-label">Endereço</h4>
                  <p className="sac__contact-value">Pelotas - RS - Brasil</p>
                </div>
              </div>
            </div>

            <div className="sac__faq">
              <h3 className="sac__faq-title">Perguntas Frequentes</h3>
              <div className="sac__faq-list">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`sac__faq-item ${openFaqIndex === index ? 'open' : ''}`}
                  >
                    <button 
                      className="sac__faq-question" 
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      {openFaqIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openFaqIndex === index && (
                      <div className="sac__faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Sac;
