import { ExpectedTestResultType } from "../../types";

type Props = {
    result: ExpectedTestResultType[];
};

export default function QuestionGeneralInformation({ result }: Props) {
    const numberOfQuestions = result.length;

    const calculateCorrectAnswers = () => {
        const correctAnswers = result.filter(question => question.isCorrect);

        return correctAnswers.length;
    };
    
    return (
        <div className="bg-gradient-to-r from-[#4CCD99] to-[#90D26D] p-3 rounded-md">
            <h3 className="font-bold text-[24px] text-main">Test Summary</h3>
            <p className="font-medium text-main">Number of questions: {numberOfQuestions}</p>
            <p className="font-medium text-main">Correct answers: {calculateCorrectAnswers()}</p>
        </div>
    )
}