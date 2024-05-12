import HoverWindow from "src/components/Elements/Windows/HoverWindow";
import Heading from "src/components/Heading/Heading";
import GeneralLayout from "src/components/Layout/GeneralLayout";
import PaddingLayout from "src/components/Layout/PaddingLayout";
import { useHover } from "src/hooks/useHoverItem";

import TestCategoriesList from "./TestCategoriesList";

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