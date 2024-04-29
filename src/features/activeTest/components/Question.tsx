import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addUserAnswerOptionIntoArray } from "../slices/activeTestSlice";


type QuestionProps = {
    answerOptions: {
        answerOptionID: string;
        questionID: string;
        optionNumber: number;
        optionText: string;

    }
    index: number;
};

export default function Question({ answerOptions, index }: QuestionProps) {
    const { questionID, optionNumber, optionText } = answerOptions;
    const [chosenAnswer, setChosenAnswer] = useState(false);

    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.activeTest.questions);

    const performTask = () => {
        const existingQuestion = state.some(question => question.questionID === questionID);

        if (existingQuestion) {
            const existingQuestionIndex = state.findIndex(question => question.questionID === questionID);
            
            if (state[existingQuestionIndex].arrayOfAnswers.includes(optionNumber)) return;
        }

        const questionData = {
            questionID: questionID,
            arrayOfAnswers: Array<number>()
        };

        questionData.arrayOfAnswers.push(optionNumber);

        dispatch(addUserAnswerOptionIntoArray(questionData));
        setChosenAnswer(true);
    };

    return (
        <div key={index}
            className={`max-w-[60%] px-5 py-3 rounded-lg cursor-pointer opacity-70 
            hover:opacity-100 transition-all ${chosenAnswer ? "bg-lime-600" : "bg-[#6499E9]"}`}
            onClick={() => performTask()}
        >
            <p className="text-white">{optionText}</p>
        </div>
    )
}