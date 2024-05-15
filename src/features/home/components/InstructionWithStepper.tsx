import InstructionStepItem from "./InstructionStepItem";
import TestRedirect from "./TestRedirect";
import testCategoriesImage from "../assets/test-categories-instruction-step.png";
import testsByCategoryImage from "../assets/tests-by-category-instruction-step.png";
import specificTestPreparationImage from "../assets/specific-test-preparation-instruction-step.png";
import specificTestTestingImage from "../assets/specific-test-testing-instruction-step.png";

import { useAppSelector } from "../../../hooks";

export default function InstructionWithStepper() {
    const { activeStep } = useAppSelector(state => state.activeInstructionStep);

    return (
        <div className="w-full pt-10 flex flex-col">
            <ol className="w-full flex flex-col items-center gap-3">
                {activeStep === 0 && (
                    <InstructionStepItem
                        heading="Choose a Category of Interest for Assessment."
                        text="Each category represents a curated set of tests categorized by programming languages."
                        imagePath={testCategoriesImage}
                    />
                )}
                {activeStep === 1 && (
                    <InstructionStepItem
                        heading="Select a Specific Test."
                        text="Upon selecting a specific category, you will receive a list of tests varying in complexity."
                        imagePath={testsByCategoryImage}
                    />
                )}
                {activeStep === 2 && (
                    <InstructionStepItem
                        heading="Prepare for the Test."
                        text="Here you can get more detailed information about a specific test."
                        secondText="When you are ready, press the Start button."
                        imagePath={specificTestPreparationImage}
                    />
                )}
                {activeStep === 3 && (
                    <InstructionStepItem
                        heading="Run the Test."
                        text="Try to answer as many questions as you can."
                        secondText="When you are done, press the Finish Test button and you will get the results."
                        imagePath={specificTestTestingImage}
                    />
                )}
            </ol>
            <TestRedirect />
        </div>
    );
}