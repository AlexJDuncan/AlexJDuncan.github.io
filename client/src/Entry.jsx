import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr;
`;

const Name = styled.div`
  grid-column: 2/3;
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
      <Name>
        <Letter>A</Letter>
        <NamePart>lex</NamePart><br />
      </Name>
      <Name>
        <Letter>D</Letter>
        <NamePart>uncan</NamePart>
      </Name>
    </Grid>
  )
}

export default Entry;