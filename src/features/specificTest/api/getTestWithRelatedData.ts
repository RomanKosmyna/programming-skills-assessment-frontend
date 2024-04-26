import { API_URL, URLS } from "../../../components/config";

export const getTestWithRelatedData = async (testId: string) => {
    const res = await fetch(API_URL + URLS.tests.getByIdWithRelatedTables(testId));
    const data = await res.json();

    return data;
};