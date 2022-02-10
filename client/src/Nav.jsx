import React from 'react';
import styled from "styled-components";

const CompStyle = styled.div`
  color: white;
  height: 100px;
  text-align: right;
  padding-top: 50px;
`;

const MenuStyle = styled.span`
  color: #CA61E1;
  font-size: 28px;
  text-decoration: underline;
  margin: 50px;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const Nav = () => {
  return (
    <CompStyle>
      <MenuStyle>Home</MenuStyle>
      <MenuStyle>Skills</MenuStyle>
      <MenuStyle>Projects</MenuStyle>
      <MenuStyle>Contact</MenuStyle>
    </CompStyle>
  )
}

export default Nav;