//mock.test.js
//mock getData and Process the mocked data
//mock module
//('module url',function)
jest.mock('./test/utils',()=>(
    {
    getData:jest.fn(),
    getRaw:jest.fn()
    }
));

const {getData, getRaw} = require('./test/utils')
const {processData,processRaw}= require('./test/processData')
//mockReturnValue ->
test('Mock the Process data',()=>{
    //mock the return value of getData
    getData.mockReturnValue('Mocked data');
    expect(processData()).toBe('Processed:Mocked data')
});
test('Mocked Raw Data',()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true)
})