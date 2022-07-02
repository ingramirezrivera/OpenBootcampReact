import React, { useRef } from "react";

export default function ChildComponent( { name, send, update } ) {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value;
        console.log('messageRef', messageRef)
        alert(`Text in input: ${text}`)
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={ {background: 'lightblue', padding: '30px', colo: 'white', borderRadius: '20px'} }>
            <p onMouseOver={() => console.log('onmouseover')}>Hello { name }</p>
            <button onClick={() => console.log("Pressed button 1")}>Botón 1</button>
            <button onClick={pressButton}>Botón 2</button>
            <button onClick={() => pressButtonParams('Hello')}>Botón 3</button>
            <input 
                placeholder="Send a text to your father" 
                onFocus={() => console.log("Input on focus")}
                onChange={(e) => console.log('Input changed', e.target.value)}
                onCopy={() => console.log('Copied text from input')}
                ref = {messageRef} 
            />
            <button onClick={() => send(messageRef.current.value)}>Sen Message</button>
            <div style={{martinTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder="New name" />
                    <button type="submit">Update Name</button>
                </form>

            </div>
        </div>
        
    );
}
