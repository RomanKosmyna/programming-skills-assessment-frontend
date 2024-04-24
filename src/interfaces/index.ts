export interface ITest {
    testID: string,
    testTypeID: string,
    testName: string,
    testedSkills: [string],
    durationMinutes?: number
};