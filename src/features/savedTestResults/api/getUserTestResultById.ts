import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "@config/index";

import { SpecificTestResultType } from "../types";

export const getUserTestResultById = async (token: string, userTestResultId: string | undefined): Promise<SpecificTestResultType> => {
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

export const useGetUserTestResultById = (token: string, userTestResultId: string | undefined) => {
    return useQuery({
        queryKey: ['userTestResultById', userTestResultId],
        queryFn: () => getUserTestResultById(token, userTestResultId),
        retry: false,
    });
};