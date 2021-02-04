import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    // baseURL: 'http://localhost:4100'  //this is for my server
    
});

export default instance;