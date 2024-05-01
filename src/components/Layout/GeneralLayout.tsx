type GeneralLayoutProps = {
    children: React.ReactNode;
};

export default function GeneralLayout({ children }: GeneralLayoutProps) {
    return (
        <div className="w-full max-w-[1150px] min-h-[calc(100vh-64px)] flex flex-col px-4 pb-10">
            {children}
        </div>
    )
}