import { useState } from "react";

import { useAppSelector } from "../../../hooks"
import UnansweredQuestionsWarningModal from "./UnansweredQuestionsWarningModal";

type TestNavigationPanelProps = {
    numberOfQuestions: number;
};

export default function TestNavigationPanel({ numberOfQuestions }: TestNavigationPanelProps) {
    const state = useAppSelector(state => state.activeTest.questions);
    const numberOfQuestionsAnswered = state.length;

    const [isActive, setIsActive] = useState(false);
    const areAllQuestionsAnswered = () => {
        if (numberOfQuestions !== numberOfQuestionsAnswered) {
            setIsActive(true);
        }

        console.log(state);
    };

    return (
        <>
            <div className="w-full flex justify-center mt-10">
                <nav className="w-[55%] bg-[#F5F5F5] shadow-borderLight rounded-md p-4 flex justify-center">
                    <button className="bg-lime-600 px-4 py-2 text-white 
                opacity-70 transition-opacity rounded-md hover:opacity-100"
                        onClick={() => areAllQuestionsAnswered()}
                    >
                        Finish Test
                    </button>
                </nav>
            </div>
            <UnansweredQuestionsWarningModal isActive={isActive} setIsActive={setIsActive} />
        </>
    )
}