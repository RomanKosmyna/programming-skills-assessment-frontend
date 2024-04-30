import Question from "./Question";

type QuestionListProps = {
    questionNumber: number;
    answerOptions: [];
};

export default function QuestionList({ questionNumber, answerOptions }: QuestionListProps) {

    return (
        <div className="flex flex-col gap-6 mt-5">
            {answerOptions.map((answerOption: any, index: number) => (
                <Question key={index} answerOptions={answerOption} questionNumber={questionNumber} index={index + 1} />
            ))}
        </div>
    )
}