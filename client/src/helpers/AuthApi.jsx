import axios from 'axios';
// import jwt from 'jsonwebtoken';

const apiAuth = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const requestHandler = async (request) => {
    // Modify request here
    const token = localStorage.getItem('jwt') || '';


    request.headers['authorization'] = 'Bearer ' + token;

    return request;
    // }
};

apiAuth.interceptors.request.use(async (request) => requestHandler(request));

export default apiAuth;