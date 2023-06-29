const {sum} = require('./app.js'); //Suma test

test('adds 14 + 9 to equal 23', ()=>{
    let total = sum(14, 9);
    expect(total).toBe(23);

})

const { fromEuroToDollar } = require('./app.js'); // Euro to dollar test

test("One euro should be 1.206 dollars", () =>{

    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.2; 
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

const { fromDollarToYen } = require ('./app.js'); // Dollar to yen test

test("One dollar should be 143.2 yen", () =>{
    let yen = fromDollarToYen (10);
    let expected = 10 * 143.2;
    
    expect(fromDollarToYen(10)).toBe(1432);
})

const {fromYenToPound} = require ('./app.js'); // Yen to pound test

test("One yen should be 182.3 pound", ()=>{
    let pound = fromYenToPound(10);
    let expected = 10 * 182.3;

    expect(fromYenToPound(10)).toBe(1823);
})