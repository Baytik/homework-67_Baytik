import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: 'https://homework-65-baytik.firebaseio.com/-M-haOTp1Jh4DhWQ2YC7.json'
});

export default axiosAPI;