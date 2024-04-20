import { useNavigate } from "react-router-dom";

type Props = {
    route: string,
    text: string
};

export default function NavButton({ route, text }: Props) {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = route;
        navigate(path);
    };

    return (
        <button
            onClick={routeChange}
            className="w-[224px] h-[58px] bg-[#008DDA] rounded-full mt-8 hover:bg-[#0066A3]"
        >
            <span className="font-bold text-lg text-white">{text}</span>
        </button>
    )
}