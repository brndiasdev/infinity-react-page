import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 50%;

  @media screen and (max-width: 920px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5rem !important;
  }
`;

export const AboutBgImage = styled.div`
  position: absolute;
  left: -100px;
  z-index: -2;
  max-width: 40%;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const AboutImage = styled.div`
  display: flex;
  flex: 1;
  margin-right: 1rem;
  position: relative;
  max-width: 100%;
  @media screen and (max-width: 920px) {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  border-radius: 150px;
  min-width: 5%;
  max-width: 50%;
  min-height: 5%;
  max-height: 50%;
  position: relative;
  padding: 50px;
  @media screen and (max-width: 920px) {
    width: 60%;
    height: 60%;
    padding: 0;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 920px) {
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  }
  @media screen and (min-width: 920px) {
    padding-right: 100px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  @media (max-width: 920px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const WatchButton = styled.button`
  margin-left: 2rem;
  background-color: transparent;
  outline: none;
  border: none;
  border-radius: 5rem;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  color: #484848;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 3rem;
    margin-right: 1rem;
  }

  @media screen and (max-width: 920px) {
    margin-left: 0rem !important;
    margin-top: 1rem;
    font-size: 1rem !important;

    svg {
      margin-right: 0.5rem !important;
    }
  }
`;
