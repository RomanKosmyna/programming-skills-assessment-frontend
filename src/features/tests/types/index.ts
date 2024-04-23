export type Test = {
    testID: string,
    testTypeID: string,
    testName: string,
    durationMinutes?: number
};

export type TestItemProps = {
    test: Test,
    handleMouseEnter: () => void,
    handleMouseLeave: () => void,
    isItemHovered: boolean
}