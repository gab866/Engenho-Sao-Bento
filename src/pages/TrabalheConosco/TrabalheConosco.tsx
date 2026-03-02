import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast, Toaster } from 'sonner';
import { Upload } from 'lucide-react';
import PageHero from '../../components/PageHero/PageHero';
import estruturaImage from '../../assets/images/estrutura.JPEG';
import './TrabalheConosco.scss';

// Zod validation schema
const formSchema = z.object({
  Nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100, 'Nome muito longo'),
  Email: z.string().email('Email inválido').max(255, 'Email muito longo'),
  Telefone: z.string().min(10, 'Telefone inválido').max(20, 'Telefone inválido'),
  Vaga: z.string().min(3, 'Informe a posição de interesse').max(100, 'Texto muito longo'),
  Mensagem: z.string().max(1000, 'Mensagem muito longa').optional(),
});

type FormData = z.infer<typeof formSchema>;

const TrabalheConosco = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
      ];

      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
      } else {
        toast.error('Formato não suportado', {
          description: 'Envie apenas arquivos PDF ou DOCX',
        });
        e.target.value = '';
      }
    }
  };

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    // Como estamos lidando com envio de currículos (arquivos), o FormSubmit 
    // exige que seja um formulário tradicional e não permite envio por AJAX.
    // Para contornar e não sair da página, enviamos para um iframe oculto.
    if (formRef.current) {
      setIsUploading(true);
      toast.loading('Enviando seu currículo e informações...', { id: 'uploading' });
      formRef.current.submit();
    }
  };

  const handleIframeLoad = () => {
    // Quando o iframe oculto terminar de carregar, significa que a página 
    // "Thank You" do FormSubmit carregou por baixo dos panos e a submissão finalizou!
    if (isUploading) {
      setIsUploading(false);
      toast.dismiss('uploading');
      toast.success('Currículo enviado com sucesso!', {
        description: 'Agradecemos o seu interesse. Em breve entraremos em contato.',
      });
      // Limpar formulário na tela
      reset();
      formRef.current?.reset();
      setSelectedFile(null);
    }
  };

  const benefits = [
    'Plano de saúde e odontológico',
    'Vale refeição e alimentação',
    'Vale transporte',
    'Programa de treinamento e desenvolvimento',
    'Participação nos resultados',
    'Ambiente colaborativo e inclusivo',
  ];

  return (
    <div className="trabalhe-conosco">
      <Toaster position="top-right" richColors />

      {/* Hero Section */}
      <PageHero
        title="Trabalhe Conosco"
        subtitle="Faça parte de uma equipe dedicada à excelência e tradição"
        backgroundImage={estruturaImage}
      />

      {/* Main Content Section */}
      <section className="trabalhe-conosco__content">
        <div className="trabalhe-conosco__container">
          {/* Left Column - Information */}
          <div className="trabalhe-conosco__info">
            <h2 className="trabalhe-conosco__section-title">Junte-se à Nossa Equipe</h2>

            <div className="trabalhe-conosco__text">
              <p>
                No Engenho São Bento, acreditamos que nossos colaboradores são o coração da
                empresa. Buscamos profissionais apaixonados, comprometidos e que compartilhem
                nossos valores de qualidade, integridade e excelência.
              </p>
              <p>
                Oferecemos um ambiente de trabalho estimulante, oportunidades de crescimento
                profissional e um pacote competitivo de benefícios.
              </p>
            </div>

            <div className="trabalhe-conosco__benefits">
              <h3 className="trabalhe-conosco__benefits-title">Benefícios</h3>
              <ul className="trabalhe-conosco__benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="trabalhe-conosco__benefit-item">
                    <span className="trabalhe-conosco__benefit-indicator"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="trabalhe-conosco__form-wrapper">
            <div className="trabalhe-conosco__card">
              <div className="trabalhe-conosco__card-header">
                <h3 className="trabalhe-conosco__card-title">Envie seu Currículo</h3>
                <p className="trabalhe-conosco__card-description">
                  Preencha o formulário abaixo e anexe seu currículo
                </p>
              </div>

              <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: 'none' }}
                onLoad={handleIframeLoad}
              ></iframe>

              <form 
                ref={formRef}
                target="hidden_iframe"
                action="https://formsubmit.co/curriculo@esbento.com.br"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit(onSubmit)} 
                className="trabalhe-conosco__form"
              >
                {/* Substitua o email acima pelo email do Engenho São Bento */}
                <input type="hidden" name="_subject" value="Novo currículo - Trabalhe Conosco Engenho São Bento" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                {/* Name Field */}
                <div className="trabalhe-conosco__form-field">
                  <label htmlFor="name" className="trabalhe-conosco__label">
                    Nome Completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    className="trabalhe-conosco__input"
                    {...register('Nome')}
                  />
                  {errors.Nome && (
                    <p className="trabalhe-conosco__error">{errors.Nome.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="trabalhe-conosco__form-field">
                  <label htmlFor="email" className="trabalhe-conosco__label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="trabalhe-conosco__input"
                    {...register('Email')}
                  />
                  {errors.Email && (
                    <p className="trabalhe-conosco__error">{errors.Email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="trabalhe-conosco__form-field">
                  <label htmlFor="phone" className="trabalhe-conosco__label">
                    Telefone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="(00) 00000-0000"
                    className="trabalhe-conosco__input"
                    {...register('Telefone')}
                  />
                  {errors.Telefone && (
                    <p className="trabalhe-conosco__error">{errors.Telefone.message}</p>
                  )}
                </div>

                {/* Position Field */}
                <div className="trabalhe-conosco__form-field">
                  <label htmlFor="position" className="trabalhe-conosco__label">
                    Posição de Interesse
                  </label>
                  <input
                    id="position"
                    type="text"
                    placeholder="Ex: Assistente Administrativo"
                    className="trabalhe-conosco__input"
                    {...register('Vaga')}
                  />
                  {errors.Vaga && (
                    <p className="trabalhe-conosco__error">{errors.Vaga.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="trabalhe-conosco__form-field">
                  <label htmlFor="message" className="trabalhe-conosco__label">
                    Mensagem (Opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Conte-nos um pouco sobre você..."
                    className="trabalhe-conosco__textarea"
                    {...register('Mensagem')}
                  />
                  {errors.Mensagem && (
                    <p className="trabalhe-conosco__error">{errors.Mensagem.message}</p>
                  )}
                </div>

                {/* File Upload */}
                <div className="trabalhe-conosco__form-field">
                  <label htmlFor="resume-upload" className="trabalhe-conosco__label">
                    Currículo (PDF ou DOCX)
                  </label>
                  <label htmlFor="resume-upload" className="trabalhe-conosco__upload-area">
                    <Upload className="trabalhe-conosco__upload-icon" />
                    <span className="trabalhe-conosco__upload-text">
                      {selectedFile ? selectedFile.name : 'Clique para selecionar'}
                    </span>
                  </label>
                  <input
                    id="resume-upload"
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="trabalhe-conosco__file-input"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="trabalhe-conosco__submit-btn" 
                  disabled={isSubmitting || isUploading}
                >
                  {isSubmitting || isUploading ? 'Enviando Currículo...' : 'Enviar Candidatura'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrabalheConosco;
