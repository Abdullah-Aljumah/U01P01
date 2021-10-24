// array of object with img and name of the games

const listGame = [
  {
    Name: "DESTINY 2",
    imgUrl: "/img/Destiny2.jpg",
    gamePage: "destinyPage.html",
    desc: "MultiPlayer game 2-12 Players And single player",
  },
  
  {
    Name: "CALL OF DUTY MW",
    imgUrl: "/img/callofduty.jpg",
    gamePage: "#",
    desc: "MultiPlayer game 2-152 Players And single player",
  },
  {
    Name: "BATTLEFIELD 2042",
    imgUrl: "/img/bf.jpg",
    gamePage: "#",
    desc: "MultiPlayer game 2-128 Players And single player",
  },
  {
    Name: "DIABLO 3",
    imgUrl: "/img/diablo3.jpg",
    gamePage: "#",
    desc: "MultiPlayer game 2-4 Players And single player",
  },  {
    Name: "GHOST OF TSUSHIMA",
    imgUrl: "/img/ghost.jpg",
    gamePage: "#",
    desc: "MultiPlayer game 2-4 Players And single player",
  },  {
    Name: "SEKIRO",
    imgUrl: "/img/sekiro.jpg",
    gamePage: "#",
    desc: "single player",
  },  {
    Name: "SHADOW OF WAR",
    imgUrl: "/img/sow.jpg",
    gamePage: "#",
    desc: "MultiPlayer game 2 Players And single player",
  },
  {
    Name: "GTA V",
    imgUrl: "/img/gtav.jpg",
    gamePage: "#",
    desc: "MultiPlayer game 2-64 Players And single player ",
  },
];

// rinder
const rinder = () => {
  for (let i = 0; i < listGame.length; i++) {
    $(".ulGames").append(
      `<div class='li1'> <li><img src="${listGame[i].imgUrl}" alt="Game Logo">  <a href="${listGame[i].gamePage}">${listGame[i].Name}</a><p>${listGame[i].desc}</p>  </li></div>`
    );
  }
};
rinder();


$("imgUrl").hover (()=>{
  $("imgUrl").css()
}) 