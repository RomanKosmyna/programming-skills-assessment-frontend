export type ActiveTestType = {
    testID: string,
    testTypeID: string,
    testName: string,
    questions: [],
    description: string,
    durationMinutes?: number,
    testedSkills: [string]
};

export type ActiveTestProps = {
    activeTest: ActiveTestType
}

export type AnswerOptionType = {
    questionID: string;
    optionNumber: number;
};

export type ExpectedTestResultType = {
    questionID: string;
    isCorrect: [];
}

export type TestResultType = {
    questionID: string;
    arrayOfAnswers: number[];
}