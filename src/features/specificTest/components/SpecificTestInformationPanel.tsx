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
        <div className="w-full flex flex-col laptop:flex-row gap-5 laptop:gap-20 mt-8 p-3 laptop:bg-accent1 laptop:shadow-borderLight rounded-lg">
            <SpecificTestDescription description={description} />
            <SpecificTestTestedSkills testedSkills={testedSkills} />
            <SpecificTestDuration durationMinutes={durationMinutes} />
        </div>
    )
}