export default function StatsPageLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full min-h-screen bg-gray-600 bg-opacity-40 backdrop-blur-sm flex">
            {children}
        </div>
    )
}
