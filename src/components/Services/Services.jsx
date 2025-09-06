import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalculator, FaChartLine, FaFileInvoiceDollar, FaHandshake, FaLaptop, FaUserTie } from 'react-icons/fa';

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
      icon: <FaCalculator />,
      title: 'Contabilidade Empresarial',
      description: 'Serviços completos de contabilidade para empresas de todos os portes, incluindo classificação e registro de documentos, elaboração de demonstrações financeiras e relatórios gerenciais personalizados.'
    },
    {
      id: 2,
      icon: <FaFileInvoiceDollar />,
      title: 'Assessoria Fiscal e Tributária',
      description: 'Planejamento tributário estratégico, apuração e controle de impostos, preparação e revisão de obrigações acessórias, e orientação sobre benefícios fiscais disponíveis para o seu negócio.'
    },
    {
      id: 3,
      icon: <FaUserTie />,
      title: 'Departamento Pessoal',
      description: 'Gestão completa da folha de pagamento, admissões e demissões, férias, 13º salário, e todas as obrigações trabalhistas e previdenciárias para manter sua empresa em conformidade com a legislação.'
    },
    {
      id: 4,
      icon: <FaLaptop />,
      title: 'Contabilidade Digital',
      description: 'Soluções tecnológicas modernas para gestão contábil, incluindo sistemas em nuvem, integração com plataformas de gestão empresarial e acesso a informações em tempo real.'
    },
    {
      id: 5,
      icon: <FaHandshake />,
      title: 'Consultoria Empresarial',
      description: 'Orientação estratégica para tomada de decisões, análise de viabilidade de novos negócios, reestruturação empresarial e desenvolvimento de controles internos eficientes.'
    },
    {
      id: 6,
      icon: <FaChartLine />,
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