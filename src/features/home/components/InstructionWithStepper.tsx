import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import testCategoriesImage from "../assets/test-categories-instruction-step.png";
import testsByCategoryImage from "../assets/tests-by-category-instruction-step.png";
import specificTestPreparationImage from "../assets/specific-test-preparation-instruction-step.png";
import specificTestTestingImage from "../assets/specific-test-testing-instruction-step.png";

export default function InstructionWithStepper() {
    const { activeStep } = useAppSelector(state => state.activeInstructionStep);

    return (
        <div className="w-full pt-10 flex flex-col">
            <ol className="w-full flex flex-col items-center gap-3">
                {activeStep === 0 && (
                    <li className="max-w-[600px] max-h-[355px] bg-main shadow-instructionCards p-4 rounded-lg">
                        <div>
                            <h3 className="font-bold text-xl">Choose a Category of Interest for Assessment.</h3>
                            <p className="mt-2 text-[#171717]">Each category represents a curated set of tests categorized by programming languages.</p>
                        </div>
                        <img
                            src={testCategoriesImage}
                            alt=""
                            className="max-w-full h-[200px] object-contain rounded-lg mt-3"
                        />
                    </li>
                )}
                {activeStep === 1 && (
                    <li className="max-w-[600px] max-h-[355px] bg-main shadow-instructionCards p-4 rounded-lg">
                        <div>
                            <h3 className="font-bold text-xl">Select a Specific Test.</h3>
                            <p className="mt-2 text-[#171717] text-justify">Upon selecting a specific category, you will receive a list of tests varying in complexity.</p>
                        </div>
                        <img
                            src={testsByCategoryImage}
                            alt=""
                            className="max-w-full h-[200px] object-contain rounded-lg mt-3"
                        />
                    </li>
                )}
                {activeStep === 2 && (
                    <li className="max-w-[600px] max-h-[355px] bg-main shadow-instructionCards p-4 rounded-lg">
                        <div>
                            <h3 className="font-bold text-xl">Prepare for the Test.</h3>
                            <p className="mt-2 text-[#171717] text-justify">Here you can get more detailed information about a specific test.</p>
                            <p className="mt-2 text-[#171717] text-justify">When you are ready, press the Start button.</p>
                        </div>
                        <img
                            src={specificTestPreparationImage}
                            alt=""
                            className="max-w-full h-[200px] object-contain rounded-lg mt-3"
                        />
                    </li>
                )}
                {activeStep === 3 && (
                    <li className="max-w-[600px] max-h-[355px] bg-main shadow-instructionCards p-4 rounded-lg">
                        <div>
                            <h3 className="font-bold text-xl">Run the Test.</h3>
                            <p className="mt-2 text-[#171717] text-justify">Try to answer as many questions as you can.</p>
                            <p className="mt-2 text-[#171717] text-justify">When you are done, press the Finish Test button and you will get the results.</p>
                        </div>
                        <img
                            src={specificTestTestingImage}
                            alt=""
                            className="max-w-full h-[200px] object-contain rounded-lg mt-3"
                        />
                    </li>
                )}
            </ol>
            <div className="w-full flex justify-center">
                <Link
                    className="bg-lime-600 px-6 py-2 mt-10 font-bold text-xl 
                    text-main flex justify-center rounded-lg transition-colors hover:bg-[#0A6847]"
                    to={"/test-categories"}
                >
                    Go to Tests
                </Link>
            </div>
        </div>
    );
}