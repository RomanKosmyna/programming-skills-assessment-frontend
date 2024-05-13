import { addAnswer } from "../slices/activeTestQuestionAnswerOptionSlice";
import { AnswerOptionType } from "../types";

export const addAnswerOption =
    (dispatch: any, questionData: AnswerOptionType,
        setChosenAnswer: React.Dispatch<React.SetStateAction<boolean>>) => {
        const { questionID, optionNumber } = questionData;

        const questionPayload = {
            questionID: questionID,
            optionNumber: optionNumber
        };

        dispatch(addAnswer(questionPayload));
        setChosenAnswer(true);
    };