import { useParams } from "react-router-dom";
import GeneralLayout from "@components/Layout/GeneralLayout";
import PaddingLayout from "@components/Layout/PaddingLayout";
import ActiveTestHeadingWithTimer from "./ActiveTestHeadingWithTimer";
import ActiveTestInformation from "./ActiveTestInformation";
import NavigationBlocker from "../NavigationBlocker";

import { useAppSelector } from "src/hooks";
import ActiveWindow from "@components/Elements/Windows/ActiveWindow";

export default function ActiveTestPage() {
    const { activeTestId } = useParams();
    const isTestFinished = useAppSelector(state => state.testResult.isTestFinished);

    return (
        <GeneralLayout>
            <PaddingLayout>
                <div className={`${isTestFinished ? "z-40 bg-main p-4 rounded-lg" : ""}`}>
                    <ActiveTestHeadingWithTimer />
                    <ActiveTestInformation activeTestId={activeTestId} />
                </div>
            </PaddingLayout>
            <NavigationBlocker />
            {isTestFinished && <ActiveWindow />}
        </GeneralLayout>
    )
}