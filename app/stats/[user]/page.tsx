import React from "react";
import UserPage from "./userPage";
import Loading from "./loading";
import { Suspense } from "react";
import SearchBar from "./components/searchAgain";

interface UserParams {
    params: {
        user: string
    }
}
export default async function Page({ params }: UserParams) {
    const { user } = params;
    return (
        <div className="flex flex-col gap-7 mt-32 w-full mb-28">
            <SearchBar />
            <div className="rounded lg:w-[80%] w-full bg-black bg-opacity-30 flex flex-col lg:flex-row items-center gap-2 lg:max-h-[83vh] lg:h-[83vh] my-auto mx-auto">

                <section className="w-full h-full">
                    <Suspense fallback={<Loading />}>
                        {/* @ts-expect-error Server Component */}
                        <UserPage params={{ user: user }} />
                    </Suspense>
                </section>
            </div>
        </div>

    )
}