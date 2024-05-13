import { AnswerOptionType } from "../../types/answerOption";
import AnswerOption from "./AnswerOption";

type Props = {
    questionNumber: number;
    answerOptions: AnswerOptionType[];
};

export default function QuestionAnswerOptionList({ questionNumber, answerOptions }: Props) {

    return (
        <div className="flex flex-col gap-6 mt-5">
            {answerOptions.map((answerOption: AnswerOptionType, index: number) => (
                <AnswerOption
                    key={index}
                    answerOptions={answerOption}
                    questionNumber={questionNumber}
                    index={index + 1}
                />
            ))}
        </div>
    )
}