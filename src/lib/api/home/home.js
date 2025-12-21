import api from "../api-handler";

export const getBanner = async () => {
    try {
        const response = await api.get(`user/banner`);
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
export const getCatregory = async () => {
    try {
        const response = await api.get(`user/category`);
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
export const getNewArrivals = async () => {
    try {
        const response = await api.get(`user/new-product`);
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
export const getFeaturedProducts = async () => {
    try {
        const response = await api.get(`user/featured-product`);
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

export const getCustomerReviews = async () => {
    try {
        const response = await api.get(`user/reviews`);
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

export const getCustomJewelry = async () => {
    try {
        const response = await api.get(`user/custom-jewelry-product`);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Login failed:', error.response.data);
            return { error: error.response.data.message || 'Invalid credentials' };
        } else if (error.request) {
            console.error('Login failed: No response from server', error.request);
            return { error: 'Server not responding. Please try again later.' };
        } else {
            console.error('Login failed:', error.message);
            return { error: 'An unexpected error occurred.' };
        }
    }
};
