import React from "react";
import logo from "../../Assets/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  FooterColumn,
  FooterGrid,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLogo,
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  SocialIcon,
  FooterLink,
} from "./footerStyles";
import { Section, Row } from "../../globalStyles";
import { footerSocialData, footerData } from "../../data/FooterData";

const Footer = () => {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterGrid justify-content="space-between">
          <FooterColumn>
            <Row align="center" margin="auto  0 0 0" gap="1rem">
              {footerSocialData.map((social, index) => (
                <FooterSocialIcon
                  key={index}
                  href="/"
                  target="_blank"
                  aria-label={social.name}
                >
                  {social.icon}
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>
        </FooterGrid>
        <FooterRights>Infinity © 2023</FooterRights>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
