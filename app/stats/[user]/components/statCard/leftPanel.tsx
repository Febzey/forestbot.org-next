import formatDate, { dhms } from "../../../../../utils/time"
import getTimeAgo from "../../../../../utils/timeago"

interface LeftPanelArgs {
    params: {
        stats: UserStatIndividual
    }
}

export default function LeftPanel({ params }: LeftPanelArgs) {
    const { stats } = params;

    if (!stats) return (
        <div className="min-w-[23%] w-full lg:min-w-[23%] lg:w-[23%] h-full">
            <p>Stats not found.</p>
        </div>
    )

    let joindate;

    if (stats.joindate && stats.joindate.match(/^\d+$/)) {
        joindate = `${formatDate(parseInt(stats.joindate))} (${getTimeAgo(parseInt(stats.joindate))})`;
    } else {
        joindate = stats.joindate;
    }

    return (
        <div className="w-full lg:min-w-[23%] lg:w-[23%] h-full flex flex-col gap-2 items-center justify-center">
            <h1 className="text-neutral-100 font-bakbak text-2xl uppercase">{stats.mc_server}</h1>

            <div className="w-full max-h-full flex bg-gray-600 bg-opacity-40 h-full flex-col rounded overflow-auto">

                <h1 className="rounded-t text-center text-neutral-100 text-lg font-bakbak flex items-center justify-center w-full min-h-[10%] h-[10.55555%] bg-green-500">General Statistics</h1>
                <ul className="p-4 flex flex-col gap-3 text-neutral-300 text-center text-sm">
                    <li className="flex flex-col gap-[0.11rem]">
                        <h1 className="font-bakbak text-center">First seen</h1>
                        <p>{joindate}</p>
                    </li>
                    <li className="flex flex-col gap-[0.11rem]">
                        <h1 className="font-bakbak text-center">Last seen</h1>
                        <p>{stats.lastseen && stats.lastseen.match(/^\d+$/) ? `${formatDate(parseInt(stats.lastseen))} (${getTimeAgo(parseInt(stats.lastseen))})` : "Not recorded."}</p>
                    </li>
                    <li className="flex flex-col gap-[0.11rem]">
                        <h1 className="font-bakbak text-center">Playtime</h1>
                        <p>{dhms(stats.playtime)}</p>
                    </li>
                    <li className="flex flex-col gap-[0.11rem]">
                        <h1 className="font-bakbak text-center">Last death</h1>
                        <p>{`${stats.lastdeathTime != 0 ? formatDate(stats.lastdeathTime) : "Death not recorded."}`}</p>
                    </li>
                    <li className="flex flex-col gap-[0.11rem]">
                        <h1 className="font-bakbak text-center">Deaths</h1>
                        <p>{stats.deaths}</p>
                    </li>
                    <li className="flex flex-col gap-[0.11rem]">
                        <h1 className="font-bakbak text-center">Kills</h1>
                        <p>{stats.kills}</p>
                    </li>
                    <li className="flex flex-col gap-[0.11rem]">
                        <h1 className="font-bakbak text-center">Joins / Leaves</h1>
                        <p>{stats.joins}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}