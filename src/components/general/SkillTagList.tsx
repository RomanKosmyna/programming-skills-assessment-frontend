import SkillTag from "./SkillTag";

type Props = {
    testedSkills: string[];
};

export default function SkillTagList({ testedSkills }: Props) {
    return (
        <ul className="flex flex-wrap gap-2 mt-1">
            {testedSkills.map((skill: string, index: number) => (
                <SkillTag key={index} text={skill} />
            ))}
        </ul>
    )
}