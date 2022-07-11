import React, { useState } from "react";
import ChildComponent from "../pure/forms/child";

export default function Father() {

    const [name, setName] = useState('MArtín');

function showMassage(text) {
    alert(`Message: ${text}`)
}

function updateName(newName){
    setName(newName);
}

    return (
        <div style={ {background: 'tomato', padding: '50px' } }>
        <ChildComponent name={name} send={showMassage} update={updateName}></ChildComponent>
        </div>
    );
}
