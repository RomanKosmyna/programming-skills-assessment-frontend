import { TabPanel, TabPanels } from "@chakra-ui/react";

import QuestionList from "./QuestionList";

type QuestionsTabPanelProps = {
    questions: [];
};

export default function QuestionsTabPanel({ questions }: QuestionsTabPanelProps) {

    return (
        <TabPanels className="max-w-[80%] mx-auto mt-10">
            {questions.map((question: any, index: number) => (
                <TabPanel key={index}>
                    <h3 className="font-bold text-[30px]">Question №{index + 1}</h3>
                    <p className="mt-8 text-[24px]">{question.questionText}</p>
                    <QuestionList answerOptions={question.answerOptions} />
                </TabPanel>
            ))}
        </TabPanels>
    )
}