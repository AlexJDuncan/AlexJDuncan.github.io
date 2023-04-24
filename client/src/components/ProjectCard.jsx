import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from  '@mui/material/Link';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProjectCard = ({ info }) => {
  return (
    <Card sx={{ maxWidth: 365, boxShadow: "10px 7.5px 5px darkgray", background: "linen" }}>
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
        <Typography variant="body2" color="text.secondary">GitHub Repo: <Link  variant="body2" href={info.github} target="_blank">{info.title}</Link></Typography>
        {info.deployment === "Not Currently Deployed" ?
          <Typography variant="body2" color="text.secondary">Site: {info.deployment}</Typography>
          :
          <Typography variant="body2" color="text.secondary">Site: <Link  variant="body2" href={info.deployment} target="_blank">{info.title}</Link></Typography>
        }
      </CardContent>
    </Card>
  );
}

export default ProjectCard;