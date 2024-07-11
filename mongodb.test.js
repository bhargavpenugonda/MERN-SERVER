const mongoose = require('mongoose')
describe('MongoDB connection',()=>{
    beforeAll(async ()=>{
        const url='mongodb+srv://bhargavpenugonda:snb1217@atlascluster.x5w376u.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster'
        await mongoose.connect(url)
    });
    //call the test case inside describe and below before all
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
        
    })
});
