export const getTestCategoryName = (testCategoryID: string | undefined) => {
    switch (testCategoryID) {
        case "a3f64587-39a1-41da-788e-08dc6ceef5d5":
            return ".NET/C#";
        case "c3c7b9b7-f63f-41d6-788d-08dc6ceef5d5":
            return "Java";
        case "3fa85f64-5717-4562-b3fc-2c963f66afa6":
            return "JavaScript";
        default: "";
    }
};