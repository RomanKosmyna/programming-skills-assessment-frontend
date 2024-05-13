import { useState } from "react";
import { useBlocker, useParams } from "react-router-dom";
import GeneralLayout from "@components/Layout/GeneralLayout";
import PaddingLayout from "@components/Layout/PaddingLayout";
import ActiveTestHeadingWithTimer from "./ActiveTestHeadingWithTimer";
import ActiveTestInformation from "./ActiveTestInformation";
import NavigationBlocker from "../NavigationBlocker";

export default function ActiveTestPage() {
    const { activeTestId } = useParams();
    const [value, setValue] = useState(false);

    const navBlocker = useBlocker(
        ({ currentLocation, nextLocation }) =>
            !value &&
            currentLocation.pathname !== nextLocation.pathname
    );

    // if (isTestFinished) {
    //     dispatch(setGeneralTestInformation({ testCategoryID, testID, testName }));
    //     setValue(true);
    // }
    return (
        <GeneralLayout>
            <PaddingLayout>
                <ActiveTestHeadingWithTimer />
                <ActiveTestInformation activeTestId={activeTestId} />
            </PaddingLayout>
            <NavigationBlocker navBlocker={navBlocker} />
        </GeneralLayout>
        /* {isTestFinished &&
            <div className="w-full min-h-screen absolute top-0 left-0 bg-black/50 z-20"></div>
        } */
    )
}