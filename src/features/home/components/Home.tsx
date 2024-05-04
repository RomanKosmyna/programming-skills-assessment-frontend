import GeneralLayout from "../../../components/Layout/GeneralLayout";
import Instruction from "./Instruction";
import InstructionStepper from "./InstructionStepper";

export default function Home() {

    return (
        <GeneralLayout>
            <header className="w-full flex justify-center pt-16">
                <h2 className="font-bold text-4xl">Getting Started</h2>
            </header>
            <div className="flex justify-between">
                <Instruction />
                <InstructionStepper />
            </div>
        </GeneralLayout>
    );
}