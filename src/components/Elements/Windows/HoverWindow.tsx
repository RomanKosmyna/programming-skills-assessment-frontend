type HoverWindowProps = {
    hoveredItemId: string | null;
};

export default function HoverWindow({ hoveredItemId }: HoverWindowProps) {
    return (
        <div className={`fixed left-0 top-0 w-full h-full bg-mainDark/[.3] dark:bg-mainDark/[.8]
            z-40 transition-opacity duration-500 ${hoveredItemId !== null ? "block" : "hidden"}`}></div>
    )
}