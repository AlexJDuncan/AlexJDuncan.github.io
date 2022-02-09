import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr;
`;

const InnerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
`;

const GridElement = styled.div`
  grid-column: 2/3;
`;

const Intro1 = styled.p`
  grid-column: 1/2;
  font-size: 1.5rem;
`;

const Intro2 = styled.p`
  grid-column: 2/3;
  font-size: 1.5rem;
`;

const Letter = styled.p `
  display: inline-block;
  grid-column: 2/3;
  grid-row: 1/2;
  color: #CA61E1;
  font-size: 10rem;
  margin: .5rem;
  margin-left: 300px;
`;

const NamePart = styled.p`
  display: inline-block;
  grid-column: 2/3;
  grid-row: 1/2;
  font-size: 5rem;
  margin: .5rem;
`;

const Entry = () => {
  return (
    <Grid>
      <GridElement>
        <Letter>A</Letter>
        <NamePart>lex</NamePart>
      </GridElement>
      <GridElement>
        <Letter>D</Letter>
        <NamePart>uncan</NamePart>
      </GridElement>
      <GridElement>
        <InnerGrid>
          <Intro1>Hello, World!! I am a Full-Stack Engineer and Graphic Designer.  My engineering skills apply to all aspects of web development from front-end to back-end.  Where as my design skills focus more on logos and print media. I am also well versed in designing and creating 3D models for 3D printing as well.</Intro1>
          <Intro2>Looking for a fresh faced, new, excited, and motivated software engineer or designer? Then I am your guy! Do you want to talk about my life or work? Shoot me a message on email or give me a call! I love talking about myself and my work, or other people and their work. I also just like to shoot the breeze from time to time. Hope to hear from you soon!</Intro2>
        </InnerGrid>
      </GridElement>
    </Grid>
  )
}

export default Entry;