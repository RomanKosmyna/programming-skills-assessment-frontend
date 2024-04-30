import { Tabs } from "@chakra-ui/react";
import QuestionsNavigation from "./QuestionsNavigation";
import QuestionsTabPanels from "./QuestionsTabPanels";

type QuestionsTabProps = {
    questions: [];
};

export default function QuestionsTabs({ questions }: QuestionsTabProps) {
    return (
        <Tabs variant="unstyled" className="flex flex-col">
            <QuestionsNavigation questions={questions} />
            <QuestionsTabPanels questions={questions} />
        </Tabs>
    )
}