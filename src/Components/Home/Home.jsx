import React from "react";
import {
  HomeContainer,
  HomeBanner,
  HomeText,
  HomeImage,
  Image,
} from "./homeStyles";
import { Heading, PageButton, Text, BannerImage } from "../../globalStyles";
import Navbar from "../Navbar/Navbar";
import BannerBackGround from "../../Assets/home-banner-background.png";
import homeBanner from "../../Assets/homeBanner.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeBanner>
          <BannerImage>
            <Image src={BannerBackGround} alt="" />
          </BannerImage>
          <HomeText>
            <Heading>Crie o seu quadro da forma que desejar!</Heading>
            <Text>Infinitas artes, infinitas possibilidades.</Text>
            <Text>
              Tudo do seu jeito! Escolha sua moldura e o tamanho de seu quadro!
            </Text>
            <PageButton>
              Peça Já <ArrowForwardIcon />
            </PageButton>
          </HomeText>
          <HomeImage>
            <Image src={homeBanner} alt="" />
          </HomeImage>
        </HomeBanner>
      </HomeContainer>
      <Navbar />
    </>
  );
};

export default Home;
