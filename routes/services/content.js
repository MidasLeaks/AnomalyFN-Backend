const express = require("express")
const app = express.Router()


app.get("/api/pages/fortnite-game", async (req, res) => {
    res.json({
        "jcr:isCheckedOut": true,
        _title: "Fortnite Game",
        "jcr:baseVersion": "a7ca237317f1e7883b3279-c38f-4aa7-a325-e099e4bf71e5",
        _activeDate: "2017-08-30T03:20:48.050Z",
        lastModified: new Date(),
        _locale: "en-US",
        battleroyalenews: {
            news: {
                motds: [
                    {
                        entryType: "Text",
                        image: "https://cdn.discordapp.com/attachments/727376051587776533/735206947296641104/Blue_2_Green_-_1080.png",
                        tileImage: "https://cdn.discordapp.com/attachments/727376051587776533/735206949884526702/Blue_2_Green_-_1024.png",
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: "AnomalyFN",
                        _type: "CommonUI Simple Message MOTD",
                        title: "AnomalyFN",
                        body: "Welcome to AnomalyFN, a private server created by people (@AnomalyServers)",
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 0,
                        id: `Aurora-News-0`,
                        spotlight: false
                    }
                ]
            }
        },
        emergencynotice: {
            news: {
                platform_messages: [],
                _type: "Battle Royale News",
                messages: [
                    {
                        hidden: false,
                        _type: "CommonUI Simple Message Base",
                        subgame: "br",
                        title: "It's Only Fair",
                        body: "Created Using UE4 Online Servers & EOS",
                        spotlight: true
                    }
                ]
            },
            _title: "emergencynotice",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        },
        dynamicbackgrounds: {
            "jcr:isCheckedOut": true,
            backgrounds: {
                backgrounds: [
                    {
                        stage: "season13",
                        _type: "DynamicBackground",
                        key: "lobby"
                    },
                    {
                        stage: "season13",
                        _type: "DynamicBackground",
                        key: "vault"
                    }
                ],
                "_type": "DynamicBackgroundList"
            },
            _title: "dynamicbackgrounds",
            _noIndex: false,
            "jcr:baseVersion": "a7ca237317f1e71f17852c-bccd-4be6-89a0-1bb52672a444",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        }
    })
})


module.exports = app