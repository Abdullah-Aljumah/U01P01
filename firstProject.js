// array of object with img and name of the games
let listGame = JSON.parse(localStorage.getItem("listGame"));
const listGameStorage = [
  {
    id: 1,
    Name: "DESTINY 2",
    imgUrl: "img/Destiny2.jpg",

    desc: "Single player & MultiPlayer game 2-12 Players",
    info: "Destiny 2 (also known as Destiny 2: New Light) is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for the PlayStation 4, Xbox One, and Microsoft Windows platforms. It became free-to-play, utilizing the games as a service model, under the New Light title on October 1, 2019, followed by the game's release on Stadia the following month, and then the PlayStation 5 and Xbox Series X/S platforms in November 2020. The game was published by Activision until December 31, 2018, when Bungie acquired the publishing rights to the franchise. It is the sequel to 2014's Destiny and its subsequent expansions. Set in a mythic science fiction world, the game features a multiplayer shared-world environment with elements of role-playing games. Like the original, activities in Destiny 2 are divided among player versus environment (PvE) and player versus player (PvP) game types.",
    fav: false,
    images: [
      "img/Destiny3.jpg",
      "img/Destiny4.jpg",
      "img/Destiny5.jpg",
      "img/Destiny6.jpg",
    ],
  },

  {
    id: 2,
    Name: "CALL OF DUTY WARZONE",
    imgUrl: "img/callofduty.jpg",

    desc: "MultiPlayer game 2-152 Players",
    info: "Call of Duty: Warzone is a free-to-play battle royale video game released on March 10, 2020, for PlayStation 4, Xbox One, Microsoft Windows, PlayStation 5 and Xbox Series X/S. The game is a part of 2019's Call of Duty: Modern Warfare and is connected to 2020's Call of Duty: Black Ops: Cold War and 2021's Call of Duty: Vanguard (but does not require purchase of either titles) and was introduced during Season 2 of Modern Warfare content. Warzone is developed by Infinity Ward and Raven Software (the latter later credited as the sole developer following the integration of Cold War's content) and published by Activision.[1] Warzone allows online multiplayer combat among 150 players, although some limited-time game modes support 200 players. Other modes include Plunder, Rebirth Resurgence, Buy Back Solos and others. The game features both cross-platform play and cross-platform progression between three games.",
    fav: false,
    images: ["img/mw2.jpg", "img/mw3.jpg", "img/mw4.jpg", "img/mw5.jpg"],
  },
  {
    id: 3,
    Name: "BATTLEFIELD 2042",
    imgUrl: "img/bf.jpg",

    desc: "Single player & MultiPlayer game 2-128 Players",
    info: "Battlefield 2042 is an upcoming first-person shooter video game developed by DICE and published by Electronic Arts. It is the seventeenth installment in the Battlefield series and the successor to 2018's Battlefield V. The game is scheduled to be released on November 19, 2021, for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X and Series S. Unlike recent Battlefield games, Battlefield 2042 will be solely multiplayer and will not have a single-player campaign and will feature cross-platform play, a first in the series.",
    fav: false,
    images: ["img/bf2.jpg", "img/bf3.jpg", "img/bf4.jpg", "img/bf5.jpg"],
  },
  {
    id: 4,
    Name: "DIABLO 3",
    imgUrl: "img/diablo3.jpg",

    desc: "Single player & MultiPlayer game 2-4 Players",
    info: "Diablo III is a hack-and-slash action role-playing game developed and published by Blizzard Entertainment as the third installment in the Diablo franchise. It was released for Microsoft Windows and OS X in May 2012, PlayStation 3 and Xbox 360 in September 2013, PlayStation 4 and Xbox One in August 2014, and Nintendo Switch in November 2018. Set 20 years after the events of Diablo II, players choose to play as one of seven character classes – Barbarian, Crusader, Demon Hunter, Monk, Necromancer, Witch Doctor, or Wizard – and are tasked with defeating the Lord of Terror, Diablo, as in previous games in the series.An expansion pack entitled Reaper of Souls was released for PC in March 2014. It was released for consoles as part of the Diablo III: Ultimate Evil Edition version in August 2014. The Rise of the Necromancer pack was released for the Windows, macOS, and PlayStation 4 and Xbox One in June 2017. ",
    fav: false,
    images: [
      "img/diablo4.jpg",
      "img/diablo5.jpg",
      "img/diablo6.jpg",
      "img/diablo7.jpg",
    ],
  },
  {
    id: 5,
    Name: "GHOST OF TSUSHIMA",
    imgUrl: "img/ghost.jpg",

    desc: "Single player & 2 MultiPlayer",
    info: "Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. Featuring an open world, the player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan. The game was released for PlayStation 4 on July 17, 2020, and a Director's Cut for PlayStation 4 and PlayStation 5 was released on August 20, 2021. It received praise for its visuals, art direction, narrative, and combat but was criticized for its open world design. Ghost of Tsushima also earned several award nominations and wins. It had sold 6.5 million copies by March 2021.",
    fav: false,
    images: [
      "img/got2.jpg",
      "img/got3.jpg",
      "img/got4.jpg",
      "img/got5.jpg",
    ],
  },
  {
    id: 6,
    Name: "SEKIRO",
    imgUrl: "img/sekiro.jpg",

    desc: "single player",
    info: "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision. The game follows a shinobi known as Sekiro as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord. It was released for Microsoft Windows, PlayStation 4, and Xbox One in March 2019 and for Stadia in October 2020. Gameplay is focused on stealth, exploration, and combat, with a particular emphasis on boss battles. The game takes place in a fictionalized Japan set during the Sengoku period and makes strong references to Buddhist mythology and philosophy. While creating the game, lead director Hidetaka Miyazaki wanted to create a new intellectual property (IP) that marked a departure from the Souls series of games also made by FromSoftware, and looked to series such as The Mysterious Murasame Castle and Tenchu for inspiration.",
    fav: false,
    images: [
      "img/sekiro2.jpg",
      "img/sekiro3.jpg",
      "img/sekiro4.jpg",
      "img/sekiro5.jpg",
    ],
  },
  {
    id: 7,
    Name: "SHADOW OF WAR",
    imgUrl: "img/sow.jpg",

    desc: "single player & 2 Multiplayer",
    info: "Middle-earth: Shadow of War is an action role-playing video game developed by Monolith Productions and published by Warner Bros. Interactive Entertainment. It is the sequel to 2014's Middle-earth: Shadow of Mordor, and was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on October 10, 2017.Shadow of War continues the previous game's narrative, which is based on J. R. R. Tolkien's legendarium and set in between the events of Peter Jackson's The Hobbit and The Lord of the Rings film trilogies, from which the game takes inspiration. The player continues the story of the ranger Talion and the spirit of the elf lord Celebrimbor, who shares Talion's body, as they forge a new Ring of Power to amass an army to fight against Sauron. The game builds upon the Nemesis System introduced in Shadow of Mordor, allowing Talion to gain followers from several races of Middle-earth, including Uruks and Ologs, and plan out complex strategies using these to complete missions.",
    fav: false,
    images: [
      "img/sow2.jpg",
      "img/sow3.jpg",
      "img/sow4.jpg",
      "img/sow5.jpg",
    ],
  },
  {
    id: 8,
    Name: "GTA V",
    imgUrl: "img/gtav.jpg",

    desc: "single player & MultiPlayer game 2-64 Players   ",
    info: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.The game is played from either a third-person or first-person perspective, and its world is navigated on foot and by vehicle. Players control the three lead protagonists throughout single-player and switch among them, both during and outside missions. ",
    fav: false,
    images: [
      "img/gtav2.jpg",
      "img/gtav3.jpg",
      "img/gtav4.jpg",
      "img/gtav5.jpg",
    ],
  },
];

