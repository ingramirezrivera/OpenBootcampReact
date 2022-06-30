/**
 * Ejemplo de uso de: 
 * - usestate()
 * - useRef()
 * - useEffect()
 */
import React, {useState,useRef,useEffect} from 'react';

const Ejemplo2 = () => {
    // vamos a crear dos contadores distintos 
    // cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos a crear una referencia con useRef() para asociar una variable
    //con un elemento del DOM del componente(vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect
     */
    

    /**
     * ? Caso 1: Ejecutar un snipet de codigo
     * Cada vez que haya un cambio de estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log("Cambio en estado del componente");
    //     console.log("Mostrando referencia a elemento de DOM");
    //     console.log(miRef);
    // });

    /**
     * ? Caso2: Ejecutar solo cuando cambie el contador 1
     * CAda vez que haya un cambio en el contador 1 , se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador 2, no habra ejecución.
     *  
     * */

    useEffect(() => {
        console.log("Cambio en el estado del contador 1");
        console.log("Mostrando referencia al elemento del DOM");
        console.log(miRef)
    }, [contador1]);

    /**
     * ? Caso3: Ejecutar solo cuando cambie el contador 1
     * CAda vez que haya un cambio en el contador 1 , se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador 2, no habra ejecución.
     *  
     * */

     useEffect(() => {
        console.log("Cambio en el estado del contador 1 / contador 2");
        console.log("Mostrando referencia al elemento del DOM");
        console.log(miRef)
    }, [contador1, contador2]);


    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect()</h1>
            <h2> Contador1: {contador1}</h2>
            <h2> Contador2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <button onClick={incrementar1}>Incrementar contador1</button>
            <button onClick={incrementar2}>Incrementar contador2</button>

            
        </div>
    );
}

export default Ejemplo2;
