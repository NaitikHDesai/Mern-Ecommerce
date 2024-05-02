import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect,useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteProduct, findProducts } from "../../State/Products/Action";
import { useDispatch, useSelector } from "react-redux";

function ProductsTable() {
  const location=useLocation();
  const dispatch = useDispatch();

  const navigate=useNavigate()
  const { customersProduct } = useSelector((store) => store);

  const handleProductDelete=(productId)=>{
    dispatch(deleteProduct(productId));
  }

  const [filterValue, setFilterValue] = useState({
    availability: "",
    category: "",
    sort: "",
  });


    // query 
    const searchParams = new URLSearchParams(location.search);
    const availability = searchParams.get("availability");
    const sort = searchParams.get("sort");
    const page = searchParams.get("page");
  

//handle Pagination
    const handlePaginationChange = (event, value) => {
      searchParams.set("page", value);
      const query = searchParams.toString();
      navigate({ search: `?${query}` });
    };
    
  console.log("products------- : ", customersProduct);
  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000000,
      disccout: null,
      sort: sort || "price_low",
      pageNumber: page || 1,
      pageSize: 10,
      stock:availability,
    };
    dispatch(findProducts(data));
  }, [page,availability,sort,customersProduct.deletedProducts]);



  const handleFilterChange = (e, sectionId) => {
    console.log(e.target.value, sectionId);
    setFilterValue((values) => ({ ...values, [sectionId]: e.target.value }));
    searchParams.set(sectionId, e.target.value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };


  return (
    <Box width={"100%"}>
      <Card className="p-3">
      <CardHeader
          title="Sort"
          sx={{
            pt: 0,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
                Availability
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.availability}
                label="Availability"
                onChange={(e) => handleFilterChange(e, "availability")}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"in_stock"}>Instock</MenuItem>
                <MenuItem value={"out_of_stock"}>Out Of Stock</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Sort By Price
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.sort}
                label="Sort By Price"
                onChange={(e) => handleFilterChange(e, "sort")}
              >
                <MenuItem value={"price_high"}>High - Low</MenuItem>
                <MenuItem value={"price_low"}>Low - High</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Card>

      <Card className="mt-2" >
      <CardHeader
          title="All Products"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />

        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell >Title</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
                <TableCell  sx={{ textAlign: "center" }}>Price</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>

                <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customersProduct?.products?.content?.map((item) => (
                <TableRow
                hover
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell >
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell
                    sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                  >
                    
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.875rem !important",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="caption">{item.brand}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{item.category?.name}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{item.discountedPrice}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{item.quantity}</TableCell>

                  <TableCell sx={{ textAlign: "center" }}>
                    <Button onClick={()=>handleProductDelete(item._id)} variant="text">Delete </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Card className="mt-2 border">
      <div className="mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md">
          <Pagination
            count={customersProduct.products?.totalPages}
            color="primary"
            className=""
            onChange={handlePaginationChange}
            // value={page}
          />
        </div>
      </Card>
    </Box>
   
  );
}

export default ProductsTable;
