'use client';

import { useState } from "react";
import Link from "next/link";

const SearchBar = () => {
    const [userToSearch, setUserToSearch] = useState<string|null>("");
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-2 lg:w-[40%] w-[70%] mx-auto">
                <input
                    className={`placeholder-neutral-300 text-white text-md border px-4 py-2 w-full bg-gray-500 focus:bg-zinc-500 border-none outline-none ${userToSearch===null&&"outline-red-500 outline-2"}`}
                    id="username"
                    placeholder='Search for another user'
                    type="text"
                    value={userToSearch ?? ""}
                    onChange={(event) => setUserToSearch(event.target.value)}
                    spellCheck={false}
                />
                <Link href={`/stats/${userToSearch}`} prefetch={false} className="w-full lg:w-auto p-6 border-b-8 border-b-emerald-600 hover:bg-opacity-60 duration-150 bg-emerald-500 text-white h-12 items-center flex justify-center">
                    Search
                </Link>
            </div>
        </>
    )
}

export default SearchBar