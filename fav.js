const arr = JSON.parse(localStorage.getItem("listGame"));
let arrFav = arr.filter((listGame) => listGame.fav);

const rinderFav = () => {
  for (let i = 0; i < arrFav.length; i++) {
    $(".ulGamesFav").append(
      `<div class='favPage'>
       <div class='favItem'> <div class='favImg'><img src="${arrFav[i].imgUrl}" alt="Game Logo"> </div>
          <div class='favH2'> <p>${arrFav[i].Name}</p> </div>
           </div> 
           </div>`
    );
  }
};
rinderFav();
