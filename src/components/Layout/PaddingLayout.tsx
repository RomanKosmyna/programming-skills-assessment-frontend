import React from "react"

type Props = { 
    children: React.ReactNode;
    padding?: string; 
};

export default function PaddingLayout({ children, padding = "4" }: Props) {

    return (
        <div className={`p-[${padding}]`}>
            {children}
        </div>
    )
}