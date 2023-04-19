import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProjectCard = ({ info }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={info.title}
        subheader={info.subtitle}
      />
      <CardMedia
        component="img"
        height="194"
        image={info.image}
        alt={info.imageTitle}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {info.descrip}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;