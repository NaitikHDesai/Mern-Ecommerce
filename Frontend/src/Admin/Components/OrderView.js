import React, { useEffect } from 'react';
import { Grid, Box, Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AddressCard from '../../Customer/Components/AddressCard/AddressCard';
import OrderTracking from '../../Customer/Components/Order/OrderTracking';
import { getOrderById } from '../../State/Order/Action';
import BackdropComponent from '../../Customer/Components/BackDrop/Backdrop';

function OrderView() {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const { order } = useSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, []);

  return (
    <div style={{ backgroundColor: '#0D0D22', color: 'white', minHeight: '100vh' }}>
      <div className='px-2 lg:px-36 space-y-7'>
        <Grid container className='p-3 shadow-lg'>
          <Grid xs={12}>
            <p className='font-bold text-lg py-2'> Delivery Address :</p>
          </Grid>
          <Grid item xs={6}>
            <AddressCard address={order.order?.shippingAddress} />
          </Grid>
        </Grid>
        
        <Grid container className='space-y-5'>
          {order.order?.orderItems.map((item) => (
            <Grid
              container
              item
              className="shadow-xl rounded-md p-5 border"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className="flex  items-center ">
                  <img
                    className="w-[5rem] h-[5rem] object-cover object-top"
                    src={item?.product.imageUrl}
                    alt=""
                  />
                  <div className="ml-5 space-y-2">
                    <p>{item.product.title}</p>
                    <p className="opacity-50 text-xs font-semibold space-x-5">
                      <span>Color: {item?.product?.color}</span> <span>Size: {item.size}</span>
                    </p>
                    <p>Seller: {item.product.brand}</p>
                    <p>₹{item.discountedPrice} </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
      {/* <BackdropComponent open={order.loading} /> */}
    </div>
  );
}

export default OrderView;
