import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ServiceCard from '../Cards/ServiceCard';

const HeroContainer = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  color: #0056b3;
  font-size: 48px;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroP = styled.p`
  color: #333;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 35px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 32px;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Hero = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  const services = [
    {
      title: 'Abrimos sua empresa',
      description: 'Fechando um contrato anual com a Pró Contábil, o serviço de abertura da sua empresa é gratuito.',
      buttonText: 'Ver Mais',
      buttonLink: '#servicos',
    },
    {
      title: 'Cuidamos da sua Contabilidade',
      description: 'Realizamos toda a sua gestão contábil em tempo real e de forma consultiva com muita agilidade e transparência!',
      buttonText: '',
      buttonLink: '',
    },
    {
      title: 'Cuidamos da Gestão Financeira',
      description: 'Organizamos sua Gestão Financeira para você ter mais liberdade para empreender e menos esforço para crescer.',
      buttonText: 'Veja mais',
      buttonLink: '#servicos',
    },
  ];

  return (
    <HeroContainer id="home">
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroH1>Escritório de Contabilidade Pró Contábil</HeroH1>
          <HeroP>Soluções contábeis completas para o seu negócio</HeroP>
        </motion.div>
        <CardWrapper>
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                buttonLink={service.buttonLink}
              />
            </motion.div>
          ))}
        </CardWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;