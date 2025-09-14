import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TechCardContainer = styled(motion.div)`
  background: linear-gradient(120deg, #e0e7ff 0%, #f9fafb 100%);
  border: 1.5px solid #b3c2f2;
  box-shadow: 0 8px 32px rgba(0, 86, 179, 0.10), 0 1.5px 6px rgba(0,0,0,0.05);
  border-radius: 18px;
  padding: 2rem;
  margin: 1rem;
  text-align: left;
  width: 300px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 16px 40px rgba(0, 86, 179, 0.18), 0 2px 8px rgba(0,0,0,0.08);
    border-color: #0056b3;
    background: linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%);
  }

  &::before {
    content: '';
    position: absolute;
    top: -40px;
    right: -40px;
    width: 80px;
    height: 80px;
    background: rgba(0,86,179,0.08);
    border-radius: 50%;
    z-index: 0;
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
  z-index: 1;
`;

const CardDescription = styled.p`
  color: #333;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  z-index: 1;
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
  z-index: 1;
  
  &:hover {
    background: #003d82;
    transform: scale(1.05);
  }
`;

const ServiceCard = ({ title, description, buttonText, buttonLink }) => {
  return (
    <TechCardContainer
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
    </TechCardContainer>
  );
};

export default ServiceCard;