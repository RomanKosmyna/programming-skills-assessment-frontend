import { Tabs } from "@chakra-ui/react";
import QuestionsNavigation from "../QuestionNavigation/QuestionsNavigation";
import QuestionsTabPanels from "../QuestionAnswerOption/QuestionsAnswerOptionPanel";

type Props = {
    questions: [];
};

export default function InformationDisplay({ questions }: Props) {
    return (
        <div className="flex justify-center">
            <Tabs variant="unstyled" className="flex flex-col">
                <QuestionsNavigation questions={questions} />
                <QuestionsTabPanels questions={questions} />
            </Tabs>
        </div>
    )
}