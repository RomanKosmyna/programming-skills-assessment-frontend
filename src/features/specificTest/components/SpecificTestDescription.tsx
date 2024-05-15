import { InfoOutlineIcon } from "@chakra-ui/icons";

type TestDescriptionProps = {
    description: string;
};

export default function SpecificTestDescription({ description }: TestDescriptionProps) {
    return (
        <section>
            <div className="flex items-center gap-2">
                <InfoOutlineIcon w={5} h={5} className="text-mainDark dark:text-darkHeading" />
                <h4 className="font-bold text-mainDark dark:text-darkHeading text-[22px]">Description</h4>
            </div>
            <div className="w-full mt-2">
                <p className="text-mainDark dark:text-darkText1 text-[17px]">{description}</p>
            </div>
        </section>
    )
}