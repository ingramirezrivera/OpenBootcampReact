import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ComponenteB = ({ contacto }) => {
    return (
        <div>
            <h1>Nombre: { contacto.nombre }</h1>
            <h2>Apellido: { contacto.apellido }</h2>
            <h2>Email: { contacto.email }</h2>
            <h3>Conectado: { contacto.conectado ? 'Contacto en linea' : 'No disponible' }</h3>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