// Value of Local Storage
if (listGame == null) {
  listGame = [...listGameStorage];
  localStorage.setItem("listGame", JSON.stringify(listGame));
}

// show more function ++
let max = 4;
let i = 0;

// rinder
const rinder = () => {
  for (i; i < max; i++) {
    $(".ulGames").append(
      `<div class='li1'>
      <div onclick=secP(${i}) style= cursor:pointer>
       <li class='searchLi'>
       <img class='imgMedia' src="${listGame[i].imgUrl}" alt="Game Logo"> 
        <h2 class='h2Search' >${listGame[i].Name}</h2>
        <p>${listGame[i].desc}</p>
        </div>
       <form action='firstProject.html'> <button id='buttonFavorite' class='btnFav btn btn-danger' onclick=addToFav(${i}) >${
        listGame[i].fav ? "Remove " : "Favorite"
      } 
        </button> </form>
        </li>
        </div>`
    );
  }
};
rinder();

// fav page
const addToFav = (i) => {
  if (listGame[i].fav == false) {
    listGame[i].fav = true;
    alert("add to favorite");
  } else {
    listGame[i].fav = false;
    alert("removed From Favorite");
  }

  localStorage.setItem("listGame", JSON.stringify(listGame));
};

// second page description
const secP = (i) => {
  $(".ul1").hide();
  $(".btnCenter").hide();

  $(".descP").append(
    `<div class = 'divDescPage'>
     <img class='secPageFirstImg' src="${listGame[i].imgUrl}" alt="Game Logo"/> 
      <div class='newPage'> <h2 class='h2Search'>${listGame[i].Name}</h2><p>${
      listGame[i].info
    }
     <br><br> <button class='btnFav btn btn-danger'id='btnFavSecPage' onclick=addToFav(${i})  > ${
      listGame[i].fav ? "Remove " : "Favorite"
    }  </button>  </div>
     </div>  
     <br><br><div class='extraImages'> </div>`
  );
  for (let j = 0; j < 4; j++) {
    $(".extraImages").append(
      `<div class='imgs4'><img  id='secondImages' src='${listGame[i].images[j]}' alt='test'></div>`
    );
  }
  rinder();
};

// Show all button

$(".showMore").on("click", () => {
  i = 4;
  max = listGame.length;
  rinder();
  $(".showMore").remove();
});

// search bar
const searchBar = () => {

  // active show all button
  max = listGame.length;
  rinder();
  $(".showMore").remove();

  let li = document.getElementsByClassName("li1");
  let h2, i, txtValue;

  let value = $(".myInput").val().toUpperCase();
  for (i = 0; i < li.length; i++) {
    h2 = $(".h2Search")[i];
    txtValue = h2.innerText;
    if (txtValue.toUpperCase().indexOf(value) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};
