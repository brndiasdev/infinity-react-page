import React from "react";
import profilePic1 from "../../Assets/john doe 1.jpg";
import profilePic2 from "../../Assets/john doe 2.jpg";
import StarIcon from "@mui/icons-material/Star";
import { SubHeading, Title, Primary } from "../../globalStyles";
import {
  TestimonialBottom,
  TestimonialSection,
  TestimonialStars,
  TestimonialTop,
  TestimonialWrapper,
} from "./testimonialsStyles";

const Testimonials = () => {
  return (
    <TestimonialSection>
      <TestimonialWrapper>
        <TestimonialTop>
          <SubHeading>Depoimentos</SubHeading>
          <Title>O que estão dizendo</Title>
          <Primary>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quas,
            repudiandae voluptatem sed aut possimus iusto cum maxime nobis ut?
          </Primary>
        </TestimonialTop>
        <TestimonialBottom>
          <img className="profilePic" src={profilePic1} alt="" />
          <Primary>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis assumenda iste accusantium aperiam aut? Porro.
          </Primary>
          <TestimonialStars>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </TestimonialStars>
          <h2>John Doe</h2>
        </TestimonialBottom>
        <TestimonialBottom>
          <img src={profilePic2} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis assumenda iste accusantium aperiam aut? Porro.
          </p>
          <TestimonialStars>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </TestimonialStars>
          <h2>John Doe</h2>
        </TestimonialBottom>
      </TestimonialWrapper>
    </TestimonialSection>
  );
};

export default Testimonials;
