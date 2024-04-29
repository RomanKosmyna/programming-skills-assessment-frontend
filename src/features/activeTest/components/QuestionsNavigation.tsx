import { TabList, Tab } from '@chakra-ui/react'

type QuestionNavigationProps = {
    questions: [];
};

export default function QuestionsNavigation({ questions }: QuestionNavigationProps) {

    return (
        <TabList className="max-w-[60%] mt-6 mx-auto p-2 bg-[#F5F5F5] shadow-borderLight rounded-md flex gap-2">
            {questions.map((_, index: number) =>
                <Tab
                    _selected={{ bg: "#8DECB4" }}
                    key={index}
                    className="px-8 py-2 bg-gray-700 text-[22px] text-white rounded-md"
                >
                    {index + 1}
                </Tab>)}
        </TabList>
    )
}