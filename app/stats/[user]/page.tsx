import React from "react";
import UserPage from "./userPage";
import Loading from "./loading";
import { Suspense } from "react";

interface UserParams {
    params: {
        user: string
    }
}
export default async function Page({ params }: UserParams) {
    const { user } = params;
    return (
        <section className="w-full h-full">
            <Suspense fallback={<Loading />}>

                {/* @ts-expect-error Server Component */ }
                <UserPage params={{ user: user }} />
            </Suspense>
        </section>
    )

}