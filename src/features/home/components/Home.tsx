import GeneralLayout from "../../../components/Layout/GeneralLayout";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import InstructionWithStepper from "./InstructionWithStepper";
import InstructionStepper from "./InstructionStepper";
import { changeStepperStatus } from "../slices/activeInstructionStepSlice";

export default function Home() {
    const { isStepperActive } = useAppSelector(state => state.activeInstructionStep);
    const dispatch = useAppDispatch();

    const changeView = () => {
        dispatch(changeStepperStatus(!isStepperActive));
    };

    return (
        <GeneralLayout>
            <header className="w-full flex justify-center pt-16">
                <h2 className="font-bold text-4xl">Getting Started</h2>
            </header>
            <button onClick={(changeView)}>Change view</button>
            {isStepperActive && (
                <div className="flex flex-col">
                    <InstructionStepper />
                    <InstructionWithStepper />
                </div>
            )}
        </GeneralLayout>
    );
}