import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoSvg from '../../assets/logo_procontabil.jpg';

const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 10;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  img {
    height: 80px;
    width: auto;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #0056b3;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
  }
`;

const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const NavLinks = styled.a`
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #0056b3;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #0056b3;
      transition: all 0.3s ease;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>
        <img src={logoSvg} alt="Pró Contábil Logo" />
      </Logo>
      <MobileIcon onClick={toggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavMenu $isOpen={isOpen}>
        <NavItem>
          <NavLinks href="#home" onClick={toggle}>Home</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#servicos" onClick={toggle}>Serviços</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#sobre" onClick={toggle}>Sobre</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#contato" onClick={toggle}>Contato</NavLinks>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;