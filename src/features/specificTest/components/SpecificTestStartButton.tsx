import { Link } from "react-router-dom";

type Props = {
    testID: string;
};

export default function SpecificTestStartButton({ testID }: Props) {

    return (
        <div className=" mt-8">
            <Link
                to={`/test/active/${testID}`}
                className="bg-black px-12 py-3 font-medium text-white 
                rounded-md transition-opacity hover:opacity-80"
            >
                Start
            </Link>
        </div>
    )
}