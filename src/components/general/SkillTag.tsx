type Props = {
    text: string;
};

export default function SkillTag({ text }: Props) {

    return (
        <li className="inline-block text-[#666] dark:text-mainWhite font-medium 
        text-[12px] border dark:border-darkBorder dark:bg-mainDark py-[2px] px-1 rounded-md">
            {text}
        </li>
    )
}