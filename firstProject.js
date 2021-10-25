// array of object with img and name of the games
let listGame = JSON.parse(localStorage.getItem("listGame"));
const listGameStorage = [
  {
    id: 1,
    Name: "DESTINY 2",
    imgUrl: "/img/Destiny2.jpg",

    desc: "MultiPlayer game 2-12 Players And single player",
    info: "is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for the PlayStation 4, Xbox One, and Microsoft Windows platforms",
    fav: false,
    images: ["/img/Destiny2.jpg","/img/Destiny2.jpg","/img/Destiny2.jpg","/img/Destiny2.jpg"]
  },

  {
    id: 2,
    Name: "CALL OF DUTY MW",
    imgUrl: "/img/callofduty.jpg",

    desc: "MultiPlayer game 2-152 Players And single player",
    info: "is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for the PlayStation 4, Xbox One, and Microsoft Windows platforms",
    fav: false,
  },
  {
    id: 3,
    Name: "BATTLEFIELD 2042",
    imgUrl: "/img/bf.jpg",

    desc: "MultiPlayer game 2-128 Players And single player",
    info: "is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for the PlayStation 4, Xbox One, and Microsoft Windows platforms",
    fav: false,
  },
  {
    id: 4,
    Name: "DIABLO 3",
    imgUrl: "/img/diablo3.jpg",

    desc: "MultiPlayer game 2-4 Players And single player",
    info: "is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for the PlayStation 4, Xbox One, and Microsoft Windows platforms",
    fav: false,
  },
  {
    id: 5,
    Name: "GHOST OF TSUSHIMA",
    imgUrl: "/img/ghost.jpg",

    desc: "MultiPlayer game 2-4 Players And single player",
    info: "is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for the PlayStation 4, Xbox One, and Microsoft Windows platforms",
    fav: false,
  },
  {
    id: 6,
    Name: "SEKIRO",
    imgUrl: "/img/sekiro.jpg",

    desc: "single player",
    info: "is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for the PlayStation 4, Xbox One, and Microsoft Windows platforms",
    fav: false,
  },
  {
    id: 7,
    Name: "SHADOW OF WAR",
    imgUrl: "/img/sow.jpg",

    desc: "MultiPlayer game 2 Players And single player",
    info: "is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for the PlayStation 4, Xbox One, and Microsoft Windows platforms",
    fav: false,
  },
  {
    id: 8,
    Name: "GTA V",
    imgUrl: "/img/gtav.jpg",

    desc: "MultiPlayer game 2-64 Players And single player ",
    info: "is a free-to-play online-only multiplayer first-person shooter video game developed by Bungie. It was originally released as a pay to play game in 2017 for the PlayStation 4, Xbox One, and Microsoft Windows platforms",
    fav: false,
  },
];

// Value of listGame
if (listGame == null) {
  listGame = [...listGameStorage];
  localStorage.setItem("listGame", JSON.stringify(listGame));
}

// fav page
const addToFav = (i) => {
  if (listGame[i].fav == false) {
    listGame[i].fav = true;
    alert("add to favorite");
  } else {
    listGame[i].fav = false;
    alert("remove from favorite");
  }

  localStorage.setItem("listGame", JSON.stringify(listGame));
};

// show more function ++
let max = 4;
let i = 0;

// rinder
const rinder = () => {
  for (i; i < max; i++) {
    $(".ulGames").append(
      `<div class='li1'>
       <li class='searchLi'>
       <img src="${listGame[i].imgUrl}" alt="Game Logo"> 
        <p onclick=secP(${i}) style= cursor:pointer>${listGame[i].Name}</p>
        <p>${listGame[i].desc}</p>
        <button id='buttonFavorite'  class='btnFav btn btn-danger' onclick=addToFav(${i}) > Favorite </button>
        </button> 
        </li>
        </div>`
    );
  }
};
rinder();

// second page
const secP = (i) => {
  $(".ul1").hide();
  $(".btnCenter").hide();

  $(".descP").append(
    `<div class = 'divDescPage'>
    <div class="descImg"> <img src="${listGame[i].imgUrl}" alt="Game Logo"/> </div>
      <div class='newPage'> <h2 class='h2Search'>${listGame[i].Name}</h2><p>${listGame[i].info}
     <br><br> <button value="no" class='btnFav btn btn-danger'id='btnFavSecPage' onclick=addToFav(${i})  > Favorite </button>  </div>
     </div>  
     <br><br><div class='extraImages'> </div>`
     
  );
  for (let j = 0; j <4 ; j++) {
    $(".extraImages").append(`<div class='imgs4'><img  id='secondImages4' src='${listGame[i].images[j]}' alt='test'><div>`)
  }
  rinder();
};

// show more button

$(".showMore").on("click", () => {
  i = 4;
  max = listGame.length;
  rinder();
  $(".showMore").remove();
});

//  search bar
