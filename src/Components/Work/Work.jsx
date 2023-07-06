import React from "react";
import { Primary, SubHeading, Title } from "../../globalStyles";
import { workInfoData } from "../../data/workInfoData";
import {
  WorkSection,
  WorkTop,
  WorkWrapper,
  WorkBottom,
  WorkInfo,
} from "./workStyles";

const Work = () => {
  return (
    <WorkSection>
      <WorkWrapper>
        <WorkTop>
          <SubHeading>Como funciona?</SubHeading>
          <Title>Como Funciona?</Title>
          <Primary>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sequi consequuntur ipsam, assumenda quia ex vero, omnis et
            similique, dolorem at minima pariatur saepe nemo reprehenderit
            incidunt blanditiis error impedit?
          </Primary>
        </WorkTop>
        <WorkBottom>
          {workInfoData.map((data) => (
            <WorkInfo>
              <div>
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </WorkInfo>
          ))}
        </WorkBottom>
      </WorkWrapper>
    </WorkSection>
  );
};

export default Work;
