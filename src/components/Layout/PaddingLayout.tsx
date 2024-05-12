import React from "react"

type Props = { 
    children: React.ReactNode;
    padding?: string; 
};

export default function PaddingLayout({ children, padding = "4" }: Props) {

    return (
        <div className={`w-full min-h-[calc(100vh-64px)] flex flex-col p-${padding}`}>
            {children}
        </div>
    )
}