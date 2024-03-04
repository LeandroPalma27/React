import {getUser} from "../../src/base-pruebas/05-funciones"

describe('Pruebas unitarias para las funciones de 05-funciones.js', () => {


    test('la funcion getUser debe retornar el mismo objeto que esta declarado en la prueba unitaria', () => {
        const testUser = {
            uid: '1234',
            username: 'leandro27p'
        }

        const user = getUser();
        expect(user).toEqual(testUser);
    })
});
