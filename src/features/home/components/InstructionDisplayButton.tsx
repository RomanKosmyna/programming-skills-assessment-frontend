type Props = {
    changeDisplay: () => void;
};

export default function InstructionDisplayButton({ changeDisplay }: Props) {
    return (
        <button
            onClick={changeDisplay}
            className="bg-lightBlue px-6 py-2 font-bold text-mainWhite 
            rounded-lg transition-opacity hover:dark:opacity-90"
        >
            Change display
        </button>
    )
}