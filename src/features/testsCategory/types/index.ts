export type TestCategoryType = {
    testTypeID: string,
    testTypeName: string
};

export type TestCategoryProps = {
    testCategory: TestCategoryType,
    handleMouseEnter: () => void,
    handleMouseLeave: () => void,
    isItemHovered: boolean
}