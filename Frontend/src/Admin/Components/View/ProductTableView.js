import {
    Avatar,
    Button,
    Card,
    CardHeader,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import { deleteProduct, findProducts } from "../../../State/Products/Action";
  import { useDispatch, useSelector } from "react-redux";
  
  function ProductTableView() {
    const dispatch = useDispatch();
    const { customersProduct } = useSelector((store) => store);
  
  
    console.log("products------- : ", customersProduct);
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
        stock: "",
      };
      dispatch(findProducts(data));
    }, [customersProduct.deletedProducts]);
  
    return (
      <div className="p-5">
        <Card className="mt-2" >
          <CardHeader title="Recent Products"  />
  
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="left">Category</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Quantity</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {customersProduct?.products.content?.slice(0,8).map((item) => (
                  <TableRow
                    key={item.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">
                      <Avatar src={item.imageUrl}></Avatar>
                    </TableCell>
                    <TableCell align="left" scope="row">
                      {item.title}
                    </TableCell>
                    {/* <TableCell align="left">{item.category.name}</TableCell> */}
                    <TableCell align="left">{item.price}</TableCell>
                    <TableCell align="left">{item.quantity}</TableCell>
 
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    );
  }
  
  export default ProductTableView;
  