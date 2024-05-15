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

export type SpecificTestResultType = {
    userTestResultID: string;
    testCategoryID: string;
    testName: string;
    questionData: QuestionDataType[];
    totalDurationTimer: number;
    remainingDurationTimer: number;
    completionHour: string | null;
    completionDate: string | null;
};

export type QuestionDataType = {
    questionResultID: string;
    isCorrect: boolean;
    questionID: string;
};