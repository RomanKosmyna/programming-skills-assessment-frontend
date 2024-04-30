import { removeAnswer } from "../slices/activeTestSlice";
import { AnswerOptionType } from "../types";

export const removeAnswerOption =
    (dispatch: any, questionData: AnswerOptionType,
        setChosenAnswer: React.Dispatch<React.SetStateAction<boolean>>) => {
        const { questionID, optionNumber } = questionData;
        
        const questionPayload = {
            questionID: questionID,
            optionNumber: optionNumber
        };

        dispatch(removeAnswer(questionPayload));
        setChosenAnswer(false);
    };