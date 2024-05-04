import { Link } from "react-router-dom";

type Props = {
    text: string;
    linkRoute: string;
    linkText: string;
};

export default function AccountStatusNav({ text, linkRoute, linkText }: Props) {
    return (
        <div className="flex flex-col items-center mt-10">
            <p className="font-bold text-lg">{text}</p>
            <Link
                to={linkRoute}
                className="font-medium text-lightBlue hover:text-darkerLightBlue hover:underline"
            >
                {linkText}
            </Link>
        </div>
    )
}