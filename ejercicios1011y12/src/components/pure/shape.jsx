import React, { useState, useEffect  } from 'react'
import shapeComponentStyle from '../../styles/shapeComponentStyle.scss'

export default function ShapeComponent() {

    const initialBackgroundColor = {
        backgroundColor: 'black'
    }

    const [mouseOver, setMouseOver] = useState(false);
    const [ backgroundColor, setBackgroundColor] = useState(initialBackgroundColor);
    
    useEffect(() => {
        const timerID = setInterval(() => {
            (mouseOver) ? backgroundChange() : clearInterval(timerID)
            
        }, 500);
        return () => {
            clearInterval(timerID);
        }   
    });

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    let red = parseInt(getRandomNumber(0,255));
    let green = parseInt(getRandomNumber(0,255));
    let blue = parseInt(getRandomNumber(0,255));

    let randomBackground = {
        backgroundColor: `rgb(${red},${green},${blue})`
    }

    function backgroundChange(){
        setBackgroundColor(randomBackground)
    }

    function handleMouseOver(){
        setMouseOver(true)
        setBackgroundColor(randomBackground)
    }

    function handleMouseLeave(){
        setMouseOver(false)
        setBackgroundColor(initialBackgroundColor)
    }
    function handleDoubleClick(){
        setMouseOver(false)
        setBackgroundColor(backgroundColor)
        
    }

    const Square = <div style={backgroundColor} onMouseEnter={handleMouseOver} onMouseOut={handleMouseLeave} onDoubleClick={handleDoubleClick} className='shape'></div>
    
    
    return (
        <>
            { Square }
        </>
    )
}

ShapeComponent.propTypes = {
    
}
