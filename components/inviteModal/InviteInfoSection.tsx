export default function InviteInfo() {
    return (
        <section className="p-8 md:p-16 w-full my-20 mx-auto bg-opacity-50 bg-gray-700 backdrop-blur-sm shadow-md" id="inviteInfo">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl lg:text-4xl font-bakbak text-center text-white mb-8">
                    Invite ForestBot to Enhance Your Minecraft Experience
                </h2>
                <p className="text-md lg:text-lg font-inter text-neutral-100 mb-8 text-center">
                    ForestBot is a Minecraft statistic tracking bot that can provide information on player activity. To invite ForestBot to your Minecraft server, please contact Febzey#1854 on Discord or send a request by clicking the green button below.
                </p>
                <div className="flex flex-col lg:flex-row justify-center gap-4 w-[70%] mx-auto">
                    <a href={"mailto:computerservermc@gmail.com"} target="_blank" className="w-full lg:w-auto p-6 border-b-8 border-b-emerald-600 hover:bg-emerald-700 duration-150 rounded bg-emerald-500 text-white h-12 items-center flex justify-center">
                        Request Minecraft bot
                    </a>
                    <a href={"https://discord.com/oauth2/authorize?client_id=771280674602614825&permissions=3072&scope=bot%20applications.commands"} target="_blank" className="w-full lg:w-auto p-6 border-b-8 border-b-[#5062a1] hover:bg-opacity-60 duration-150 rounded bg-[#7289da] text-white h-12 items-center flex justify-center">
                        Invite Me To Discord!
                    </a>
                </div>
            </div>
        </section>
    )
}