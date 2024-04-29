import { useAppSelector } from "../../../hooks";
import Question from "./Question";

type QuestionListProps = {
    answerOptions: [];
};

export default function QuestionList({ answerOptions }: QuestionListProps) {
    const state = useAppSelector(state => state.activeTest);
    console.log(state);
    
    return (
        <div className="flex flex-col gap-6 mt-5">
            {answerOptions.map((answerOption: any, index: number) => (
                <Question key={index} answerOptions={answerOption} index={index} />
            ))}
        </div>
    )
}