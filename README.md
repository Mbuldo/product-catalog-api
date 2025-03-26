 Product Catalog API

Overview

This is a RESTful API built with Node.js, Express.js, and MongoDB to manage a product catalog for an e-commerce platform. The API supports CRUD operations, product categorization, search & filtering, inventory tracking, and basic reporting.

 Setup Instructions
1️ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/product-catalog-api.git
cd product-catalog-api
2️ Install Dependencies
sh
Copy
Edit
npm install
3️ Configure Environment Variables
Create a .env file and add:

ini
Copy
Edit
MONGO_URI=mongodb://127.0.0.1:27017/product-catalog
PORT=5000
4️ Start the Server
For development (auto-restarts on changes):

sh
Copy
Edit
npm run dev
For production:

sh
Copy
Edit
npm start
If everything is set up correctly, you should see:

arduino
Copy
Edit
Server running on port 5000
MongoDB Connected
 API Endpoints
 Product Management
Create a Product
POST /api/products
Body:

json
Copy
Edit
{
  "name": "Laptop",
  "description": "Gaming laptop",
  "price": 1200,
  "category": "65a5b8f5e0b7f2a01f8e6a3d",
  "stock": 10
}
Get All Products
GET /api/products

Get Product by ID
GET /api/products/:id

Update a Product
PUT /api/products/:id
Body:

json
Copy
Edit
{
  "name": "Updated Laptop",
  "price": 1400
}
Delete a Product
DELETE /api/products/:id

Update Product Stock
PUT /api/products/:id/stock
Body:

json
Copy
Edit
{
  "stock": 50
}
Apply Discount to a Product
PUT /api/products/:id/discount
Body:

json
Copy
Edit
{
  "discountPrice": 999
}
 Category Management
Create a Category
POST /api/categories
Body:

json
Copy
Edit
{
  "name": "Electronics",
  "description": "Devices and gadgets"
}
Get All Categories
GET /api/categories

Get Category by ID
GET /api/categories/:id

Update a Category
PUT /api/categories/:id

Delete a Category
DELETE /api/categories/:id

 Search & Filtering
Search Products by Name or Description
GET /api/products/search?q=laptop

Filter Products by Category and Price Range
GET /api/products/filter?category=65a5b8f5e0b7f2a01f8e6a3d&price_min=500&price_max=1500

 Inventory & Reporting
Get Low Stock Products
GET /api/products/low-stock

 Error Handling
This API includes centralized error handling. If a request fails, you’ll receive:

json
Copy
Edit
{
  "success": false,
  "message": "Error description here"
}
