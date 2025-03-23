const Product = require("../models/Product");
const { successResponse, errorResponse } = require("../utils/responseHelper");

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        return successResponse(res, product, "Product created successfully", 201);
    } catch (error) {
        return errorResponse(res, error, 400);
    }
};

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("category");
        return successResponse(res, products, "Products retrieved successfully");
    } catch (error) {
        return errorResponse(res, error);
    }
};

// Get single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("category");
        if (!product) return errorResponse(res, { message: "Product not found" }, 404);
        return successResponse(res, product, "Product retrieved successfully");
    } catch (error) {
        return errorResponse(res, error);
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return errorResponse(res, { message: "Product not found" }, 404);
        return successResponse(res, product, "Product updated successfully");
    } catch (error) {
        return errorResponse(res, error, 400);
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return errorResponse(res, { message: "Product not found" }, 404);
        return successResponse(res, null, "Product deleted successfully");
    } catch (error) {
        return errorResponse(res, error);
    }
};
