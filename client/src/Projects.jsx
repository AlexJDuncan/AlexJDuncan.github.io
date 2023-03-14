import React from "react";
import styled from "styled-components";
import drydocks_home from "./images/Alliance_Drydocks/drydocks_home.jpg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2.5fr 1fr;
  grid-template-rows: 1fr;
  background: #28292B;
`;

const CardLeft = styled.span`
  grid-column: 2/3;
  border: 2px solid #CA61E1;
  height: 250px;
`;

const CardRight = styled.span`
  grid-column: 3/4;
  border: 2px solid #CA61E1;
  height: 250px;
`;

const Title = styled.h1`
  color: #CA61E1;
  margin: 10px;
`;

const Thumbnail = styled.img`
  height: 150px;
  margin-left: 10px;
  display: inline-block;
`;

const Descrip = styled.p`
  display: inline-block;
  color: #CA61E1;
  font-family: 'Lato', sans-serif;
  margin: 0px 0px 0px 10px;
  width: 300px;
`;

const Projects = () => {
  return (
    <Grid>
      <CardLeft>
        <Title>Alliance Drydocks</Title>
        <Thumbnail src={drydocks_home} alt="alliance_drydocks_home_page" />
        <Descrip>Alliance Drydocks is my personal pet project. It is a shipbuilder application for the online game Star Trek Online. It is still under contruction but shows some of my skills as an engineer. I created it using Javascript and React for the front end and Node for the server. It currently has no backend architecture and is loading all info from dummy data.</Descrip>
      </CardLeft>
      <CardRight>
        <Title>JA Scheduler</Title>
        <Descrip>JA Scheduler is an internal application I workd on during my time with Rural Sourcing. Due to company policy I am unfortunately unable to share any images or code of this program. The application is designed to be an availablity viewer showing the availability on a 5 day calander.</Descrip>
      </CardRight>
    </Grid>
  )
}

export default Projects;