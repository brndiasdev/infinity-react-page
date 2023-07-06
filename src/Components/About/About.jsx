import React from "react";
import AboutBackground from "../../Assets/about-background.png";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import frameImage from "../../Assets/3.jpg";
import {
  AboutBgImage,
  AboutContainer,
  AboutImage,
  AboutText,
  ButtonContainer,
  Image,
  WatchButton,
} from "./aboutStyles";
import { PageButton, Primary, SubHeading, Title } from "../../globalStyles";

const About = () => {
  return (
    <AboutContainer>
      <AboutBgImage>
        <img src={AboutBackground} alt="" />
      </AboutBgImage>
      <AboutImage>
        <Image src={frameImage} alt="" />
      </AboutImage>
      <AboutText>
        <SubHeading>Sobre o Nosso Produto</SubHeading>
        <Title>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, magni!
        </Title>
        <Primary>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic
          ducimus, eaque quisquam dolore iste officiis dicta illum! Inventore
          dolores illum amet molestiae doloremque cum id commodi odio dolore
          mollitia.
        </Primary>
        <Primary>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          molestiae nemo distinctio iste voluptatum. Fugit quae repudiandae,
          earum vero quidem ipsum molestiae reiciendis ea at aliquid tenetur
          deleniti velit veritatis unde quos hic sint libero maiores consequatur
          temporibus? Similique, adipisci!
        </Primary>
        <ButtonContainer>
          <PageButton>Saiba Mais</PageButton>
          <WatchButton>
            <PlayCircleFilledIcon /> Assista ao vídeo
          </WatchButton>
        </ButtonContainer>
      </AboutText>
    </AboutContainer>
  );
};

export default About;
