import React from 'react';
import styled from 'styled-components';

const BarStyle = styled.div`
  background: #28292B;
  text-align: center;
  display: flex;
  justify-content: space-around;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: #CA61E1;
`;

const Links = styled.a`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
  margin-right: 50px;
`;

const BottomBar = () => {
  return(
    <BarStyle>
      <Links href="https://github.com/monkeymedic26" target="_blank">
        <img src="https://img.icons8.com/material-outlined/96/000000/github.png"/>
      </Links>
      <Links href="https://www.linkedin.com/in/alexjduncan/" target="_blank">
        <img src="https://img.icons8.com/ios-glyphs/90/000000/linkedin.png"/>
      </Links>
      <Links href="mailto: alexduncan1@outlook.com" target="_blank">
        <img src="https://img.icons8.com/ios-glyphs/90/000000/new-post.png"/>
      </Links>
      <Copyright>&copy; Copyright Alex Duncan 2021</Copyright>
    </BarStyle>
  )
}

export default BottomBar;

// react router for link with image
{/* <Link to="https://github.com/Joeyryanbridges">
  <Image src="giticon.png" className="githubIcon" />
</Link> */}