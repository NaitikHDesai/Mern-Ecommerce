import { Button, Card, CardContent, Typography, styled, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute',
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 100,
  position: 'absolute',
});

function Achivements() {
  const navigate = useNavigate();
  
  const theme = useTheme();
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png';

  const handleViewSales = () => {
    navigate('/admin/orders'); // Navigate to "/admin/order" when button is clicked
  };

  return (
    <div>
      <Card sx={{ position: 'relative' }}>
        <CardContent>
          <Typography variant='h6' sx={{ letterSpacing: ".25px" }}>
            BlueFer
          </Typography>
          <Typography variant='body2' >Congratulations 🎉 </Typography>
          <Typography variant='h5' sx={{ my: 3.1, color: 'primary.main' }}>
            408k
          </Typography> 
          <Button size='small' variant='contained' onClick={handleViewSales}>
            View Sales
          </Button>
          <TriangleImg alt='triangle-background' src={`./${imageSrc}` }/>
          <TrophyImg src="./trophy.png"/>
        </CardContent>
      </Card>
    </div>
  );
}

export default Achivements;
