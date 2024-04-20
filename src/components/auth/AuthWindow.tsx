import { ReactNode } from "react";

type Props = {
    heading: string,
    children: ReactNode
};

export default function AuthWindow({ heading, children }: Props) {

    return (
        <div className="w-[700px] h-[400px] bg-slate-600">
            
            {children}
        </div>
    )
}