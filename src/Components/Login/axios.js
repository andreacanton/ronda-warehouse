import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://localhost:300'
});

export default instance;