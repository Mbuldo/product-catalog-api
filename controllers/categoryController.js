const Category = require("../models/Category");
const { successResponse, errorResponse } = require("../utils/responseHelper");

// Create a new category
exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        return successResponse(res, category, "Category created successfully", 201);
    } catch (error) {
        return errorResponse(res, error, 400);
    }
};

// Get all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        return successResponse(res, categories, "Categories retrieved successfully");
    } catch (error) {
        return errorResponse(res, error);
    }
};

// Get single category by ID
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return errorResponse(res, { message: "Category not found" }, 404);
        return successResponse(res, category, "Category retrieved successfully");
    } catch (error) {
        return errorResponse(res, error);
    }
};

// Update a category
exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) return errorResponse(res, { message: "Category not found" }, 404);
        return successResponse(res, category, "Category updated successfully");
    } catch (error) {
        return errorResponse(res, error, 400);
    }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) return errorResponse(res, { message: "Category not found" }, 404);
        return successResponse(res, null, "Category deleted successfully");
    } catch (error) {
        return errorResponse(res, error);
    }
};
