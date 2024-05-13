import { StarIcon } from "@chakra-ui/icons";
import SkillTagList from "@components/General/SkillTagList";

type TestedSkillsProps = {
    testedSkills: string[];
};

export default function SpecificTestTestedSkills({ testedSkills }: TestedSkillsProps) {
    return (
        <div>
            <div className="flex items-center gap-2">
                <StarIcon w={5} h={5} />
                <h4 className="font-bold text-[22px]">Tested skills</h4>
            </div>
            <div className="w-full mt-3">
                <SkillTagList testedSkills={testedSkills} />
            </div>
        </div>
    )
}