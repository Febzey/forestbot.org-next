'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const router = useRouter();
    const [userToSearch, setUserToSearch] = useState<string|null>("");
    const handleSubmit = () => {
        if (!userToSearch) {
            setUserToSearch(null);
            return setTimeout(()=>setUserToSearch(""),10000)
        }
        router.push(`/stats/${userToSearch}`);
        return;
    };
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
                <button onClick={() => handleSubmit()} className="w-full lg:w-auto p-6 border-b-8 border-b-emerald-600 hover:bg-opacity-60 duration-150 bg-emerald-500 text-white h-12 items-center flex justify-center">
                    Search
                </button>
            </div>
        </>
    )
}

export default SearchBar