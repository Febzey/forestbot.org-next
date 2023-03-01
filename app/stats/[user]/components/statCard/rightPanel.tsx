import RightPanelNav from "./rightPanelNavigator";

interface RightPanelArgs {
    params: {
        user: string,
        mc_server: string
    }
}

async function getMessages(user: string, mc_server: string): Promise<UserMessages | void> {
    const response = await fetch(`https://api.forestbot.org/messages/${user}/${mc_server}/40/last`, { cache: "no-store"});
    if (!response.ok) return
    return response.json();
}

async function getAdvancements(user: string, mc_server: string): Promise<Advancement|void> {
    const response = await fetch(`https://api.forestbot.org/advancements/${user}/${mc_server}/40/last`, { cache: "no-store"});
    if (!response.ok) return
    return response.json();

}

async function getDeaths(user: string, mc_server: string): Promise<DeathMsgs|void> {
    const response = await fetch(`https://api.forestbot.org/deaths/${user}/${mc_server}/40/last`, { cache: "no-store"});
    if (!response.ok) return
    return response.json();
}

async function getKills(user: string, mc_server: string): Promise<KillMsgs|void> {
    const response = await fetch(`https://api.forestbot.org/kills/${user}/${mc_server}/40/last`, { cache: "no-store"});
    if (!response.ok) return
    return response.json();
}
export default async function RightPanel({ params }: RightPanelArgs) {    
    const { user, mc_server } = params;
    const [msgs, advs, deaths, kills] = await Promise.all([
        getMessages(user, mc_server),
        getAdvancements(user, mc_server),
        getDeaths(user,mc_server),
        getKills(user, mc_server),
      ]);

    return (
        <RightPanelNav data={{msgs,advs,deaths,kills}}/>
    )
}