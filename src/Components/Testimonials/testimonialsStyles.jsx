import styled from "styled-components";

export const TestimonialSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TestimonialWrapper = styled.div`
  margin-top: 7rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 600px) {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
`;

export const TestimonialTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    text-align: center;
    max-width: 600px !important;
  }
  h1 {
    max-width: 700px !important;
  }
`;

export const TestimonialBottom = styled.div`
  margin-top: 2rem;
  background-color: white;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  border-radius: 2rem;
  flex-direction: column;
  text-align: center;
  flex-wrap: nowrap;
  p {
    font-weight: 700;
    color: #515151;
    max-width: 500px;
    font-size: 1.1rem;
    margin: 2rem 0rem;
  }
  h2 {
    margin-top: 1.5rem;
  }
  img {
    width: 75px;
    height: 100px;
    object-fit: cover;
    border-radius: 25px;
  }
`;

export const TestimonialStars = styled.div`
  margin: 0rem 0.25rem;
  font-size: 1.5rem;
  color: #5831a4;
`;
