import { getTestCategoryImage } from "src/util/getTestCategoryImage";
import { getTestCategoryName } from "src/util/getTestCategoryName";

export const getTestCategoryNameAndImage = (testCategoryID: string | undefined) => {
    const testCategoryName = getTestCategoryName(testCategoryID);
    const testCategoryImage = getTestCategoryImage(testCategoryID);

    return {
        testCategoryName,
        testCategoryImage
    }
};