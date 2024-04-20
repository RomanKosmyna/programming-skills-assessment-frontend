type Props = {
    marginTop: number,
    text: string
};

export default function Heading({marginTop, text}: Props) {
    return (
        <h2 className={`font-bold text-headingMain flex mt-${marginTop}`}>{text}</h2>
    )
}