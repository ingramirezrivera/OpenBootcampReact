import React, { useState } from 'react'

export default function OptionalRender() {
    const [access, setAccess] = useState(false);
    const [nMessages, setNmessages] = useState(0);

    const loggedStyle = {
        backgroundColor: 'green',
        color: 'white',
        fontWeight: 'bold'
        
    }

    // ? Estilo para usuario no logueado
    const unloggedStyle = {
        backgroundColor: 'tomato',
        color: 'white',
        fontWeight: 'bold'
    }

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)

    }
    

    //Login /Logout buttons
    const LogOutButton = ({ logoutAction, propStyle }) => {
        return <button onClick={logoutAction} style={propStyle} >Logout</button>
    }

    const LoginButton = ({ loginAction, propStyle } ) => {
        return <button onClick={loginAction} style={propStyle} >Login</button>
    }

    let optionalButton;

    if (access){
        optionalButton = <LogOutButton  logoutAction={logoutAction} propStyle={unloggedStyle}></LogOutButton>
    }else{
        optionalButton = <LoginButton loginAction={loginAction} propStyle={loggedStyle}></LoginButton>
    }

    //Unread messages

    let addMessages = () => {
        setNmessages(nMessages + 1 )
    }

    return (
        <div>
            {/* OPTIONALBUTTON */}
                { optionalButton }

            {/* {N MESAGGES UNREAD} */}
            {access ? (
                <div>
                    {   (nMessages > 0) ?
                        (<p>You have {nMessages} mic  new Message{nMessages > 1 ? 's' : null}</p>) :
                        (<p>The are not new Messages </p>)
                    }     
                    <button onClick={addMessages}>{nMessages === 0 ? <p>You have {nMessages} newMessage...</p> : <p>The are not new Messages </p>  }</button>
                </div>): null}
            

            {/* {nMessages > 0 && nMessages === 1 && <p>You have { nMessages } New messages...</p>}
            {nMessages > 1 && nMessages === 1 && <p>You have { nMessages } New messages...</p>}
            {nMessages === 0 && <p>There are not new messages</p>} */}

            
            
        </div>
        )
}
