export type SpecificTestType = {
    testID: string,
    testTypeID: string,
    testName: string,
    testedSkills: [string],
    durationMinutes?: number
};

export type SpecificTestProps = {
    specificTest: SpecificTestType
}