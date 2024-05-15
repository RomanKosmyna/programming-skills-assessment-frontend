import GeneralLayout from "../../../components/Layout/GeneralLayout";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import InstructionWithStepper from "./InstructionWithStepper";
import InstructionStepper from "./InstructionStepper";
import { changeStepperStatus } from "../slices/activeInstructionStepSlice";
import Instruction from "./Instruction";
import InstructionDisplayButton from "./InstructionDisplayButton";

export default function HomePage() {
    const { isStepperActive } = useAppSelector(state => state.activeInstructionStep);
    const dispatch = useAppDispatch();
    const instructionDisplay = localStorage.getItem("instructionDisplay");

    const changeDisplay = () => {
        dispatch(changeStepperStatus(!isStepperActive));
        localStorage.setItem("instructionDisplay", isStepperActive ? "vertical" : "stepper");
    };

    return (
        <GeneralLayout>
            <header className="w-full flex justify-center pt-16">
                <h2 className="text-mainDark dark:text-mainWhite font-bold text-4xl">Getting Started</h2>
            </header>
            <div className="mt-4 flex justify-end">
                <InstructionDisplayButton changeDisplay={changeDisplay} />
            </div>
            {(isStepperActive || instructionDisplay === "stepper") && (instructionDisplay === null || instructionDisplay === "stepper") && (
                <div className="flex flex-col mt-14">
                    <InstructionStepper />
                    <InstructionWithStepper />
                </div>
            )}
            {(!isStepperActive || instructionDisplay === "vertical") && (instructionDisplay === null || instructionDisplay === "vertical") && (
                <div className="flex flex-col">
                    <Instruction />
                </div>
            )}
        </GeneralLayout>
    );
}