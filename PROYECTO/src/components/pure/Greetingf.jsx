import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Greetingf = ({ name }) => {
    const [age, setAge] = useState(29);

    const birthday = () => {
        setAge(age +1);
    }
    const restarAnyos = () => {
        setAge(age -1);
    }

    return (
        <div>
            <h1>Hola { name } ! desde componente funcional</h1>
            <h2>Tu edad es: { age }</h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
                <button onClick={restarAnyos}>Restar años</button>
            </div>
        </div>
    );
};


Greetingf.propTypes = {
    name: PropTypes.string,
};


export default Greetingf;
