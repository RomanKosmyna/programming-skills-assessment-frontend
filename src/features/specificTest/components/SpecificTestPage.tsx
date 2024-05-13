import { useParams } from "react-router-dom";
import GeneralLayout from "@components/Layout/GeneralLayout";
import PaddingLayout from "@components/Layout/PaddingLayout";
import HeadingWithImage from "@components/Heading/HeadingWithImage";
import SpecificTest from "./SpecificTest";
import { useState } from "react";

export default function SpecificTestPage() {
    const { specificTestId } = useParams();
    const [testCategoryId, setTestCategoryId] = useState<string>("");

    return (
        <GeneralLayout>
            <PaddingLayout>
                <HeadingWithImage 
                testCategoryId={testCategoryId} 
                headingText={"Test"}
                />
                <SpecificTest
                    setTestCategoryId={setTestCategoryId}
                    specificTestId={specificTestId}
                />
            </PaddingLayout>
        </GeneralLayout>
    )
}