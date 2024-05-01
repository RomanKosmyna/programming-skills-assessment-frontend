import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";

import { addAnswerOptionWithNewArray } from "../util/addAnswerOptionWithNewArray";
import { addAnswerOption } from "../util/addAnswerOption";
import { removeAnswerOption } from "../util/removeAnswerOption";
import { activeQuestionStatus } from "../slices/activeTestSlice";

type QuestionProps = {
    answerOptions: {
        answerOptionID: string;
        questionID: string;
        optionNumber: number;
        optionText: string;
    }
    questionNumber: number;
    index: number;
};

export default function Question({ answerOptions, questionNumber, index }: QuestionProps) {
    const { questionID, optionNumber, optionText } = answerOptions;
    const [chosenAnswer, setChosenAnswer] = useState(false);

    const questionData = {
        questionID: questionID,
        optionNumber: optionNumber
    };

    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.activeTest.questions);

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
            className={`max-w-[60%] px-5 py-3 rounded-lg cursor-pointer opacity-70 
            hover:opacity-100 transition-opacity ${chosenAnswer ? "bg-lime-600" : "bg-[#6499E9]"}`}
            onClick={() => performTask()}
        >
            <p className="text-white">{optionText}</p>
        </div>
    )
}