import { useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { addUserAnswer, removeUserAnswer } from "../slices/activeTestSlice";

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
    const {answerOptionID, questionID, optionNumber, optionText} = answerOptions;
    const [chosenAnswer, setChosenAnswer] = useState(false);

    const dispatch = useAppDispatch();

    const performTask = () => {
        if (!chosenAnswer) {
            setChosenAnswer(true);

            const questionData = {
                questionID: questionID,
                arrayOfAnswers: optionNumber
            };

            dispatch(addUserAnswer(questionData));
        } else {
            setChosenAnswer(false);

            dispatch(removeUserAnswer(optionNumber));
        }
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