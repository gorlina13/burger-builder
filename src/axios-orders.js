import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-20b27.firebaseio.com/'
});

export default instance;
