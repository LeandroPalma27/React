const { getHeroeById } = require("../../src/base-pruebas/08-imp-exp");

describe('Pruebas unitarias en 08-imp-exp.js', () => {
    test('Probando que getHeroesOwner() retorne undefined si no existe el ID', () => {
        const heroe = getHeroeById(0);
        expect(heroe).toBeUndefined();
    });
    
});
