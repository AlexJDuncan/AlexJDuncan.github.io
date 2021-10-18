import React from 'react';
import styled from "styled-components";

const CompStyle = styled.div`
  background: #52275C;
  color: white;
  height: 100px;
  text-align: center;
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
      <MenuStyle>My Skils</MenuStyle>
      <MenuStyle>Projects</MenuStyle>
      <MenuStyle>Contacts</MenuStyle>
    </CompStyle>
  )
}

export default Nav;