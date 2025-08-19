import api from "../api-handler";

export const getFaq = async () => {
    try {
        const response = await api.get(`user/faq-list`);
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