import api from "../api-handler";

export const getProduct = async (page, size, s) => {
    try {
        const response = await api.get(`user/globel-product?page=${page}&size=${size}&s=${s}`);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Login failed:', error.response.data);
            return { error: error.response.data.message || 'Invalid credentials' };
        } else if (error.request) {
            console.error('Login failed: No response from server', error.request);
            return { error: 'Server not responding. Please try again later.' };
        } else {
            // Something else triggered the error
            console.error('Login failed:', error.message);
            return { error: 'An unexpected error occurred.' };
        }
    }
};

export const getProductDetail = async (slug) => {
    try {
        const response = await api.get(`user/product-details/${slug}`);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Login failed:', error.response.data);
            return { error: error.response.data.message || 'Invalid credentials' };
        } else if (error.request) {
            console.error('Login failed: No response from server', error.request);
            return { error: 'Server not responding. Please try again later.' };
        } else {
            // Something else triggered the error
            console.error('Login failed:', error.message);
            return { error: 'An unexpected error occurred.' };
        }
    }
};

export const getRelatedProducts = async (slug) => {
    try {
        const response = await api.get(`user/recommand-product?slug=${slug}`);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Login failed:', error.response.data);
            return { error: error.response.data.message || 'Invalid credentials' };
        } else if (error.request) {
            console.error('Login failed: No response from server', error.request);
            return { error: 'Server not responding. Please try again later.' };
        } else {
            // Something else triggered the error
            console.error('Login failed:', error.message);
            return { error: 'An unexpected error occurred.' };
        }
    }
};
 