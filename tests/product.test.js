const request = require("supertest");
const app = require("../server"); 
const mongoose = require("mongoose");

let categoryId;
let productId;

// Test suite for Products
describe("Product API", () => {
    beforeAll(async () => {
        
        const categoryResponse = await request(app)
            .post("/api/categories")
            .send({ name: "Test Category", description: "Test Description" });
        categoryId = categoryResponse.body.data._id;
    });

    afterAll(async () => {
        await mongoose.connection.close(); 
    });

    test("Should create a new product", async () => {
        const res = await request(app)
            .post("/api/products")
            .send({
                name: "Test Product",
                description: "A test product",
                price: 100,
                category: categoryId,
                stock: 10
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.success).toBe(true);
        productId = res.body.data._id;
    });

    test("Should fetch all products", async () => {
        const res = await request(app).get("/api/products");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    test("Should fetch a single product", async () => {
        const res = await request(app).get(`/api/products/${productId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.data._id).toBe(productId);
    });

    test("Should update product stock", async () => {
        const res = await request(app)
            .put(`/api/products/${productId}/stock`)
            .send({ stock: 50 });
        expect(res.statusCode).toBe(200);
        expect(res.body.product.stock).toBe(50);
    });

    test("Should delete a product", async () => {
        const res = await request(app).delete(`/api/products/${productId}`);
        expect(res.statusCode).toBe(200);
    });
});
