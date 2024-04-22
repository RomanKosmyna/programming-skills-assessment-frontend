import { API_URL, URLS } from "../../../components/config";

export const getTestTypes = async () => {
    const res = await fetch(API_URL + URLS.testTypes.getAll);
    const data = res.json();

    return data;
};