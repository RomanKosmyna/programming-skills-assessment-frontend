import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "@config/index";

import { UserTestResultType } from "../types";

export const getAllUserTestResults = async (token: string, username: string | undefined): Promise<UserTestResultType[]> => {
    const response = await fetch(API_URL + URLS.userTestResult.getAllUserTestResults(username), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    
    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return response.json();
};

export const useAllUserTestResults = (token: string, username: string | undefined) => {
    return useQuery({
        queryKey: ['allUserTestResults', username],
        queryFn: () => getAllUserTestResults(token, username),
        retry: false
    });
};