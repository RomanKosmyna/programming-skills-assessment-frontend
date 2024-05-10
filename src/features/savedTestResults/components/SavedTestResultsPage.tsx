import Heading from "../../../components/Heading/Heading";
import GeneralLayout from "../../../components/Layout/GeneralLayout";
import SavedTestResultsList from "./SavedTestResultsList";

export default function SavedTestResultsPage() {
    return (
        <GeneralLayout>
            <Heading text="Your Test Results" />
            <SavedTestResultsList />
        </GeneralLayout>
    )
}