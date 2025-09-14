import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 60px 0 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  h3 {
    color: #fff;
    font-size: 1.3rem;
    margin-bottom: 20px;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 2px;
      background: linear-gradient(90deg, #0072ff, #00c6ff);
      
      @media (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  
  p {
    margin-bottom: 15px;
    color: #bbb;
    line-height: 1.6;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 12px;
    
    a {
      color: #bbb;
      text-decoration: none;
      transition: color 0.3s;
      display: inline-block;
      
      &:hover {
        color: #0072ff;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s;
  
  &:hover {
    background: linear-gradient(90deg, #0072ff, #00c6ff);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 40px;
  margin-top: 40px;
  border-top: 1px solid #333;
  color: #999;
  font-size: 0.9rem;
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #25d366;
    opacity: 0.6;
    animation: pulse 2s infinite;
    z-index: -1;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    70% {
      transform: scale(1.3);
      opacity: 0;
    }
    100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterColumn>
            <h3>Escritório Emerson Fonseca</h3>
            <p>Atuamos com advocacia especializada, oferecendo atendimento personalizado e soluções jurídicas eficazes para nossos clientes.</p>
            <SocialLinks>
              <SocialIcon href="https://www.facebook.com/people/Emerson-Fonseca/100093203257596/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/emerson-fonseca-018ab555/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/emersonfonseca.advogado/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="https://wa.me/5516997445634" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </SocialIcon>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <h3>Links Rápidos</h3>
            <FooterLinks>
              <li><a href="#">Home</a></li>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <h3>Contato</h3>
            <p><FaMapMarkerAlt /> Major José Inácio, 2050, Sala 403<br />São Carlos - SP, CEP 13560-901</p>
            <p><FaPhone /> +55 16 99744-5634</p>
            <p><FaEnvelope /> emerson@advocacia.com.br</p>
          </FooterColumn>
        </FooterContent>

        <Copyright>
          <p>&copy; {currentYear} Escritório Emerson Fonseca. Todos os direitos reservados.</p>
        </Copyright>
      </FooterContainer>

      <WhatsAppButton 
        href="https://wa.me/5516997445634?text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20do%20Escrit%C3%B3rio." 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp />
      </WhatsAppButton>
    </>
  );
};

export default Footer;
