import { useParams } from "react-router-dom";
import GeneralLayout from "@components/Layout/GeneralLayout";
import PaddingLayout from "@components/Layout/PaddingLayout";
import HoverWindow from "@components/Elements/Windows/HoverWindow";
import HeadingWithImage from "@components/Heading/HeadingWithImage";
import TestsByCategoryList from "./TestsByCategoryList";

import { useHover } from "src/hooks/useHoverItem";

export default function TestsByCategoryPage() {
    const { testCategoryId } = useParams();
    const { handleMouseEnter, handleMouseLeave, hoveredItemId } = useHover();

    return (
        <GeneralLayout>
            <HoverWindow hoveredItemId={hoveredItemId} />
            <PaddingLayout>
                <HeadingWithImage testCategoryId={testCategoryId} />
                <TestsByCategoryList
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    hoveredItemId={hoveredItemId}
                    testCategoryId={testCategoryId}
                />
            </PaddingLayout>
        </GeneralLayout>
    )
}