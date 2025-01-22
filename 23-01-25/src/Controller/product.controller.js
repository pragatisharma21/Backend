import Product from "../Model/product.model.js";

export const addProduct = async (req, res) => {
  try {
    const { product_name, description, image } = req.body;

    const newProduct = new Product({ product_name, description, image });
    await newProduct.save();
    res.status(201).json({ message: "new product is created", newProduct });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

export const getPaginatedData = async (req, res) => {
  try {

    const {page = 1, limit = 10} = req.query;

    const skip = (page - 1)* limit;
    const data = await Product.find().skip(skip).limit(limit);
    const total = await Product.countDocuments();


    res.status(200).json({
        page: Number(page),
        limit: Number(limit),
        totalData: total,
        totalPages: Math.ceil(total/limit),
        data
    })
// cross origin resource sharing 
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};
