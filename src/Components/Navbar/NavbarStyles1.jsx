import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between; /* Aligns content with equal spacing between */
  padding: 0 25px 0 25px;
  align-items: center; /* Vertically center aligns the content */
  background-color: rgba(255, 255, 255, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  min-height: 90px;
`;

export const NavLogo = styled.div`
  @media screen and (max-width: 800px) {
    max-width: 140px;
  }
  cursor: pointer;
`;

export const NavImage = styled.img`
  width: 175px;
  height: 35px;
`;

export const NavLinks = styled.div`
  a {
    margin-right: 3rem;
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
    font-weight: 600;
  }

  @media screen and (max-width: 1000px) {
    a {
      margin-right: 1rem;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
  .navbar-cart-icon {
    font-size: 1.4rem;
    position: relative;
    bottom: -3px;
  }
`;

export const NavButton = styled.button`
  padding: 0.9rem 1.75rem;
  background-color: #5831a4;
  outline: none;
  border: none;
  border-radius: 5rem;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const NavMenu = styled.div`
  @media (max-width: 800px) {
    display: flex;
  }
  display: none;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
