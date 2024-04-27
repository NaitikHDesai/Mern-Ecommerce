import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../State/Products/Action';
import { Button, FormControl, Grid, InputLabel, Menu, MenuItem, Select, TextField, Typography } from '@mui/material';

const thirdLevelCategories = {
  men: {
    clothing: [
      { name: "Blazers", value: "men_blazer" },
      { name: "Suits", value: "mens_suits" },
      { name: "Shirts", value: "mens_shirt" },
      { name: "Jeans", value: "mens_jeans" },
      { name: "Track Pants", value: "mens_track_pants" },
      { name: "Cargos", value: "mens_cargo" },
      { name: "Sweaters", value: "mens_sweaters" },
      { name: "T-Shirts", value: "mens_tshirts" },
      { name: "Traditionals", value: "mens_traditionals" },
      { name: "Mens kurta", value: "mens_kurta" },
    ],
    accessories: [
      { name: "Belt", value: "belt" },
      { name: "Watch", value: "watch" },
      { name: "Sunglasses", value: "sunglasses" },
      { name: "Hats", value: "Hats" },
      { name: "Bags", value: "bags" },
      { name: "Wallets", value: "mens_wallets" },
    ],
    brands:[
      { name: "Nike", value: "nike" },
      { name: "Adidas", value: "adidas" },
      { name: "Puma", value: "puma" },
      { name: "Gucci", value: "gucci" },
      { name: "Louis Vuitton", value: "louis_vuitton" },
      { name: "ZARA", value: "zara" }, 
    ],
  },
  women: {
    clothing: [
      { name: "Tops", value: "women_tops" },
      { name: "Dresses", value: "women_dress" },
      {name:"Jeans" ,value:"women_jeans"},
      { name: "Shirts", value: "women_shirt" },
      { name: "Pants", value: "womens_pants" },
      {name:"Sweaters",value:"women_sweater"},
      { name: "T-Shirts", value: "women_tshirt" },
      {name:'Gouns',value:"women_gouns"},
      { name: "Saree", value: "saree" },
      { name: "Lengha Choli", value: "lengha_choli" },
      {name:'Kurta',value:"women_kurta"},
    ],
    accessories: [
      { name: "Belt", value: "belt" },
      { name: "Watch", value: "watch" },
      { name: "Sunglasses", value: "sunglasses" },
      { name: "Hat", value: "hat" },
      { name: "Bag", value: "bag" },
      { name: "Tie", value: "tie" },
      { name: "Scarf", value: "scarf" },
    ],
    brands:[
      { name: "Nike", value: "nike" },
      { name: "Adidas", value: "adidas" },
      { name: "Puma", value: "puma" },
      { name: "Gucci", value: "gucci" },
      { name: "Louis Vuitton", value: "louis_vuitton" },
      { name: "ZARA", value: "zara" }, 
    ],
  },
  kids: {
    clothing: [
      { name: "Tops", value: "kids_tops" },
      { name: "Shirts", value: "kids_shirts" },
      { name: "Pants", value: "kids_pants" },
      { name: "T-Shirts", value: "kids_tshirts" },
    ],
    accessories: [
      { name: "Belt", value: "belt" },
      { name: "Watch", value: "watch" },
      { name: "Sunglasses", value: "sunglasses" },
      { name: "Hat", value: "hat" },
      { name: "Bag", value: "bag" },
      { name: "Tie", value: "tie" },
      { name: "Scarf", value: "scarf" },
    ],
    brands:[
      { name: "Nike", value: "nike" },
      { name: "Adidas", value: "adidas" },
      { name: "Puma", value: "puma" },
      { name: "Gucci", value: "gucci" },
      { name: "Louis Vuitton", value: "louis_vuitton" },
      { name: "ZARA", value: "zara" }, 
    ],
  },
};


