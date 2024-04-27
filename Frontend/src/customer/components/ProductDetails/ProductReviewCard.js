import { Avatar, Box, Grid, Rating } from "@mui/material";
import React, { useState } from "react";

function ProductReviewCard({item}) {
  const [value, setValue] = useState(4.5);
  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
              alt={item?.user?.firstName}
            >
              {item?.user?.firstName[0].toUpperCase()}
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="text-lg font-semibold">{item.user?.firstName}</p>
              <p className="opacity-60">April 5,2024</p>
            </div>

            <div>
              <Rating
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                defaultValue={2.5}
                precision={0.5}
                name="half-rating"
                readOnly
              />
            </div>
            <p>{item?.review}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductReviewCard;
