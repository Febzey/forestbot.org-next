import { Suspense } from "react";
import FlaskLoader from "../../../../../components/flaskLoader";
import LeftPanel from "./leftPanel";
import RightPanel from "./rightPanel";


export default function StatCard({ params }: { params: UserStatIndividual }) {
    return (
        <div className="bg-black bg-opacity-20 max-h-full min-h-full h-full flex p-8 flex-col  rounded" key={params.mc_server}>
            <div className="w-full h-full flex flex-col lg:flex-row gap-4">
                <LeftPanel params={{ stats: params }} />
                <Suspense fallback={<FlaskLoader/>}>
                    {/* @ts-expect-error Server Component */}
                    <RightPanel params={{ user: params.username, mc_server: params.mc_server }} />
                </Suspense>
            </div>
        </div>
    )
};