const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    stock: { type: Number, default: 0 },
    variants: [{ size: String, color: String, stock: Number }],
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
