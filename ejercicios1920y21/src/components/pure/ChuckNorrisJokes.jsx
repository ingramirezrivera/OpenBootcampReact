import React, { useState, useEffect } from 'react'
import { getRandomJokes } from '../../services/axiosService';


export default function ChuckNorrisJokes() {

    const [joke, setJoke] = useState({});
    let [good, setGood] = useState(0);
    let [bad, setBad] = useState(0);

    useEffect(() => { 
        obtainJoke()    
    },[]);

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

    const goodJoke = () => {
        good += 1;
        setGood(good)
        obtainJoke()
        console.log(good)
    }

    const badJoke = () => {
        bad += 1;
        setBad(bad)
        obtainJoke()
        console.log(bad)
    }
 
    console.log(joke.value)

    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            <img src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png' style={{width:'250px'}}/>
            
            <p>{joke.value}</p>
            <button onClick={badJoke}>Bad Joke</button>
            <button onClick={obtainJoke} >New Chuck Joke</button>
            <button onClick={goodJoke}>Good Joke</button>
            <p>{good}</p>
            <p>{bad}</p>



        </div>
    )
}
