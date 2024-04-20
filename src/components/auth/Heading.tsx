type Props = {
    marginTop: number,
    text: string
};

export default function Heading({marginTop, text}: Props) {
    return (
        <div className={`w-full mt-${marginTop}`}>
            <h1 className="font-bold text-headingMain flex justify-center">{text}</h1>
        </div>
    )
}