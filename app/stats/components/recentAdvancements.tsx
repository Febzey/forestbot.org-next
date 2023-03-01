import getTimeAgo from "../../../utils/timeago";

type advancementData = {
    users: [
        {
            username: string,
            advancement: string,
            time: number,
            mc_server: string
        }
    ]
}

async function getLastAchievements(): Promise<advancementData> {
    const res = await fetch("https://api.forestbot.org/lastadvancements", { cache: "no-store"});

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}


export default async function RecentAdvancements() {
    const lastadvancements = await getLastAchievements();
    return (
        <div className="rounded p-8 h-[70vh] w-full lg:w-1/2 mx-auto flex flex-col items-center justify-start bg-black bg-opacity-40 overflow-hidden">
        <h1 className="text-white font-bakbak text-3xl mb-10">Recently Recorded Advancements</h1>
        <ul className="flex flex-col gap-2 w-full">
            {
                lastadvancements.users.map((obj, index) => {
                    return (
                        <li key={index} className="gap-3 font-Minecraft lg:text-xs text-[0.5rem] flex items-center justify-between text-neutral-200 p-3 bg-black bg-opacity-30 rounded w-full lg:w-3/4 mx-auto">
                            <p className="min-w-3/4 w-3/4 break-words break-all">
                                {
                                    obj.advancement.split(/\[(.*?)\]/g).map((part, index) => {
                                        const isBracket = index % 2 === 1;
                                        const className = isBracket ? "text-emerald-500" : "";
                                        return (
                                            <span key={index} className={className}>
                                                {isBracket ? `[${part}]` : part}
                                            </span>
                                        );
                                    })
                                }
                            </p>
                            <div className="flex flex-col gap-1 min-w-1/4 w-1/4 text-right">
                                <p>{getTimeAgo(obj.time)}</p>
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