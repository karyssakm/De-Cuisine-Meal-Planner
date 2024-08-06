import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_REMOTE_API
});

export default {

    getIngredients() {
        return http.get('/ingredients')
    }

}


// http.interceptors.request.use((config) => {
// const token = localStorage.getItem('token');
// assign Authorization to the received token