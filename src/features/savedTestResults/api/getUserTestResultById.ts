import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "../../../config";
import { SpecificTestResultType } from "../type";

export const getUserTestResultById = async (token: string, userTestResultId: string): Promise<SpecificTestResultType> => {
    const response = await fetch(API_URL + URLS.userTestResult.getUserTestResultById(userTestResultId), {
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

export const useGetUserTestResultById = (token: string, userTestResultId: string) => {
    return useQuery({
        queryKey: ['userTestResultById', userTestResultId],
        queryFn: () => getUserTestResultById(token, userTestResultId),
        retry: false,
    });
};