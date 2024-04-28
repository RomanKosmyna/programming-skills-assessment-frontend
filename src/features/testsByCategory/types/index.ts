export type TestByCategoryType = {
    testID: string,
    testTypeID: string,
    testName: string,
    testedSkills: [string],
    durationMinutes?: number
};

export type TestByCategoryProps = {
    testByCategory: TestByCategoryType,
    handleMouseEnter: () => void,
    handleMouseLeave: () => void,
    isItemHovered: boolean
}