import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "@config/index";

import { SpecificTestType } from "../types";

export const getSpecificTest = async (specificTestId: string | undefined): Promise<SpecificTestType> => {
    const response = await fetch(API_URL + URLS.testsByCategory.getById(specificTestId));
    
    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return response.json();
};

export const useSpecificTest = (specificTestId: string | undefined) => {
    return useQuery({
        queryKey: ['specificTest', specificTestId],
        queryFn: () => getSpecificTest(specificTestId),
        retry: false
    });
};