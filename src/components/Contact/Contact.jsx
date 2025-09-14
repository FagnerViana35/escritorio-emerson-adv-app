import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

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
  justify-content: center; /* centraliza horizontalmente */

  @media (max-width: 768px) {
    flex-direction: column;
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
  flex-direction: column; /* ícone em cima do texto */
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;

const InfoIcon = styled.div`
  font-size: 2rem;
  color: #0072ff;
  margin-bottom: 10px; /* espaço entre ícone e texto */
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h4 {
    font-size: 1.2rem;
    color: #333;
  }

  a {
    font-size: 1rem;
    color: #0072ff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #00c6ff;
    }
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.4;
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
          Estamos prontos para atender às suas necessidades jurídicas. Escolha a forma mais conveniente para falar conosco:
        </ContactDescription>

        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <InfoItem>
              <InfoIcon><FaPhone /></InfoIcon>
              <InfoContent>
                <h4>Telefone</h4>
                <a href="tel:+5516997445634">+55 16 99744-5634</a>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon><FaWhatsapp /></InfoIcon>
              <InfoContent>
                <h4>WhatsApp</h4>
                <a href="https://wa.me/5516997445634" target="_blank" rel="noopener noreferrer">
                  Clique para enviar mensagem
                </a>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon><FaLinkedin /></InfoIcon>
              <InfoContent>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/emerson-fonseca-018ab555/" target="_blank" rel="noopener noreferrer">
                  Emerson Fonseca
                </a>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon><FaFacebook /></InfoIcon>
              <InfoContent>
                <h4>Facebook</h4>
                <a href="https://www.facebook.com/people/Emerson-Fonseca/100093203257596/" target="_blank" rel="noopener noreferrer">
                  Emerson Fonseca
                </a>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon><FaInstagram /></InfoIcon>
              <InfoContent>
                <h4>Instagram</h4>
                <a href="https://www.instagram.com/emersonfonseca.advogado/" target="_blank" rel="noopener noreferrer">
                  @emersonfonseca.advogado
                </a>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon><FaMapMarkerAlt /></InfoIcon>
              <InfoContent>
                <h4>Endereço</h4>
                <p>Major José Inácio, 2050, Sala 403</p>
                <p>São Carlos - SP, CEP 13560-901</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.646058851736!2d-47.89749512386113!3d-21.99978657920359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8769201234567%3A0xabcdef1234567890!2sMajor%20Jos%C3%A9%20In%C3%A1cio%2C%202050%20-%20403%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013560-901!5e0!3m2!1spt-BR!2sbr!4v1725614050000!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            title="Localização do Escritório"
          ></iframe>
        </ContactMap>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
