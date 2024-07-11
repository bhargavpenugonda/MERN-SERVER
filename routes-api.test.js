//routes-api.test.js
//jest test to test our HTTP GET method
//well test if it contains all the parts or not
const app= require('./index');
const request = require('supertest');
let server;
beforeAll(() => {
    server =await StartServer();
})
afterAll(done => {
    server.close(done);
})
describe('GET /users',()=>{
    test('Get users from /user api',async()=>{
        const res = await request(app)
        .get('/users')
        .expect(200);
        console.log(res.body.getAllUsers[0]);
        const data =res.body;
        data.getAllUsers.forEach(user=>{
            expect(user).toHaveProperty('id');
            expect(user).toHaveProperty('name');
        })
    })
})