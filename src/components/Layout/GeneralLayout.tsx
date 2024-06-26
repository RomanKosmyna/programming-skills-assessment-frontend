type GeneralLayoutProps = {
    children: React.ReactNode;
};

export default function GeneralLayout({ children }: GeneralLayoutProps) {
    return (
        <main className="w-full max-w-[1150px] min-h-[calc(100vh-64px)] flex flex-col pt-[64px]">
            {children}
        </main>
    )
}