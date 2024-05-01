export type SpecificTestType = {
    testID: string,
    testTypeID: string,
    testName: string,
    description: string,
    durationMinutes?: number,
    testedSkills: [string]
};

export type SpecificTestProps = {
    specificTest: SpecificTestType
}