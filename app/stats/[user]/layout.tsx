import SearchBar from "./components/searchAgain"

export default function UserPageLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col gap-7 mt-32 w-full mb-28">
            <SearchBar/>
            <div className="rounded lg:w-[80%] w-full bg-black bg-opacity-30 flex flex-col lg:flex-row items-center gap-2 lg:max-h-[83vh] lg:h-[83vh] my-auto mx-auto">
                {children}
            </div>
        </div>
    )
}