import { ExpectedTestResultType } from "@features/activeTest/types";
import { QuestionDataType } from "@features/savedTestResults/types";

type Props = {
    result: ExpectedTestResultType[] | QuestionDataType[];
};

export default function QuestionGeneralInformation({ result }: Props) {
    const numberOfQuestions = result.length;

    const calculateCorrectAnswers = () => {
        const correctAnswers = result.filter(question => question.isCorrect);

        return correctAnswers.length;
    };
    
    return (
        <div className="bg-gradient-to-r from-[#006769] to-[#40A578] p-3 rounded-md">
            <h3 className="font-bold text-mainWhite text-[24px]">Test Summary</h3>
            <p className="font-medium text-mainWhite">Number of questions: {numberOfQuestions}</p>
            <p className="font-medium text-mainWhite">Correct answers: {calculateCorrectAnswers()}</p>
        </div>
    )
}