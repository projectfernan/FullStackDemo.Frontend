import axios from 'axios';

// Create a default Axios instance
const AxiosBearer = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Set a base URL if needed
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to attach bearer tokens or basic auth
AxiosBearer.interceptors.request.use(
    (config) => {
        // Check for bearer token in localStorage
        const localBearer = localStorage.getItem("bearer");

        if (localBearer) {
            const bearer = JSON.parse(localBearer);
            if (bearer?.token) {
                config.headers['Authorization'] = `Bearer ${bearer.token}`;
                return config; // Exit early if bearer token is present
            }
        }
        
        console.log('bearer_config',config);
        return config; 
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
AxiosBearer.interceptors.response.use(
    (response) => response,
    (error) => {
        const customError = {
            data: null,
            statusCode: error?.response?.status || 500,
            message: error?.response?.data?.message || "Internal Server Error",
            success: false,
            totalCount: 0,
        };
        return Promise.reject(customError);
    }
);

export const makeRequest = async (method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, data?: any) => {
    try {
        const response = await AxiosBearer({
            method,
            url,
            data,
        });
        return response.data; // Return the response data
    } catch (error) {
        console.log("AxiosBearer makeRequest", error);
        return error; // This will be the custom error format returned from the interceptor
    }
};

export default AxiosBearer;