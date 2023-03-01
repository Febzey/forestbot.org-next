'use client';
import { useState } from "react";
import getTimeAgo from "../../../../../utils/timeago";
import { useEffect } from "react";

interface RightPanelNavArgs {
    data: {
        msgs: UserMessages | void,
        advs: Advancement | void,
        deaths: DeathMsgs | void,
        kills: KillMsgs | void
    }
}

export default function RightPanelNav({ data }: RightPanelNavArgs) {
    const { msgs, advs, deaths, kills } = data;

    const [isMobile, setIsMobile] = useState(false);
    const [card, setCard] = useState("messages");

    useEffect(() => {
        const handleResize = () => window.innerWidth <= 788 ? setIsMobile(true) : setIsMobile(false);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        !isMobile
            ? <div className="w-full h-full p-2 flex flex-col max-h-full min-h-full gap-2 overflow-hidden">
                <div className="h-full min-h-[50%] w-full bg-gray-600 rounded overflow-auto overflow-x-hidden " id="lastmessages">
                    <ul className="w-full bg-zinc-800 h-[15%] flex flex-row gap-3 items-center px-2 rounded-t pl-5 text-white">
                        <li onClick={() => setCard("messages")} className={`text-neutral-100 font-bakbak text-md border-b-[4px] cursor-pointer duration-200 hover:border-b-emerald-500 ${card === "messages" ? "border-b-green-400 text-green-400" : "border-b-white"}`}>Messages</li>
                        |<li onClick={() => setCard("advancements")} className={`text-neutral-100 font-bakbak text-md border-b-[4px] cursor-pointer duration-200 hover:border-b-emerald-500 ${card === "advancements" ? "border-b-green-400 text-green-400" : "border-b-white"}`}>Advancements</li>
                        |<li onClick={() => setCard("deaths")} className={`text-neutral-100 font-bakbak text-md border-b-[4px] cursor-pointer duration-200 hover:border-b-emerald-500 ${card === "deaths" ? "border-b-green-400 text-green-400" : "border-b-white"}`}>Deaths</li>
                        |<li onClick={() => setCard("kills")} className={`text-neutral-100 font-bakbak text-md border-b-[4px] cursor-pointer duration-200 hover:border-b-emerald-500 ${card === "kills" ? "border-b-green-400 text-green-400" : "border-b-white"}`}>Kills</li>
                    </ul>
                    <ul className="p-4 font-Minecraft font-thin text-white text-sm h-3/4">
                        {
                            /**
                             * Messages card
                             */
                            card === "messages" &&
                            (
                                msgs && !msgs.error
                                    ? msgs.messages.map((val, index) => (
                                        <li key={index} className="flex items-center justify-between gap-4 p-1 w-full">
                                            <p className="mr-auto break-words break-all">{val.message}</p>
                                            <p className="min-w-[25%] w-1/4 text-right">{val.date ? getTimeAgo(val.date as number) : ""}</p>
                                        </li>
                                    ))
                                    : <p>no messages recorded...</p>
                            )

                        }
                        {
                            /**
                             * Advancements card
                             */
                            card === "advancements" &&
                            (
                                advs && !advs.error
                                    ? advs.advancements.map((val, index) => (
                                        <li key={index} className="flex items-center justify-between gap-4 p-1 w-full">
                                            <p className="overflow-hidden text-ellipsis mr-auto">
                                                {
                                                    val.advancement.split(/\[(.*?)\]/g).map((part, index) => {
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
                                            <p className="min-w-[25%] w-1/4 text-right">{val.time ? getTimeAgo(val.time as number) : ""}</p>
                                        </li>
                                    ))
                                    : <p>No advancements recorded.</p>
                            )
                        }
                        {
                            /**
                             * Death messages card
                             */
                            card === "deaths" &&
                            (
                                deaths && !deaths.error
                                    ? deaths.deathmsgs.map((val, index) => (
                                        <li key={index} className="flex items-center justify-between gap-4 p-1 w-full">
                                            <p className="mr-auto break-words break-all">{val.death_message}</p>
                                            <p className="min-w-[25%] w-1/4 text-right">{val.time ? getTimeAgo(val.time as number) : ""}</p>
                                        </li>
                                    ))
                                    : <p>No Deaths recorded.</p>
                            )
                        }

                        {
                            /**
                             * Kill messages card
                             */
                            card === "kills" &&
                            (
                                kills && !kills.error
                                    ? kills.killmsgs.map((val, index) => (
                                        <li key={index} className="flex items-center justify-between gap-4 p-1 w-full">
                                            <p className="mr-auto break-words break-all">{val.death_message}</p>
                                            <p className="min-w-[25%] w-1/4 text-right">{val.time ? getTimeAgo(val.time as number) : ""}</p>
                                        </li>
                                    ))
                                    : <p>No Kills recorded.</p>
                            )
                        }
                    </ul>
                </div>
            </div>
            :
            <div className="w-full h-full flex items-center justify-center p-5">
                <p className="text-neutral-300">To view more stats, use a desktop view.</p>
            </div>
    )
}