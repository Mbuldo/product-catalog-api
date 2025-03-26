const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");

let categoryId;

// Test suite for Categories
describe("Category API", () => {
    afterAll(async () => {
        await mongoose.connection.close();
    });

    test("Should create a new category", async () => {
        const res = await request(app)
            .post("/api/categories")
            .send({ name: "Test Category", description: "Test Description" });
        expect(res.statusCode).toBe(201);
        expect(res.body.success).toBe(true);
        categoryId = res.body.data._id;
    });

    test("Should fetch all categories", async () => {
        const res = await request(app).get("/api/categories");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    test("Should fetch a single category", async () => {
        const res = await request(app).get(`/api/categories/${categoryId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.data._id).toBe(categoryId);
    });

    test("Should delete a category", async () => {
        const res = await request(app).delete(`/api/categories/${categoryId}`);
        expect(res.statusCode).toBe(200);
    });
});
