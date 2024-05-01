import GeneralLayout from "../../../components/Layout/GeneralLayout";
import Instruction from "./Instruction";

export default function Home() {

    return (
        <GeneralLayout>
            <header className="w-full flex justify-center pt-16">
                <h2 className="font-bold text-4xl">Getting Started</h2>
            </header>
            <Instruction />
        </GeneralLayout>
    );
}