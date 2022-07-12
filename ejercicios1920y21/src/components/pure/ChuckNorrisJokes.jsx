import React, { useState, useEffect } from 'react'
import { getRandomJokes } from '../../services/axiosService';

//Material Ui
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup  from '@mui/material/ButtonGroup';
import Icon from '@mui/material/Icon';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


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
        console.log(good)
    }

    const badJoke = () => {
        bad += 1;
        setBad(bad)
        console.log(bad)
    }
 
    console.log(joke.value)

    return (
        <div>
        <Container maxWidth="sm">
            <h1>Chuck Norris Jokes</h1>
            <img src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png' style={{width:'250px'}}/>
            
            <p>{joke.value}</p>
            
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button variant="contained" onClick={badJoke}><ThumbDownIcon/></Button>
                <Button variant="contained" onClick={obtainJoke}>New Chuck Joke</Button>
                <Button variant="contained" onClick={goodJoke}><ThumbUpAltIcon /></Button>
            </ButtonGroup>
            <p>Good Jokes: {good}</p>
            <p>Bad Jokes: {bad}</p>


        </Container>
        </div>
    )
}
