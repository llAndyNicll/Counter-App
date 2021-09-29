import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {


    const [ counter, setCounter ] = useState( value );


    // handleAdd

    const handleAdd = () => {

        setCounter( counter + 1 );


        // Por si no tienes acceso a la primera variante

        // setCounter( (c) => { c + 1 } );

    };

    const handleReset = () => {

        setCounter( value );

    };

    const handleSustract = () => {

        setCounter( counter - 1 );

    };



    return (
        <div>

            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd } >+1</button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleSustract } >-1</button>

        </div>
    );

};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

export default CounterApp;