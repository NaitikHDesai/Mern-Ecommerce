import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust'
import {useNavigate} from 'react-router-dom'; 


function OrderCard() {
  const navigate=useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Men Slim Mid Rise Black Jean</p>
              <p className="opacity-50 text-xs font-semibold">Size:Xl</p>
              <p className="opacity-50 text-xs font-semibold">Color:Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>
        <Grid item xs={4}>
            {true && <div>
                <p>
                <AdjustIcon sx={{width:"15px", height:"15px "}} className="text-green-600 mr-2"/>
                <span>Delivered on March 03</span>
            </p>
            <p className=" text-xs">
                Your Item Has Been Delivered
            </p>
            </div>
}
            {false &&<p>
                <span>
                    Excepted Delivery on Mar 03
                </span>
            </p>
            }
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;
