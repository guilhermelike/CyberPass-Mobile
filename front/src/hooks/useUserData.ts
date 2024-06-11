import axios, { AxiosPromise, AxiosResponse } from "axios"
import { UserData } from "../interface/UserData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): Promise<AxiosResponse<UserData[]>> => {
    const response = await axios.get<UserData[]>(API_URL + '/users');
    return response;
  };

export function useUserData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['user-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}