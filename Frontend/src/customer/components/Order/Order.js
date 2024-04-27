import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "./OrderCard";
import { getOrderHistory } from "../../../State/Order/Action";
import BackdropComponent from "../BackDrop/Backdrop";
const orderStatus = [
  { label: "On the Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];
function Order() {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    dispatch(getOrderHistory({ jwt }));
  }, [jwt]);

  console.log("users orders ", order.orders);
  return (
    <Box className="px-10">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5} className="">
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5 ">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10 ">
              <h1 className="font-semibold">Order Status</h1>

              {orderStatus.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    defaultChecked={option.checked}
                    className="h-4 w-4 border-x-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={9}>
          <Box className="space-y-5">
          {order.orders?.length>0 && order.orders?.map((order )=> {
             return order?.orderItems?.map((item,index)=> <OrderCard item={item} order={order} />)
          })}
          </Box>
        </Grid>
      </Grid>

      <BackdropComponent open={order.loading}/>
    </Box>
  );
}

export default Order;
