import Axios from 'axios'

import { logger } from '@/utils'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

const axios = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/vnd.api+json'
  }
})

axios.interceptors.request.use((request) => {
  logger(
    'axios',
    `Request to ${request.method?.toUpperCase()} ${request.url} with params`,
    request.params,
    `and data`,
    request.data
  )
  return request
})

axios.interceptors.response.use((response) => {
  logger(
    'axios',
    `Response from ${response.config.method?.toUpperCase()} ${
      response.config.url
    } with params`,
    response.config.params,
    `and data`,
    response.config.data,
    `and got response data ->`,
    response.data
  )
  return response
})

export default axios
