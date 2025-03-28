const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String },
    price: { type: Number, required: true },
    discountPrice: { type: Number, default: null },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    stock: { type: Number, default: 0 },
    variants: [{
        size: { type: String },   
        color: { type: String },  
        stock: { type: Number, default: 0 }
    }]
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
