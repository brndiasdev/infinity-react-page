import styled from "styled-components";

export const WorkSection = styled.div`
  align-items: center;
`;

export const WorkWrapper = styled.div`
  margin-top: 10rem;
  @media screen and (max-width: 920px) {
    margin-top: 5rem !important;
    margin-bottom: 5rem;
  }
`;

export const WorkTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    max-width: 700px !important;
  }

  p {
    text-align: center;
    max-width: 600px !important;
  }
`;

export const WorkBottom = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 920px) {
    margin-top: 1rem !important;
  }
`;

export const WorkInfo = styled.div`
  width: 290px;
  min-height: 350px;
  background-color: white;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 1rem;
  color: #505050;
  margin: 1rem 2rem;
  h2 {
    margin: 1rem 0rem;
  }
  p {
    flex: 1;
    display: flex;
    align-items: center;
    font-weight: 600;
  }
`;

export const Image = styled.img``;
