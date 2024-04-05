import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height:56, bgcolor: "#9155fd" }}
            >
              N
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className='space-y-2'>
            <div>
                <p className='text-lg font-semibold'>Naitik</p>
                <p className='opacity-60'>April 5,2024</p>
            </div>
          </div>
          <Rating value={3.5} precision={.5} name='half-rating' readOnly/>
          <p>Nice Product</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductReviewCard
