import { useQuery } from "@tanstack/react-query";


import { ActiveTestType } from "../types";
import { API_URL, URLS } from "@config/index";

export const getActiveTest = async (activeTestId: string | undefined): Promise<ActiveTestType> => {
    const response = await fetch(API_URL + URLS.testsByCategory.getByIdWithRelatedTables(activeTestId));

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
};

export const useActiveTest = (activeTestId: string | undefined) => {
    return useQuery({
        queryKey: ['activeTest', activeTestId],
        queryFn: () => getActiveTest(activeTestId),
        retry: false
    });
};