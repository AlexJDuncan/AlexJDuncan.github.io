import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ProductOverview from '../../images/Overdrive_Outfits/Product_Overview.jpg';
import ProductDescription from '../../images/Overdrive_Outfits/Product_Description.jpg';
import SizeQuantity from '../../images/Overdrive_Outfits/Size_Quantity.jpg';

const JAAvailTracker = () => {
  return (
    <Container sx={{ display: "flex", flexFlow: "column", alignContent: "center", marginTop: "20px", marginBottom: "20px" }}>
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
        <Typography variant="h3" component="h3">Junior Associate Availability Tracker</Typography>
        <Typography variant="h5" component="h5">An Availability Tracker Application</Typography>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          The Junior Associate Availability Tracker application was the project I worked on with 11 other engineers while working for Rural Sourcing Inc. now known as Sparq. My team consisted of 3 front end engineers including myself, 9 back end engineers, Project Manager/Scrum Master, and 2 Tech leads. Unfortunately due to agreements and requirements for the Junior Associate program I am unable to share or show off the project or the code at this time. Fortunately though I am still allowed to talk about the project and my experience with it and that is what this page will discuss.
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          Lets talk about the application itself. This application was designed to display the aggregate data for how many Junior Associates are available at any hour in the normal working day in order to make it easier to schedule meetings with as many Junior Associates as possible. The application would allow the Junior Associates, Managers, and Admins to add, edit, or remove a Junior Associates information and general availability into the database so it could be included in the aggregate data on the home page. It also allowed for the data on the home page to be sorted by certain filters changing the table on the home page. We also setup the application so that users had certain permission such as the Junior Associates only being able to add or update their own information and not the information of others.
        </Typography>
        <Typography variant="h6" component="h6" sx={{ marginBottom: "20px" }}>User Input and Input Verification</Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          My main responsibility in this project was to create the user information input form and the availability input form. While the user information form was a pretty standard form I actually learned a lot during that section. I learned about regex and input verification, which is something I haven't had to deal with before. It was a great experience as I got to dive into things I knew nothing about. The regex expressions got a bit complicated as I had to deeply plan out what would be allowed in each entry field and what was not allowed all at the same time. Luckily for me there are plenty of resources for learning about regex and for building out regex expressions.
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          Outside of input verification I had to interface the form to the database and not just for adding users to the database but also for prepopulating our drop downs on the form, determining if a loggedin user had info in the database and prepopulating the fields based on their info in the database, and for determining if a user was trying to update a user and prepopulating fields based on a different users data. This all became very complicated very quickly and I stumbled alot. Luckily I had another engineer on my team that was experienced with contexts. I woked with the 2 other front end engineers to build 3 different context for the applications. One context held the data for the logged in user, another for their availability, and one more context for the data and availability of the user they were looking at and/or attempting to edit. We chose these 3 because we needed all that data across different components in order to get the right information and displays. With these 3 contexts we were able to get the form to populate the right version of the form with the right data.
        </Typography>
        <Typography variant="h6" component="h6" sx={{ marginBottom: "20px" }}>Availability Input</Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          Let's talk about the availability input form now. This form was interesting and complex in it's own ways and I ended up creating 2 different versions as the project requirements evolved. In the final version we wanted a calendar that would show in blue blocks what times you were available. I had to create a few different versions of the block which included a starting block, middleblock, and end block due to styling requirements. Getting the blocks to display correctly was a bit of a trick and I eventually used ternairy operations to determine which block needed to show on a time period along with an array of true and false values for every time on the calendar. I also had to create 3 functions that would translate our saved availability data into the users time zone, transform the new data into the true/false array to pass into our calendar, and one that before submission changed the users availability to EST military time so the data in the database was all standardized. All of this got very complicated very quickly but luckly I had 2 other engineers to help me when I would get stuck or something was appearing right.
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
          My last big challenge with the availability was actually the ability to input the data. It was decided by the stakeholders and the Project Manager that they wanted something similair to the way Google Calendar does the work hours, which if you don't know is a modal that has drop downs for each day where you can select start and end times and add more rows incase you need to split the day up. This came with a few complications in itself as I also had to figure out how to remove time options so that the data didn't get messed up in the system. We didn't want one drop down set to be selected 7am-10am and then be able to select like 8am-1pm all on the same day. So to solve this I created an array for each day of options and using the index of each option when a set was filled out it would make a copy of that array excluding the start and end time and everything inbetween that could be used for the later sets. After availability was selected in the modal and submitted it would appear on the calendar that opened the modal but until you submitted the availability to the database it didn't save anything. We did it this way so that the system didn't have to do multiple calls to the database and rerender the whole page.
        </Typography>
      </Box>
    </Container>
  )
}

export default JAAvailTracker;