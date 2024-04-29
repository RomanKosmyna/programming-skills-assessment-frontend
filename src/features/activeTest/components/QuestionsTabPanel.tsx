import { TabPanel, TabPanels } from "@chakra-ui/react";

type QuestionsTabPanelProps = {
    questions: [];
};


export default function QuestionsTabPanel({ questions }: QuestionsTabPanelProps) {
    return (
        <TabPanels className="max-w-[80%] mx-auto mt-10">
            {questions.map((question: any, index: number) => (
                <TabPanel key={index}>
                    <span>Question №{index + 1}</span>
                    <h3 className="mt-6">{question.questionText}</h3>
                    <div className="mt-5">
                        {question.answerOptions.map((answerOption: any, index: number) => (
                            <p key={index}>{answerOption.optionText}</p>
                        ))}
                    </div>
                </TabPanel>
            ))}
        </TabPanels>
    )
}