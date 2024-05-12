import Heading from "../../../components/Heading/Heading";
import GeneralLayout from "../../../components/Layout/GeneralLayout";
import SavedTestResultsList from "./SavedTestResultsList";

export default function SavedTestResultsPage() {
    return (
        <GeneralLayout>
            <div className="p-4">
                <Heading text="Your Test Results" />
                <SavedTestResultsList />
            </div>
        </GeneralLayout>
    )
}