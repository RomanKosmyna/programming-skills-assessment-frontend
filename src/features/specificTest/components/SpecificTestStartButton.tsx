import { Link } from "react-router-dom";

type Props = {
    testID: string;
};

export default function SpecificTestStartButton({ testID }: Props) {

    return (
        <div className="flex justify-start mt-8">
            <Link
                to={`/test/active/${testID}`}
                className="bg-green-700 px-6 py-2 mt-10 font-bold text-xl 
                text-mainWhite flex justify-center rounded-lg transition-opacity hover:opacity-90"
            >
                Start
            </Link>
        </div>
    )
}