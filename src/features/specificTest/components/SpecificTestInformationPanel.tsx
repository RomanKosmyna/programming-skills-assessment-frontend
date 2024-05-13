import SpecificTestDescription from "./SpecificTestDescription";
import SpecificTestTestedSkills from "./SpecificTestTestedSkills";
import SpecificTestDuration from "./SpecificTestDuration";

type Props = {
    description: string;
    testedSkills: string[];
    durationMinutes: number | undefined;
};

export default function SpecificTestInformationPanel(
    { description, testedSkills, durationMinutes }: Props
) {

    return (
        <div className="flex mt-8 gap-20">
            <SpecificTestDescription description={description} />
            <SpecificTestTestedSkills testedSkills={testedSkills} />
            <SpecificTestDuration durationMinutes={durationMinutes} />
        </div>
    )
}