import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutTitle = styled(motion.h2)`
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

const AboutContent = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutText = styled(motion.div)`
  flex: 1;
  padding: 0 20px;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 20px;
  }
  
  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 30px;
  }
`;

const AboutImage = styled(motion.div)`
  flex: 1;
  padding: 0 20px;
  
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const About = () => {
  return (
    <AboutSection id="sobre">
      <AboutContainer>
        <AboutTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Sobre Nós
        </AboutTitle>
        
        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Fundado em 2010, o Escritório ProContábil nasceu com a missão de oferecer serviços contábeis de excelência para empresas de todos os portes. Nossa trajetória é marcada pelo compromisso com a ética, transparência e resultados consistentes para nossos clientes.
            </p>
            <p>
              Com uma equipe de profissionais altamente qualificados e em constante atualização, nos destacamos no mercado pela capacidade de aliar conhecimento técnico com atendimento personalizado, entendendo as necessidades específicas de cada negócio.
            </p>
            <p>
              Ao longo destes anos, construímos uma sólida reputação baseada na confiança e na entrega de soluções eficientes que contribuem para o crescimento sustentável das empresas que atendemos. Nossa abordagem combina métodos tradicionais com as mais modernas tecnologias disponíveis no mercado.
            </p>
          </AboutText>
          
          <AboutImage
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Equipe do Escritório ProContábil" />
          </AboutImage>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;