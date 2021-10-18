import React from 'react';
import styled from "styled-components";

const CompStyle = styled.div`
  background: 28292B;
`;

const Intro = styled.div`
  background: #52275C;
  height: 125px;
  color: white;
  text-align: center;
`;

const Name = styled.p`
  font-size: 48px;
  margin: 0px;
`;

const Title = styled.p`
  font-size: 24px;
  margin-top: 1rem;
`;

const Home = () => {
  return (
    <CompStyle>
      <Intro>
        <Name>Alex Duncan</Name>
        <Title>Software Engineer</Title>
      </Intro>
    </CompStyle>
  )
}

export default Home;