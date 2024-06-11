import axios, { AxiosPromise, AxiosResponse } from "axios"
import { EventData } from "../interface/EventData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://192.168.26.208:8080";

const fetchData = async (): Promise<AxiosResponse<EventData[]>> => {
    const response = await axios.get<EventData[]>(API_URL + '/events');
    return response;
  };

export function useEventData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['event-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}