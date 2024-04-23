import { API_URL, URLS } from "../../../components/config";

export const getTestById = async (testId: string) => {
    const res = await fetch(API_URL + URLS.tests.getById(testId));
    const data = await res.json();

    return data;
};