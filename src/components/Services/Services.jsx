import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaBriefcase, FaCalculator, FaChartLine, FaFileContract, FaFileInvoiceDollar, FaGavel, FaHandshake, FaLaptop, FaShieldAlt, FaUsers, FaUserTie } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 80px 0;
  background-color: #fff;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ServicesTitle = styled(motion.h2)`
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

const ServicesDescription = styled(motion.p)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px;
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #0072ff;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: <FaBalanceScale />,
      title: 'Pensão Alimentícia',
      description: 'Atuação especializada em ações de fixação, revisão e execução de pensão alimentícia, assegurando o bem-estar, a saúde e o desenvolvimento das crianças e dependentes, sempre com base na legislação vigente e no equilíbrio das responsabilidades familiares.'
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: 'Família',
      description: 'O Direito de Família envolve questões delicadas e importantes, como divórcios, guarda de filhos, regulamentação de visitas, partilha de bens e adoção. Nosso trabalho busca soluções justas e humanizadas, sempre prezando pela proteção da família e pelo respeito aos vínculos afetivos.'

    },
    {
      id: 3,
      icon: <FaGavel />,
      title: 'Consumidor',
      description: 'Defesa dos direitos do consumidor em casos de cobranças indevidas, cláusulas abusivas, contratos irregulares, vícios de produtos ou serviços e indenizações por danos. O objetivo é garantir a proteção do cliente frente a práticas ilegais ou prejudiciais nas relações de consumo.'
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: 'Responsabilidade Civil',
      description: 'Atuação em processos que envolvem reparação de danos materiais e morais, acidentes, falhas em serviços ou produtos, e demais situações em que haja a obrigação de indenizar. Trabalhamos para que nossos clientes recebam a compensação justa pelos prejuízos sofridos.'
    },
    {
      id: 5,
      icon: <FaBriefcase />,
      title: 'Trabalhista',
      description: 'Assessoria completa em questões trabalhistas, como rescisões, horas extras, assédio, equiparação salarial, direitos de empregados e empregadores. Buscamos sempre soluções justas e alinhadas à legislação, prevenindo riscos e defendendo os interesses do cliente em juízo ou acordo.'
    },
    {
      id: 6,
      icon: <FaFileContract />,
      title: 'Análise de Desempenho',
      description: 'Avaliação detalhada dos indicadores financeiros e operacionais da sua empresa, identificando oportunidades de melhoria e estratégias para aumentar a rentabilidade do seu negócio.'
    }
  ];

  return (
    <ServicesSection id="servicos">
      <ServicesContainer>
        <ServicesTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Nossos Serviços
        </ServicesTitle>
        
        <ServicesDescription
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Oferecemos soluções contábeis completas e personalizadas para atender às necessidades específicas do seu negócio, garantindo conformidade legal e maximizando resultados.
        </ServicesDescription>
        
        <ServicesGrid>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;