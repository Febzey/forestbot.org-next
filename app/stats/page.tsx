import React, { Suspense } from "react";
import RecentAdvancements from "./components/recentAdvancements";
import RecentDeaths from "./components/recentDeaths";
import QuickUserSearch from "./components/quickUserSearch";
import FlaskLoader from "../../components/flaskLoader";

export default async function Page() {
    return (
        <div className="flex flex-col w-full bg-gray-600 bg-opacity-40 backdrop-blur-sm min-h-screen h-auto">
            <div className="w-full h-auto flex flex-col gap-10 mb-56 mt-28">
                <QuickUserSearch />
                <div className="bg-gray-600 h-[70vh] min-h-[76vh] bg-opacity-80 gap-10 mx-auto w-full lg:w-[90%] flex flex-col lg:flex-row p-8 rounded">
                    <Suspense fallback={
                        <div className="w-1/2 h-full">
                            <FlaskLoader />
                        </div>
                    }
                    >
                        {/* @ts-expect-error Server Component */}
                        <RecentDeaths />
                    </Suspense>

                    <Suspense fallback={
                        <div className="w-1/2 h-full">
                            <FlaskLoader />
                        </div>
                    }
                    >
                        {/* @ts-expect-error Server Component */}
                        <RecentAdvancements />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}


{/* <Suspense fallback={
                        <div className="w-1/2 h-full">
                            <FlaskLoader />
                        </div>}
                    >

                        <RecentDeaths />
                    </Suspense>

                    <Suspense fallback={
                        <div className="w-1/2 h-full">
                            <FlaskLoader />
                        </div>}
                    //change these to client components 
                    >
                        <RecentAdvancements />
                    </Suspense> */}