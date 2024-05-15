/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { API_URL, URLS } from "@config/index";

export const deleteUserTestResultById = async (token: string, userTestResultId: string | undefined): Promise<any> => {
    const response = await fetch(API_URL + URLS.userTestResult.deleteUserTestResultById(userTestResultId), {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    if (response.status === 204) {
        return { success: true };
    }

    return response.json();
};

export const useDeleteUserTestResultById = (token: string, userTestResultId: string | undefined) => {
    return useMutation({
        mutationKey: ['deleteUserTestResultById', userTestResultId],
        mutationFn: () => deleteUserTestResultById(token, userTestResultId),
        retry: false,
    });
};