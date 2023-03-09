import { FaHome, FaArrowLeft, FaDiscord } from "react-icons/fa"
import Link from "next/link";
import tablistPreview from "../../public/images/exampletablist.png";
import statsPreview from "../../public/images/exampledisccommand.png";
import grassblock from "../../public/images/grassblock.svg";
import Image from "next/image";


const commandList = [
    {
        cmd: '!ping',
        desc: 'See a users ping',
    },
    {
        cmd: '!bp',
        desc: 'See who has the best ping'
    },
    {
        cmd: '!wp',
        desc: 'See who has the worst ping'
    },
    {
        cmd: '!joindate',
        desc: 'See when I first saw a user'
    },
    {
        cmd: '!lastseen',
        desc: 'Check when I lastseen a user'
    },
    {
        cmd: '!joins',
        desc: 'See how many times a user has joined',
    },
    {
        cmd: '!kd',
        desc: 'See how many kills/deaths a user has.'
    },
    {
        cmd: '!kill',
        desc: 'kill the bot'
    },
    {
        cmd: '!lastdeath',
        desc: 'see a users lastdeath'
    },
    {
        cmd: '!msgcount',
        desc: 'See a users message count'
    },
    {
        cmd: '!playtime',
        desc: 'See how long a user has been playing'
    },
    {
        cmd: '!quote',
        desc: 'Bring up a random message'
    },
    {
        cmd: '!top kills',
        desc: 'See the top 5 users with the most kills'
    },
    {
        cmd: '!top deaths',
        desc: 'See the top 5 users with the most deaths'
    },
    {
        cmd: '!top joins',
        desc: 'See the top 5 users with the most joins/leaves'
    },
    {
        cmd: '!top playtime',
        desc: "See the top 5 users with the most playtime"
    },
    {
        cmd: '!urban',
        desc: 'Search the urban dictionary',
    },
    {
        cmd: "!mount",
        desc: "Forestbot will attempt to mount the nearest boat."
    },
    {
        cmd: "!sleep",
        desc: "If a bed is close, ForestBot will sleep."
    },
    {
        cmd: "!firstmessage",
        desc: "View yours or another users first publicly sent message."
    },
    {
        cmd: "!lastmessage",
        desc: "View yours or another users last publicly sent message."
    },
    {
        cmd: "!wordcount <user> <word>",
        desc: "See how many times a user has said a specific word."
    },

];

const discordCommands = [
    {
        cmd: '/tablist',
        desc: 'Get an image of the in-game Tablist'
    },
    {
        cmd: '/search',
        desc: 'Get all statistics for the user you searched'
    },
    {
        cmd: '/livechat',
        desc: 'Setup a live chat bridge to interact with game chat'
    },
    {
        cmd: '/setup',
        desc: 'Initialize me for the Minecraft server you use me for'
    },
    {
        cmd: '/help',
        desc: 'Get some basic info about the bot',
    }
];


export default function Page() {
    return (
        <div className="relative">
            <div className="bg-gray-600 bg-opacity-40 backdrop-blur-sm pt-28">
                <div className="w-full min-h-[50vh] h-auto flex">
                    <div className="flex items-center justify-center flex-col gap-4 my-auto p-8">
                        <h1 className="text-center text-neutral-100 font-bakbak text-5xl lg:text-7xl">ForestBot Commands</h1>
                        <p className="w-3/4 lg:w-2/4 text-center text-neutral-100">Welcome to ForestBot's commands page! ForestBot is a powerful Minecraft bot that provides a variety of in-game and Discord commands for tracking player statistics. With no admin commands or abilities, ForestBot is a safe and secure option for any Minecraft server. Explore the list of commands below to see all that ForestBot has to offer!
                        </p>
                        <div className="flex lg:flex-row flex-col gap-3 justify-center items-center mt-5">
                            <a href={"mailto:computerservermc@gmail.com"} target="_blank" className="w-full lg:w-auto p-6 border-b-8 border-b-emerald-600 hover:bg-emerald-700 duration-150 rounded bg-emerald-500 text-white h-12 items-center flex justify-center">
                                Request Minecraft bot
                            </a>
                            <a href={"https://discord.com/oauth2/authorize?client_id=771280674602614825&permissions=3072&scope=bot%20applications.commands"} target="_blank" className="w-full lg:w-auto p-6 border-b-8 border-b-[#5062a1] hover:bg-opacity-60 duration-150 rounded bg-[#7289da] text-white h-12 items-center flex justify-center">
                                Invite Me To Discord!
                            </a>
                        </div>
                    </div>

                </div>


                <div className="w-full flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 h-full flex flex-col items-center gap-6 p-10">
                        <div className="flex flex-row items-center justify-center gap-2">
                            <h1 className="mx-auto text-white font-bakbak text-3xl">Minecraft Commands</h1>
                            <Image src={grassblock} alt="grassblock" className="w-10" width={0}></Image>
                        </div>
                        <ul>
                            {
                                commandList.map((command, index) => {
                                    return (
                                        <li className="flex flex-col gap-0 mb-4 bg-black bg-opacity-25 p-3 rounded">
                                            <span className="text-emerald-300 font-semibold font-mono text-lg">{command.cmd}</span>
                                            <p className="text-white text-md">{command.desc}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>


                    <div className="lg:w-1/2 h-full flex flex-col items-center gap-6 p-10">
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex flex-row items-center justify-center gap-2">
                                <h1 className="mx-auto text-white font-bakbak text-3xl">Discord commands</h1>
                                <FaDiscord className="text-[#7289da] w-12 h-12" />
                            </div>
                            <p className="text-sm text-center text-neutral-200">All commands are built in via discord slash (/) commands.</p>
                        </div>
                        <ul>
                            {
                                discordCommands.map((command, index) => {
                                    return (
                                        <li className="flex flex-col gap-0 mb-4 bg-black bg-opacity-25 p-3 rounded">
                                            <span className="text-emerald-300 text-lg  font-semibold font-mono">{command.cmd}</span>
                                            <p className="text-white text-md">{command.desc}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <a href={"https://discord.com/oauth2/authorize?client_id=771280674602614825&permissions=3072&scope=bot%20applications.commands"} target="_blank" className="w-full lg:w-auto p-6 border-b-8 border-b-[#5062a1] hover:bg-opacity-60 duration-150 rounded bg-[#7289da] text-white h-12 items-center flex justify-center">
                            Invite Me To Discord!
                        </a>

                        <div className="mt-16 flex flex-col gap-16 items-center">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-white font-bakbak text-lg">Live Tablist Example.</h2>
                                <Image src={tablistPreview} alt="tabPreview" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h2 className="text-white font-bakbak text-lg">/search command example.</h2>
                                <Image src={statsPreview} alt="tabPreview" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}