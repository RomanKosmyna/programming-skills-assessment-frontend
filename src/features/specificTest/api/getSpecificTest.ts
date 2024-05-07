import { useQuery } from "@tanstack/react-query";

import { API_URL, URLS } from "../../../components/config";

import { SpecificTest } from "../types";

export const getSpecificTest = async (specificTestId: string): Promise<SpecificTest> => {
    const response = await fetch(API_URL + URLS.testsByCategory.getById(specificTestId));
    
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
};

export const useSpecificTest = (specificTestId: string) => {
    return useQuery({
        queryKey: ['specificTest', specificTestId],
        queryFn: () => getSpecificTest(specificTestId)
    });
};