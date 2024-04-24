type Props = {
    text: string;
};

export default function SkillTag({ text }: Props) {

    return (
        <li className="inline-block text-[#666] text-[14px] border py-[2px] px-1 rounded-md">{text}</li>
    )
}