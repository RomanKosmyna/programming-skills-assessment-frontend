import { QuestionDataType } from "../types";

type Props = {
    questionData: QuestionDataType[]
};

export default function TestResultQuestionsOverview({ questionData }: Props) {
    return (
        <ol className="w-full bg-accent1 dark:bg-darkAccent1 shadow-borderLight p-3 rounded-lg 
        dark:shadow-none dark:border dark:border-darkBorder flex flex-wrap justify-around gap-2">
            {questionData.map((question: QuestionDataType, index: number) => (
                    <li
                    key={index}
                    className={`w-[49%] ${question.isCorrect ? "bg-green-700" : 
                    "bg-red-700"} px-4 py-2 rounded-md`}
                >
                    <p className="font-medium text-mainWhite">
                        Question №{index + 1} - {question.isCorrect ? "Correct" : "Incorrect"}
                    </p>
                </li>
                ))}
        </ol>
    )
}