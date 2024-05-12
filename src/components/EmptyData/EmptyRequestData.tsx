type Props = {
    message: string;
};

export default function EmptyRequestData({ message }: Props) {
    return (
        <div className="w-full flex min-h-[calc(100vh-64px)] justify-center items-center">
            <h4>{message}</h4>
        </div>
    )
}