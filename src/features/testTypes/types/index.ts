export type TestType = {
    testTypeID: string,
    testTypeName: string
};

export type TestTypeItemProps = {
    testType: TestType,
    handleMouseEnter: () => void,
    handleMouseLeave: () => void,
    isItemHovered: boolean
}