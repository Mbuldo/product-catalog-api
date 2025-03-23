/**
 * Utility functions for sending standardized API responses
 */

// Success Response
exports.successResponse = (res, data, message = "Success", statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

// Error Response
exports.errorResponse = (res, error, statusCode = 500) => {
    return res.status(statusCode).json({
        success: false,
        message: error.message || "Internal Server Error",
        errors: error.errors || [],
    });
};
