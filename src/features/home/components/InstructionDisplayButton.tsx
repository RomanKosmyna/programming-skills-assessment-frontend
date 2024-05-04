type Props = {
    changeDisplay: () => void;
};

export default function InstructionDisplayButton({ changeDisplay }: Props) {
    return (
        <button
            onClick={changeDisplay}
            className="bg-lightBlue hover:bg-darkerLightBlue px-6 py-2 font-bold text-main rounded-lg"
        >
            Change display
        </button>
    )
}