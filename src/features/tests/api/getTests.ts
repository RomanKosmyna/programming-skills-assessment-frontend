import { API_URL, URLS } from "../../../components/config";

export const getTests = async () => {
    const res = await fetch(API_URL + URLS.tests.getAll);
    const data = await res.json();

    return data;
};

export const getTestsByTestTypeId = async (testTypeId: string) => {
    const res = await fetch(API_URL + URLS.tests.getByTestTypeId(testTypeId));
    const data = await res.json();

    return data;
};