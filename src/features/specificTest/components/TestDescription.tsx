type TestDescriptionProps = {
    description: string;
};

export default function TestDescription({ description }: TestDescriptionProps) {
    return (
        <div className="max-w-[400px] text-justify text-wrap">
            <h4 className="font-bold text-[20px]">Description:</h4>
            <p className="text-[14px] text-[#666]">{description}</p>
        </div>
    )
}