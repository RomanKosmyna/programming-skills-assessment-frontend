import { Link } from "react-router-dom";
import SeparationLine from "../general/SeparationLine";

type TestTypeItemProps = {
    testType: {
        testTypeID: string;
        testTypeName: string;
        test: any[];
    },
    handleMouseEnter: any,
    handleMouseLeave: any,
    isItemHovered: any
}

export default function TestTypeItem(
    { testType, handleMouseEnter, handleMouseLeave, isItemHovered }: TestTypeItemProps
) {
    const { testTypeID, testTypeName } = testType;

    return (
        <section
            className={`w-[350px] h-[250px] bg-white shadow-lg border border-[#eaeaea] 
            rounded-lg select-none ${isItemHovered ? "z-50 relative" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/tests/${testTypeID}`} className="block w-full h-[250px] flex-grow p-6">
                <h3 className="font-bold text-black text-[45px] ml-5">{testTypeName}</h3>
                <SeparationLine />
            </Link>
        </section>
    )
}