import SeparationLine from "@components/General/SeparationLine";
import { getTestCategoryNameAndImage } from "@features/testsByCategory/util/getTestCategoryNameAndImage";

type Props = {
    testCategoryId: string | undefined;
};

export default function HeadingWithImage({ testCategoryId }: Props) {
    const { testCategoryName, testCategoryImage } = getTestCategoryNameAndImage(testCategoryId);

    return (
        <div className="w-full pt-3">
            <div className="w-full flex items-center">
                <h2 className="font-bold text-[36px]">{`${testCategoryName} Tests`}</h2>
                <img
                    src={testCategoryImage}
                    alt={`${testCategoryName} programming language logo`}
                    className="h-[50px] ml-10"
                />
            </div>
            <SeparationLine />
        </div>
    )
}