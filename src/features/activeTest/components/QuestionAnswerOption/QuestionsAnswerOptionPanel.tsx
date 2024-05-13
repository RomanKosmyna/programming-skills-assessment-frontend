import { TabPanel, TabPanels } from "@chakra-ui/react";
import QuestionAnswerOptionList from "./QuestionAnswerOptionList";

import { QuestionType } from "../../types/question";

type Props = {
    questions: QuestionType[];
};

export default function QuestionsAnswerOptionPanel({ questions }: Props) {

    return (
        <TabPanels className="mt-10">
            {questions.map((question: QuestionType, index: number) => (
                <TabPanel key={index}>
                    <h3 className="font-bold text-[30px]">Question №{index + 1}</h3>
                    <p className="mt-8 text-[24px]">{question.questionText}</p>
                    <QuestionAnswerOptionList
                        questionNumber={question.questionNumber}
                        answerOptions={question.answerOptions}
                    />
                </TabPanel>
            ))}
        </TabPanels>
    )
}