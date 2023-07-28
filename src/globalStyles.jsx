import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}
body {
  background-color: #f6f6f6;
  max-width: 100%;
  overflow-x: hidden;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1330px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : "140px 0")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ inverse }) => (inverse ? "white" : "#071c2f")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};

  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;

export const Heading = styled.h1`
  font-size: clamp(1.8rem, 4vw, 3.6rem);
  color: #4c4c4c;
  margin: 1.5rem auto;
  max-width: 600px;
  text-align: center;
  max-width: 90%;
`;

export const Text = styled.h2`
  font-size: clamp(0.8rem, 2.5vw, 1.2rem);
  max-width: 500px;
  color: #6a6a6a;
  margin: 1.5rem auto;
  text-align: center;
  max-width: 80%;
`;

export const PageButton = styled.button`
  padding: 1rem 2.5rem;
  background-color: #5831a4;
  outline: none;
  border: none;
  border-radius: 5rem;
  cursor: pointer;
  font-weight: 600;
  color: white;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 1.5rem auto;

  svg {
    margin-left: 0.75rem;
    font-size: 1.5rem;
  }

  &:hover:before {
    height: 500%;
    /* background-color: rgb(234, 234, 234); */
  }

  &:hover {
    transition: all 0.6s ease;
    color: black;
    /* background-color: rgb(234, 234, 234); */
  }
  @media screen and (max-width: 800px) {
    font-size: 1rem;
    padding: 0.8rem 2rem;
    cursor: pointer;
  }
`;

export const BannerImage = styled.div`
  position: absolute;
  top: -50px;
  right: -50px;
  z-index: -2;
  max-width: 100%;
  height: auto;
  width: 100vh;
  object-fit: cover;

  @media screen and (max-width: 1000px) {
    max-width: 600px;
    height: auto;
    width: 100vh;
    object-fit: cover;
  }

  @media screen and (max-width: 800px) {
    max-width: 450px;
    height: auto;
    width: 100vh;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SubHeading = styled.p`
  font-weight: 700;
  color: #5831a4;
  font-size: 1.3rem;
  margin: auto;
`;

export const Primary = styled.p`
  font-size: clamp(0.7rem, 2.2vw, 1.1rem);
  max-width: 500px;
  color: #6a6a6a;
  margin: 1.5rem 0rem;

  @media screen and (max-width: 920px) {
    text-align: center;
    max-width: 80%;
  }
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #4c4c4c;
  max-width: 500px;
  text-align: center;
  @media screen and (max-width: 920px) {
    text-align: center;
    max-width: 90%;
  }
`;

export default GlobalStyles;
