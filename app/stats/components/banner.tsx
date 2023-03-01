'use client';

import line1 from "../../../public/images/line1.svg";
import Image from "next/image";

export default function StatsBanner() {
    return (
        <div className="min-h-[70vh] h-auto gap-5 flex items-center justify-center flex-col my-auto p-8 mx-auto">
            <h1 className="text-center text-neutral-100 font-bakbak text-5xl lg:text-7xl">Player Statistics</h1>
            <p className="w-3/4 lg:w-2/4 text-center text-neutral-100">Welcome to ForestBot's Player Statistics page. Here you can find the publicly available data that ForestBot saves on users. Some of the statistics you can find here include: deaths, kills, achievements, messages and much more. You are also able to select what Minecraft Server you come from and search specific users.
            </p>
            <Image src={line1} alt="line1"/>
        </div>
    )
}