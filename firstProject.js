// array of object with img and name of the games

const listGame = [
  {
    Name: "DESTINY 2",
    imgUrl: "/img/Destiny2.jpg",
    gamePage: "destinyPage.html",
    desc: "MultiPlayer game 2-12 Players",
  },
  {
    Name: "GTA V",
    imgUrl: "/img/GTAV.jpg",
    gamePage: "#",
    desc: "MultiPlayer game 2-12 Players",
  },
  {
    Name: "CALL OF DUTY MW",
    imgUrl: "/img/callofdutyMW.jpg",
    gamePage: "#",
    desc: "MultiPlayer game 2-12 Players",
  },
  {
    Name: "BATTLEFIELD 2042",
    imgUrl: "/img/battlefield2042.jpg",
    gamePage: "#",
    desc: "MultiPlayer game 2-12 Players",
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
