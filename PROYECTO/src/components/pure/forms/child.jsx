import React from "react";

export default function ChildComponent( { name } ) {

    function pressButton(){
        alert(`Default TExt`)
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }

    return (
        <div>
            <p onMouseOver={() => console.log('onmouseover')}>Child Component</p>
            <button onClick={() => console.log("Pressed button 1")}>Botón 1</button>
            <button onClick={pressButton}>Botón 2</button>
            <button onClick={() => pressButtonParams('Hello')}>Botón 3</button>

        </div>
        
    );
}
