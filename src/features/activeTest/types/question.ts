import { AnswerOptionType } from "./answerOption";

export type QuestionType = {
    testID: string;
    questionID: string;
    questionNumber: number;
    questionText: string;
    answerOptions: AnswerOptionType[];
    image: string;
};