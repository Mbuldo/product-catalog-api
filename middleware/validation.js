const { body, validationResult } = require("express-validator");

// Validate Product Input
exports.validateProduct = [
    body("name").notEmpty().withMessage("Product name is required"),
    body("price").isNumeric().withMessage("Price must be a number"),
    body("category").notEmpty().withMessage("Category ID is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validate Category Input
exports.validateCategory = [
    body("name").notEmpty().withMessage("Category name is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
