import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

function DeliveryAddressForm({handleNext}) {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const { auth } = useSelector((store) => store);
  const [selectedAddress, setSelectedAdress] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refressh of form when it get submit
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      pinCode: data.get("pincode"),
      mobile: data.get("phoneNumber"),
    };
    const orderData={address,navigate};
    dispatch(createOrder(orderData))
    console.log("Address", address);
  };

  const handleCreateOrder=(item)=>{
    dispatch(createOrder({address:item,navigate}));
    handleNext();
  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} >
          <Box  className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll">
           {auth.user?.addresses.map((item)=>(
            <div onClick={()=>setSelectedAdress(item)}
            className="p-5 py-7 border-b cursor-pointer">
              {/* {console.log("Address Item:", item)} */}
              <AddressCard address={item}/>
              {selectedAddress?._id === item._id && (<Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
              onClick={()=>handleCreateOrder(item)}
            >
              Deliver Here
            </Button>
          )} 
          </div>
           ))}
           </Box>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="shipping address"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="pincode"
                    name="pincode"
                    label="Pincode"
                    fullWidth
                    autoComplete="shipping pin-code"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone No"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>

                <Grid item xs={12} >
                  <Button
                    sx={{ padding:".9rem 1.5rem", bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DeliveryAddressForm;
