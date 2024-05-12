import GeneralLayout from "@components/Layout/GeneralLayout";
import PaddingLayout from "@components/Layout/PaddingLayout";
import HoverWindow from "@components/Elements/Windows/HoverWindow";
import TestCategoriesList from "./TestCategoriesList";
import Heading from "@components/Heading/Heading";

import { useHover } from "src/hooks/useHoverItem";

export default function TestCategoriesPage() {
    const { handleMouseEnter, handleMouseLeave, hoveredItemId } = useHover();

    return (
        <GeneralLayout>
            <HoverWindow hoveredItemId={hoveredItemId} />
            <PaddingLayout>
                <Heading text="Test Categories" />
                <TestCategoriesList
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    hoveredItemId={hoveredItemId}
                />
            </PaddingLayout>
        </GeneralLayout>
    )
}