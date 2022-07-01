import React, { useState, useEffect } from 'react';

const ClockF = () => {

    const initialState = {   
            fecha: new Date(),
            edad: 0,
            nombre: 'Martín',
            apellidos: 'San José'
        }
    

    const [user, setUser] = useState(initialState);
    
    useEffect(() => {
        const timerID = setInterval(() => {
            tick()
        }, 1000);

        return () => {
            clearInterval(timerID);
        }
    });

    function tick() {
        return setUser({
            ...user,
            fecha: new Date(),
            edad: user.edad + 1
        });
    }

    return (
        <div>
            <h2>
                Hora Actual:
                {user.fecha.toLocaleTimeString()}
            </h2>
            <h3>{user.nombre} {user.apellidos}</h3>
            <h1>Edad: {user.edad}</h1>
        </div>
    );
}

export default ClockF;
