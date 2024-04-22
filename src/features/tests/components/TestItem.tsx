type Props = {
    test: {
        testId: string,
        testName: string,
        questions: [],
        durationMinutes: number
    }
};

export default function TestItem({ test }: Props) {
    const {testId, testName, questions, durationMinutes} = test;

    return (
        <div className={`w-[350px] h-[250px] bg-white shadow-lg border border-[#eaeaea] 
        rounded-lg select-none`}>
            <h2>{testName}</h2>
            <span>Duration: {durationMinutes} mins</span>
        </div>
    )
}