import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "@config/index";

import { TestCategoryType } from "../types";

export const getTestCategories = async (): Promise<TestCategoryType[]> => {
    const response = await fetch(API_URL + URLS.testCategories.getAll);
    
    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return response.json();
};

export const useTestCategories = () => {
    return useQuery({
        queryKey: ['testCategories'],
        queryFn: () => getTestCategories(),
        staleTime: 300000,
        retry: false
    });
};