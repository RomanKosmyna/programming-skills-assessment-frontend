type ListLayoutProps = {
    children: React.ReactNode;
};

export default function ListLayout({ children }: ListLayoutProps) {
    return (
        <div className="w-full flex-grow flex flex-col">
            {children}
        </div>
    )
}