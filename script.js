// import { newDB } from 'api.js';

// console.log(newDB);

let news = (function(){
    newDB = [	
        {
          "gameValue": "https://images4.alphacoders.com/715/thumbbig-715113.webp",
          "aboutValue": "Ghost Recon Wildlands",
          "publisherValue": "Get Ghost Recon Wildlands and experience the game that blazed the path for Ghost Recon Breakpoint. Enter a vast open world that challenges you to explore, discover cartel operations, and shut them down however you see fit. Use any combination of weapons, vehicles, and tactics to destroy the cartel’s assets, take out its bosses, and strike at the heart of its leadership.",
          "platformValue": "Ubisoft",
          "imageValue": "	Microsoft Windows, PlayStation 4, Xbox One, Google Stadia"
        },
        {
          "gameValue": "https://images7.alphacoders.com/114/thumbbig-1148652.webp",
          "aboutValue": "Assassin's-Creed Valhalla",
          "publisherValue": "BUILD YOUR OWN VIKING LEGEND Become Eivor, a mighty Viking raider and lead your clan from the harsh shores of Norway to a new home amid the lush farmlands of ninth-century England. Explore a beautiful, mysterious open world where you'll face brutal enemies, raid fortresses, build your clan's new settlement, and forge alliances to win glory and earn a place in Valhalla. England in the age of the Vikings is a fractured nation of petty lords and warring kingdoms. Beneath the chaos lies a rich and untamed land waiting for a new conqueror. Will it be you?",
          "platformValue": "Ubisoft",
          "imageValue": "Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Stadia Luna"
        },
        {
          "gameValue": "https://images.alphacoders.com/686/thumbbig-686108.webp",
          "aboutValue": "Tom Clancy's The Division",
          "publisherValue": "The Division Resurgence brings the acclaimed gameplay experience of the franchise to mobile! Enjoy a AAA experience featuring a new storyline set in the massive urban open-world of New York City. Test your skills in the infamous PVP modes of the franchise, Dark Zone and Conflict. Register below for a chance to be among the first Agents to play and stay updated on the latest news.",
          "platformValue": "Ubisoft",
          "imageValue": "Microsoft Windows, PlayStation 4, Xbox One"
        },
        {
          "gameValue": "https://images5.alphacoders.com/124/thumbbig-1248889.webp",
          "aboutValue": "Far Cry 6",
          "publisherValue": "As Anton Castillo promises to restore the once prosperous island nation of Yara, he is grooming his son, Diego, to become the next presidente.",
          "platformValue": "Ubisoft",
          "imageValue": "PlayStation 2, Java ME, PlayStation Portable, PlayStation 3, PlayStation Vita, PlayStation 4, PlayStation 5, Windows"
        },
        {
          "gameValue": "https://images4.alphacoders.com/289/thumbbig-2898.webp",
          "aboutValue": "God of War",
          "publisherValue": "Kratos and Atreus' 2018 adventure is now available on Steam and Epic Games Store with a range of optimisations for PC players.",
          "platformValue": "Sony Interactive",
          "imageValue": "PlayStation 2, Java ME, PlayStation Portable, PlayStation 3, PlayStation Vita, PlayStation 4, PlayStation 5, Windows"
        },
        {
          "gameValue": "https://images8.alphacoders.com/126/thumbbig-1260934.webp",
          "aboutValue": "Skull and Bones",
          "publisherValue": "At the end of the 17th century, tales of a legendary heist attracted young outcasts from all over the world. In search of untold fortunes, ordinary men and women headed far from home. Armed with only their instincts to survive, they risked it all for a chance to attain immeasurable riches.",
          "platformValue": "Sony Interactive",
          "imageValue": "Amazon Luna, Microsoft Windows, PlayStation 5, Xbox Series X/S"
        },
        {
          "gameValue": "https://images5.alphacoders.com/115/1151567.jpg",
          "aboutValue": "mario + rabbids sparks of hope",
          "publisherValue": "Collect and protect the surprising and powerful Sparks to unleash destruction on new and familiar adversaries. Use their special abilities and powers in battle to gain the upper hand in combat. There are dozens of Sparks to locate and save, each with a distinct personality.",
          "platformValue": "Ubisoft",
          "imageValue": "Nintendo Switch"
        },
        {
          "gameValue": "https://images5.alphacoders.com/327/thumbbig-327752.webp",
          "aboutValue": "Assassin's Creed",
          "publisherValue": "In Assassin's Creed Mirage, you are Basim, a cunning street thief with nightmarish visions seeking answers and justice. Join an ancient organization and come to understand a new creed – one that will change Basim’s fate in ways he never could have imagined.",
          "platformValue": "Ubisoft",
          "imageValue": "Xbox Series X|S, Xbox One, PlayStation®5, PlayStation®4, EPIC, PC, and Amazon Luna."
        }
      ]
    newDB.forEach(list => {
        let HTMLData = `
            <div class="card">
                <div class="card_img">
                    <img class="imgs" src="${list.gameValue}" />
                </div>
                <div class="more">
                    ${list.platformValue}
                </div>
                <div class="moviename">
                    ${list.aboutValue}
                </div>
                <div class="moviepara">
                ${list.publisherValue}
                </div>
            </div>
            `;
            
    document.querySelector('.movie_cards').innerHTML += HTMLData;
    });
})();







let displayData = ( () => {
    let HTML,LocalDB,HTMLData;
    HTML = '';
    LocalDB = JSON.parse(localStorage.getItem('LocalDB'));
    if(LocalDB === null){
        dataDB = []
    }else{
        dataDB = LocalDB;
    } 

    dataDB.forEach((data, index) => {
        HTML += `
            <div class="card">
                <div class="card_img">
                    <img class="imgs" src="${data.gameValue}" />
                </div>
                <div class="more">
                    ${data.platformValue}
                </div>
                <div class="moviename">
                    ${data.aboutValue}
                </div>
                <div class="moviepara">
                ${data.publisherValue}
                </div>
            </div>
            `;
    });
    
    document.querySelector('.movie_cards').innerHTML += HTML;

})();