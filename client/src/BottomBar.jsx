import React from 'react';




const BottomBar = () => {
  return(
    <BarStyle>
      <Links href="https://github.com/monkeymedic26" target="_blank">
        <img src="https://img.icons8.com/material-outlined/96/000000/github.png" style={{height: "75px"}}/>
      </Links>
      <Links href="https://www.linkedin.com/in/alexjduncan/" target="_blank">
        <img src="https://img.icons8.com/ios-glyphs/90/000000/linkedin.png" alt="linkedin" style={{height: "75px"}}/>
      </Links>
      <Links href="mailto: alexduncan1@outlook.com" target="_blank">
        <img src="https://img.icons8.com/ios-glyphs/90/000000/new-post.png" alt="email" style={{height: "75px"}}/>
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