import axios from 'axios'

export const DEFAULT_URL =
  'https://d3a0-2001-44c8-4058-f593-a0aa-9a67-ee48-1129.ngrok-free.app' + '/api'


export const RequestWithToken = (accessToken: string) => {
  return axios.create({
    baseURL: DEFAULT_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
}

export const RequestWithoutToken = () => {
  return axios.create({
    baseURL: DEFAULT_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const UploadRequestWithToken = (accessToken: string) => {
  return axios.create({
    baseURL: DEFAULT_URL,
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`
    }
  })
}
