const multiplicar=require('./math');

test("Multiplicar 3 por 4 y el resultado es 12", () => {
    expect(multiplicar(3,4)).toBe(12);
    
} );

test("Multiplicar 5 por 0 y el resultado es 0", () => {
    expect(multiplicar(5,0)).toBe(0);
    
} );

test("Multiplicar -2 por 4 y el resultado es -8", () => {
    expect(multiplicar(-2,4)).toBe(-8);
    
} );