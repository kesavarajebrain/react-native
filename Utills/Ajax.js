import axios from 'axios';
export const AJAX_ERROR_UNDEFINED_RESPONSE = 555;
const url = 'http://192.168.150.101:3000'
const client = axios.create({
    baseURL: url,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})


const TEXT_INSIDE_SSO_TIMEOUT_RESPONSE = 'This page is used to hold your data while you are being authorized for your request.';
client.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
client.interceptors.response.use(
    (response) => {
        if (
            response.data &&
            typeof response.data === 'string' &&
            response.data.toUpperCase().indexOf(TEXT_INSIDE_SSO_TIMEOUT_RESPONSE.toUpperCase()) >= 0
        ) {
            window.location.href = `https://${window.location.host}`;
            response.data = null;
            return response;
        }
        return response;
    },
    (error) => {
        const response = {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data.message
        };
        return Promise.reject(error);
    }
);
export default client;