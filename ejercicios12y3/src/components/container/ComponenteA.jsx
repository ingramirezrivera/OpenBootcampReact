import React from 'react';
import PropTypes from 'prop-types';
import ComponenteB from '../pure/ComponenteB';
import { Contacto } from '../../models/contacto.class';


const ComponenteA = () => {

    const contacto = new Contacto("Daniel", "Ramírez", "ing.ramirezrivera@gmail.com", true);

    return (
        <div>
            <ComponenteB contacto={contacto}></ComponenteB>
        </div>
    );
};


ComponenteA.propTypes = {

};


export default ComponenteA;
