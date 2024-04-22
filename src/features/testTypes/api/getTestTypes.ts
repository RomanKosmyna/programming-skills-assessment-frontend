import { API_URL } from "../../../components/config";

export const getTestTypes = async () => {
    const res = await fetch(API_URL + "/api/testType/getAllTestTypes");
    const data = res.json();

    return data;
};