import { ExpectedTestResultType } from "../../types";
import QuestionOverviewItem from "./QuestionOverviewItem";

type Props = {
    result: ExpectedTestResultType[];
};

export default function QuestionsOverview({ result }: Props) {
    return (
        <div className="w-full max-h-[330px] mt-5 flex justify-center">
            <ol className="w-[60%] bg-mainWhite dark:bg-darkAccent1 shadow-borderLight dark:shadow-none 
            dark:border dark:border-darkBorder p-3 rounded-lg flex flex-col flex-wrap justify-center gap-2">
                {result.map((question: ExpectedTestResultType, index: number) => (
                    <QuestionOverviewItem
                        key={question.questionID}
                        question={question}
                        index={index}
                    />
                ))}
            </ol>
        </div>
    )
}