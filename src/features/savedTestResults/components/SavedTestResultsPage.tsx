import { useParams } from "react-router-dom";
import GeneralLayout from "@components/Layout/GeneralLayout";
import Heading from "@components/Heading/Heading";
import SavedTestResultsList from "./SavedTestResultsList";
import PaddingLayout from "@components/Layout/PaddingLayout";
import HoverWindow from "@components/Elements/Windows/HoverWindow";
import { useHover } from "src/hooks/useHoverItem";

export default function SavedTestResultsPage() {
    const { handleMouseEnter, handleMouseLeave, hoveredItemId } = useHover();
    const { username } = useParams();
    const token = localStorage.getItem("token")!;

    return (
        <GeneralLayout>
            <HoverWindow hoveredItemId={hoveredItemId} />
            <PaddingLayout>
                <Heading text="Your Test Results" />
                <SavedTestResultsList
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    hoveredItemId={hoveredItemId}
                    token={token}
                    username={username}
                />
            </PaddingLayout>
        </GeneralLayout>
    )
}