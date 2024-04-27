import React, { useEffect, useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InventoryIcon from "@mui/icons-material/Inventory";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../State/Products/Action";
import { getOrders } from "../../State/Admin/Order/Action";

function MonthlyOverView() {
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);
  const { adminOrder } = useSelector((store) => store);

  const [salesData, setSalesData] = useState([
    {
      stats: "245K",
      title: "Sales",
      color: "#E5D68A",
      icon: <TrendingUpIcon sx={{ fontSize: "1.75rem" }} />,
    },
    {
      stats: "45K",
      title: "Customer",
      color: "#22CB5C",
      icon: <AccountCircleIcon sx={{ fontSize: "1.75rem" }} />,
    },
    {
      stats: "",
      title: "Products", // Will be replaced with actual count
      color: "#DE4839",
      icon: <InventoryIcon sx={{ fontSize: "1.75rem" }} />,
    },
    {
      stats: "",
      title: "Revenue",
      color: "#12B0E8",
      icon: <CurrencyRupeeIcon sx={{ fontSize: "1.75rem" }} />,
    },
  ]);

  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000000,
      disccout: null,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 10,
      stock: " ",
    };
    dispatch(findProducts(data));
  }, []);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    const updatedSalesData = [...salesData];
    const productsCount = customersProduct?.products?.content?.length + 1;
    const formattedStats =
      productsCount > 1000
        ? `${Math.floor(productsCount / 1000)}k`
        : productsCount;
    updatedSalesData[2].stats = formattedStats;
    setSalesData(updatedSalesData);
  }, [customersProduct.products]);

  useEffect(() => {
    if (adminOrder && adminOrder.orders) {
      const updatedSalesData = [...salesData];
      const totalRevenue = adminOrder.orders.reduce(
        (total, order) => total + order.totalDiscountedPrice,
        0
      );
      console.log(totalRevenue)
      const formattedPriceStats =
        totalRevenue > 1000 ? `${(totalRevenue / 1000).toFixed(2)}` : totalRevenue.toFixed(1);
      updatedSalesData[3].stats = `${formattedPriceStats}K`;
      setSalesData(updatedSalesData);
    }
  }, [adminOrder.orders]);

  const renderStats = () => {
    return salesData.map((item, index) => (
      <Grid item xs={12} sm={3} key={index}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            variant="rounded"
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: "common.white",
              backgroundColor: `${item.color}`,
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="caption">{item.title}</Typography>
            <Typography variant="h6">{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ));
  };

  return (
    <Card sx={{ backgroundColor: "#242B2E", color: "white" }}>
      <CardHeader
        title="Overall View"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 600 }}>
              Total 48.5% growth
            </Box>
            😎 this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            md: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MonthlyOverView;
