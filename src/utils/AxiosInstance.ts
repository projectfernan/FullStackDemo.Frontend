import axios from 'axios';

// Create a default Axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Set a base URL if needed
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to attach bearer tokens
axiosInstance.interceptors.request.use(
    (config) => {
        const localBearer = localStorage.getItem("bearer");
        if (localBearer) {
            const bearer = JSON.parse(localBearer);
            if (bearer?.token) {
                config.headers['Authorization'] = `Bearer ${bearer.token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
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
        const response = await axiosInstance({
            method,
            url,
            data,
        });
        return response.data; // Return the response data
    } catch (error) {
        console.log("makeRequest", error);
        return error; // This will be the custom error format returned from the interceptor
    }
};

export default axiosInstance;
