export type SpecificTest = {
    testID: string,
    testCategoryID: string,
    testName: string,
    description: string,
    durationMinutes?: number,
    testedSkills: [string]
};

export type SpecificTestProps = {
    specificTest: SpecificTest
}