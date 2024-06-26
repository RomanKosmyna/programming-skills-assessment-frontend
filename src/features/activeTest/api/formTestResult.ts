import { API_URL, URLS } from "@config/index";
import { useQuery } from "@tanstack/react-query";

import { ExpectedTestResultType, TestResultType } from "../types";

export const formTestResult = async (activeTestId: string | undefined, requestBody: TestResultType[]): Promise<ExpectedTestResultType[]> => {
    const response = await fetch(API_URL + URLS.testResult.formTestResult(activeTestId), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
};

export const useFormTestResult = (activeTestId: string | undefined, requestBody: [TestResultType]) => {
    return useQuery({
        queryKey: ['formTestResult', activeTestId],
        queryFn: () => formTestResult(activeTestId, requestBody),
        retry: false
    });
};