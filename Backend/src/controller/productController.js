const productService = require("../Services/productService");

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.deleteProduct(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.updateProduct(productId, req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const findProduct = await productService.findProductById(productId);
    return res.status(201).send(findProduct);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findProductByCategory= async (req,res)=>{
  try {
    const category=req.params.category;
    const product=await productService.findProductByCategory(category);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({error:error.message});
  }
}

const searchProduct=async(req,res)=>{
  try {
    const query=req.params.query;
    const products=await productService.searchProduct(query);
    return res.status(201).send(products);
  } catch (error) {
   return  res.status(500).send({error:error.message});
  }
}

const getAllProducts = async (req, res) => {
  const productId = req.params.id;
  try {
    const getProducts = await productService.getAllProducts(req.query);
    return res.status(201).send(getProducts);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const multipleProduct = async (req, res) => {
  try {
    await productService.createMultipleProduct(req.body);
    return res.status(201).send({ message: "Products Created SuccessFully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  multipleProduct,
  findProductById,
  searchProduct,
  findProductByCategory,
};
