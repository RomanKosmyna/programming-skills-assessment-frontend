/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import { useAllUserTestResults } from "../api/getAllUserTestResults";

export default function SavedTestResultsList() {
    const token = localStorage.getItem("token")!;
    const { username } = useParams();

    if (!username) return null;

    const { isPending, isError, data, error } = useAllUserTestResults(token, username);
    
    if (isPending) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if (!data?.length) return <div><h4>No test results have been saved yet.</h4></div>

    return (
        <ul>

        </ul>
    )
}