import { useRequest } from '@/utils/request'
import type { AxiosResponse } from 'axios'

const request = useRequest();

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

export const getEvents = (prePage: number, page: number): Promise<{
  data: Array<Event>,
  total: number,
}> => {
  return request
    .get(`/events?_limit=${prePage}&_page=${page}`)
    .then((res: AxiosResponse<Event[]>) => {
      return {
        data: res.data,
        total: Number(res.headers['x-total-count'])
      }
    })
}

export const getEvent = (id: number): Promise<Event> => {
  return request
    .get(
      `/events/${id}`
    )
    .then((res: AxiosResponse<Event>) => {
      return res.data
    })
}
