// Euro to dolar
const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.2;
    
    return valueInDollar;
}

// Dolar to yen
const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * 143.2;

    return valueInYen;
}

// Yen to pound
const fromYenToPound = (valueInYen) =>{
    let valueInPound = valueInYen * 182.3;

    return valueInPound;
}

// Suma, ejercicio.
const sum = (a,b) => {
    return a + b
}

console.log();


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};