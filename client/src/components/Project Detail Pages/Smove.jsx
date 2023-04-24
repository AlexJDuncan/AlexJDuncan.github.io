import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import HomePage from '../../images/Smove/SmoveHome.jpg';
import AccountPage from '../../images/Smove/AccountPage.jpg';
import Inventory from '../../images/Smove/Inventory.jpg';
import TaskList from '../../images/Smove/TaskList.jpg';
import ServiceLocator from '../../images/Smove/ServiceLocator.jpg';

const Smove = () => {
  return (
    <Container sx={{ display: "flex", flexFlow: "column", alignContent: "center", marginTop: "20px", marginBottom: "20px" }}>
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
        <Typography variant="h3" component="h3">Smove</Typography>
        <Typography variant="h5" component="h5">A Local Moving Assistance Application</Typography>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="body1" component="p">
          Smove was my capstone project for the Software Engineering Immersive at Hack Reactor. This application is a local moving assistance application designed to help people move locally with in town by providing services such as task lists, inventory lists, and a local company locator aimed at connecting people with small locally owned businesses. The project was aimed at mimicking a real work place environment project where we, my team, connected with stakeholders and worked with them to create the applications by discussing their vision and presenting the project to them to make sure we met their needs and address their concerns with our application. Stakeholders were portrayed by staff at Hack Reactor.
        </Typography>
      </Box>
      <img src={HomePage} alt="Product Overview" style={{justifySelf: "center", marginBottom: "20px"}}/>
        <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          For this project I was assigned the task of UI/UX Designer because of my Graphic Design background and as a full stack engineer. When not working as the UI/UX Designer I assisted in the creation of the local company locator feature. The goal of this feature was to connect users with local small bussinesses specializing in moving. The clients wanted this feature to exclude big name companies such as Uhaul from the search as a way to support the local community and business owners.
        </Typography>
        <Typography variant="h5" component="h5" sx={{ marginBottom: "20px" }}>Design Concepts</Typography>
        <Typography variant="body1" component="p"sx={{ marginBottom: "20px" }}>
          In this section I will briefly explain some of the design concepts for the application. If you are not concerned with this aspect of the project I recommend moving ahead to the next section.
        </Typography>
        <Typography variant="body1" component="p"sx={{ marginBottom: "20px" }}>
          This project was a short 2 week project so the design had to be simple in order for us to fit in the MVP features and make the application to look nice. In respect to those constraints I chose to present a design that was achievable through the use of global styling. A dark gray header with our links at the top in white with blue buttons and a logo I designed my self was basically what I boiled it down to. I then went about creating wireframes and styling guide in Figma trying to create my vision for the application that the team could access. Once the team agreed that this is what we wanted to do with the design we presented this to the stakeholders which they understood why we went with that concept and agreed that it was best for what they wanted in this first stage. From here we had everything we needed to get the ball rolling on our project.
        </Typography>
      </Box>
      <img src={AccountPage} alt="Account Page" style={{justifySelf: "center", marginBottom: "20px"}}/>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="body1" component="p"sx={{ marginBottom: "20px" }}>
          For the rest of my duties as UI/UX Designer I was the go to guy for placement and layout of each page. We stuck to the blue and white design for the buttons and the rest I had in depth conversations with the teams working on each section discussing the layout details. As you can see in the next couple of images we talked alot about where to place different components. While color wise the design is simple the layout had to be well thought out. The concept I discussed most with the team was "think like a user". By this I meant things like if we leave this calendar or button at the bottom of this list that could get rather long in a move how annoyed would you be as a user trying to get to it or why are we putting this here and not there. I wanted this application to be as user friendly as possible. In that respect we placed the buttons and widgets through out the app near the top or on the sides so they would be easy to access when you are coming back to those sections. I didn't want things to be a seek and find where's waldo type of layout because that just becomes frustrating for a user and makes people find better applications to use.
        </Typography>
      </Box>
      <img src={Inventory} alt="Inventory Page" style={{justifySelf: "center", marginBottom: "20px"}}/>
      <img src={TaskList} alt="Task List Page" style={{justifySelf: "center", marginBottom: "20px"}}/>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h5" component="h5" sx={{ marginBottom: "20px" }}>Software Development</Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          Now that the design concept section is done I can talk about my part of the application code. As previously stated I worked on the local company locator with one other engineer since I had such a big time consuming part with the design. Our goal was to integrate the Google Maps API with the Yelp API in order create a map that could locate all local businesses within 50 miles that sold moving supplies or offered moving services and display them on the map and in a seperate card carousel at the bottom. This took a lot of time and research but we were able to achieve this. To do this we created a search bar that would set a state in the component that was passed down to both the Google and Yelp APIs. We also set both APIs with specific parameters that can not be changed by the user following their documentation in order to filter out the national companies. My other task in this component was to take the results from the Yelp API and create a carousel of cards for each company. The result is what you will see in the picture above.
        </Typography>
      </Box>
      <img src={ServiceLocator} alt="Service Locator Page" style={{justifySelf: "center", marginBottom: "20px"}}/>
    </Container>
  )
}

export default Smove;