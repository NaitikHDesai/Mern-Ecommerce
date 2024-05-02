import React from "react";
import { Box, Grid } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

function OrderCard({ item, order }) {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const currentDate = new Date();
  const deliveryDate = new Date(order?.deliveryDate);
  const isDelivered = currentDate > deliveryDate;

  return (
    <Box className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            onClick={() => navigate(`/account/order/${order?._id}`)}
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={item?.product?.imageUrl}
              alt=""
            />
            <div className="ml-5 ">
              <p className="mb-2">{item?.product?.title}</p>
              <p className="opacity-50 text-xs font-semibold">
                Size:{item?.size}
              </p>
              <p className="opacity-50 text-xs font-semibold">
                Color:{item?.product?.color}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹{item?.discountedPrice}</p>
        </Grid>

        <Grid item xs={4}>
          <p className="space-y-2 font-semibold">
            {isDelivered ? (
              <>
                <FiberManualRecordIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered on {formatDate(order?.deliveryDate)}</span>
              </>
            ) : (
              <>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>
                  Expected Delivery On {formatDate(order.deliveryDate)}
                </span>
              </>
            )}
          </p>

          <p className=" text-xs">
            {isDelivered
              ? "Your item has been delivered"
              : "Your item is on its way"}
          </p>

          {isDelivered && (
            <div
              onClick={() => navigate(`/account/rate/${order?._id}`)}
              className="flex items-center text-blue-600 cursor-pointer"
            >
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate & Review Product</span>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default OrderCard;
