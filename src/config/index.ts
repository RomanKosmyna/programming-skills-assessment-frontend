export const API_URL = "https://localhost:7186/api" as string;

const account = "/account";
const testTypes = "/testcategory";
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
        getAll: `${testTypes}/getalltestcategories`
    },
    testsByCategory: {
        getAll: `${tests}/getAllTests`,
        getById: (testId: string) => `${tests}/GetTestById/${testId}`,
        getByIdWithRelatedTables: (testId: string) => `${tests}/GetTestByIdWithRelatedTables/${testId}`,
        getByTestCategoryId: (testTypeId: string | undefined) => `${tests}/gettestsbytestcategoryid/${testTypeId}`
    },
    testResult: {
        formTestResult: (testId: string) => `${testResult}/formtestresult/${testId}`
    },
    userTestResult: {
        saveUserTestResult: `${userTestResult}/savetestresult`,
        getAllUserTestResults: (username: string) => `${userTestResult}/getallusertestresults/${username}`,
        getUserTestResultById: (userTestResultId: string) => `${userTestResult}/getusertestresultbyid/${userTestResultId}`
    }
};