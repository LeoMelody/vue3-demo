import axios, { type AxiosResponse } from 'axios'

export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: string
}

export const getEvents = (): Promise<Event[]> => {
  return axios
    .get('https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events')
    .then((res: AxiosResponse<Array<Event>>) => {
      return res.data
    })
}

export const getEvent = (id: number): Promise<Event> => {
  return axios
    .get(
      `https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events/${id}`
    )
    .then((res: AxiosResponse<Event>) => {
      return res.data
    })
}
