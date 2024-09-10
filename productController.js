const Product = require('../model/productSchema');
const Category = require('../model/categorySchema');


exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(201).json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createProduct = async (req, res) => {
  const { productName, category, price, manufacturerName, manufacturerContact, qty, productImage, descOne, descTwo, descThree } = req.body;

  try {
    // Check if the product name already exists
    const existingProduct = await Product.findOne({ productName: productName });
    if (existingProduct) {
      return res.status(400).json({ error: 'Product with the same name already exists' });
    }

    // Find the category by name
    const categoryObj = await Category.findOne({ categoryName: category.toLowerCase() });

    if (!categoryObj) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Create the product
    const product = new Product({
      productName,
      categoryId: categoryObj._id,
      categoryName: categoryObj.categoryName.toLowerCase(),
      price,
      manufacturerName,
      manufacturerContact,
      qty,
      productImage,
      descOne: descOne.toLowerCase(),
      descTwo: descTwo.toLowerCase(),
      descThree: descThree.toLowerCase(),
      soldQty: 0
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};



exports.sellProduct = async (req, res) => {
  const { productId, quantity } = req.body;
  console.log({productId, quantity})
  try {
    // Find the product by its custom ID and update its quantity
    const product = await Product.findOneAndUpdate(
      { productId: productId }, // Specify the custom ID field
      // { $inc: { qty: -quantity } }, // Decrease the quantity by the sold amount
      // { new: true }
    );

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    if (product.qty < quantity) {
      return res.status(400).json({ error: 'Not enough stock available' });
    }
    const p = await Product.findOneAndUpdate(
      { productId: productId }, // Specify the custom ID field
      { $inc: { 
        qty: -quantity, // Decrease the quantity by the sold amount
        soldQty: +quantity // Increase the sold quantity by the sold amount
      }  },
      { new: true }
    );

    res.status(200).json({ message: 'Sale successful', p });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};



exports.createCategory = async (req, res) => {
  const { categoryName, categoryImage } = req.body;

  try {
    const category = new Category({
      categoryName: categoryName.toLowerCase(),
      categoryImage
    });

    await category.save();
    res.status(201).json(category);
  } catch (err) {
    if (err.code === 11000) { // Duplicate key error
      return res.status(400).json({ error: 'Category with the same name already exists' });
    }
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};



exports.filterProduct = async (req, res) => {
    const category = req.params.category.toLowerCase();
    const filteredProduct = await Product.find({categoryName:category});
    try {
    res.status(201).json(filteredProduct)
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  exports.filterDesc = async (req, res) => {
    const desc = req.params.desc.toLowerCase();
    const filteredProduct = await Product.find({ $or: [
      { descOne: { $regex: desc, $options: 'i' } },
      { descTwo: { $regex: desc, $options: 'i' } },
      { descThree: { $regex: desc, $options: 'i' } }
    ]});
    console.log(filteredProduct)
    try {
    res.status(201).json(filteredProduct)
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  exports.deleteProduct= async(req,res)=>{
    
      const deleteProduct=   await Product.deleteOne({ _id: req.params.id});
      console.log(deleteProduct);
      try{
        res.status(201).json("Product Deleted")
      }
      catch(e){
        console.error(e.message);
        res.status(500).send('Server Error');

      }
  }

  exports.updateProduct = async (req, res) => {
    
    const {qty,productName,price}=req.body;
    const updateProduct=await Product.findByIdAndUpdate(req.params.id,req.body,{
      new: true,
    });
      try{
        res.status(201).json(updateProduct)
      }
    catch(e){
      console.log(e.message);
      res.status(500).send('Server Error');

    }
   
  };



