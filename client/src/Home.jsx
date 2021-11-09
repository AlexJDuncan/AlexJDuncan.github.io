import React from 'react';
import styled from "styled-components";

const CompStyle = styled.div`
  background: 28292B;
`;

const Intro = styled.div`
  background: #52275C;
  height: 175px;
  color: white;
  text-align: center;
`;

const Name = styled.p`
  font-size: 5rem;
  margin: 0px;
`;

const Title = styled.p`
  color: #CA61E1;
  font-size: 2rem;
  margin-top: 1rem;
`;

const BioSection = styled.div`
  margin: 0px;
  padding: 20px;
`;

const BioPic = styled.img`
  width: 25%;
  margin: 50px;
  margin-top: 35px;
  display: inline-block;
`;

const Bio = styled.p`
  color: #CA61E1;
  font-size: 2rem;
  display: inline-block;
  vertical-align: top;
  width: 60%;
`;

const Home = () => {
  return (
    <CompStyle>
      <Intro>
        <Name>Alex Duncan</Name>
        <Title>Software Engineer</Title>
      </Intro>
      <BioSection>
      <BioPic src="https://i.ibb.co/RBG42fN/1516873872556.jpg" alt="1516873872556" border="0" />
        <Bio>My Name is Alex Duncan. I am a full stack engineer that takes pride in everything I do. That includes getting stuck in my code. Getting stuck gives me the opportunity to learn even more and expand my knowledge of the particular problem area. My passion is frontend projects as I get to utilize my Graphic Design background. I love bringing my projects to life on the client facing side.<br /> My dream is to work in AR/VR some day. I just think it's amazing the things we can already do in those fields and I want to be part of the innovation that is still to come. My interest in this field mostly stems from my training in 3D modeling and sculpture.  I love working on projects that force me to think outside what is right in front of me and see the bigger picture.</Bio>
      </BioSection>
    </CompStyle>
  )
}

export default Home;