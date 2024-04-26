export interface ITest {
    testID: string,
    testTypeID: string,
    testName: string,
    questions: [any],
    testedSkills: [string],
    durationMinutes?: number
};