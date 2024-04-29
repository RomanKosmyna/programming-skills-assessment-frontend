import { Tabs } from "@chakra-ui/react";
import QuestionsNavigation from "./QuestionsNavigation";
import QuestionsTabPanel from "./QuestionsTabPanel";

type QuestionsTabProps = {
    questions: [];
};

export default function QuestionsTab({ questions }: QuestionsTabProps) {
    return (
        <Tabs variant="unstyled" className="flex flex-col">
            <QuestionsNavigation questions={questions} />
            <QuestionsTabPanel questions={questions} />
        </Tabs>
    )
}