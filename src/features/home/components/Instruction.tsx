import testCategoriesImage from "../assets/test-categories-instruction-step.png";
import testsByCategoryImage from "../assets/tests-by-category-instruction-step.png";

export default function Instruction() {
    return (
        <div className="w-full pt-10">
            <ol className="w-full flex flex-col gap-3">
                <li className="max-w-[600px] max-h-[355px] bg-main shadow-borderLight p-4 rounded-lg">
                    <div>
                        <h3 className="font-bold text-xl">Choose a Category of Interest for Assessment.</h3>
                        <p className="mt-2 text-[#171717]">Each category represents a curated set of tests categorized by programming languages.</p>
                    </div>
                    <img
                        src={testCategoriesImage}
                        alt=""
                        className="max-w-full h-[200px] object-contain rounded-lg mt-3"
                    />
                </li>
                <li className="max-w-[600px] max-h-[355px] bg-main shadow-borderLight p-4 rounded-lg">
                    <div>
                        <h3 className="font-bold text-xl">Select a Specific Test.</h3>
                        <p className="mt-2 text-[#171717]">Upon selecting a specific category, you will receive a list of tests varying in complexity.</p>
                    </div>
                    <img
                        src={testsByCategoryImage}
                        alt=""
                        className="max-w-full h-[200px] object-contain rounded-lg mt-3"
                    />
                </li>
            </ol>
        </div>
    );
}