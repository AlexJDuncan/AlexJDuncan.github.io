import React from 'react';
import styled from 'styled-components';

const BarStyle = styled.div`
  background: #52275C;
`;

const BottomBar = () => {
  return(
    <BarStyle>
      <a href="https://github.com/monkeymedic26">
        <img src="https://img.icons8.com/material-outlined/96/000000/github.png"/>
      </a>
      <a href="https://www.linkedin.com/in/alexjduncan/">
        <img src="https://img.icons8.com/ios-glyphs/90/000000/linkedin.png"/>
      </a>
      <a href="mailto: alexduncan1@outlook.com">
        <img src="https://img.icons8.com/ios-glyphs/90/000000/new-post.png"/>
      </a>
    </BarStyle>
  )
}

export default BottomBar;

// react router for link with image
{/* <Link to="https://github.com/Joeyryanbridges">
  <Image src="giticon.png" className="githubIcon" />
</Link> */}