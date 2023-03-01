export default function Head({params}: {params: {user: string}}) {
    return params.user ? (
        <>
            <title>{`ForestBot - ${params.user}`}</title>
            <link href="/images/animatedBot.gif" rel="shortcut icon"/>
        </>
    ) : (
        <>
        <title>ForestBot</title>
        <link href="/images/animatedBot.gif" rel="shortcut icon"/>
    </>  
    )
}