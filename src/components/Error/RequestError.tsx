type Props = {
    errorMessage: string;
};

export default function RequestError({ errorMessage }: Props) {
    return (
        <div className="w-full flex min-h-[calc(100vh-64px)] justify-center items-center">
            <p>{errorMessage}</p>
        </div>
    )
}