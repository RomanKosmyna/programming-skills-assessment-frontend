import { useParams } from "react-router-dom";
import GeneralLayout from "../../../components/Layout/GeneralLayout";
import { useActiveTest } from "../api/getActiveTest";
import Heading from "../../../components/Heading/Heading";
import QuestionNavigation from "./QuestionNavigation";

export default function ActiveTest() {
    const { activeTestId } = useParams();

    if (activeTestId == undefined) return;

    const { isPending, isError, data, error } = useActiveTest(activeTestId);

    if (isPending) return <div>Loading...</div>

    if (isError) return <div>{error.message}</div>

    if (!data) return <div><h4>No test was found</h4></div>

    const { testName, questions } = data;

    return (
        <GeneralLayout>
            <Heading text={testName}/>
            <QuestionNavigation questions={questions}/>
            {/* {JSON.stringify(data)} */}
        </GeneralLayout>
    )
}