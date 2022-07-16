import React, { useContext } from 'react'

export default function Task({ myContext, onClick, completed, id, text }) {

  const state = useContext(myContext);


  return (
    <div>
      <li onClick={ onclick } 
          style={
            {
                textDecoration: completed ? 'line-through': 'none',
                textDecorationColor: completed ? 'green' : 'none',
                color: completed ? 'green' : 'white'  
            } 
        }>
        { id } - { text }
      </li>

    </div>
  )
}
