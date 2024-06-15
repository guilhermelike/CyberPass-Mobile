import axios from "axios";
import { useState } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RequestData } from "../interface/RequestData";
import { API_URL } from "../../api";

export function useCreateRequest() {
    const queryClient = useQueryClient();

    const createRequest = async (requestData: RequestData) => {
        const response = await axios.post<RequestData>(`${API_URL}/requests/`, requestData);
        return response.data;
    };

    const { mutate, isLoading, isError, error } = useMutation(createRequest, {
        onSuccess: () => {
            queryClient.invalidateQueries('request-data'); // Atualiza os dados da query após o sucesso
        },
    });

    return { createRequest: mutate, isLoading, isError, error };
}
