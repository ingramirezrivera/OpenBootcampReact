import React, { useState, useEffect } from 'react'
import { getRandomJokes } from '../../services/axiosService';


export default function ChuckNorrisJokes() {

    const [joke, setJoke] = useState({});

    useEffect(() => { 
        obtainJoke()    
    }, []);

    const obtainJoke = () => {
        getRandomJokes()
            .then((response) => {
                if(response.status === 200){
                    setJoke(response.data)
                    console.log(joke)
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })
    }

    console.log(joke.value)

    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            <img src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png' style={{width:'250px'}}/>
            
            <p>{joke.value}</p>
            <p>{joke.id}</p>
            <button onClick={obtainJoke} style={{backGround: 'white', borderRadius: '10px', padding:'25px', fontWeight: 'Bold', fontSize:'25px'}}>New Chuck Joke</button>



        </div>
    )
}
