import APIRequest from '../utils/config/axios.config';


export function getRandomJokes() {
    return APIRequest.get('/'); // https://api.chucknorris.io/jokes/random
}

