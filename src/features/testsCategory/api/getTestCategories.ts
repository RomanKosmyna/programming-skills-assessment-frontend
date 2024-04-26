import { useQuery } from "@tanstack/react-query";

import { API_URL, URLS } from "../../../components/config";

import { TestCategoryType } from "../types";

export const getTestCategories = async (): Promise<TestCategoryType[]> => {
    const response = await fetch(API_URL + URLS.testCategories.getAll);
    
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
};

export const useTestCategories = () => {
    return useQuery({
        queryKey: ['testCategories'],
        queryFn: () => getTestCategories()
    });
};