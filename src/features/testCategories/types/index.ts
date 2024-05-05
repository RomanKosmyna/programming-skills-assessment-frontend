export type TestCategoryType = {
    testCategoryID: string,
    testCategoryName: string
};

export type TestCategoryProps = {
    testCategory: TestCategoryType,
    handleMouseEnter: () => void,
    handleMouseLeave: () => void,
    isItemHovered: boolean
}