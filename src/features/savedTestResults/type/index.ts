export type UserTestResultType = {
    userTestResultID: string;
    testCategoryID: string;
    testID: string;
    testName: string;
    totalDurationTimer: number;
    remainingDurationTimer: number;
    completionHour: string | null;
    completionDate: string | null;
    userID: string;
};