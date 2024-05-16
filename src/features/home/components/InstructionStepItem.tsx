type Props = {
    heading: string;
    text: string;
    secondText?: string;
    imagePath: string;
};

export default function InstructionStepItem({ heading, text, secondText, imagePath }: Props) {

    return (
        <li className="max-w-[600px] max-h-[355px] dark:bg-darkAccent1 
                    border dark:border-darkButtonBorder p-4 rounded-lg">
            <div>
                <h3 className="text-mainDark dark:text-mainWhite font-bold text-2xl">{heading}</h3>
                <p className="mt-2 text-mainDark dark:text-darkText1">{text}</p>
                {secondText && <p className="mt-2 text-mainDark dark:text-darkText1">{secondText}</p>}
            </div>
            <div className="flex justify-center">
                <img
                    src={imagePath}
                    alt={heading}
                    className="max-w-full h-[200px] object-contain rounded-lg mt-3"
                />
            </div>
        </li>
    )
}