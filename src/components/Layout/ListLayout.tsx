type ListLayoutProps = {
    children: React.ReactNode;
};

export default function ListLayout({ children }: ListLayoutProps) {
    return (
        <div className="w-full max-w-[1150px] min-h-[calc(100vh-64px)] flex flex-col">
            {children}
        </div>
    )
}