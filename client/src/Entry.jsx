import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr;
`;

const Letter = styled.p `
  display: inline-block;
  grid-column: 2/3;
  grid-row: 1/2;
  color: #CA61E1;
  font-size: 10rem;
  margin: .5rem;
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
      <div>

      <Letter>A</Letter>
      <NamePart>lex</NamePart><br />
      </div>
      <div>

      <Letter>D</Letter>
      <NamePart>uncan</NamePart>
      </div>
    </Grid>
  )
}

export default Entry;