import { useState } from "react";
import { activeQuestionStatus } from "@features/activeTest/slices/activeTestQuestionNavigationSlice";
import { AnswerOptionType } from "@features/activeTest/types/answerOption";
import { addAnswerOption } from "@features/activeTest/util/addAnswerOption";
import { addAnswerOptionWithNewArray } from "@features/activeTest/util/addAnswerOptionWithNewArray";
import { removeAnswerOption } from "@features/activeTest/util/removeAnswerOption";

import { useAppDispatch, useAppSelector } from "src/hooks";

type Props = {
    answerOptions: AnswerOptionType
    questionNumber: number;
    index: number;
};

export default function AnswerOption(
    { answerOptions, questionNumber, index }: Props
) {
    const { questionID, optionNumber, optionText } = answerOptions;
    const [chosenAnswer, setChosenAnswer] = useState(false);

    const questionData = {
        questionID: questionID,
        optionNumber: optionNumber
    };

    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.activeTestQuestionAnswerOption.questions);
    const questionsStatusState = useAppSelector(state => state.activeTestQuestionNavigation.questionsStatus);
    const isAnyOptionChosen = questionsStatusState.some(status => status.isOptionChosen);

    const performTask = () => {
        const existingQuestion = state.some(question => question.questionID === questionID);

        if (!existingQuestion) {
            addAnswerOptionWithNewArray(dispatch, questionData, setChosenAnswer);
            dispatch(activeQuestionStatus({ questionNumber, isOptionChosen: true }));
            return;
        }

        if (existingQuestion) {
            if (chosenAnswer) {
                removeAnswerOption(dispatch, questionData, setChosenAnswer);
                dispatch(activeQuestionStatus({ questionNumber, isOptionChosen: false }));
                return;
            }

            if (!chosenAnswer) {
                addAnswerOption(dispatch, questionData, setChosenAnswer);
                dispatch(activeQuestionStatus({ questionNumber, isOptionChosen: true }));
                return;
            }
        }
    };

    return (
        <div key={index}
            className={`max-w-[60%] px-5 py-3 rounded-lg cursor-pointer transition-all font-medium
            ${chosenAnswer ? "bg-green-700 hover:bg-green-800" : "bg-lightBlue hover:bg-darkerLightBlue"}
            `}
            onClick={() => performTask()}
        >
            <p className="text-white">{optionText}</p>
        </div>
    )
}