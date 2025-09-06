import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #0072ff, #00c6ff);
  }
`;

const ContactDescription = styled(motion.p)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px;
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;

const ContactContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactForm = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 40px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #0072ff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #0072ff;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #0072ff, #00c6ff);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 114, 255, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
  min-width: 300px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: #0072ff;
  margin-right: 15px;
  margin-top: 5px;
`;

const InfoContent = styled.div`
  h4 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 5px;
  }
  
  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
`;

const ContactMap = styled(motion.div)`
  width: 100%;
  height: 400px;
  margin-top: 60px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });
  
  useEffect(() => {
    // Inicializar EmailJS com a chave pública das variáveis de ambiente
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verificar se as variáveis de ambiente estão configuradas
    if (
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY === 'your_public_key' ||
      import.meta.env.VITE_EMAILJS_SERVICE_ID === 'your_service_id' ||
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID === 'your_template_id'
    ) {
      setFormStatus({
        submitted: true,
        success: false,
        loading: false,
        message: 'Erro de configuração: As chaves do EmailJS não foram configuradas. Por favor, configure o arquivo .env conforme as instruções no README-EMAILJS.md.'
      });
      console.error('Erro de configuração: As chaves do EmailJS não foram configuradas.');
      return;
    }
    
    setFormStatus({
      ...formStatus,
      loading: true
    });
    
    // Preparar template parameters para o EmailJS
    const templateParams = {
      to_name: 'Escritório ProContábil', // Nome do destinatário
      reply_to: formData.email, // Email para resposta
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      // Campos adicionais para o template de contabilidade
      // Estes campos podem ser preenchidos dinamicamente ou deixados em branco
      // para serem preenchidos manualmente no EmailJS
      dia: '',
      horario: '',
      contador: 'DORIVALDO Antonio Silveira'
    };
    
    // Enviar e-mail usando EmailJS com as variáveis de ambiente
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    )
    .then((response) => {
      console.log('E-mail enviado com sucesso!', response);
      setFormStatus({
        submitted: true,
        success: true,
        loading: false,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          loading: false,
          message: ''
        });
      }, 5000);
    })
    .catch((error) => {
      console.error('Erro ao enviar e-mail:', error);
      setFormStatus({
        submitted: true,
        success: false,
        loading: false,
        message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
      });
    });
  };

  return (
    <ContactSection id="contato">
      <ContactContainer>
        <ContactTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Entre em Contato
        </ContactTitle>
        
        <ContactDescription
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Estamos prontos para atender às suas necessidades contábeis. Entre em contato conosco para agendar uma consulta ou tirar suas dúvidas.
        </ContactDescription>
        
        <ContactContent>
          <ContactForm
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Nome Completo</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="phone">Telefone</Label>
                <Input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="subject">Assunto</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Mensagem</Label>
                <TextArea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={formStatus.loading}>
                {formStatus.loading ? 'Enviando...' : 'Enviar Mensagem'}
              </SubmitButton>
              
              {formStatus.submitted && (
                <div style={{ 
                  marginTop: '20px', 
                  padding: '10px', 
                  backgroundColor: formStatus.success ? '#d4edda' : '#f8d7da',
                  color: formStatus.success ? '#155724' : '#721c24',
                  borderRadius: '5px',
                  textAlign: 'center'
                }}>
                  {formStatus.message}
                </div>
              )}
            </Form>
          </ContactForm>
          
          <ContactInfo
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <InfoItem>
              <InfoIcon>
                <FaPhone />
              </InfoIcon>
              <InfoContent>
                <h4>Telefone</h4>
                <p>(16) 9 9601 0779</p>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FaEnvelope />
              </InfoIcon>
              <InfoContent>
                <h4>E-mail</h4>
                <p>dorivaldo@procontabil.net.br</p>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FaMapMarkerAlt />
              </InfoIcon>
              <InfoContent>
                <h4>Endereço</h4>
                <p>Av. São Carlos 2205, 2º andar, sala 205</p>
                <p>São Carlos - SP, CEP 13560-900</p>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
        </ContactContent>
        
        <ContactMap
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.702587572868!2d-47.89478692386119!3d-22.00538847919365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8768b3e2d4d6d%3A0x5f2c4f38b61f3c93!2sAv.%20S%C3%A3o%20Carlos%2C%202205%20-%205%C2%BA%20Andar%2C%20Sala%20205%20-%20Centro%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013560-900!5e0!3m2!1spt-BR!2sbr!4v1725614050000!5m2!1spt-BR!2sbr"
            allowFullScreen="" 
            loading="lazy"
            title="Localização do Escritório ProContábil"
          ></iframe>
        </ContactMap>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;