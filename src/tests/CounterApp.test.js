import React from "react";
import { shallow } from 'enzyme';
import CounterApp from "../CounterApp";

describe( 'Pruebas del archivo CounterApp.js' , () => {

    let wrapper = shallow( <CounterApp value = { 10 } /> );

    beforeEach( () => {

        wrapper = shallow( <CounterApp value = { 10 } /> );

    });

    test( 'Debe de mostrar <CounterApp /> correctamente.' , () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test( 'Debe de mostrar el valor por defecto de 100.' , () => {

        const value = 100;

        const wrapper = shallow( <CounterApp value = { value } /> );

        const contador = wrapper.find( 'h2' ).text().trim(); // trim elimina espacios

        expect( contador ).toBe( '100' );

    });

    test( 'Debe de incrementar el contador con el boton +1.' , () => {

        const btn1 = wrapper.find('button').at( 0 ).simulate( 'click' );

        // console.log( btn1.html() );

        const contador = wrapper.find( 'h2' ).text().trim();

        // console.log( contador );

        expect( contador ).toBe( '11' );

    });

    test( 'Debe de decrementar el contador con el boton -1.' , () => {

        const btn1 = wrapper.find('button').at( 2 ).simulate( 'click' );

        // console.log( btn1.html() );

        const contador = wrapper.find( 'h2' ).text().trim();

        // console.log( contador );

        expect( contador ).toBe( '9' );

    });

    test( 'Debe de resetiar el contador con el boton Reset.' , () => {;

        const value = 105;

        const wrapper = shallow( <CounterApp value = { value } /> );

        const btn1 = wrapper.find('button').at( 0 ).simulate( 'click' );

        const btn2 = wrapper.find('button').at( 1 ).simulate( 'click' );

        // console.log( btn1.html() );

        const contador = wrapper.find( 'h2' ).text().trim();

        // console.log( contador );

        expect( contador ).toBe( '105' );

    });

});