const initialSizes=[
  {name:'S',quantity:0},
  {name:'M',quantity:0},
  {name:'l',quantity:0},
  {name:'XL',quantity:0},
  {name:'XXL',quantity:0},
]
function CreateProductForm() {
  const [productData,setProductData]=useState({
    imageUrl:"",
    brand:"",
    title:"",
    color:"",
    discountedPrice:"",
    price:"",
    discountPersent:"",
    size:initialSizes,
    quantity:"",
    topLavelCategory:"",
    secondLavelCategory:"",
    thirdLavelCategory:"",
    description:"",
  });
  const dispatch=useDispatch();
  const [totalSizeQuantity, setTotalSizeQuantity] = useState(0); // State to track total size quantity
 
  const jwt=localStorage.getItem("jwt");

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setProductData((prevState)=>({
      ...prevState,
      [name]:value,
    }));
  };

  const handleSizeChange=(e,index)=>{
    let {name,value}=e.target;
    name==="size_quantity"?name="quantity":name=e.target.name;
   
    const sizes=[...productData.size];
    sizes[index][name]=value;
    setProductData((prevState)=>({
      ...prevState,
      size:sizes,
    }));
    const total = sizes.reduce((acc, curr) => acc + parseInt(curr.quantity), 0);
    setTotalSizeQuantity(total);
  };


  const handleSubmit=(e)=>{
    e.preventDefault();
    if (totalSizeQuantity <= parseInt(productData.quantity)) {
      dispatch(createProduct(productData));
      console.log(productData);
    } else {
      // Show error message or handle validation accordingly
      console.log("Total size quantity cannot exceed total quantity");
    }
  }

  

  return (
    <div className='p-10'  >
      <Typography variant='h3' sx={{textAlign:'center'}} className='py-10 text-center'>
        Add New Product
      </Typography>
      <form 
      onSubmit={handleSubmit}
      className=' min-h-screen'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
            fullWidth
            label="IMAGE URL"
            name='imageUrl'
            value={productData.imageUrl}
            onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
            fullWidth
            label="Brand"
            name='brand'
            value={productData.brand}
            onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField 
            fullWidth
            label="Title"
            name='title'
            value={productData.title}
            onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField 
            fullWidth
            label="Color"
            name='color'
            value={productData.color}
            onChange={handleChange}
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <TextField 
            fullWidth
            label="Total Quantity"
            name='quantity'
            value={productData.quantity}
            onChange={handleChange}
            type='number'
            />
          </Grid>


          <Grid item xs={12} sm={4}>
            <TextField 
            fullWidth
            label="Price"
            name='price'
            value={productData.price}
            onChange={handleChange}
            type='number'
            />
          </Grid>


          <Grid item xs={12} sm={4}>
            <TextField 
            fullWidth
            label="Discounted Price"
            name='discountedPrice'
            value={productData.discountedPrice}
            onChange={handleChange}
            type='number'
            />
          </Grid>


          <Grid item xs={12} sm={4}>
            <TextField 
            fullWidth
            label="Discount Percentage"
            name='discountPersent'
            value={productData.discountPersent}
            onChange={handleChange}
            type='number'
            />
          </Grid>

          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select 
              name='topLavelCategory'
              value={productData.topLavelCategory}
              onChange={handleChange}
              label="Top Level Category"
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
              </FormControl> 
          </Grid>
          
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select 
              name='secondLavelCategory'
              value={productData.secondLavelCategory}
              onChange={handleChange}
              label="Second Level Category"
              >
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="brands">Brands</MenuItem>
              </Select>
              </FormControl> 
          </Grid>

          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select 
              name='thirdLavelCategory'
              value={productData.thirdLavelCategory}
              onChange={handleChange}
              label="Third Level Category"
              >
                {productData.topLavelCategory && productData.secondLavelCategory && thirdLevelCategories[productData.topLavelCategory][productData.secondLavelCategory].map((category)=>(
                  <MenuItem key={category.value} value={category.value}>{category.name}</MenuItem>
                ))}
              </Select>
              </FormControl> 
          </Grid>

          <Grid item xs={12}>
            <TextField 
            fullWidth
            id='outlined-multiline-static'
            multiline
            rows={3}
            label="Description"
            name='description'
            onChange={handleChange}
            value={productData.description}
            />
          </Grid>

          {productData.size.map((size,index)=>(
            <Grid container item spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField 
                fullWidth
                label="Size Name"
                name='name'
                onChange={(event)=>handleSizeChange(event,index)}
                required
                value={size.name}
            />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField 
                fullWidth
                label="Quantity"
                name='size_quantity'
                type='number'
                onChange={(event)=>handleSizeChange(event,index)}
                required
            />
            </Grid>
            
          </Grid>
          ))}
          
          <Grid item xs={12}>
            <Button variant='contained'
            sx={{p:1.8}}
            className='py-20'
            size='large'
            type='submit'>
              Add New Product
            </Button>
          </Grid>

        </Grid>
      </form>
    </div>
  )
}

export default CreateProductForm
