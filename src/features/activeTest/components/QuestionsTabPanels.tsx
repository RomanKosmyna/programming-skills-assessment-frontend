import { TabPanel, TabPanels } from "@chakra-ui/react";

import QuestionList from "./QuestionList";

type QuestionsTabPanelProps = {
    questions: [];
};

export default function QuestionsTabPanels({ questions }: QuestionsTabPanelProps) {

    return (
        <TabPanels className="mt-10">
            {questions.map((question: any, index: number) => (
                <TabPanel key={index}>
                    <h3 className="font-bold text-[30px]">Question №{index + 1}</h3>
                    <p className="mt-8 text-[24px]">{question.questionText}</p>
                    <QuestionList questionNumber={question.questionNumber} answerOptions={question.answerOptions} />
                </TabPanel>
            ))}
        </TabPanels>
    )
}