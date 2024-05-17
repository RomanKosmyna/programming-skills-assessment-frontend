/* eslint-disable @typescript-eslint/no-explicit-any */
import { addAnswerOptionWithNewArray as addAnswerOptionWithArray } from "../slices/activeTestQuestionAnswerOptionSlice";
import { AnswerOptionType } from "../types";

export const addAnswerOptionWithNewArray =
    (dispatch: any, questionData: AnswerOptionType,
        setChosenAnswer: React.Dispatch<React.SetStateAction<boolean>>) => {
        const { questionID, optionNumber } = questionData;

        const questionPayload = {
            questionID: questionID,
            answers: Array<number>()
        };

        questionPayload.answers.push(optionNumber);

        dispatch(addAnswerOptionWithArray(questionPayload));
        setChosenAnswer(true);
        return;
    };