import { useQuery } from "@tanstack/react-query";

import { API_URL, URLS } from "../../../config";

import { TestByCategoryType } from "../types";

export const getTestsByCategory = async (testCategoryId: string): Promise<TestByCategoryType[]> => {
    const response = await fetch(API_URL + URLS.testsByCategory.getByTestCategoryId(testCategoryId));
    
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
};

export const useTestsByCategory = (testCategoryId: string) => {
    return useQuery({
        queryKey: ['testsByCategory', testCategoryId],
        queryFn: () => getTestsByCategory(testCategoryId),
        staleTime: 300000
    });
};