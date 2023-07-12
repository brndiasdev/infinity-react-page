import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-top: 15px;
  height: 100vh;
  @media screen and (min-width: 920px) {
    padding: 30px;
  }
`;

export const HomeBanner = styled.div`
  position: relative;
  display: flex;
  padding-top: 3rem;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const HomeText = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const HomeImage = styled.div`
  @media screen and (max-width: 920px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    max-width: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 920px) {
    top: -25px;
    left: -30px;
    object-fit: cover;
  }
  position: relative;
  width: 100vh;
  object-fit: cover;
`;

export const Image = styled.img`
  height: auto;
  max-width: 100%;
`;
