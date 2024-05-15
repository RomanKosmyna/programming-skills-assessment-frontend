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
        getById: (testId: string | undefined) => `${tests}/gettestbyid/${testId}`,
        getByIdWithRelatedTables: (testId: string | undefined) => `${tests}/gettestbyidwithrelatedtables/${testId}`,
        getByTestCategoryId: (testTypeId: string | undefined) => `${tests}/gettestsbytestcategoryid/${testTypeId}`
    },
    testResult: {
        formTestResult: (testId: string | undefined) => `${testResult}/formtestresult/${testId}`
    },
    userTestResult: {
        saveUserTestResult: `${userTestResult}/savetestresult`,
        getAllUserTestResults: (username: string | undefined) => `${userTestResult}/getallusertestresults/${username}`,
        getUserTestResultById: (userTestResultId: string | undefined) => `${userTestResult}/getusertestresultbyid/${userTestResultId}`,
        deleteUserTestResultById: (userTestResultId: string | undefined) => `${userTestResult}/deleteusertestresult/${userTestResultId}`
    }
};