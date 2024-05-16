export const API_URL = "https://localhost:7186/api" as string;

const account = "/account";
const testCategory = "/testcategory";
const tests = "/test";
const testResult = "/testresult";
const userTestResult = "/usertestresult";

export const URLS = {
    account: {
        login: `${account}/login`,
        register: `${account}/register`,
        getUserId: `${account}/getuserid` 
    },
    testCategories: {
        getAll: `${testCategory}/testcategories`
    },
    testsByCategory: {
        getAll: `${tests}/tests`,
        getById: (testId: string | undefined) => `${tests}/test/${testId}`,
        getByIdWithRelatedTables: (testId: string | undefined) => `${tests}/testwithrelateddata/${testId}`,
        getByTestCategoryId: (testTypeId: string | undefined) => `${tests}/testsbycategory/${testTypeId}`
    },
    testResult: {
        formTestResult: (testId: string | undefined) => `${testResult}/formtestresult/${testId}`
    },
    userTestResult: {
        saveUserTestResult: `${userTestResult}/testresult`,
        getAllUserTestResults: (username: string | undefined) => `${userTestResult}/testresults/${username}`,
        getUserTestResultById: (userTestResultId: string | undefined) => `${userTestResult}/testresult/${userTestResultId}`,
        deleteUserTestResultById: (userTestResultId: string | undefined) => `${userTestResult}/testresult/${userTestResultId}`
    }
};