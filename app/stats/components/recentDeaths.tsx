import getTimeAgo from "../../../utils/timeago";

type DeathData = {
    users: [
        {
            lastdeathTime: number;
            lastdeathString: string;
            username: string;
            mc_server: string;
        }
    ]
}
async function getLastDeaths(): Promise<DeathData> {
    const res = await fetch("https://api.forestbot.org/lastdeaths", { cache: "no-store" });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function RecentDeaths() {
    const lastdeaths = await getLastDeaths();
    return (
        <div className="rounded p-8 h-[70vh] w-full lg:w-1/2 mx-auto flex flex-col items-center justify-start bg-black bg-opacity-40 overflow-hidden">
            <h1 className="text-white font-bakbak text-3xl mb-10">Recently Recorded Deaths</h1>
            <ul className="flex flex-col gap-2 w-full">
                {
                    lastdeaths.users.map((obj, index) => {
                        return (
                            <li key={index} className="font-Minecraft lg:text-xs text-[0.5rem] gap-3 flex items-center justify-between text-neutral-200 p-3 bg-black bg-opacity-30 rounded w-full lg:w-3/4 mx-auto">
                                <p className="min-w-3/4 w-3/4 break-words break-all">{obj.lastdeathString}</p>
                                <div className="flex flex-col gap-1 min-w-1/4 w-1/4 text-right">
                                    <p>{getTimeAgo(obj.lastdeathTime)}</p>
                                    <p>{obj.mc_server}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}