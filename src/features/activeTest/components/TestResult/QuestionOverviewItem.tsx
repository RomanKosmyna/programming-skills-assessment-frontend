import { ExpectedTestResultType } from "../../types";

type Props = {
    question: ExpectedTestResultType;
    index: number;
};

export default function QuestionOverviewItem({ question, index }: Props) {
    return (
        <li
            className={`${question.isCorrect ? "bg-gradient-to-r from-[#4CCD99] to-[#90D26D]" : 
            "bg-gradient-to-r from-[#A0153E] to-[#FF204E]"} px-4 py-2 rounded-md`}
        >
            <p className="font-medium text-main">
                Question №{index + 1} - {question.isCorrect ? "Correct" : "Incorrect"}
            </p>
        </li>
    )
}