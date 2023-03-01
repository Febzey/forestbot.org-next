type UserStats = {
    error?: string,
    userStats: [
        {
            username: string;
            kills: number;
            deaths: number;
            joindate: string;
            lastseen: string;
            uuid: string;
            playtime: number;
            joins: number;
            leaves: number;
            lastdeathTime: number;
            lastdeathString: string | null;
            mc_server: string;
        }
    ]
}

type UserStatIndividual = {
    username: string;
    kills: number;
    deaths: number;
    joindate: string;
    lastseen: string;
    uuid: string;
    playtime: number;
    joins: number;
    leaves: number;
    lastdeathTime: number;
    lastdeathString: string | null;
    mc_server: string;
}

type UserMessages = {
    error?: string,
    messages: [
        {
            name: string,
            message: string,
            date: number|string,
            mc_server: string
        }
    ]
}

type Advancement = {
    error?: string,
    advancements: [
        {
            username: string,
            advancement: string,
            time: number,
            mc_server: string,
            id: number
        }
    ]
}

type OnlineStatus = {
    mc_server?: string,
    isOnline: boolean
}


type DeathMsgs = {
    error?: string,
    deathmsgs: [{
        victim: string,
        death_message: string,
        murderer?: string,
        time: number,
        type: "pvp"|"pve",
        mc_server: string,
        id?: number
    }]
}


type KillMsgs = {
    error?: string,
    killmsgs: [{
        victim: string,
        death_message: string,
        murderer: string,
        time: number,
        type: "pvp"|"pve",
        mc_server: string,
        id?: number
    }]
}