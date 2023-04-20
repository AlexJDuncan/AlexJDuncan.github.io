import React from 'react';
import Container from '@mui/material/Container';

const BottomBar = () => {
  return(
    <Container sx={{display: "flex", flexFlow: "row", alignItems: "center", justifyContent: "space-evenly", justifySelf: "flex-end"}}>
        <a href="https://github.com/AlexJDuncan" target="_blank">
          <img src="https://img.icons8.com/material-outlined/96/000000/github.png" style={{height: "75px"}}/>
        </a>
        <a href="https://www.linkedin.com/in/alexjduncan/" target="_blank">
          <img src="https://img.icons8.com/ios-glyphs/90/000000/linkedin.png" alt="linkedin" style={{height: "75px"}}/>
        </a>
        <a href="mailto: alexduncan1@outlook.com" target="_blank">
          <img src="https://img.icons8.com/ios-glyphs/90/000000/new-post.png" alt="email" style={{height: "75px"}}/>
        </a>
        <p style={{display: "inline-block"}}>&copy; Copyright Alex Duncan 2023</p>
    </ Container>
  )
}

export default BottomBar;

// react router for link with image
{/* <Link to="https://github.com/Joeyryanbridges">
  <Image src="giticon.png" className="githubIcon" />
</Link> */}