import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

type QuestionNavigationProps = {
    questions: [];
};

export default function QuestionNavigation({ questions }: QuestionNavigationProps) {
    const numberOfQuestions = questions.length;

    return (
        <Tabs variant='unstyled'
            className="flex flex-col">
            <TabList className="max-w-[60%] mt-6 mx-auto p-2 bg-[#F5F5F5] shadow-borderLight rounded-md flex gap-2">
                {questions.map((_, index: number) =>
                    <Tab
                        _selected={{bg: "green"}}
                        key={index}
                        className="px-8 py-2 bg-gray-700 text-white"
                    >
                        {index + 1}
                    </Tab>)}
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}