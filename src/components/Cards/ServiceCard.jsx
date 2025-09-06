import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

const CardTitle = styled.h3`
  color: #0056b3;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const CardDescription = styled.p`
  color: #333;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const CardButton = styled.a`
  background: #0056b3;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #003d82;
    transform: scale(1.05);
  }
`;

const ServiceCard = ({ title, description, buttonText, buttonLink }) => {
  return (
    <CardContainer
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
      {buttonText && (
        <CardButton href={buttonLink}>{buttonText}</CardButton>
      )}
    </CardContainer>
  );
};

export default ServiceCard;