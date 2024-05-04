export const API_URL = "https://localhost:7186/api" as string;

const account = "/account";
const testTypes = "/testCategory";
const tests = "/test";

export const URLS = {
    account: {
        login: `${account}/login`,
        register: `${account}/register`
    },
    testCategories: {
        getAll: `${testTypes}/getAllTestCategories`
    },
    testsByCategory: {
        getAll: `${tests}/getAllTests`,
        getById: (testId: string) => `${tests}/GetTestById/${testId}`,
        getByIdWithRelatedTables: (testId: string) => `${tests}/GetTestByIdWithRelatedTables/${testId}`,
        getByTestTypeId: (testTypeId: string) => `${tests}/getTestsByTestTypeId/${testTypeId}`
    }
};