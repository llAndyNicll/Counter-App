import { getUser, getUsuarioActivo, saludar2 } from '../../base/05-funciones';

describe( 'Pruebas del archivo 05-funciones.js' , () => {

    test( 'Debe de retornar Hola, Goku' , () => {

        const nombre = 'Goku'

        const saludo = saludar2( nombre );

        // console.log( saludo );

        expect( saludo ).toBe( 'Hola, Goku' );

    });
    
    test( 'getUser debe de retornar un objeto.' , () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( user ).toEqual( userTest );

    });

    test( 'getUsuarioActivo debe de retonar un objeto.' , () => {
        
        const nombre = 'Juan';

        const user = getUsuarioActivo( nombre );

        expect( user ).toEqual({
            uid: 'ABC567',
            username: nombre
        });

    });
    
});
