import React from "react";
import styled from "styled-components";

const CardLeft = styled.span`
  grid-column: 2/3;
  border: 2px solid #CA61E1;
  height: 150px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2.5fr 1fr;
  grid-template-rows: 1fr;
  background: #28292B;
`;

const Projects = () => {
  return (
    <Grid>
      <CardLeft>

      </CardLeft>
    </Grid>
  )
}

export default Projects;