import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import HomePage from '../../images/Alliance_Drydocks/drydocks_home.jpg';
import Weapons from '../../images/Alliance_Drydocks/weapons.jpg';
import Ships from '../../images/Alliance_Drydocks/ships.jpg';
import ShipBuilder from '../../images/Alliance_Drydocks/shipbuilder.jpg';

const AllianceDrydocks = () => {
  return (
    <Container sx={{ display: "flex", flexFlow: "column", alignContent: "center", marginTop: "20px", marginBottom: "20px" }}>
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
        <Typography variant="h3" component="h3">Alliance Drydocks</Typography>
        <Typography variant="h5" component="h5">A Ship Builder Application for Star Trek Online</Typography>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          Alliance Drydocks was my MVP project for the Hack Reactor Sofware Engineering Immersive. I had less than a week to plan and build a project of my choice so I chose to do a ship builder application for the MMO Star Trek Online. I still work on this project from time to time while using it as my playground for code. When I have a problem I'm having difficulty finding a solution to or a new tech I want to expirement with I will do it in this application. So if you have visited this application recently it may be a little bit out of sorts because of that but I am working getting it back to normal. The images in this page do not match up to the current Alliance Drydocks look as they are of it from a few months ago. I will be up
        </Typography>
        <Typography variant="body1" component="p">
        The images in this page do not match up to the current Alliance Drydocks look as they are of it from a few months ago. I will be updating the images once I finish fixing it and getting it back to normal operations.
        </Typography>
      </Box>
      <img src={HomePage} alt="Product Overview" style={{justifySelf: "center", marginBottom: "20px"}}/>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h5" component="h5" sx={{ marginBottom: "20px" }}>Current Status Of The Application</Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          With this project I wanted a ship builder application where I didn't have to have 3 other tabs open in order to build a ship. Unforturnately the current ship builder site out there does not hold a information section on the different items you can equip to a ship leaving you with needing multiple other sites to figure out where to get the items you need. So I was aiming at having an equipment database along with the ship builder. I unforturnately did not make it that far due to how little time I had and have not made much progress in making a database for the items as of now. I still plan to build this project out more but since I started the project I have been spending most of my time on the job hunt leaving me little time to build out this application more.
        </Typography>
        <Typography variant="body1" component="p"sx={{ marginBottom: "20px" }}>
          What I did do with the project was build out some dummy data and started the process of getting the look and feel of the application built out. I have created a couple pages as a sort of catalouge for the items in game. So far I have one page for weapons and one for ships even though there are many more types I can at least start getting the feel of for everything down as they are going to be very similar on each page. Each weapon and ship currently shows the different stats and special effects that each one comes with and will eventually include how to obtain those items or ships.
        </Typography>
      </Box>
      <img src={Weapons} alt="Weapons Page" style={{justifySelf: "center", marginBottom: "20px"}}/>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="body1" component="p"sx={{ marginBottom: "20px" }}>
          To obtain the look and feel as presented in the images on this page I used Styled-Components to do all of my CSS in combination with multiple grid systems to get the layout just right. Each item card is on component which I have used with the mapping of my dummy data. Creating a reusable component for the card has made it simpler to create the page and maintain the stylistic look across all the cards as the CSS will always be the same. As stated before I do plan to move the data dummy to a database and add more data when I get that database built and deployed. I plan to use MongoDB for the database to this project as with my current design I don't currently have any relational data and the structure of how files on stored in MongoDB would lend to how I am already passing along the information to the appplication.
        </Typography>
      </Box>
      <img src={Ships} alt="Ships Page" style={{justifySelf: "center", marginBottom: "20px"}}/>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          The ships section of the application is set up in a similar way to the weapons section. I am actually looking at using the same cards as the weapons for the ships to keep a cohesive design through out the appliction. I do not plan to get rid of the look I have in the picture now. Instead I plan to make every ship and weapon in the application clickable so that it would bring up the page you see above. I believe users would enjoy being able to take a closer look at the items and information on a larger page as pictured above.
        </Typography>
      </Box>
      <img src={ShipBuilder} alt="ShipBuilder Page" style={{justifySelf: "center", marginBottom: "20px"}}/>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          The above image is my shipbuilder page. This is where we would build our ships. I currently only have a default ship for this page without the option to select a different one. The dropdowns currently work and derive all of their options from the dummy data. Eventually the orange box at the bottom would compile and show the predicted data on damage, protection stats, abilities, etc. Currently it does not as I have not gotten into creating the algorithims needed to compile this data and the theorycrafting behind those algorithms.
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          As you have probably noticed in all the images I have buttons for a Your Ship 1-3 on the side bar. I eventually want users to be able to create accounts and build out multiple different ships and save them to their account. This way players could compare different builds and find what works best for them and their ships for each type of content in the game. So currently those buttond don't do anything but bring you to this page which does not save at this current time.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h5" component="h5" sx={{ marginBottom: "20px" }}>Plans For The Future</Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          I've briefly meantioned a few of my plans for the future of this project in other section and thought I would elaborate more here at the end. Currently the application uses Styled-Components for all the CSS styling through out the application. I am currently working on moving all the styling over to MaterialUI. While I enjoy and appreciate eveything that Styled-Components provides, I have found in a recent project that MaterialUI gives me a bit more power in the layout and design of the applications. I also have a tendency to experiment and adjust styling through inline styling and with MaterialUI gives me the power to do that and leave it without having to find the block at the top of my code containing my CSS for that element. It also leaves my code more readable and cleaner in the proccess.
        </Typography>
        <Typography variant="body1" component="p"sx={{ marginBottom: "20px" }}>
          Once my redesign is complete I plan to start building out the database for the application and start getting that connected to the application. My current database of choice for this is MongoDB but I am going to look into  other options as well. I want this application to start moving towards users being able to actually using and that is a big step in the process. Once I have found a steady income I will most likely be moving the application from github to Amazon AWS services. I have some experience with EC2 instances on AWS but would like to expand my knowledge to other services within Amazon AWS that could help me better deploy this application.
        </Typography>
        <Typography variant="body1" component="p"sx={{ marginBottom: "20px" }}>
          Part 3 of my plan is to do the research on the theorycrafting of the game and get that bottom piece of the ship building page completed. There are a lot of complicated calculations in the game that determine attack, defence, etc and without understanding those I can't really give accurate data to any degree. That is really the only thing holding me up on building out that bottom block. I made this step 3 since it will be easier to test on a wide scale if I have all my item and ship data available before I do it. I don't think my tiny library of dummy data is enough to accurately create those calculations.
        </Typography>
        <Typography variant="body1" component="p"sx={{ marginBottom: "20px" }}>
          And finally part 4 of my plan is to enable the creation of users. Like I said in the last paragraph I want users to actually be able to do something with this application. For that I am going to need to create a user login system and for that I am looking into Amazon Cognito. I have used Amazon Cognito on another application but due to the restriction of company policies on accessing the user pools and Amazon account that controls it I only have a precursory knowledge of the technology. I would like to expand my knowledge of that tech and this project is the perfect opportunity to do that.
        </Typography>
      </Box>
    </Container>
  )
}

export default AllianceDrydocks;