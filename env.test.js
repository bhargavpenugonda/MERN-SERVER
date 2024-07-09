let dataSets= [];
//execute my env before all
beforeAll(()=>{
    dataSets=['raju','ram'];
})
beforeEach(()=>{
    console.log('before each setup is called');
})
afterEach(()=>{
    console.log('after each setup is called');
})
afterAll(()=>{
    dataSets=[];
})
test('Test Case', () => {
  expect(dataSets.length).toBe(2)
})
test('Data Set contains',()=>{
    expect(dataSets).toContain('raju');
})
test('Data Set contains',()=>{
    expect(dataSets).toContain('ram');
})