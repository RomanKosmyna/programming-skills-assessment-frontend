import dotnet from "@features/testCategories/assets/net.webp";
import java from "@features/testCategories/assets/java.png";
import javascript from "@features/testCategories/assets/javascript.png";

export const getTestCategoryImage = (testCategoryID: string) => {
    switch (testCategoryID) {
        case "a3f64587-39a1-41da-788e-08dc6ceef5d5":
            return dotnet;
        case "c3c7b9b7-f63f-41d6-788d-08dc6ceef5d5":
            return java;
        case "3fa85f64-5717-4562-b3fc-2c963f66afa6":
            return javascript;
        default: "";
    }
};