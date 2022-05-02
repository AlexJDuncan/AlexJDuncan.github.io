import React from 'react';
import { Link } from "react-router-dom";
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
      <MenuStyle>
        <Link to="/">Home</Link>
      </MenuStyle>
      <MenuStyle>
        <Link to="Skills">Skills</Link>
      </MenuStyle>
      <MenuStyle>
        <Link to="Projects">Projects</Link>
      </MenuStyle>
      <MenuStyle>
        <Link to="Contact">Contact</Link>
      </MenuStyle>
    </CompStyle>
  )
}

export default Nav;