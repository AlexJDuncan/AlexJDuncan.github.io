import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ProductOverview from '../../images/Overdrive_Outfits/Product_Overview.jpg';
import ProductDescription from '../../images/Overdrive_Outfits/Product_Description.jpg';
import SizeQuantity from '../../images/Overdrive_Outfits/Size_Quantity.jpg';

const Portfolio = () => {
  return (
    <Container sx={{ display: "flex", flexFlow: "column", alignContent: "center", marginTop: "20px", marginBottom: "20px" }}>
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
        <Typography variant="h3" component="h3">Portfolio</Typography>
        <Typography variant="h5" component="h5">Representation Of My Work</Typography>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="body1" component="p">
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>

        </Typography>
      </Box>
    </Container>
  )
}

export default Portfolio;