export const API_URL = "https://localhost:7186/api" as string;

const testTypes = "/testType";
const tests = "/test";

export const URLS = {
    testTypes: {
        getAll: `${testTypes}/getAllTestTypes`
    },
    tests: {
        getAll: `${tests}/getAllTests`,
        getByTestTypeId: (testTypeId: string) => `${tests}/getTestsByTestTypeId/${testTypeId}`
    }
};