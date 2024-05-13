import { InfoOutlineIcon } from "@chakra-ui/icons";

type TestDescriptionProps = {
    description: string;
};

export default function SpecificTestDescription({ description }: TestDescriptionProps) {
    return (
        <section className="max-w-[400px] text-justify text-wrap">
            <div className="flex items-center gap-2">
                <InfoOutlineIcon w={5} h={5} />
                <h4 className="font-bold text-[22px]">Description</h4>
            </div>
            <div className="w-full mt-2">
                <p className="text-[17px] text-[#666]">{description}</p>
            </div>
        </section>
    )
}