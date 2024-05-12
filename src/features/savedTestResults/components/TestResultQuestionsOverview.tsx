import { QuestionDataType } from "../type";

type Props = {
    questionData: QuestionDataType[]
};

export default function TestResultQuestionsOverview({ questionData }: Props) {
    return (
        <ol className="w-full bg-accent1 shadow-borderLight p-3 rounded-lg flex flex-wrap justify-around gap-2">
            {questionData.map((question: QuestionDataType, index: number) => (
                    <li
                    className={`w-[49%] ${question.isCorrect ? "bg-gradient-to-r from-[#4CCD99] to-[#90D26D]" : 
                    "bg-gradient-to-r from-[#A0153E] to-[#FF204E]"} px-4 py-2 rounded-md`}
                >
                    <p className="font-medium text-main">
                        Question №{index + 1} - {question.isCorrect ? "Correct" : "Incorrect"}
                    </p>
                </li>
                ))}
        </ol>
    )
}