import React from 'react';
import { useState, useContext } from 'react';


/**
 * 
 * @returns @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */
 const miContexto = React.createContext(null);

 export default  function MiComponenteConContexto(){

    const estadoInicial = {
        token: '124567',
        sesion: 1
    }

    // Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token:'JWT123456789',
                sesion: sessionData.sesion + 1
            }
        )
    }

    return (
        <div>
            <miContexto.Provider value={sessionData}>
                {/* TODO LO QUE ESTE AQUI ADENTRO PUEDE LEER LOS DATOS DE SESSIONDATA */}
                {/* ADEMAS SI SE ACTUALIZA , LOS COMPONETNES DE AQUI, TAMBIEN LO ACTUALIZAN  */}
                <h1>**Ejemplo de useState y useContext**</h1>
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar sesión</button>
            </miContexto.Provider>
            
        </div>
    );
}

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es { state.token }
            </h1>
            {/* PINTAMOS EL COMPONENTE 2 */}
            <Componente2></Componente2>
            
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
            
        </div>
    );
}






