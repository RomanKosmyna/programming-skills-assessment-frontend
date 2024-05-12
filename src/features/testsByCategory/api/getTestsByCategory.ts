import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "@config/index";

import { TestByCategoryType } from "../types";

export const getTestsByCategory = async (testCategoryId: string | undefined): Promise<TestByCategoryType[]> => {
    const response = await fetch(API_URL + URLS.testsByCategory.getByTestCategoryId(testCategoryId));
    
    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return response.json();
};

export const useTestsByCategory = (testCategoryId: string | undefined) => {
    return useQuery({
        queryKey: ['testsByCategory', testCategoryId],
        queryFn: () => getTestsByCategory(testCategoryId),
        staleTime: 300000,
        retry: false
    });
};