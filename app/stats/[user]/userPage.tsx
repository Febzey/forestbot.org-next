import Image from "next/image";
import StatCard from "./components/statCard/statCard";
import { dhms } from "../../../utils/time";
import getTimeAgo from "../../../utils/timeago";
import fourofour from "../../../public/images/404-error.png";
import Link from "next/link";


type uuidData = {
    name: string,
    id: string
}
interface UserParams {
    params: {
        user: string
    }
}

async function getUUIDFromUsername(user: string): Promise<uuidData | void> {
    try {
        const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${user}`, { cache: "no-store"})
        if (!res.ok) {
            return
        }
        return await res.json();
    } catch {
        return
    }
}

async function getAllStats(user: string): Promise<UserStats | void> {
    const res = await fetch(`https://api.forestbot.org/user-stats/${user}`, { cache: "no-store"});
    if (!res.ok) {
        return
    }
    return res.json();
}

async function getOnlineStatus(user: string): Promise<OnlineStatus | void> {
    const res = await fetch(`https://api.forestbot.org/isonline/${user}`, { cache: "no-store"});
    if (!res.ok) {
        return
    }
    return res.json();
}

export default async function UserPage ({ params }: UserParams) {
    const { user } = params;

    const [uuid, statsObject, onlineStatus] = await Promise.all([
        getUUIDFromUsername(user),
        getAllStats(user),
        getOnlineStatus(user)
    ])

    if (!user || !uuid || !statsObject || statsObject.error) return (
        <div className="p-8 mx-auto flex flex-col items-center justify-center text-neutral-200 text-center">
            <Image src={fourofour} alt="404error" />
            <p>ermm. Seems the database has no records for <span className="font-semibold text-red-500">{user}</span></p>
            <Link href="stats" className="mt-2 underline underline-offset-1 text-blue-400 duration-150 hover:text-blue-700">Take me back!</Link>
        </div>
    )

    const { userStats } = statsObject;
    const stats = userStats;

    const uniqueServers = stats ? stats.filter((stat, index, self) =>
        index === self.findIndex((s) => s.mc_server === stat.mc_server)
    ).map((stat) => stat.mc_server) : [];

    const servOnline = onlineStatus && onlineStatus.isOnline && stats.find(stat => stat.mc_server === onlineStatus.mc_server) as UserStats["userStats"][0]
    stats.sort((a, b) => b.playtime - a.playtime);
    return (
        <div className="flex flex-col w-full max-h-full lg:h-[100%] p-8 object-contain">
            <div className="flex flex-col lg:flex-row w-full max-h-[95%] min-h-[95%] gap-5 lg:gap-1">
                <div className="w-full lg:w-1/4 flex items-center justify-between flex-col mr-auto gap-4">
                    <div className="flex items-center flex-col gap-1 h-full w-full max-w-full">
                        <Image src={`https://crafatar.com/renders/body/${uuid.id}`} width="100" height="30" alt="kek" />
                        <h1 className="font-Minecraft text-white text-3xl">{uuid.name}</h1>
                        <p className="text-xs text-neutral-400">({uuid.id})</p>
                        <p className="text-neutral-200">Seen on <span className="font-bold text-emerald-500">{uniqueServers.length}</span> servers</p>
                        <a href={`https://namemc.com/profile/${uuid.name}.2`} target="_blank" className="mt-2 text-sky-400 underline underline-offset-4 duration-150 hover:text-sky-600">View on namemc</a>

                        <ul className="mt-10 bg-black bg-opacity-20 rounded p-4 h-full w-[90%] max-w-[90%] gap-4 flex flex-col">
                            {
                                onlineStatus && onlineStatus.isOnline ?
                                    <div className="flex flex-col text-neutral-200 items-start justify-center">
                                        <p className="font-medium">Currently playing on:</p>
                                        <p className="font-bakbak uppercase">{onlineStatus.mc_server}</p>
                                        <p className="text-xs text-neutral-300">(logged in <span>{`${servOnline && getTimeAgo(parseInt(servOnline.lastseen))}`})</span></p>
                                    </div>

                                    :
                                    null
                            }
                            <div className="flex flex-col text-neutral-200 items-start justify-center">
                                <p className="font-medium">Total combined playtime:</p>
                                <p className="font-bakbak uppercase">{dhms(stats.reduce((acc, curr) => acc + curr.playtime, 0))}</p>
                            </div>

                            <div className="flex flex-col text-neutral-200 items-start justify-center">
                                <p className="font-medium">Playtime this week:</p>
                                <p className="font-bakbak uppercase">Coming soon™</p>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="w-full lg:w-3/4 pr-2 pl-0 flex flex-col gap-4 overflow-auto h-full min-h-full lg:max-h-full">
                    {stats.map((stat) => (<StatCard params={stat} />))}
                </div>
            </div>


            <div className="mx-auto flex flex-col items-center justify-center mt-auto p-4">
                <p className="text-neutral-400 text-xs">Note: some stats may not be 100% accurate</p>
                <p className="text-neutral-400 text-xs">Contact support if you would like your stats updated.</p>
            </div>
        </div>

    )
};