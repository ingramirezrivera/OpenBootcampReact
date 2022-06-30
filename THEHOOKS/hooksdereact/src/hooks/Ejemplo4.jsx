/**
 * Ejemplo para enteder el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de React Children props ***</h1>
            <h2>
                Nombre:{ props.children }
            </h2>
            
        </div>
    );
}

export default Ejemplo4;
