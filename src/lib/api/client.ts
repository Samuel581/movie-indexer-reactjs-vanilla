import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

var BASE_URL = "";
var API_KEY = "";

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      params: {
        api_key: API_KEY,
      },
      headers: {
        'Content-Type': 'application/json'
      },

    });

    this.setupInterceptors()
  };

  private setupInterceptors() {

    this.client.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          console.error('Unauthorized - Invalid API Key')
        }
        return Promise.reject(error)
      }
    )
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post(url, data, config);
    return response.data;
  }
}

export const apiClient = new ApiClient()
