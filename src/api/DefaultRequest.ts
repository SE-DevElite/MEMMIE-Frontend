import axios from 'axios'

export const DEFAULT_URL =
  'https://5b43-2001-fb1-20-7bf4-d93d-830b-64a5-affd.ngrok-free.app/api'

export const RequestWithToken = (token: string) => {
  return axios.create({
    baseURL: DEFAULT_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
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
