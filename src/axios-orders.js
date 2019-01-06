import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rohit-burger.firebaseio.com/',
})

export default instance;