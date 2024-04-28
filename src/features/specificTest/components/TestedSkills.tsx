import SkillTag from "../../../components/general/SkillTag";

type TestedSkillsProps = {
    testedSkills: [string];
};

export default function TestedSkills({ testedSkills }: TestedSkillsProps) {
    return (
        <div>
            <h4 className="font-bold text-[20px]">Tested skills</h4>
            <ul className="flex gap-2">
                {testedSkills.map(
                    (skill: string, index: number) => <SkillTag key={index} text={skill} />)
                }
            </ul>
        </div>
    )
}