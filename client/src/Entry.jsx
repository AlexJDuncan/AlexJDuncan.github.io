import React from "react";
import styled from "styled-components";
import selfPic from "./images/me2.jpeg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2.5fr 1fr;
  grid-template-rows: 1fr;
`;

const GridElement = styled.div`
  grid-column: 3/4;
`;

const SelfPic = styled.img`
  grid-column: 2/3;
  width: 400px;
  grid-row: 1/3;
`;

const Letter = styled.p `
  display: inline-block;
  grid-column: 2/3;
  grid-row: 1/2;
  font-family: 'Rowdies', cursive;
  color: #CA61E1;
  font-size: 10rem;
  margin: .5rem;
  margin-left: 10px;
`;

const Letter2 = styled.p `
  display: inline-block;
  grid-column: 2/3;
  grid-row: 1/2;
  font-family: 'Rowdies', cursive;
  color: #CA61E1;
  font-size: 10rem;
  margin: .5rem;
  margin-left: 100px;
`;

const NamePart = styled.p`
  display: inline-block;
  grid-column: 2/3;
  grid-row: 1/2;
  font-family: 'Rowdies', cursive;
  font-size: 5rem;
  margin: .5rem;
`;

const Intro1 = styled.p`
  grid-column: 2/3;
  grid-row: 3/4;
  margin-right: 1rem;
  font-size: 1.5rem;
  font-family: 'Lato', sans-serif;
  text-align: justify;
`;

const Intro2 = styled.p`
  grid-column: 3/4;
  grid-row: 3/4;
  margin-left: 1rem;
  font-size: 1.5rem;
  font-family: 'Lato', sans-serif;
  text-align: justify;
`;

const Entry = () => {
  return (
    <Grid>
      <SelfPic alt="me" src={selfPic} />
      <GridElement>
        <Letter>A</Letter>
        <NamePart>lex</NamePart>
      </GridElement>
      <GridElement>
        <Letter2>D</Letter2>
        <NamePart>uncan</NamePart>
      </GridElement>
      <Intro1>
        Hello, World!! I am a Full-Stack Engineer and Graphic Designer. I earned my BA in Visual Communication and Design: Graphic Design at the University of Northern Colorado graduating May 2018.  I recieved my engineering training from Hack Reactor graduating April 2021. My engineering skills apply to all aspects of web development from front-end to back-end.  Where as my design skills focus more on logos and print media. I am also well versed in designing and creating 3D models for 3D printing.
      </Intro1>
      <Intro2>
        Looking for a fresh faced, new, excited, and motivated software engineer or designer? Looking for a quick learner that isn't afraid of a challenge? Then I am that person! Do you want to talk about my life or work? Shoot me a message on email or give me a call! I love talking about myself and my work, or other people and their work. I also just like to shoot the breeze from time to time. Hope to hear from you soon!
      </Intro2>
    </Grid>
  )
}

export default Entry;