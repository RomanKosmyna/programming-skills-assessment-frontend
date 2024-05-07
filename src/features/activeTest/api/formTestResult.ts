import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "../../../components/config";
import { ExpectedTestResultType, TestResultType } from "../types";

export const formTestResult = async (activeTestId: string, requestBody: TestResultType[]): Promise<[ExpectedTestResultType]> => {
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

export const useFormTestResult = (activeTestId: string, requestBody: [TestResultType]) => {
    return useQuery({
        queryKey: ['formTestResult', activeTestId],
        queryFn: () => formTestResult(activeTestId, requestBody)
    });
};