import { useQuery } from "@tanstack/react-query";

import { API_URL, URLS } from "../../../config";

import { ActiveTestType } from "../types";

export const getActiveTest = async (activeTestId: string): Promise<ActiveTestType> => {
    const response = await fetch(API_URL + URLS.testsByCategory.getByIdWithRelatedTables(activeTestId));

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
};

export const useActiveTest = (activeTestId: string) => {
    return useQuery({
        queryKey: ['activeTest', activeTestId],
        queryFn: () => getActiveTest(activeTestId)
    });
};