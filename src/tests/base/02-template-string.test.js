import { getSaludo } from '../../base/02-template-string';

describe( 'Pruebas del archivo 02-template-string.js' , () => {

    test( 'getSaludo debe de retornar Hola Goku!.' , () => {
        
        const nombre = 'Goku';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre + '!');

    });

    test( 'getSaludo debe de retorar Hola Carlos! si no hay argumento nombre.' , () => {
    
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos!' );

    });
    
})


