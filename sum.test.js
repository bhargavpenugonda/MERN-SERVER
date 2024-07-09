//test cases for our unit fun sum

const sum = require("./test/sum")

//jest test cases
//test functin to test
test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe()->exactlt equal
    //expect()->to ex our unit
})
//run 'npm test' under server folder
test('Object in array',()=>{
    const data={one:1}
    data['two']=4;
    expect(data).toEqual({one:1,two:4});
})

//toBeNull-> if the received value is null
test('Value is Null',()=>{
    const n=null;
    expect(n).toBeNull();
})

//toBeDefined-> if a value/variable is defined or not
test('Value is defined',()=>{
    const a=1;
    expect(a).toBeDefined();
})

//toBeTruthy -> received value should be truth
test('Value is truth',()=>{
    const bool = true
    expect(bool).toBeTruthy();
})

//toBeFalsy -> received value should be false
test('Value is false',()=>{
    const bool = false
    expect(bool).toBeFalsy();
})