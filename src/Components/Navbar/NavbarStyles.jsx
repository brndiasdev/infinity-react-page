import styled from "styled-components";

export const Nav = styled.nav`
  @media (max-width: 600px) {
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
  }
`;
