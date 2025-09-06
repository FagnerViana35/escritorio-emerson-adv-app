import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </HomeContainer>
  );
};

export default Home;