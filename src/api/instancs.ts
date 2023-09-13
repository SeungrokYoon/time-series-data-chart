const BASE_URL = '/'

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface CustomInstance extends AxiosInstance {
  get<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>
}

const httpClient: CustomInstance = axios.create({
  baseURL: BASE_URL,
})

export { httpClient }
