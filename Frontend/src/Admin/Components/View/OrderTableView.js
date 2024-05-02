import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function OrdersTableView() {
  const navigate=useNavigate();
  const [anchorElArray, setAnchorElArray] = useState([]);
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = null;
    setAnchorElArray(newAnchorElArray);
  };

  useEffect(() => {
    dispatch(getOrders());
  },[ adminOrder.delivered, adminOrder.shipped, adminOrder.confirmed,adminOrder.deletedOrder])
  // console.log("Admin Orders", adminOrder);

  const handleShipOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };
  return (
      <Card >
        <CardHeader title="Recent Orders" 
        sx={{
          pt:2,
          alignItems:"center",
          "& .MuiCardHeader-action": { mt: 0.6 },
        }}
        action={
          <Typography
           onClick={()=>navigate("/admin/orders")}
           variant="caption"
           sx={{color:"blue",cursor:"pointer",paddingRight:".8rem"}}
           >
            View All
           </Typography>
        }
        titleTypographyProps={{
          variant:'h5',
          sx:{
            lineHeight:"1.6 !important",
            letterSpacing:"0.15px !important",
          },
        }}
        />

        <TableContainer >
          <Table sx={{ minWidth:800 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell >Title</TableCell>
                <TableCell >Order Id</TableCell>
                <TableCell >Price</TableCell>
                <TableCell >Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.map((item, index) => (
                <TableRow
                hover
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell >
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderitem) => (
                        <Avatar src={orderitem?.product?.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  <TableCell  sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}>
                    <Box sx={{display:"flex",flexDirection:'column'}}>
                      <Typography   sx={{ fontWeight: 500, fontSize: "0.875rem !important" }}>
                      {item.orderItems.map((orderitem) => (
                      <p>{orderitem.product?.title}</p>
                    ))}
                      </Typography>
                      <Typography variant="caption">{item.brand}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell >{item._id}</TableCell>
                  <TableCell >{item.totalDiscountedPrice}</TableCell>
                  <TableCell>
                  <Chip
                    sx={{ color: "white" }}
                    label="PLACED"
                    size="small"
                    color="success"
                    className="text-white"
                  />
                </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    
  );
}

export default OrdersTableView;
