import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import fotoEmerson from '../../assets/foto_emerson.png';

const AboutSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(180deg, #0a0a0a, #111827);
  color: #fff;
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
  font-size: 3rem;
  color: #00f0ff;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
  text-shadow: 0 0 15px rgba(0, 240, 255, 0.6);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, #0072ff, #00f0ff);
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.7);
  }
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutText = styled(motion.div)`
  flex: 1;
  padding: 0 20px;

  p {
    font-size: 1.15rem;
    line-height: 1.9;
    color: #ddd;
    margin-bottom: 25px;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 40px;
  }
`;

const AboutImage = styled(motion.div)`
  flex: 1;
  padding: 0 20px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0, 240, 255, 0.25);
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: translateY(-10px) scale(1.05);
      box-shadow: 0 25px 60px rgba(0, 240, 255, 0.45);
    }
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
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Sobre Nós
        </AboutTitle>

        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p>
              Fundado para oferecer <strong>soluções jurídicas inovadoras e tecnológicas</strong>, o Escritório Emerson Fonseca combina <strong>precisão, agilidade e atendimento humanizado</strong>. Utilizamos ferramentas digitais avançadas, proporcionando processos mais seguros e estratégicos.
            </p>
            <p>
              Nossa equipe alia <strong>expertise jurídica</strong> com <strong>metodologias modernas</strong>, analisando cada caso com inteligência aplicada, garantindo soluções personalizadas que antecipam desafios e otimizam resultados.
            </p>
            <p>
              Construímos uma reputação sólida baseada em <strong>confiança, integridade e inovação</strong>, integrando práticas jurídicas tradicionais às mais modernas tecnologias para potencializar cada atendimento.
            </p>
            <p>
              Nosso compromisso vai além de oferecer serviços jurídicos: buscamos <strong>transformar a experiência do cliente</strong> com transparência, eficiência e resultados consistentes, fortalecendo relações duradouras e seguras.
            </p>
          </AboutText>

          <AboutImage
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src={fotoEmerson}
              alt="Equipe do Escritório Emerson Fonseca"
            />
          </AboutImage>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;