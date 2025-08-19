import api from "../api-handler";

export const getHeader = async () => {
    try {
        const response = await api.get(`user/child-category`);
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

export const getSetting = async (type) => {
    try {
        const response = await api.get(`user/setting?key=${type}`);
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

export const storeSubscribe = async (type, data) => {
    try {
        const response = await api.post(`user/form?type=${type}`, data);
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

export const storeMedia = async (formData) => {
    try {
        const response = await api.formdata(`upload-file`, formData);
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

export const downloadSheet = async () => {
    try {
        const response = await api.get(`user/xlsx`);
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