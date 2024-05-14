import React from "react"

type Props = { 
    children: React.ReactNode;
    padding?: string;
    bg?: string;
};

export default function PaddingLayout({ children, bg = "", padding = "4" }: Props) {

    return (
        <div className={`w-full min-h-[calc(100vh-64px)] bg-${bg} flex flex-col p-${padding}`}>
            {children}
        </div>
    )
}