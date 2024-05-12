import SeparationLine from "../General/SeparationLine";

type Props = {
    text: string | undefined;
};

export default function Heading({ text }: Props) {
    return (
        <div className="w-full pt-3">
            <h2 className="font-bold text-[36px]">{text}</h2>
            <SeparationLine />
        </div>
    )
}