import { TabList } from '@chakra-ui/react'
import QuestionNavigationTab from './QuestionNavigationTab';

type Props = {
    questions: [];
};

export default function QuestionsNavigation({ questions }: Props) {

    return (
        <TabList className="max-w-[650px] mt-6 mx-auto p-2 bg-[#F5F5F5] dark:bg-darkAccent1 shadow-borderLight 
        dark:shadow-none dark:border dark:border-darkBorder rounded-md flex flex-wrap gap-2">
            {questions.map((_, index: number) =>
                <QuestionNavigationTab key={index} index={index + 1} />
            )}
        </TabList>
    )
}