import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CompStyle = styled.div`
  padding-top: 1px;
`;

const MenuStyle = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0;

  a {
    text-decoration: none;
  }

  li {
    color: #CA61E1;
    font-size: 28px;
    margin: 50px;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px, solid, #CA61E1;
    }
  }
`;

const Nav = () => {
  return (
    <CompStyle>
      <MenuStyle>
        <NavLink to="/" >
          <li>
            Home
          </li>
        </NavLink>
        <NavLink to="Skills" >
          <li>
            Skills
          </li>
        </NavLink>
        <NavLink to="Projects" >
          <li>
            Projects
          </li>
        </NavLink>
        <NavLink to="Contact" >
          <li>
            Contact
          </li>
        </NavLink>
      </MenuStyle>
    </CompStyle>
  )
}

export default Nav;