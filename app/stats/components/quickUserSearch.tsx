'use client';
import { useState } from "react";
import Link from "next/link";
export default function QuickUserSearch() {
    const [userToSearch, setUserToSearch] = useState("");
    return (
        <div className="lg:w-[90%] w-full h-[50vh] mx-auto rounded p-8">
            <div className="w-full h-full p-4">
                <div className="w-full flex flex-col mx-auto items-center justify-center h-full gap-10" id="usersearch">
                    <div className="text-center text-white">
                        <h1 className="font-bakbak text-3xl">Search your self or another user</h1>
                        <p className="text-neutral-200">Easily and quickly lookup your statistics or another players</p>
                    </div>

                    <div className="w-full lg:w-1/3 text-center flex flex-col">
                        <div className="flex flex-col lg:flex-row gap-2">
                            <input
                                className={"placeholder-neutral-300 text-white text-md border px-4 py-2 w-full bg-gray-500 focus:bg-zinc-500 border-none outline-none"}
                                id="username"
                                placeholder='Search a user'
                                type="text"
                                value={userToSearch}
                                onChange={(event) => setUserToSearch(event.target.value)}
                                spellCheck={false}
                            />
                            <Link href={`/stats/${userToSearch}`} prefetch={false} className="w-full lg:w-auto p-6 border-b-8 border-b-emerald-600 hover:bg-opacity-60 duration-150 bg-emerald-500 text-white h-12 items-center flex justify-center">
                                Search
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};