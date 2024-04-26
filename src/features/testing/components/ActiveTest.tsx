import { useAppSelector } from "../../../hooks"

export default function ActiveTest() {
    const testData = useAppSelector(state => state.testData.value);
    console.log(testData);

    return (
        <div className="w-full max-w-[1150px] min-h-[calc(100vh-64px)] flex flex-col">

        </div>
    )
}