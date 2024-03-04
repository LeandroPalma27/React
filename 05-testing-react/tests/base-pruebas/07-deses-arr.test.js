const { retornaArreglo } = require("../../src/base-pruebas/07-deses-arr");

describe('Pruebas en 07-deses-arr.js', () => {
    test('retornaArreglo() debe retornar un string y un numero', () => {
        const [value1, value2] = retornaArreglo();
        expect(typeof value1).toBe('string');
        expect(typeof value2).toBe('number');
    });
    
});
