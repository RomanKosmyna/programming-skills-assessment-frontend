import { addAnswerOptionWithNewArray as addAnswerOptionWithArray } from "../slices/activeTestSlice";
import { AnswerOptionType } from "../types";

export const addAnswerOptionWithNewArray =
    (dispatch: any, questionData: AnswerOptionType,
        setChosenAnswer: React.Dispatch<React.SetStateAction<boolean>>) => {
        const { questionID, optionNumber } = questionData;

        const questionPayload = {
            questionID: questionID,
            arrayOfAnswers: Array<number>()
        };

        questionPayload.arrayOfAnswers.push(optionNumber);

        dispatch(addAnswerOptionWithArray(questionPayload));
        setChosenAnswer(true);
        return;
    };