import React from "react";
import PropTypes from 'prop-types';

// import { Fragment } from "react";



// Functional Component F.C.

const PrimeraApp = ({ saludo, subtitulo }) => {

    // Forma 1. Para validar el props.

//  if( !saludo ) {
//      throw new Error(' El saludo es necesario');
//  };


    // Puede Mostrar En Etiquetas

//  const numeros = 123;
//  const textos = 'Hola';
//  const arreglos = [ 'Tanjiro', 123 ];


    // Exepto Este Que Cuesta Un Poco 

//  const objetos = {

//     nombre:   'Adrian',
//     apellido: 'Ortega',
//     edad:     18
//  };



    return (
        <div>

            <h1> { saludo } </h1>
            <p>{ subtitulo }</p>

        </div>



        // Lo Que Se Pude Mostrar

//      <div>

//          <h1> { numeros } </h1>
//          <h1> { textos } </h1>
//          <h1> { arreglos } </h1>
//          <pre> { JSON.stringify( objetos, null, 1 ) } </pre>

//      </div>



        // Para Eliminar el DIV

//      <Fragment>
//
//          <h1> Hola Mundo </h1>
//          <p>mi primera aplicacion</p>
//
//      </Fragment>  

        // Otra Opcion Para Eliminar el DIV

//      <>
//
//          <h1> Hola Mundo </h1>
//          <p>mi primera aplicacion</p>
//
//      </>  

    );

};

// Forma 2. Para validar el props.

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
};

export default PrimeraApp; 