import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ProductOverview from '../../images/Overdrive_Outfits/Product_Overview.jpg';
import ProductDescription from '../../images/Overdrive_Outfits/Product_Description.jpg';
import SizeQuantity from '../../images/Overdrive_Outfits/Size_Quantity.jpg';

const OverdriveOutfits = () => {
  return (
    <Container sx={{ display: "flex", flexFlow: "column", alignContent: "center" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h3">Overdrive Outfits</Typography>
        <Typography variant="h5" component="h5">An Ecommerce Website</Typography>
      </Box>
      <Box>
        <Typography variant="body1" component="p">
          Overdrive Outfits was the first web application that I created in my Software Engineering Immersive through Hack Reactor. I worked on a team with 3 other engineers as a full stack engineer. We were given the task to create the product page for an ecommerce application for a clothing company in which all information pertaining to each product could be obtained by interfacing with the companies RESTful API. We were also provided with a design from the companies design team and asked to match the design as closely as possible. Each member was assigned a different section of the page and mine was the product information section.</Typography>
      </Box>
      <img src={ProductOverview} alt="Product Overview" style={{justifySelf: "center"}}/>
      <Box>
      <Typography variant="body1" component="p">
        I broke the task up into main sub components that I had to create which included the item description, image carousel, item options, and item details. The first section I tackled was the item description, which is the section in the above picture containing the product name and price, as it was the simplest to layout. I could make a basic call using Axios for the products basic information based on the product ID passed down to my componenet allowing for me to set different states for the information I needed and pass those states to the appropriate piece. I then just had to add the styling to each piece and make sure that the info was layed out according to the provided design. For the star rating we used a 3rd party technology called FaStar. we calculated the average star rating for the product then plugging that average into FaStar with the styling we wanted and it would create the apppropriate star structure. </Typography>
      <Typography variant="body1" component="p">
        Next I tackled the carousel component. I chose this piece as I needed the item options to adjust the caurousels input data when certain selections were made. I decided it would be easier to develop the item options section if I could verify that the carousel was changing as I developed. For the carousel I first started with creating the larger images placement and adjusting the style on that image. I then created the image selector and fed what image was selected in the selector into the large image card. The image selector was my biggest challenge on the Carousel. I needed it to keep track of which image the user had selected so the large image card would display the right image and I needed it to display arrows for when more images than the selector could display were present. For tracking the selected image I chose to feed in the images array the API gave me and then map the images in the selector so I could use the indexes to determine the image. I then created a function that I used on click of an image in the selector to change a state to the corresponding index. That new state assigned the image from the image array at that index to the large image card allowing me to display the correct image from the array.
      </Typography>
      <Typography variant="body1" component="p">
        For the arrows I chose to use the length of the API provided image array as my main factor in determining when they should apppear. Using that length I could then also use my current selected image state to determine if we were at the begginning of the image selector or at the end. So, if the current selected image is at index 0 we don't want the up arrow to appear, if in the middle we want both arrows to appear, and if we are at the array length -1 then we don't want the down arow to appear. The arrow also changed the image we have selected.
      </Typography>
      <img src={SizeQuantity} alt="Size and Quantity Selectors" style={{justifySelf: "center"}}/>
      <Typography variant="body1" component="p">
        The third component I tackled was the item selectors as seen in the image above. As I mentioned in the last section, I needed this piece to reset the image carousel when different styles were selected. So it wasn't as simple as just using the API info to create size, style, and quantity selectors. The part that needed to update the carousel was the style selector. The client had a seperate set of images for each style of each product. To solve this I created a state that held the image array and an on click function for each style thumbnail that would set the image array state with the appropriate array when you clicked on one which forced a rerender of the image carousel. From there I could create states that corresponded with the each selector so that when you hit the "Add to Bag" button it would add the appropriate items to the cart and the button would remove those items from the inventory in the API.
      </Typography>
      <img src={ProductDescription} alt="Product Description" style={{justifySelf: "center"}}/>
      <Typography variant="body1" component="p">
        The last component was the item details section which can  be  seen at the botttom of the image above bellow the image carousel. This section I saved for last because it was the last thing you see in my component and it was fairly simple. This section was all about styling and positioning of elements. In this section and the component as a whole I used CSS Grids to get all the positioning correct. For the styling we decided as a team to use a 3rd party technology called Styled-Components.  I chose to use grids because it would make it easier for me to get the layout of each section of my component correct. I used Styled-Components because it made styling easier bacause to adjust the styling for each piece because it was all in that componenets file and I didn't need to search up and down multiple CSS files to find what I wanted to change.
      </Typography>
      </Box>
    </Container>
  )
}

export default OverdriveOutfits;