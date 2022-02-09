import React from "react";
import styled from "styled-components";

const Letter = styled.p `
  display: inline-block;
  color: #CA61E1;
  font-size: 10rem;
  margin: .5rem;
`;

const NamePart = styled.p`
  display: inline-block;
  font-size: 5rem;
  margin: .5rem;
`;

const Entry = () => {
  return (
    <div>
      <Letter>A</Letter>
      <NamePart>lex</NamePart><br />
      <Letter>D</Letter>
      <NamePart>uncan</NamePart>
    </div>
  )
}

export default Entry;