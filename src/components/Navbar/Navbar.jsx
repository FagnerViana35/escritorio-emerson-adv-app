import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoSvg from '../../assets/logo_adv.png';

const Nav = styled.nav`
  background: linear-gradient(90deg, #0056b3, #00c6ff);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 1000;
  position: sticky;
  top: 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  img {
    height: 70px;
    width: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
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
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: #ffe600;
    }
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #f9f9f9;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    padding-top: 50px;
  }
`;

const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const NavLinks = styled.a`
  color: #02051cff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #02051cff;
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #0056b3;
      background: #e0f0ff;
      border-radius: 8px;
      transform: scale(1);
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <Logo>
        <img src={logoSvg} alt="Logo Escritório" />
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
