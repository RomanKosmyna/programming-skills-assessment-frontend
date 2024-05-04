import { useQuery } from "@tanstack/react-query";

import { API_URL, URLS } from "../../../components/config";

import { UserResponse } from "../type";

export type LoginCredentialsDTO = {
    username: string;
    password: string;
};

export const login = async (data: LoginCredentialsDTO): Promise<UserResponse> => {
    const options: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(API_URL + URLS.account.login, options);

    if (!response.ok) {
        const errorData = await response.json();
        
        throw new Error(errorData[0].description);
    }

    return response.json();
};

export const useLoginUser = (data: LoginCredentialsDTO) => {
    return useQuery({
        queryKey: ['registerUser'],
        queryFn: () => login(data)
    });
};