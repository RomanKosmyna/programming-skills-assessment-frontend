import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { ExpectedTestResultType } from "../types";
import { dateWhenTestWasFinished } from "../util/currentTime";
import TestResultNavigation from "./TestResultNavigation";
import { useEffect } from "react";
import { finishTest } from "../slices/testResultSlice";

export default function TestResult() {
    const { result, durationTimer } = useAppSelector(state => state.testResult);
    const dispatch = useAppDispatch();
    const numberOfQuestions = result.length;
    const navigate = useNavigate();

    const calculateCorrectAnswers = () => {
        const correctAnswers = result.filter(question => question.isCorrect);

        return correctAnswers.length;
    };

    const minutes = Math.floor(durationTimer / 60);
    const seconds = durationTimer % 60;
    const formattedTimeLeft = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    useEffect(() => {
        dispatch(finishTest(true));
    }, [navigate]);

    return (
        <div className="mt-10">
            <h3 className="font-bold text-[36px]">Test Result</h3>
            <div className="flex items-center gap-10 mt-4">
                <p className="font-bold text-[25px]">Number of questions: {numberOfQuestions}</p>
                <p className="font-bold text-[25px]">Time of completion: {dateWhenTestWasFinished}</p>
            </div>
            <p className="font-bold text-lime-600">Correct answers: {calculateCorrectAnswers()}</p>
            <p>Time left: {formattedTimeLeft}</p>
            <ol className="mt-5">
                {result.map((question: ExpectedTestResultType, index: number) => (
                    <li key={question.questionID} className={`flex`}>
                        <p
                            className={`font-bold ${question.isCorrect ? "text-lime-600" : "text-red-600"}`}
                        >
                            Question №{index + 1} - {question.isCorrect ? "Correct" : "Incorrect"}
                        </p>
                    </li>
                ))}
            </ol>
            <TestResultNavigation />
        </div>
    )
}