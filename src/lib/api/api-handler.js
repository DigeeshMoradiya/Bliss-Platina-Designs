// utils/apiHandler.js
import axios from 'axios';



const METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;  // You can store the base URL in your .env.local file.

class Api {
  isLoggedIn = false;

  constructor() {
    this.baseURL = BASE_URL;
    this.isAlreadyFetchingAccessToken = false;
    this.listeners = [];
  }

  async request(method, url, data = null) {
    try {
      const response = await axios({
        method,
        url: `${this.baseURL}${url}`,
        data,
        headers: this.getHeaders(),
      });
      return response.data;
    } catch (error) {
      // Handle errors
      console.error(error);

      if (error.response && error.response.status === 401 || error.response.status === 403) {
        // Token expired, handle the token refresh here
        if (!this.isAlreadyFetchingAccessToken) {
          this.isAlreadyFetchingAccessToken = true;
          // Call your refresh token function
          // this.refreshAccessToken();
          localStorage.removeItem('token');
        }
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  }
  async deleterequest(method, url, data = null) {
    try {
      const response = await axios({
        method,
        url: `${this.baseURL}${url}`,
        headers: this.getHeaders(),
      });
      return response.data;
    } catch (error) {
      // Handle errors
      if (error.response && error.response.status === 401) {
        // Token expired, handle the token refresh here
        if (!this.isAlreadyFetchingAccessToken) {
          this.isAlreadyFetchingAccessToken = true;
          // Call your refresh token function
          // this.refreshAccessToken();
        }
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  }

  async requestWithFormData(method, url, data) {
    try {
      const response = await axios({
        method,
        url: `${this.baseURL}${url}`,
        data,
        headers: this.getHeaders(data), // Will skip setting JSON content-type
      });
      return response.data;
    } catch (error) {
      console.error(error);

      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        if (!this.isAlreadyFetchingAccessToken) {
          this.isAlreadyFetchingAccessToken = true;
          localStorage.removeItem('token');
        }
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  }

  getHeaders(data = null) {
    const token = this.getToken();
    const headers = {
      'x-access-key': token,
    };

    if (!(data instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    return headers;
  }


  getToken() {
    // Retrieve token from localStorage or cookies
    return localStorage.getItem('token'); // This returns the value directly

  }

  // async refreshAccessToken() {
  //   try {
  //     const response = await axios.post(`${this.baseURL}/refresh-token`);
  //     this.isAlreadyFetchingAccessToken = false;
  //     localStorage.setItem('token', response.data.token);
  //     this.listeners.forEach((callback) => callback());
  //     this.listeners = [];
  //   } catch (error) {
  //     this.isAlreadyFetchingAccessToken = false;
  //     console.error('Error refreshing token:', error);
  //   }
  // }

  // API methods for different HTTP verbs
  get(url) {
    return this.request(METHOD.GET, url);
  }

  post(url, data) {
    return this.request(METHOD.POST, url, data);
  }
  formdata(url, formData) {
    return this.requestWithFormData(METHOD.POST, url, formData);
  }


  put(url, data) {
    return this.request(METHOD.PUT, url, data);
  }

  delete(url) {
    return this.deleterequest(METHOD.DELETE, url);
  }
}

const api = new Api();
export default api;
