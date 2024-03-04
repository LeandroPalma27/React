import {getSaludo} from "../../src/base-pruebas/02-template-string";

describe('Pruebas unitarias en 02-template.string.js', () => {
    test('Probando que la funcion getSaludo() regrese undefined', () => {
        expect(getSaludo("Leandro")).toBe("Hola Leandro");
    })
});