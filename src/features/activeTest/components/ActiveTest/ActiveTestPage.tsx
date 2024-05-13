import { useParams } from "react-router-dom";
import GeneralLayout from "@components/Layout/GeneralLayout";
import PaddingLayout from "@components/Layout/PaddingLayout";
import ActiveTestHeadingWithTimer from "./ActiveTestHeadingWithTimer";
import ActiveTestInformation from "./ActiveTestInformation";
import NavigationBlocker from "../NavigationBlocker";
import { useAppSelector } from "src/hooks";

export default function ActiveTestPage() {
    const { activeTestId } = useParams();
    // const [value, setValue] = useState(false);
    const isTestFinished = useAppSelector(state => state.testResult.isTestFinished);

    // const navBlocker = useBlocker(
    //     ({ currentLocation, nextLocation }) =>
    //         !isTestFinished &&
    //         currentLocation.pathname !== nextLocation.pathname
    // );

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
            <NavigationBlocker />
            {isTestFinished &&
                <div className="w-full min-h-screen absolute top-0 left-0 bg-black/50 z-20"></div>
            }
        </GeneralLayout>
    )
}