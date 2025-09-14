import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f4f6fa;
    color: #1e1e2f;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #eaf1fb; // azul suave e profissional
`;

// Estilos de destaque para seções
export const SectionWrapper = styled.section`
  padding: 80px 0;
  background: ${({ bgColor }) => bgColor || '#f4f6fa'};
  transition: all 0.3s ease;
`;

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  color: ${({ color }) => color || '#1e1e2f'};
  margin-bottom: 40px;
  font-weight: 700;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #0072ff, #00c6ff);
    border-radius: 2px;
  }
`;

export const SectionText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #555;
  max-width: 900px;
  margin: 0 auto 30px auto;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <HomeContainer>
        <Navbar />

        {/* Hero com cores mais sofisticadas */}
        <Hero bgGradient="linear-gradient(135deg, #0072ff, #00c6ff)" />

        {/* Sobre Nós */}
        <About />

        {/* Serviços */}
        <Services />

        {/* Contato */}
        <Contact />

        {/* Rodapé */}
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;
