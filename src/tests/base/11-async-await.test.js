import { getImagen } from "../../base/11-async-await";

describe( 'Pruebas del archivo 11-async-await.js' , () => {

    test( 'Debe de retornar el url de la imagen.' , async() => {

        const url = await getImagen();

        // console.log( url );

        expect( url.includes( 'https://' ) ).toBe( true );

    });

});