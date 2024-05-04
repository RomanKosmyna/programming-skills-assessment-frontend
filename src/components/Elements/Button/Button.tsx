const variants = {
    primary: "bg-lightBlue"
};

type ButtonProps = {
    type: "button" | "submit" | "reset";
    className?: string;
    variant: keyof typeof variants;
    text: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function Button({ type, className, variant, text }: ButtonProps) {
    return (
        <button type={type} className={`${className} ${variants[variant]}`}>{text}</button>
    )
}