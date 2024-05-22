import axios from "axios";

export const requestToBackend = (endpoint: string, method: 'post' | 'get' | 'put' | 'delete' = 'get', data?: object, headers?: object) => {
    return axios({
        method,
        url: 'https://virtserver.swaggerhub.com/sel657/blApi/1.0.0/' + endpoint,
        data,
        headers,
    });
};