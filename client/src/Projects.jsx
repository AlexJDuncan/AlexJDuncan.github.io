import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2.5fr 1fr;
  grid-template-rows: 1fr;
  background: #28292B;
`;

const CardLeft = styled.span`
  grid-column: 2/3;
  border: 2px solid #CA61E1;
  height: 150px;
`;

const Title = styled.h2`
  color: #CA61E1;
  margin-left: 10px;
`;

const Projects = () => {
  return (
    <Grid>
      <CardLeft>
        <Title>Alliance Drydocks</Title>

      </CardLeft>
    </Grid>
  )
}

export default Projects;