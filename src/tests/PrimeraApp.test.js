import React from 'react';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe( 'Pruebas del archivo PrimeraApp.js' , () => {

//    test( 'Debe de mostrar el mensaje "Hola, Soy Goku".' , () => {

//        const saludo = 'Hola, Soy Goku';

//        const { getByText } = render( <PrimeraApp saludo = { saludo } /> );

//        expect( getByText( saludo ) ).toBeInTheDocument();

//    });

    test( 'Debe de mostrar <PrimeraApp /> corerrectamente.' , () => {

        const saludo = 'Hola, Soy Goku';

        const wrapper = shallow( <PrimeraApp saludo = { saludo } /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test( 'Debe de mostrar el subtitulo enviado por props.' , () => {

        const saludo = 'Hola, Soy Goku';

        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow( 
            <PrimeraApp 
                saludo = { saludo } 
                subtitulo = { subtitulo }
            /> );

        const textoParrafo = wrapper.find('p').text();

        // console.log( textoParrafo );

        expect( textoParrafo ).toBe( subtitulo );

    });

});