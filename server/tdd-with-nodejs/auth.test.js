const request = require('supertest');
const app = require('../app.js'); // Ensure this points to your Express app

describe("Authentication API", () => {
    test("should sign up a new user", async () => {
        const response = await request(app)
            .post('/auth/signup')
            .send({ email: "testuser@example.com", password: "password123" });
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toContain("User created successfully! 🥳");
    });

    // it("should reject duplicate user registration", async () => {
    //     // First call to register the user
    //     await request(app)
    //         .post('/auth/signup')
    //         .send({ email: "testuser_jest@example.com", password: "password123" });
        
    //     // Second call should fail
    //     const response = await request(app)
    //         .post('/auth/signup')
    //         .send({ email: "testuser_jest@example.com", password: "password123" });
    //     expect(response.statusCode).toBe(500);
    //     expect(response.body.message).toContain("User already exists! Try logging in. 😄");
    // });

    // it("should login an existing user", async () => {
    //     // Ensure the user is registered
    //     await request(app)
    //         .post('/auth/signup')
    //         .send({ email: "testlogin_jest@example.com", password: "password123" });

    //     const response = await request(app)
    //         .post('/auth/signin')
    //         .send({ email: "testlogin_jest@example.com", password: "password123" });
    //     expect(response.statusCode).toBe(200);
    //     expect(response.body.type).toEqual('success');
    // });

    // it("should logout a user", async () => {
    //     const response = await request(app)
    //         .post('/auth/logout');
    //     expect(response.statusCode).toBe(200);
    //     expect(response.body.message).toContain('Logged out successfully!');
    // });
});

