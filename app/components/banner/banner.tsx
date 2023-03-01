//@ts-ignore
import wavey from '../../../public/images/wavey.png';
import Image from 'next/image';
import BannerButtons from './bannerButtons';

const Banner = ({ inviteUrl }: { inviteUrl: string }): JSX.Element => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-36 py-20 min-h-screen">

            <div className="flex flex-col w-[84%] lg:w-3/4 mx-auto items-center text-center mt-10" id="banner-main">
                <div className="flex flex-col gap-6 lg:w-3/4 mt-[20vh] lg:mt-auto">
                    <h1 className="lg:text-8xl text-6xl font-bakbak font-extrabold text-neutral-100">Forest<span className="text-sky-500">Bot</span>.</h1>
                    <p className="lg:text-3xl text-2xl text-neutral-100 font-medium font-inter">Easily track player stats on your Minecraft server<span className="text-sky-400 font-bold">.</span></p>

                    <div className="flex lg:mr-auto flex-col">
                        <BannerButtons/>
                        <Image alt="waveUnderscore" src={wavey} className="px-8" />
                    </div>

                </div>
            </div>

            <div className="flex flex-col gap-4 mt-14" id="banner-side">
                <div id="banner-info" className="flex items-center justify-center lg:justify-end lg:-translate-x-24">
                    <div className="flex justify-center gap-2 flex-col shadow-2xl backdrop-blur-sm bg-opacity-50 bg-gray-700 w-[80%] lg:w-2/3 min-h-[22vh] rounded-lg border-r-[12px] border-r-lime-500 p-8">
                        <h1 className="font-bakbak text-2xl text-neutral-50">What is ForestBot?</h1>
                        <p className="font-inter text-neutral-200">ForestBot is a Minecraft bot that tracks player statistics and provides a variety of in-game and Discord commands for viewing and comparing these stats. It's a useful tool for anyone looking to monitor their progress and improve their gameplay.</p>
                    </div>
                </div>
                <div id="banner-info" className="flex items-center justify-center lg:justify-end lg:-translate-x-24">
                    <div className="flex justify-center gap-2 flex-col shadow-2x backdrop-blur-sm bg-opacity-50 bg-gray-700 w-[80%] lg:w-2/3 min-h-[22vh] rounded-lg border-r-[12px] border-r-blue-500 p-8">
                        <h1 className="font-bakbak text-2xl text-neutral-50">ForestBot for your Minecraft Server!</h1>
                        <p className="font-inter text-neutral-200">If you'd like to use ForestBot on your Minecraft server, you can do so with a one-time donation of $15. However, if your server has more than 20 concurrent users per day, the donation is not required. ForestBot is a great addition to any Minecraft server, providing valuable tools for tracking player statistics and enhancing gameplay. </p>
                    </div>
                </div>
                <div id="banner-info" className="flex items-center justify-center lg:justify-end lg:-translate-x-24">
                    <div className="flex justify-center gap-2 flex-col shadow-2xl backdrop-blur-sm bg-opacity-50 bg-gray-700 w-[80%] lg:w-2/3 min-h-[22vh] rounded-lg border-r-[12px] border-r-teal-600 p-8">
                        <h1 className="font-bakbak text-2xl text-neutral-50">How does it work?</h1>
                        <p className="font-inter text-neutral-200">ForestBot works by observing in-game events and recording relevant statistics. It has no direct connection to the Minecraft server, and simply captures the same information that is available to regular players. This includes chat messages, death notifications, etc. By using this data, ForestBot provides players with helpful tools and insights to improve their gameplay.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Banner;