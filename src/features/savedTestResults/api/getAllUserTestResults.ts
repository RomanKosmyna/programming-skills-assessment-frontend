import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "../../../components/config";
import { UserTestResultType } from "../type";

export const getAllUserTestResults = async (token: string, username: string): Promise<UserTestResultType[]> => {
    const response = await fetch(API_URL + URLS.userTestResult.getAllUserTestResults(username), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
};

export const useAllUserTestResults = (token: string, username: string) => {
    return useQuery({
        queryKey: ['allUserTestResults', username],
        queryFn: () => getAllUserTestResults(token, username)
    });
};