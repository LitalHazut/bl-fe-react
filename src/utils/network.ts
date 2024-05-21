import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api',
    // TODO: Set a timeout for production
    // timeout: DefaultNetworkConfig.networkRequestsTimeout,
    // the cookie is attached to the request automatically
});

export const getFromServer = (
    url: string,
    options?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
    return axiosInstance.get(url, options);
};

export const postToServer = (
    url: string,
    data: unknown,
    options?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
    return axiosInstance.post(url, data, options);
};

export const uploadToServer = (
    url: string,
    formData: unknown,
    options?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
    return axiosInstance.post(url, formData, options);
};

export const putToServer = (
    url: string,
    data: unknown,
    options?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
    return axiosInstance.put(url, data, options);
};

export const deleteFromServer = (
    url: string,
    options?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
    return axiosInstance.delete(url, options);
};

export const extractMessageFromError = (err: unknown): string => {
    if (((err as AxiosError)?.response?.data as { message: string })?.message) {
        return ((err as AxiosError)?.response?.data as { message: string })
            ?.message;
    }
    if (typeof (err as AxiosError)?.response?.data === 'string') {
        return (err as AxiosError)?.response?.data as string;
    }
    if ((err as AxiosError).message) {
        return (err as AxiosError).message;
    }
    if (typeof err === 'string') {
        return err;
    }
    return 'Unknown error';
};
