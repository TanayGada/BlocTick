
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { indigo, red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export default function CityCard({name,image}) {
    const cardStyle = {
    transition: 'transform 0.4s', // Apply a smooth transition on transform property
    '&:hover': {
      transform: 'scale(1.1)', // Zoom in on hover
    },
  };
  const navigate = useNavigate();
  return (
   
    <Card
      sx={{
        maxWidth: 300,
        background: 'linear-gradient(25deg, #FFFFE0, #90EE90)',
        borderRadius: '0.75rem',
        margin: '0.5rem',
        width: '30%',
        
      }}
    > <div onClick={()=>navigate(`/explore/${name.toLowerCase()}`)}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='100'
          image={image}
          alt={name}
          sx={cardStyle}
        />
      </CardActionArea>
      <CardContent className='flex '>
        <Typography variant='h2' sx={{ fontSize: '20px', textAlign: 'center' }}>
          
        </Typography>
      </CardContent>
      </div>
    </Card>
    
  )
}
