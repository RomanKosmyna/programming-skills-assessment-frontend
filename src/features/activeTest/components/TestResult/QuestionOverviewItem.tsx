import { ExpectedTestResultType } from "../../types";

type Props = {
    question: ExpectedTestResultType;
    index: number;
};

export default function QuestionOverviewItem({ question, index }: Props) {
    return (
        <li
            className={`text-mainWhite ${question.isCorrect ? "bg-green-700" : 
            "bg-red-700"} px-4 py-2 rounded-md`}
        >
            <p className="font-medium text-main">
                Question №{index + 1} - {question.isCorrect ? "Correct" : "Incorrect"}
            </p>
        </li>
    )
}